const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8089);

server.use(cookieParser());

server.get('/a',(req,res)=>{
    console.info(req.cookies);

    res.cookie('amount',99.82)
      //
    // res.cookie('amount', 99.8, {
    //     //domain: 'aaa.com',
    //     //path: '/',
    //     maxAge: 14*86400*1000
    // });
    res.send('ok')
})