const Koa = require('koa');
const body = require('koa-better-body');

let server = new Koa();
server.listen(8080);

server.use(body({
    uploadDir:'./static/upload'
}))
server.use(async ctx=>{
    console.info(ctx.request.fields);
    ctx.body = 'add'
})