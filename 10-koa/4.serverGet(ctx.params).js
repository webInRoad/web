const koa = require('koa');
const Router = require('koa-router');

let server = new koa();
server.listen(8080);

let router = new Router();

router.get('/login/:id',async (ctx,next)=>{
    // console.info(ctx);
    // console.info(ctx.params);
    let {id} = ctx.params;

    console.info('aaa')
    ctx.body = id;
    await next();
})

router.get('/login/1/',ctx=>{
    let {id} = ctx.params;
    console.info('bbb')
    ctx.body = id;
})


server.use(router.routes());

//总结：路径匹配到router的两个url时，执行代码在前的url,next时就会依次执行下一个