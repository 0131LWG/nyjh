import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/core',
    name: 'core',
    component: () => import(/* webpackChunkName: "core" */ '../views/Core.vue')
  },
  {
    path: '/front',
    name: 'front',
    component: () => import(/* webpackChunkName: "front" */ '../views/Front.vue')
  },
  {
    path: '/back',
    name: 'back',
    component: () => import(/* webpackChunkName: "back" */ '../views/Back.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
