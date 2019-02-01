const mysql = require('mysql');
const http = require('http');
const url = require('url');
const fs = require('fs');

let db = mysql.createConnection({host:'localhost',user:'root',password:'',database:'20190130'});

http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true);
    if(pathname=='/reg'){
        let {username,password} = query;
        if(!username){
            res.write("用户名不能为空！");
            res.end();
        }else if(!password){
            res.write("密码不能为空！");
            res.end();
        }else if(username.length>32){
            res.write("用户名长度不能超过32!");
            res.end();
        }else if(password.length>32){
            res.write("密码长度不能超过32!");
            res.end();
        }else{
            db.query(`select id from user_table where username = '${username}'`,(err,data)=>{
                if(err){
                    res.write("数据库有错");
                    res.end();
                }else if(data.length>=1){
                    res.write("该用户已经存在！");
                    res.end();
                }else{
                    db.query(`insert into user_table (username,password) values('${username}','${password}')`,(err,data)=>{
                        if(err){
                            res.write("数据库有错");
                            res.end();
                        }else{
                            res.write("注册成功");
                            res.end();
                        }
                    })
                }
            })
        }
    }else if(pathname =='login'){

    }else{
        console.info(req.url);        
        fs.readFile(`www${req.url}`,(err,data)=>{
            if(err){
                res.writeHead(404);
                res.write("NOT FOUND");
            }else{
                res.write(data);
            }
            res.end();
        })
    }
}).listen(8089)