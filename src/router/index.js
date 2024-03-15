import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // 首页相关路由表
            path: '/',
            name: 'Home',
            component: import('@/views/HomePage/IndexView.vue'),
            children: [
                {
                    // 关于我
                    path: '/about',
                    name: 'AboutUsView',
                    component: () => import('@/views/HomePage/AboutUsView.vue')
                },
                {
                    // 碳核算
                    path: '/accounting',
                    name: 'CarbonAccountingView',
                    component: () => import('@/views/HomePage/CarbonAccountingView.vue')
                },
                {
                    // 碳交易
                    path: '/trade',
                    name: 'CarbonTradingView',
                    component: () => import('@/views/HomePage/CarbonTradingView.vue')
                },
                {
                    // 产品特性
                    path: '/product',
                    name: 'ProductFeaturesView',
                    component: () => import('@/views/HomePage/ProductFeaturesView.vue')
                },
                {
                    // 行业解决方案
                    path: '/solution',
                    name: 'IndustrySolutionView',
                    component: () => import('@/views/HomePage/IndustrySolutionView.vue')
                },
                {
                    // 服务
                    path: '/service',
                    name: 'OurServiceView',
                    component: () => import('@/views/HomePage/OurServiceView.vue')
                },
            ]
        },
        {
            // 登陆相关路由表
            name: "Auth",
            component: () => import("@/views/AuthPage/AuthFrame.vue"),
            children: [
                {
                    // 登陆
                    path: "/auth/login",
                    name: "LoginAccount",
                    component: () => import("@/views/AuthPage/Login.vue")
                },
                {
                    // 注册
                    path: "/auth/register",
                    name: "Register",
                    children: [
                        {
                            // 组织注册
                            path: '/auth/register/organize',
                            name: 'OrganizeRegister',
                            component: () => import('@/views/AuthPage/RegisterOrganize.vue')
                        },
                        {
                            // 管理注册
                            path: '/auth/register/manager',
                            name: 'ManagerRegister',
                            component: () => import('@/views/AuthPage/RegisterManage.vue')
                        }
                    ]
                },
                {
                    // 忘记密码
                    path: '/auth/forget',
                    name: 'ForgetPassword',
                    component: () => import('@/views/AuthPage/ForgetPassword.vue')
                },
            ]
        },
        {
            path: "/user",
            name: "User",
            children: [
                {
                    "path": "/user/profile",
                    name: "UserProfile",
                    //component: () => import("@/views/UserPage/UserProfileView.vue")
                }
            ]
        },
        {
            // 仪表盘相关路由表
            component: () => import('@/views/Dashboard/DashboardFrame.vue'),
            children: [
                {
                    // 仪表盘主页
                    path: '/dashboard/console',
                    name: 'DashboardConsole',
                    breadcrumbName: '管理首页',
                    component: () => import('@/views/Dashboard/ConsoleDashboard.vue')
                },
                {
                    path: '/dashboard/user',
                    name: 'DashboardUser',
                    component: () => import('@/views/Dashboard/ConsoleUser.vue')
                },
                {
                    path: '/dashboard/permission',
                    name: 'DashboardPermission',
                    component: () => import('@/views/Dashboard/ConsolePermission.vue')
                },
                {
                    path: '/dashboard/role',
                    name: 'DashboardRole',
                    component: () => import('@/views/Dashboard/ConsoleRole.vue')
                },
            ]
        },
    ]
})

export default router
