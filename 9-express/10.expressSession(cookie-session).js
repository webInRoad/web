const express = require('express');

const session = require('cookie-session');

let server = express();
server.listen(8080);

server.use(session({
    keys:['12334444','adfasdwewe','adfgadsfasdf'],
    maxAge: 20*60*1000      //20分钟
}))
server.get('/a',(req,res)=>{
    console.info(req.session);
    if(!req.session["view"]){
        req.session["view"] =1;
    }else{
        req.session["view"]++;
    }
    req.session["amout"] = '100000'
    res.send(`这次你第${req.session["view"]}次访问网站!,金额为${req.session["amout"]}`);
})