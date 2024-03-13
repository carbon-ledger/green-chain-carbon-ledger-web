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
      path:'/industry-solution-view',
      name:'IndustrySolutionView',
      component:()=>import('../views/HomePage/IndustrySolutionView.vue')
    },
    {
      path:'/our-service-view',
      name:'OurServiceView',
      component:()=>import('../views/HomePage/OurServiceView.vue')
    },
    {
      path:'/dashboard/main',
      name:'dashboard-main',
      component:() => import('@/views/Dashboard/main.vue')
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:()=>import('@/views/Dashboard/dashboard.vue'),
      children:[
        {
          path:'/dashboard/main',
          name:'dashboard-main',
          component:()=>import('@/views/Dashboard/main.vue')
        },
        {
          path:'/dashboard/console',
          name:'dashboard-console',
          component:()=>import('@/views/Dashboard/console.vue')
        },
        {
          path:'/dashboard/analysis',
          name:'dashboard-analysis',
          component:()=>import('@/views/Dashboard/analysis.vue')
        },
        {
          path:'/dashboard/monitor',
          name:'dashboard-monitor',
          component:()=>import('@/views/Dashboard/monitor.vue')
        },
        {
          path:'/dashboard/user',
          name:'dashboard-user',
          component:()=>import('@/views/Dashboard/user.vue')
        },
        {
          path:'/dashboard/role',
          name:'dashboard-role',
          component:()=>import('@/views/Dashboard/role.vue')
        },
        {
          path:'/dashboard/authority',
          name:'dashboard-authority',
          component:()=>import('@/views/Dashboard/authority.vue')
        },
      ]
    },
  ]
})

export default router
