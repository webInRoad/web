const http = require('http');
const util = require('buffer_split');
const fs = require('fs');
http.createServer((req,res)=>{
    let delimeter = '--'+req.headers["content-type"].split("; ")[1].split("=")[1];
    console.info(delimeter)
    let arr = [];
    req.on('data',(buffer)=>{
        arr.push(buffer)
    })
    req.on('end',()=>{
        let buffer = Buffer.concat(arr);
        let result = util.bufferSplit(buffer,delimeter)
        // console.info(result)
        result.pop();
        result.shift();
        // console.info(result.toString())
        result.forEach(buffer=>{
            buffer = buffer.slice(2,buffer.length-2);
            let n = buffer.indexOf('\r\n\r\n');
            let info = buffer.slice(0,n).toString();
            let data = buffer.slice(n+4);
            let m =0;
            if((m = info.indexOf('\r\n'))!=-1){
                info = info.slice(0,m);
                let name = info.split("; ")[1].split("=")[1];
                name = name.substring(1,name.length-1);
                let fileName = info.split("; ")[2].split("=")[1];
                fileName = fileName.substring(1,fileName.length-1);
                console.info(name,fileName);
                fs.writeFile(`upload/${fileName}`,data,error=>{
                    if(error){
                        console.info("上传失败")
                    }else{
                        console.info("上传成功")
                    }
                })
            }else{
                //普通信息
                let name=info.split('; ')[1].split('=')[1];
                name=name.substring(1, name.length-1);

                //console.log(name);
            }
        })
    })
}).listen(8082)