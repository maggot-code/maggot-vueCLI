const { exec } = require('child_process');
const fs = require('fs');
const join = require('path').join;

let files = fs.readdirSync('data');
files.forEach( item => {
    let item_path = join('data',item);
    let file = fs.readdirSync(item_path);
    exec(`node ${item_path}\\${file}`,(err)=>{
        if(err){
            console.log(err);
            return;
        }
    })
});