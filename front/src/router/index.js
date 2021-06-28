import Vue from 'vue'
import VueRouter from 'vue-router'
import Adm from '../components/adm.vue'
import Navbar from '../components/Navbar.vue'
import Login from '../components/Login.vue'
import dashboard from '../views/dashboard.vue'
import edificio from '../views/edificio.vue'
import Profile from '../views/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'adm',
    component: Adm
  },
  {
    path: '/Navbar',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/',
    name: 'Login',
    component: Login
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
