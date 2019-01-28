const http = require('http');
const url = require('url');
const querystring = require('querystring');
http.createServer((req,res)=>{
    let method = req.method;
    let path,get = {},post = {};
    if(method=='GET'){
        let {pathname,query} = url.parse(req.url,true);
        path = pathname;
        get = query;
        compleate();
    }else if(method=='POST'){
        path = req.url;
        let arr = [];
        req.on('data',buffer=>{
            arr.push(buffer);
        })
        req.on('end',()=>{
            let buffer = Buffer.concat(arr);
            console.info(`buffer${buffer}`)
            post = querystring.parse(buffer.toString())
            compleate();
        })
    }
    function compleate(){
        console.info(path,get,post);
        res.end()

    }
}).listen(8081)