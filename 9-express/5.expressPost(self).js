const express = require('express');
const querystring = require('querystring');
let server = express();
server.listen(8089);

server.post('/reg',(req,res)=>{
    let arr = [];
    req.on('data',buffer=>{
        arr.push(buffer);
    })
    req.on('end',()=>{
        let json = querystring.parse(Buffer.concat(arr).toString());
        console.info(json);
    })
    res.send('233')
})