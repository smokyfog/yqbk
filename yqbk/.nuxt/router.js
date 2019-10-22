import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f3e08d5 = () => interopDefault(import('../pages/about-blog.vue' /* webpackChunkName: "pages/about-blog" */))
const _4ed7268b = () => interopDefault(import('../pages/about-me.vue' /* webpackChunkName: "pages/about-me" */))
const _3bcbd944 = () => interopDefault(import('../pages/detail.vue' /* webpackChunkName: "pages/detail" */))
const _03b3529e = () => interopDefault(import('../pages/notes.vue' /* webpackChunkName: "pages/notes" */))
const _3a3494bc = () => interopDefault(import('../pages/share.vue' /* webpackChunkName: "pages/share" */))
const _685ebc2f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-blog",
    component: _5f3e08d5,
    name: "about-blog"
  }, {
    path: "/about-me",
    component: _4ed7268b,
    name: "about-me"
  }, {
    path: "/detail",
    component: _3bcbd944,
    name: "detail"
  }, {
    path: "/notes",
    component: _03b3529e,
    name: "notes"
  }, {
    path: "/share",
    component: _3a3494bc,
    name: "share"
  }, {
    path: "/",
    component: _685ebc2f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
