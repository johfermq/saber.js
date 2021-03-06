/* globals __PUBLIC_PATH__ */
import Vue from 'vue'
import Router from 'vue-router'
import routes from '#out/templates/routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes,
  base: __PUBLIC_PATH__,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})
