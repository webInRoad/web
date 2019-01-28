const http = require('http');
const querystring = require('querystring');

http.createServer((req,res)=>{
    let arr = [];
    req.on('data',buffer=>{
        arr.push(buffer);
    })
    req.on('end',()=>{
        let buffer = Buffer.concat(arr)
        console.info(buffer.toString());
        let {username,pass} = querystring.parse(buffer.toString())
        console.info(username,pass)
        res.end();  
    })
}).listen(8081)