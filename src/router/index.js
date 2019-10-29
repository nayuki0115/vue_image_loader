import Vue from 'vue'
import Router from 'vue-router'
// import middleware from './middleware.js'
import routes from './routes.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes
})

// router.beforeEach(middleware)

export default router
