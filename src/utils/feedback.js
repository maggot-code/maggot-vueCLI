import router from '@/router';
// import {

// } from './tool'
import {
    Notice,
    LoadingBar
} from 'view-design'

const notice = (error,msg) => {
    Notice.error({
        title:`${error.response.status}：${error.response.statusText}`,
        desc:`接口地址：${error.response.config.url}<br/>异常描述：${msg}`
    })
}

export const statusNotice = {
    400:(error)=>{notice(error,'客户端请求的语法错误，服务器无法理解')},
    401:(error)=>{notice(error,'请求要求用户的身份认证')},
    404:(error)=>{notice(error,'服务器无法根据客户端的请求找到资源')},
    500:(error)=>{notice(error,'服务器内部错误，无法完成请求')},
    503:(error)=>{notice(error,'由于超载或系统维护，服务器暂时的无法处理客户端的请求')},
    505:(error)=>{notice(error,'服务器不支持请求的HTTP协议的版本，无法完成处理')},
}

export const statusFilter = {
    200:({data,status})=>{
        return {data,status};
    },
    400:(error)=>{
        // 日志
        return Promise.reject(error.response)
    },
    401:(error)=>{
        // 日志
        router.push({name:'error_401'})
        return Promise.reject(error.response)
    },
    404:(error)=>{
        // 日志
        router.push({name:'error_404'})
        return Promise.reject(error.response)
    },
    500:(error)=>{
        // 日志
        router.push({name:'error_500'})
        return Promise.reject(error.response)
    },
    503:(error)=>{
        // 日志
        return Promise.reject(error.response)
    },
    505:(error)=>{
        // 日志
        return Promise.reject(error.response)
    },
};

// 页面加载进度条
export const pageLoading = (fn = 'start') => {
    LoadingBar[fn]();
}