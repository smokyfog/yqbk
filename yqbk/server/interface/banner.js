const Router = require('koa-router')
const comm = require('../comm')
const request = require('./utils/axios')
const router = new Router({ prefix: '/api/banner' })

router.get('/list', async (ctx) => {
  const { data } = await request.get(
    comm.baseUrl + '/bk/banner/get_banner'
  )
  ctx.body = data
})

module.exports = router
