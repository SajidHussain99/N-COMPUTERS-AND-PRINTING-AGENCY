
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ServiceDetail from '../views/ServiceDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/service/:id',
    name: 'ServiceDetail',
    component: ServiceDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router

