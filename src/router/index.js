import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'app',
    redirect:'user'
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../layouts/user/UserLayout.vue'),
    children: [
      {
        path: '/user',
        redirect: '/user/login'
      },
      {
        path: '/user/login',
        name: 'login',
        component: () => import('../views/user/Login.vue')
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import('../views/user/Register.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router