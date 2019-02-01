const http = require('http');
const co = require('co-mysql');
const mysql = require('mysql');
const validate = require('./libs/validate.js');
const fs = require('fs');
const url = require('url');

let conn = mysql.createConnection({host:'localhost',user:'root',password:'',database:'20190130'});
let db = co(conn);
http.createServer(async (req,res)=>{
    let {pathname,query} = url.parse(req.url,true);
    let {username,password} = query;
    if(pathname=='/reg'){
        let err = validate.username(username);
        if(err){
            res.write(err);
        }else{
            let err = validate.password(password);
            if(err){
                res.write(err);
            }else{
                try{
                    let data = await db.query(`select id from user_table where username = '${username}'`)
                    if(data.length>0){
                        res.write('该用户已存在!')
                    }else{
                        await db.query(`insert into user_table (username,password) values ('${username}','${password}')`);
                        res.write("注册成功")
                    }
                }catch(e){
                    res.write("数据库有错");
                }
                
            }
        }
        res.end();
    }else if(pathname=='/login'){
        let err = validate.username(username);
        if(err){
            res.write(err);
        }else{
            let err = validate.password(password);
            if(err){
                res.write(err);
            }else{
                try{
                    let data = await db.query(`select id,password from user_table where username = '${username}'`)
                    if(data.length<1){
                        res.write('该用户不存在!')
                    }else{
                        if(data[0]["password"]!=password){
                            res.write("密码不对")
                        }else{
                            res.write("登录成功!")
                        }
                    }
                }catch(e){
                    res.write('数据库有错');
                }
            }
        }
        res.end();
    }else{
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