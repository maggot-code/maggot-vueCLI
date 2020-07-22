const Mock = require('mockjs')

let arr = [];
for (let index = 0; index < 50; index++) {
    let data = Mock.mock({
        id          : '@guid',
        name        : '@cname',
        email       : '@email',
        ip          : '@ip',
        region      : '@region',
        province    : '@province',
        city        : '@city',
        county      : '@county',
        datetime    : '@datetime',
        now         : '@now',
        head        : "@image('200x100', '#50B347', '#FFF', 'Mock.js')",
        introduce   : '@cparagraph(1, 3)',
        autograph   : '@csentence(3, 5)'
    })
    arr.push(data)
}

console.log(arr);