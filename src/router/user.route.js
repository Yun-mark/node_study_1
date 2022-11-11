const Router =require('koa-router');

const {register,login} = require('../controller/user.controller')
// console.log('出c层')
const router = new Router({prefix:'/users'})

// 注册接口
router.post('/register',register)
// 登录接口
router.post('/login',login)

module.exports = router
