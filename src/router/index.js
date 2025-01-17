import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About')
  }
]

const router = new VueRouter({
  routes
})

export default router
