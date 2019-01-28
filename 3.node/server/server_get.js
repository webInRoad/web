const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer((req,res)=>{
    // let [path,query] = req.url.split('?');
    // let {username,pass} = querystring.parse(query);
    //或者
    console.info(url.parse(req.url))
    let {pathname,query} = url.parse(req.url,true)
    let {username,pass} = query;
    console.info(pathname,username,pass)
    res.end();
}).listen(8081) 