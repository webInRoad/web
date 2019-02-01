const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

let server = new Koa();
server.listen(8080);

let router = new Router();
router.all(/(\.jpg|\.png|\.gif)$/i,static('./static',{
    maxage:60*86400*10
}))
router.all(/(\.css)$/i,static('./static',{
    maxage:20*86400*10
}))
router.all(/(\.html)$/i,static('./static',{
    maxage:60*86400*10
}))
router.all('*',static('./static',{
    maxage:10
}))
server.use(router.routes())