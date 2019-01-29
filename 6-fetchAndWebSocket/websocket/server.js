const http = require('http');
const socket = require('socket.io');
let server = http.createServer((req,res)=>{

}).listen(8081);
let wsServer = socket.listen(server);
wsServer.on('connection',sock=>{
    sock.emit('a',23);
    sock.on('b',result=>{
        console.info(result)
    })
    setInterval(()=>{
        sock.emit('time',new Date().getTime())
    },1000)
})