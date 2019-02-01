const express = require('express');

let server = express();
server.listen(8089);

server.get('/a',(req,res,next)=>{
    console.info(req.query);
    res.send('ok');
})