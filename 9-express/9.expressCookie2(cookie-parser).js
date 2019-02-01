const express = require('express');

const cookieParser = require('cookie-parser');
let server = express();
server.listen(8089);

server.use(cookieParser('12345678asdfghj'))

server.get('/a',(req,res)=>{
    console.info(req.cookies);
    console.info(req.signedCookies);

    res.cookie('amout2','677',{
        maxAge: 14*86400*1000,
        signed:true
    })
    res.send('1233')
})