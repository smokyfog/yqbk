const Router = require('koa-router')
const request = require('./utils/axios')
const router = new Router({ prefix: '/api/banner' })

router.get('/list', async (ctx) => {
  const { data } = await request.get('/banner/get_banner')
  ctx.body = data
})

module.exports = router
