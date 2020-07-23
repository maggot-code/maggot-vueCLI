import Cookies from 'js-cookie'
import configs from '@/config'

export const defaultField = (field,def = null) => {
    return field || def
}

export const TOKEN_KEY = 'token'
// 设置token
export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token, { expires: configs.cookieExpires || 1 })
}
// 获取token
export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) return token
    else return false
}
// 清除token
export const removeToken = () => {
    Cookies.remove(TOKEN_KEY);
}

// 缓存保存
export const cacheSave = (name,jsonObject) => {
    localStorage.setItem(name,JSON.stringify(jsonObject));
}
// 缓存获取
export const cacheGet = (name) => {
    return JSON.parse(localStorage.getItem(name));
}
// 缓存删除
export const cacheDelete = (name = null) => {
    name == null ? localStorage.clear() : localStorage.removeItem(name);
}

// 生成随机字符串
export const randomStr = (len = 32) => {
    const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const maxPos = $chars.length;
    let str = '';
    for (let i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
}

// 判断参数是否是其中之一
export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}