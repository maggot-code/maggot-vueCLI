import axios from '@/utils/api_request'

export const ping = () => {
    return axios.request({
        url : '/api/v1/ping',
        method: 'get'
    })
}

export const pong = () => {
    return axios.request({
        url : '/api/v1/pong',
        method: 'get'
    })
}