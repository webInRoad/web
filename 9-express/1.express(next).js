const express = require('express');

let server = express();
server.listen(8080);

server.get('/a',(req,res,next)=>{
    req.body = 45;//给下个步骤传参数
    console.info(12345)
    next();
    
})
server.get('/a',(req,res,next)=>{
    console.info(req.body);
    res.end('ok')
})