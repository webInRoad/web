const express = require('express');
const bodyParser = require('body-parser');

let server = express();
server.listen(8089);

server.use(bodyParser.urlencoded({
    extended:false  
}));

server.post('/reg',(req,res)=>{
    console.info(req.body);
    res.send('ok')
})