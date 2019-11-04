const Router = require('koa-router')
const request = require('./utils/axios')
const router = new Router({ prefix: '/api/article' })

router.get('/get_article_detail', async (ctx) => {
  const { id = null } = ctx.query
  const { data } = await request.get('/article/get_article_detail', {
    params: {
      id
    }
  })
  ctx.body = data
})

module.exports = router
