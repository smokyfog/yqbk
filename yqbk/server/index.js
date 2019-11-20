const Koa = require('koa')
const consola = require('consola')
const session = require('koa-session')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()
const koaBody = require('koa-body')
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
const banner = require('./interface/banner')
const article = require('./interface/article')

const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  credentials: 'include',
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
}
app.use(session(CONFIG, app))

const comments = require('./interface/comments')
config.dev = app.env !== 'production'
// koaBody 用于上传
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
  }
}))

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(banner.routes()).use(banner.allowedMethods())
  app.use(article.routes()).use(article.allowedMethods())
  app.use(comments.routes()).use(comments.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
