const Router = require('koa-router')
const comm = require('../comm')
const request = require('./utils/axios')
const router = new Router({ prefix: '/api/comments' })

router.get('/get_comments_list', async (ctx) => {
  const { id = null } = ctx.query
  const { data } = await request.get(
    comm.baseUrl + '/bk/article/get_article_detail', {
      params: {
        id
      }
    })
  ctx.body = data
})

router.post('/article_comment', async (ctx) => {
  const param = ctx.request.body
  const { data } = await request.post(
    comm.baseUrl + '/bk/comments/article_comment', param
  )
  ctx.body = data
})

module.exports = router
