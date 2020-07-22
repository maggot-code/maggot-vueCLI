export default {
    /**
     * @description 配置显示在浏览器标签的title
     */
    title: 'VUE-CLI-1.0',
    /**
     * @description 是否启用请求失败提醒
     */
    errorTips: false,
    /**
    /**
     * @description token在Cookie中存储的天数，默认1天
     */
    cookieExpires: 1,
    /**
     * @description 路由是否拦截token
     */
    tokenCheck: false,
    /**
     * @description api基础地质
     */
    interfaceBasicsPath:'/api/v1',
    /**
     * @description api服务地址
     */
    baseUrl: {
        dev:'http://localhost:8080',
        pro:'http://0.0.0.0:8080'
    },
    /**
     * @description 请求超时时间
     */
    timeOut: 60000,
    /**
     * @description 请求超时重试次数
     */
    retry: 4,

    /**
     * @description 基础路由地址设置
     */
    // routerBasicsPath:{
    //     loginName:      'login',
    //     serverError:    'error_500',
    //     serverEmpty:    'error_404',
    //     serverNotPower: 'error_401'
    // },
}