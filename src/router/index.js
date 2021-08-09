import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/picks',
    component: () => import('@/views/index/layout'),
    redirect: '/picks/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/index/home')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
