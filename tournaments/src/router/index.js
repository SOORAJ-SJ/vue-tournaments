import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../views/HomeView.vue')},
    { path: '/results', component:() => import('../views/ResultsView.vue') },
    { path: '/schedules', component:() => import('../views/SchedulesView.vue') },
    { path: '/events', component:() => import('../views/EventsView.vue') },
  ]
})

export default router
