import Vue from 'vue'
import VueRouter from 'vue-router'
import Adm from '../components/adm.vue'
import dashboard from '../views/dashboard.vue'
import edificio from '../views/edificio.vue'
import Profile from '../views/profile.vue'
import edificioDetails from '../views/edificioDetails.vue'
import finance from '../views/finance.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'adm',
    component: Adm
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

  
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/edificio',
    name: 'edificios',
    component: edificio
  },
  {
    path: '/edificioDetails/:edificioId',
    name: 'Detalhesedificio',
    component: edificioDetails
  },
  {
    path: '/finance/:edificioId',
    name: 'finance',
    component: finance
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
