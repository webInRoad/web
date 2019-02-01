const koa = require('koa');
const Router = require('koa-router');

let server = new koa();
let router = new Router();
server.listen(8080);

router.get('/news',ctx=>{
    ctx.redirect('./2.html');
    // ctx.state = 489//没啥作用

})
server.use(router.routes());
