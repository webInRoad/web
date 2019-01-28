const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
let users = {};
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
            post = querystring.parse(buffer.toString())
            compleate();
        })
    }
    function compleate(){
        console.info(path,get,post);
        let {username,pass} = get;
        if(path=='/reg'){//注册
            console.info(users)
            if(users[username]){
                res.write(JSON.stringify({"error":1,"msg":"用户已存在"}));
                res.end();
            }else{
                users[username] = pass;
                res.write(JSON.stringify({"error":0,"msg":""}));
                res.end();
            }
        }else if(path=='/login'){
            if(!users[username]){
                res.write(JSON.stringify({"error":1,"msg":"该用户不存在"}));
                res.end();
            }else if(users[username]!=pass){
                res.write(JSON.stringify({"error":1,"msg":"密码不对"}));
                res.end();
            }else{
                res.write(JSON.stringify({"error":0,"msg":""}));
                res.end();
            }
        }else{
            fs.readFile(`../www${req.url}`,(error,result)=>{
                if(error){
                    res.writeHead(404);
                    res.write("NOT FOUND");
                    res.end();
                }else{
                    res.write(result);
                    res.end();
                }
            })
        }
    }
}).listen(8081)