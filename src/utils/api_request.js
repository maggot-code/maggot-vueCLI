import HttpRequest from './http_request'
// import config from '@/config'
// const baseUrl = process.env.NODE_ENV === 'dev' ? config.baseUrl.dev : config.baseUrl.pro

// const axios = new HttpRequest(baseUrl)
const axios = new HttpRequest()
console.log(axios);

export default axios