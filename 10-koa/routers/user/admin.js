const Router = require('koa-router');

let router = new Router();
router.get('/a',ctx=>{
    ctx.body = '管理员a'
})
module.exports = router.routes();
