const Koa = require('koa');

let server = new Koa();
server.listen(8080);

server.keys = [
    '123123dfsdfsdfdf',
    'adsfsdgafasf',
    '7445345sdfsdf'
]
server.use(ctx=>{
    ctx.cookies.set('user', 'blue', {signed: true});
    console.log(ctx.cookies.get('user', {signed: true}));//密钥的作用就是如果通过浏览器更改cookie的值,后台是不认的
    console.log(ctx.cookies.get('user'));
  
    // // ctx.cookies.set('user','blue',{signed:true})
    // console.info(ctx.cookies.get('user',{signed:true}))
})