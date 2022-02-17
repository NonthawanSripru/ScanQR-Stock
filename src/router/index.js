import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ScanQR-Product',
    name: 'ScanQr',
    component: () => import('../views/ScanQr.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../components/loginPage.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
