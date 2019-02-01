const koa = require('koa');
const Router = require('koa-router');

let server = new koa();
server.listen(8080);

let router = new Router();
// router.get('/news/',ctx=>{
//     let {user,pass} = ctx.query;
//     if(!user||!pass){
//         ctx.throw(400,'params valid');
//     }else{
//         ctx.body = 'ok'
//     }
// })

router.get('/news/',ctx=>{
    let {user,pass} = ctx.query;
    ctx.assert(user,400,'username is valid');
    ctx.assert(pass,400,'pass is valid');
    ctx.body = 'ok'
})
server.use(router.routes());