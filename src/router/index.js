import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // 首页相关路由表
            path: '/',
            name:'Home',
            component:() => import('@/views/HomePage/IndexFrame.vue'),
            children: [
                {
                    path: '/',
                    name: 'Index',
                    component: () => import('@/views/HomePage/Home.vue'),
                },
                {
                    // 关于我
                    path: '/about',
                    name: 'AboutUsView',
                    component: () => import('@/views/HomePage/AboutUs.vue')
                },
                {
                    // 碳核算
                    path: '/accounting',
                    name: 'CarbonAccountingView',
                    component: () => import('@/views/HomePage/CarbonAccounting.vue')
                },
                {
                    // 碳交易
                    path: '/trade',
                    name: 'CarbonTradingView',
                    component: () => import('@/views/HomePage/CarbonTrading.vue')
                },
                {
                    // 产品特性
                    path: '/product',
                    name: 'ProductFeaturesView',
                    component: () => import('@/views/HomePage/ProductFeatures.vue')
                },
                {
                    // 行业解决方案
                    path: '/solution',
                    name: 'IndustrySolutionView',
                    component: () => import('@/views/HomePage/IndustrySolution.vue')
                },
                {
                    // 服务
                    path: '/service',
                    name: 'OurServiceView',
                    component: () => import('@/views/HomePage/OurService.vue')
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
                    component: () => import('@/views/Dashboard/Index/ConsoleDashboard.vue')
                },
                {
                    path: '/dashboard/organize',
                    name: 'DashboardOrganize',
                    component: () => import('@/views/Dashboard/Index/OrganizeDashboard.vue')
                },
                {
                    path: '/dashboard/admin',
                    name: 'DashboardAdmin',
                    component: () => import('@/views/Dashboard/Index/AdminDashboard.vue')
                },
                {
                    path: '/dashboard/default',
                    name: 'DashboardDefault',
                    component: () => import('@/views/Dashboard/Index/DefaultDashboard.vue')
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
                    path: '/dashboard/web-setting',
                    name:'DashboardWebSetting',
                    component:() => import('@/views/Dashboard/ConsoleWebSetting.vue')
                },
                {
                    path: '/dashboard/copyright',
                    name:'DashboardCopyRight',
                    component:() => import('@/views/Dashboard/ConsoleCopyRight.vue')
                },
                {
                    path: '/dashboard/system-info',
                    name:'DashboardSystemInfo',
                    component:() => import('@/views/Dashboard/ConsoleSystemInfo.vue')
                },
                {
                    path: '/dashboard/quota-manager',
                    name:'DashboardQuotaManager',
                    component:() => import('@/views/Dashboard/ConsoleQuotaAllocation.vue')
                },
                {
                    path: '/dashboard/trade-manager',
                    name:'DashboardTradeManager',
                    component:() => import('@/views/Dashboard/ConsoleTradeManager.vue')
                },
                {
                    path: '/dashboard/check-report',
                    name:'DashboardCheckReport',
                    component:() => import('@/views/Dashboard/ConsoleCheckReport.vue')
                },
                {
                    path: '/dashboard/check-report/view/:id',
                    name:'DashboardCheckReportView',
                    component:() => import('@/views/Dashboard/ConsoleCheckReportView.vue')
                },
           ]
        },
        {
            // 交易市场相关
            path: '/market',
            name: 'Market',
            component: () => import('@/views/MarketPage/IndexFrame.vue'),
            children:[
                {
                    path: '',
                    name: 'MarketDashboard',
                    component: () => import('@/views/MarketPage/MarketDashboard.vue'),
                },
                {
                    path: '/market/list',
                    name: 'MarketList',
                    component: () => import('@/views/MarketPage/MarketList.vue'),
                },
                {
                    path: '/market/accounting',
                    name: 'MarketAccounting',
                    component: () => import('@/views/MarketPage/MarketAccounting.vue'),
                },
                {
                    path: '/market/trade',
                    name: 'MarketTrade',
                    component: () => import('@/views/MarketPage/MarketTrade.vue'),
                },
                {
                    path: '/market/organize-trade/:tradeId',
                    name: 'MarketOrganizeTrade',
                    component: () => import('@/views/MarketPage/MarketOrganizeTrade.vue'),
                },
                {
                    path: '/market/accounting/create',
                    name: 'MarketAccountingCreate',
                    component: () => import('@/views/MarketPage/MarketCreateAccounting.vue'),
                },
                {
                    path: '/market/accounting/check/:id',
                    name: 'MarketCheckAccounting',
                    component: () => import('@/views/MarketPage/MarketCheckAccounting.vue'),
                },
            ]
        },
        {
            path: '/no-permission',
            name:'PageNotFounded',
            component:() => import('@/views/PublicPage/NoPermission.vue')
        },
        {
            path: '/demo',
            name: 'Demo',
            component: () => import('@/views/demo.vue')
        }
    ]
})

export default router
