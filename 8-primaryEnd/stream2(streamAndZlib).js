const fs = require('fs');
const zlib = require('zlib');

let rs = fs.createReadStream('www/1.txt');
let ws = fs.createWriteStream('www/1.txt.gz');
let gz = zlib.createGzip();
rs.pipe(gz).pipe(ws);
rs.on('error',err=>{
    console.info(err);
})
ws.on('finish',()=>{
    console.info("完成")
})