import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // 首页相关路由表
            path: '/home',
            name:'Home',
            component:() => import('@/views/HomePage/HomeFrame.vue'),
            children: [
                {
                    path: '/',
                    name: 'Index',
                    component: () => import('@/views/HomePage/IndexView.vue'),
                },
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
                {
                    path: '/demo',
                    name: 'Demo',
                    component: () => import('@/views/demo.vue')
                }
            ]
        },
        {
            // 登陆相关路由表
            path: "/auth",
            name: "Auth",
            component: () => import("@/views/AuthPage/IndexFrame.vue"),
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
                {
                    //修改密码
                    path: '/auth/alter',
                    name: 'AlterPassword',
                    component:() => import('@/views/AuthPage/AlterPassword.vue')
                }
            ]
        },
        {
            path: "/user",
            name: "User",
            component: () => import("@/views/UserPage/IndexFrame.vue"),
            children: [
                {
                    path: "/user/profile",
                    name: "UserProfile",
                    component: () => import("@/views/UserPage/UserProfile.vue")
                },
                {
                    path: "/user/verify",
                    name: "UserVerify",
                    component: () => import("@/views/UserPage/UserVerify.vue")
                },
                {
                    path: "/user/connect",
                    name: "UserConnect",
                    component: () => import("@/views/UserPage/UserConnect.vue")
                },
                {
                    path: "/user/password",
                    name: "UserPassword",
                    component: () => import("@/views/UserPage/UserPassword.vue")
                },
                {
                    path: "/user/edit",
                    name: "UserEdit",
                    component: () => import("@/views/UserPage/UserEdit.vue")
                },
                {
                    path: "/user/delete",
                    name: "UserDelete",
                    component: () => import("@/views/UserPage/UserDelete.vue")
                }
            ]
        },
        {
            // 仪表盘相关路由表
            path: '/dashboard',
            name: 'Dashboard',
            component: () => import('@/views/Dashboard/IndexFrame.vue'),
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
                    component: () => import('@/views/Dashboard/ConsoleRole.vue'),
                },
                {
                    path:'/dashboard/verify',
                    name:'DashboardVerify',
                    component:() => import('@/views/Dashboard/ConsoleUserVerify.vue')
                },
                {
                    path: '/dashboard/verify/check',
                    name:'DashboardVerifyCheck',
                    component:() => import('@/views/Dashboard/ConsoleUserVerifyCheck.vue')
                },
                {
                    path: '/dashboard/websetting',
                    name:'DashboardWebSetting',
                    component:() => import('@/views/Dashboard/ConsoleWebSetting.vue')
                }
            ]
        },
        {
            path: '/no-permission',
            name:'PageNotFounded',
            component:() => import('@/views/PublicPage/NoPermission.vue')
        }
    ]
})

export default router
