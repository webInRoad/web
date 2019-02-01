
const http = require('http');
const mysql = require('mysql');

let db = mysql.createConnection({"host":'localhost',user:'root',password:'',database:'20190130'});
// db.query("select * from user_table",(error,data)=>{
//     if(error){
//         console.info("数据库有错")
//     }else{
//         console.info(data);
//     }
// })

let username = "lisi";
let password = '7654321';
db.query(`insert into user_table (username,password) values('${username}','${password}')`,(error,data)=>{
    if(error){
        console.info("数据库有错")
    }else{
        console.info(data);
    }
})