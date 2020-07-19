import axios from 'axios'

import router from '@/router';

import configs from '@/config';

import {
    getToken
} from '@/utils/tool'

const RouterBasicsPath = configs.routerBasicsPath;

axios.defaults.retry = configs.retry;
axios.defaults.timeout = configs.timeOut; // 超时时间
axios.defaults.baseUrl = configs.baseUrl.pro;

const statusFilter = {
    200:({data,status})=>{
        console.log(data,status);
        return {data,status};
    },
    500:(error)=>{
        // 日志
        
        router.push({name:RouterBasicsPath.serverError})
        return Promise.reject(error.response)
    },
    404:(error)=>{
        // 日志

        router.push({name:RouterBasicsPath.serverEmpty})
        return Promise.reject(error.response)
    },
    401:(error)=>{
        // 日志

        router.push({name:RouterBasicsPath.serverNotPower})
        return Promise.reject(error.response)
    },
};

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