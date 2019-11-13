const Router = require('koa-router')
const comm = require('../comm')
const request = require('./utils/axios')
const router = new Router({ prefix: '/api/article' })

router.get('/get_article_detail', async (ctx) => {
  const { id = null } = ctx.query
  const { data } = await request.get(
    comm.baseUrl + '/bk/article/get_article_detail', {
      params: {
        id
      }
    })
  ctx.body = data
})

router.get('/get_article_list', async (ctx) => {
  const param = ctx.query
  const { data } = await request.get(
    comm.baseUrl + '/bk/article/list', {
      params: param
    })
  ctx.body = data
})

// 获取各种排行
router.get('/get_rank_list', async (ctx) => {
  const param = ctx.query
  const { data } = await request.get(
    comm.baseUrl + '/bk/article/get_rank_list', {
      params: param
    })
  ctx.body = data
})

module.exports = router
