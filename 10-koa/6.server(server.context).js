const koa = require('koa');
const Router = require('koa-router');

let server = new koa();
server.listen(8080);
server.context.a = 23;
let router = new Router();

router.get('/news/',ctx=>{
    let {id} = ctx.query;
    ctx.body = `${id},${ctx.a}`

})
server.use(router.routes());
//定义全局变量server.context.变量,server.context：相当于ctx的prototype