const path = require('path');
let str = '/root/a/d/1.txt';
console.info(path.dirname(str));// /root/a/d
console.info(path.extname(str));// .txt
console.info(path.basename(str));// 1.txt

console.info(path.resolve('/root/a/d',"..","c/2.txt"));//c:\root\a\c\2.txt
console.info(path.resolve(__dirname,'build'));//C:\wamp\wamp64\www\kaike6\3.node\systemModule\build