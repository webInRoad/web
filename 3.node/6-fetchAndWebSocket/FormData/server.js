const http = require('http');
const multiparty = require('multiparty');
http.createServer((req,res)=>{
    console.info(123)
   let form = new multiparty.Form({
       uploadDir:'./upload/'
   })
   form.parse(req);
   form.on('field',(name,value)=>{
       console.info(name,value);
   })
   form.on('file',(name,file)=>{
       console.info(name,file)
   })
   form.on('close',()=>{
       console.info("完事了")
   })
}).listen(8080)