const Koa = require('koa');
const Router = require('koa-router');
// const db = require('./libs/database')

let server = new Koa();
server.listen(8080);

server.context.db = require('./libs/database');
//对于错误的处理
//法一:

// server.use(async ctx=>{
//     try{
//         let data = await ctx.db.query('select * from itm_table');
//         ctx.body = data;
//     }catch(e){
//         ctx.body = 'database error'
//     }
// })

//法二
//根据代码在前面的会覆盖在后面的,所以在最上面的一个server.use中进行try catch,其中try里调用next()
server.use(async (ctx,next)=>{
    try{
        await next();
    }catch(e){
        ctx.body = 'database error'
    }
})
// server.use(async ctx=>{
//     let data = await ctx.db.query('select * from itm_table');
//     ctx.body = data;
// })

//法三
let router = new Router();
router.all('*',async (ctx,next)=>{
    try{
        await next();
    }catch(e){
        ctx.body = 'database error router'
    }
})
router.get('/a',async ctx=>{
    ctx.body = div.title;
})
server.use(router.routes())
