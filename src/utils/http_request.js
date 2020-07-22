import axios from 'axios'

import configs from '@/config';

import {
    getToken,
    statusNotice,
    statusFilter
} from '@/utils/tool'

axios.defaults.retry = configs.retry;
axios.defaults.timeout = configs.timeOut; // 超时时间
axios.defaults.baseUrl = configs.baseUrl.pro;

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.queue = {};
    }
    getInsideConfig () {
        let token = getToken();
        let config = {
            retry:configs.retry,
            baseUrl : this.baseUrl,
            headers : {
                'Access-Control-Allow-Origin' : window.location.origin,
            }
        };
        if(token){
            config.headers.Authorization = token;
        }
        return config;
    }
    destroy (url) {
        delete this.queue[url]
    }
    interceptors (instance,url) {
        
        // 请求拦截
        instance.interceptors.request.use(config => {
            this.queue[url] = true;
            return config;
        },error => {
            return Promise.reject(error);
        })

        // 响应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url);
            const { data, status } = res;
            return statusFilter[res.status] ? statusFilter[res.status]({data,status}) : {data,status};
        },error => {
            this.destroy(url);
            if(error.response){
                statusNotice[error.response.status]&&statusNotice[error.response.status](error);
                statusFilter[error.response.status]&&statusFilter[error.response.status](error);
            }
            return Promise.reject(error);
        })
    }
    request (options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
}

export default HttpRequest;