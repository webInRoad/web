const koa = require('koa');
const Router = require('koa-Router');

let server = new koa();
server.listen(8080)
let router = new Router();

router.get('/news',ctx=>{
    console.info(ctx.query);
    console.info(ctx.params);
    let {id,name} = ctx.query;
    let {id2,name2} = ctx.params;

    ctx.body = `id:${id}&name:${name}`;
    ctx.body+=`id2:${id2}&name2:${name2}`;
})  
server.use(router.routes());
//urlencoded      http://aaa.com/user?a=12&b=5
// params          http://aaa.com/user/12/5
//     urlencoded      params
//     顺序灵活         死的
//     可省略           死的
//     不利于SEO        利于SEO
//总结：params方式的提交的数据，用ctx.query获取;urlencoded方式提交的数据，用ctx.params获取