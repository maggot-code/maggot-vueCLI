const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');
const JSON5 = require('json5');

// 读取json文件方法
const getJsonFile = (filePath) => {
    let json = fs.readFileSync(path.resolve(__dirname,filePath),'utf-8');
    return JSON5.parse(json);
}

module.exports = (app) => {
    // 监听请求
    app.get('/api/v1/ping',(rep, res)=>{

        res.json(Mock.mock({
            code:1,
            msg:'响应成功!',
            data:'pong'
        }));
    })

    app.get('/api/v1/users',(rep, res)=>{
        let json = getJsonFile('./data/user_info/data.json5');
        res.json(Mock.mock({
            code:1,
            msg:'响应成功!',
            data:json
        }));
    })

    app.get('/api/v1/articles',(rep, res)=>{
        let json = getJsonFile('./data/article_list/data.json5');
        res.json(Mock.mock({
            code:1,
            msg:'响应成功!',
            data:json
        }));
    })
}