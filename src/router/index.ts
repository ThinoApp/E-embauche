import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Teste from '../views/Teste.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Teste',
    name: 'Teste',
    component: Teste
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
