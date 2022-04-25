import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Intro from '../views/Intro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/collection',
      name: 'home',
      component: Home
    },
  ]
})

export default router
