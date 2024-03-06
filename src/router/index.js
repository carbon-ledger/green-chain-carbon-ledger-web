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
      path:'/organizeregister',
      name:'organizeregister',
      component:() => import('../views/AuthPage/OrganizeRegisterView.vue')
    },
    {
      path:'/manageregister',
      name:'manageregister',
      component:()=>import('../views/AuthPage/MangeRegisterView.vue')
    },
    {
      path:'/forgetpassword',
      name:'forgetpassword',
      component:() => import('../views/AuthPage/ForgetPasswordView.vue')
    },
    {
      path:'/alterpassword',
      name:'alterpassword',
      component:()=>import('../views/AuthPage/AlterPasswordView.vue')
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
      path:'/backpage',
      name:'backpage',
      component:()=>import('../views/BackPage/backpage.vue'),
      children:[
        {
          path:'/backpage/main',
          name:'backpagemain',
          component:()=>import('../views/BackPage/main.vue')
        },
        {
          path:'/backpage/console',
          name:'backpageconsole',
          component:()=>import('../views/BackPage/console.vue')
        },
        {
          path:'/backpage/analysis',
          name:'backpageanalysis',
          component:()=>import('../views/BackPage/analysis.vue')
        },
        {
          path:'/backpage/monitor',
          name:'backpagemonitor',
          component:()=>import('../views/BackPage/monitor.vue')
        },
        {
          path:'/backpage/user',
          name:'backpageuser',
          component:()=>import('../views/BackPage/user.vue')
        }
      ]
    },
  ]
})

export default router
