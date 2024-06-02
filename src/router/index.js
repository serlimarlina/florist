import { createRouter, createWebHistory } from 'vue-router'
import FloristView from '../views/FloristView.vue'
import ParentComponent from '../components/ParentComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: FloristView
  },
  {
    path: '/parent',
    name: 'ParentComponent',
    component: ParentComponent
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
