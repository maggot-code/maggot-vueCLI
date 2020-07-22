const Mock = require('mockjs');

let arr = [];
for (let index = 0; index < 50; index++) {
    let data = Mock.mock({
        id:'@guid',
        datetime:'@datetime',
        now:'@now',
        head:"@image('200x100', '#50B347', '#FFF', 'Mock.js')",
        title:'@ctitle(3, 5)'
    })
    arr.push(data);
}
console.log(arr);