const express = require('express');
const multer = require('multer');

let server = express();
server.listen(8089);

let obj = multer({
    dest:'./static/upload'
})
server.use(obj.any());

server.post('/reg',(req,res)=>{
    console.info(req.files);
    res.send('upload complete');
})