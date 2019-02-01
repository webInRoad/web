const Router = require('koa-router');

let router = new Router();

router.get('/a',ctx=>{
    ctx.body = '公司的a'
})

module.exports = router.routes();