const resolves = dir => require('path').join(__dirname, dir);

module.exports = {
    publicPath: './',
    outputDir: 'dist', // 打包输出目录
    assetsDir: 'static',
    filenameHashing:true,
    productionSourceMap: false,
    chainWebpack:config=>{
        config.resolve.alias
            .set('@',resolves('src'))
            .set('_c',resolves('src/components'))
            .set('_api',resolves('src/api'))
    },
    devServer: {
        https:false,
        // before: require('./mock/index.js'),
        proxy: {
            '/api/v1':{//接口请求格式：/api/v1/xxx/xx
                target:         process.env.VUE_APP_BASE_URL,//接口服务器域名
                ws:             false,
                secure:         false,
                changeOrigin:   true,
                pathReWrite:    {'^/api/v1':'/'}
            }
        }
    }
}