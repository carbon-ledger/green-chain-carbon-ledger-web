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
      path:'/AboutUsView',
      name:'AboutUsView',
      component:()=>import('../views/HomePage/AboutUsView.vue')
    },
    {
      path:'/CarbonAccountingView',
      name:'CarbonAccountingView',
      component:() => import('../views/HomePage/CarbonAccountingView.vue')
    },
    {
      path:'/CarbonTradingView',
      name:'CarbonTradingView',
      component:() => import('../views/HomePage/CarbonTradingView.vue')
    },
    {
      path:'/ProductFeaturesView',
      name:'ProductFeaturesView',
      component:() =>import('../views/HomePage/ProductFeaturesView.vue')
    },
    {
      path:'/IndustrySolutionView',
      name:'IndustrySolutionView',
      component:()=>import('../views/HomePage/IndustrySolutionView.vue')
    },
    {
      path:'/OurServiceView',
      name:'OurServiceView',
      component:()=>import('../views/HomePage/OurServiceView.vue')
    },
    {
      path:'/backpage/main',
      name:'backpagemain',
      component:() => import('../views/BackPage/main.vue')
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
        },
        {
          path:'/backpage/role',
          name:'backpagerole',
          component:()=>import('../views/BackPage/role.vue')
        },
        {
          path:'/backpage/authority',
          name:'backpageauthority',
          component:()=>import('../views/BackPage/authority.vue')
        },
      ]
    },
  ]
})

export default router
