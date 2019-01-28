let http = require('http');
let server = http.createServer(()=>{
    console.info("我来了")
})
server.listen(9991)