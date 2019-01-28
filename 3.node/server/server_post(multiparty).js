const multiparty = require('multiparty');
const http = require('http');
http.createServer((req,res)=>{
    let form = new multiparty.Form({
        uploadDir:'./upload'
    })
    form.parse(req);
    form.on('field',(name,value)=>[
        console.info("字段:",name,value)
    ]);
    form.on('file',(name,file)=>{
        console.info('文件:',name,file);
    });
    form.on('close',()=>{
        console.log("表单解析完成")
    })
}).listen(8082)