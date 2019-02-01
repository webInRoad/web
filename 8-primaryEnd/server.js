const http = require('http');
const url = require('url');
const fs = require('fs');
const zlib = require('zlib');

http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true);
    let filePath = `www${pathname}`;
    fs.stat(filePath,(err,data)=>{
        if(err){
            res.setHeader('content-encodeing',"deflate");
            res.writeHeader(404);
            res.write("NOT FOUND");
            res.end();
        }else{
            let rs = fs.createReadStream(filePath);
            rs.on('error',err=>{});
            res.setHeader("content-encoding","gzip")
            let gz = zlib.createGzip();
            rs.pipe(gz).pipe(res);
        }
    })
}).listen(8089)