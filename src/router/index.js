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
    path: '/recruit',
    name: 'recruit',
    component: () => import(/* webpackChunkName: "recruit" */ '../views/Recruit.vue')
  },
  {
    path: '/case',
    name: 'case',
    component: () => import(/* webpackChunkName: "front" */ '../views/Case.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "back" */ '../views/About.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import(/* webpackChunkName: "back" */ '../views/Service.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
