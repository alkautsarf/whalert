import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Register from '../views/Register.vue'
import Signin from '../views/Signin.vue'
import Alert from '../views/Alert.vue'
import Add_Alert from '../views/Add_Alert.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert
    },
    {
      path: '/add-alert',
      name: 'add',
      component: Add_Alert
    },
  ]
})

router.beforeEach((to, from) => {
  if(localStorage.access_token && to.name === 'register') return {name: 'home'}
  if(localStorage.access_token && to.name === 'signin') return {name: 'home'}
  if(!localStorage.access_token && to.name === 'alert') return {name: 'register'}
  if(!localStorage.access_token && to.name === 'add') return {name: 'register'}
})

export default router
