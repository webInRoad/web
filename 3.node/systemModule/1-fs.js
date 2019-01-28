const fs = require('fs');
//1.写入 fs.writeFile(path, data, callback);
// fs.writeFile('a.txt','addss',error=>{
//     if(error){
//         console.info("写入失败")
//     }else{
//         console.info("写入成功")
//     }
// })

//读取 fs.readFile(path, callback);
fs.readFile('a.txt',(error,result)=>{
    if(error){
        console.info("读取失败!")
    }else{
        console.info("读取成功")
        console.info(result.toString())
    }
})