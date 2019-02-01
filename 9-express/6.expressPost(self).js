const express = require('express');
const body = require('./libs/body-parser');

let server = express();
server.listen(8089);

server.use(body.urlencoded());
server.post('/reg',(req,res,next)=>{
    console.info(req.body);
    res.send('ok')
})