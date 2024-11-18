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
    path: '/center',
    name: 'center',
    component: () => import(/* webpackChunkName: "center" */ '../views/Center.vue')
  },
  {
    path: '/plan',
    name: 'plan',
    component: () => import(/* webpackChunkName: "plan" */ '../views/Plan.vue')
  },
  {
    path: '/case',
    name: 'case',
    component: () => import(/* webpackChunkName: "case" */ '../views/Case.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import(/* webpackChunkName: "service" */ '../views/Service.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
