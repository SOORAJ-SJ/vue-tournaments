import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../views/HomeView.vue')},
    { path: '/schedules', component:() => import('../views/SchedulesView.vue') }
  ]
})

export default router
