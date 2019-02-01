const Koa = require('koa');
const static = require('koa-static');

let server = new Koa();
server.listen(8080);

server.use(static('./static',{
    maxage:86400*10,
    index:"1.html"
}))