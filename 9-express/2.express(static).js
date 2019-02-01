const express = require('express');

let server = express();
server.listen(8089);

server.get('/a',(req,res,next)=>{
    console.info('a')
    res.send('aaa')
})
server.get('/b',(req,res,next)=>{
    res.send('bbb')
});
//server.use要放在最后，因为server.use是任何请求都会匹配上
// server.use(express.static('./static/1.html')); //错误的
server.use(express.static('./static/'));