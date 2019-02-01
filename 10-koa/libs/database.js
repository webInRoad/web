const mysql = require('mysql');
const co = require('co-mysql');

let conn = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'20190130'
})
module.exports = co(conn);