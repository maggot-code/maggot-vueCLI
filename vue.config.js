const devServerTarget = 'http://127.0.0.1:8080';

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
        host:'0.0.0.0',
        port:8080,
        https:false,
        proxy: {
            '/api/v1':{//接口请求格式：/api/v1/xxx/xx
                target:         devServerTarget,//接口服务器域名
                ws:             false,
                secure:         false,
                changeOrigin:   true,
                pathReWrite:    {'^/api/v1':'/'}
            }
        }
    }
}