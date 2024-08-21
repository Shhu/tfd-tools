import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/amorphous-material-list',
      name: 'amorphous-material-list',
      component: () => import('@/views/AmorphousMaterialListView.vue')
    }
  ]
})

export default router
