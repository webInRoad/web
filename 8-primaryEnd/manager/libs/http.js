const http = require('http');
const url=require('url');
const querystring=require('querystring');
const zlib=require('zlib');
const fs=require('fs');
const router=require('./router');
const multiparty = require('multiparty');
const {HTTP_UPLOAD,HTTP_ROOT,HTTP_PORT} = require('../config')

http.createServer((req,res)=>{
    res.writeJson = function(json){
        res.setHeader('content-type','application/json');
        res.write(JSON.stringify(json));
    }
    let {pathname,query} = url.parse(req.url,true);
    if(req.method=='POST'){
        if(req.headers['content-type'].startsWith('application/x-www-form-encoded')){
            let arr = [];
            req.on('data',buffer=>{
                arr.push(buffer);
            })
            req.on('end',()=>{
                let post = querystring.parse(Buffer.from(arr).toString());
                handle(req.method,pathname,query,post,{});
            })
        }else{
            let form = new multiparty.Form({
                uploadDir:HTTP_UPLOAD
            })
            form.parse(req);
            let post = {};
            let files = {};
            form.on('field',(name,value)=>{
                post[name] = value;
            })
            form.on('file',(name,file)=>{
                files[name] = file;
            })
            form.on('error', err=>{
                console.log(err);
            });
            form.on('close',()=>{
                handle(req.method,pathname,query,post,files)
            })
        }
    }else{
        handle(req.method,pathname,query,{},{})
    }

    async function handle(method,url,get,post,files){
        let fn = router.findRouter(method,url);
        if(!fn){
            let filepath = HTTP_ROOT+url;
            fs.stat(filepath,(err,stat)=>{
                if(err){
                    res.writeHead(404);
                    res.write("NOT FOUND");
                    res.end();
                }else{
                    let rs = fs.createReadStream(filepath)
                    let gz = zlib.createGzip();
                    rs.on('error',err=>{
                        console.info(err);
                    })
                    res.setHeader('content-encoding','gzip')
                    rs.pipe(gz).pipe(res);
                }
            })
            
        }else{
            try{
                await fn(res,get,post,files);
            }catch(e){
                console.log('a');
                res.writeHeader(500);
                res.write('Internal Server Error');
                res.end();
            }
        }
    }
}).listen(HTTP_PORT);
console.log(`server started at ${HTTP_PORT}`);