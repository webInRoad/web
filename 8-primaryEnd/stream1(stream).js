const fs = require('fs');

let rs = fs.createReadStream('www/demo.jpg');
let ws = fs.createWriteStream('www/demo.copy.txt');
rs.pipe(ws);
rs.on("error",err=>{
    console.info(err);
})
ws.on('finish',()=>{
    console.info("完成!")
})
