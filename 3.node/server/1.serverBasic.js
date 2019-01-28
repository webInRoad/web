const http = require('http');
http.createServer((req,res)=>{
    res.write('addd');
    res.end();
}).listen(8081)