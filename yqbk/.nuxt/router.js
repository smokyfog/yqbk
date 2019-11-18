import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e65f4e02 = () => interopDefault(import('..\\pages\\about-blog.vue' /* webpackChunkName: "pages_about-blog" */))
const _3b990d96 = () => interopDefault(import('..\\pages\\about-me.vue' /* webpackChunkName: "pages_about-me" */))
const _26de6324 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages_detail" */))
const _564f929c = () => interopDefault(import('..\\pages\\messageboard.vue' /* webpackChunkName: "pages_messageboard" */))
const _f573df98 = () => interopDefault(import('..\\pages\\notes.vue' /* webpackChunkName: "pages_notes" */))
const _0006cf76 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _88715b5c = () => interopDefault(import('..\\pages\\share.vue' /* webpackChunkName: "pages_share" */))
const _2c1d0c76 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-blog",
    component: _e65f4e02,
    name: "about-blog"
  }, {
    path: "/about-me",
    component: _3b990d96,
    name: "about-me"
  }, {
    path: "/detail",
    component: _26de6324,
    name: "detail"
  }, {
    path: "/messageboard",
    component: _564f929c,
    name: "messageboard"
  }, {
    path: "/notes",
    component: _f573df98,
    name: "notes"
  }, {
    path: "/search",
    component: _0006cf76,
    name: "search"
  }, {
    path: "/share",
    component: _88715b5c,
    name: "share"
  }, {
    path: "/",
    component: _2c1d0c76,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
