const koa = require('koa');
const Router = require('koa-router');

let server = new koa();
server.listen(8089);

let router = new Router();

let userRouter = new Router();

let companyRouter = new Router();
companyRouter.get('/a',async ctx=>{
    ctx.body = '管理员';
})
userRouter.use('/company',companyRouter.routes());

let adminRouter = new Router();
adminRouter.get('/a',async ctx=>{
    ctx.body = 'admin';
})
userRouter.use('/admin',adminRouter.routes());

router.use('/user',userRouter.routes());

server.use(router.routes())