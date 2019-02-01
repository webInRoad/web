const koa = require('koa');
const Router = require('koa-router');

let server = new koa();
server.listen(8089);

let router = new Router();
router.get('/a',async ctx=>{
    ctx.body = '231'
})

server.use(router.routes())