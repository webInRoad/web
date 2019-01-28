const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    console.info(req.url)
    fs.readFile(`../www${req.url}`,(error,result)=>{
        if(error){
            res.writeHead(404);
            res.write("NOT found");
            res.end();
        }else{
            res.write(result);
            res.end();
        }
    })
}).listen(9911)