const Koa = require('koa');
const session = require('koa-session');

let server = new Koa();
server.listen(8080);

server.keys = [
    '12343sdfsdf',
    '234324adfadfaf',
    'asdfasgadsfa'
]

server.use(session({
    maxAge:86400*20,
    renew:true
},server))

server.use(async ctx=>{
    if(!ctx.session["view"]){
        ctx.session["view"] = 1;
    }
    ctx.session["view"] ++;
    ctx.body = `欢迎您,这是你第${ctx.session["view"]}次访问页面`
})