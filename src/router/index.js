import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/views/HomePage/IndexView.vue')
    },
    {
      path:'/login',
      name:'login',
      component:() => import('../views/AuthPage/LoginView.vue')
    },
    {
      path:'/register',
      name:'register',
      component:() => import('../views/AuthPage/RegisterView.vue')
    },
    {
      path:'/forgetpassword',
      name:'forgetpassword',
      component:() => import('../views/AuthPage/ForgetPasswordView.vue')
    },
    {
      path:'/backpage/main',
      name:'backpagemain',
      component:() => import('../views/BackPage/main.vue')
    },
    {
      path:'/CarbonAccounting',
      name:'CarbonAccounting',
      component:() => import('../views/HomePage/CarbonAccountingView.vue')
    },
    {
      path:'/CarbonTrading',
      name:'CarbonTrading',
      component:() => import('../views/HomePage/CarbonTradingView.vue')
    },
    {
      path:'/backpage/main',
      name:'backpagemain',
      component:()=>import('../views/BackPage/main.vue')
    },
  ]
})

export default router
