<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl grid grid-cols-12 flex-wrap items-center justify-between mx-auto p-2">
      <div class="col-span-2 flex items-center space-x-3 rtl:space-x-reverse">
        <img alt="Market Logo" class="h-7 rounded-full" src="@/assets/images/market-logo.png" draggable="false"/>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">交易核算中心</span>
      </div>
      <div class="col-span-8 flex justify-center w-full gap-6 md:w-auto">
        <a-menu>
          <button class="text-spring hover:text-green-500 font-semibold"
                  @click="router.push({name:'MarketDashboard'})">
            <UserOutlined />
            我的信息
          </button>
        </a-menu>
        <a-menu>
          <button class="text-spring hover:text-green-500 font-semibold"
                  @click="router.push({name:'Index'})">
            <ShoppingCartOutlined/>
            交易市场
          </button>
        </a-menu>
        <a-menu>
          <button class="text-spring hover:text-green-500 font-semibold"
                  @click="router.push({name:'AboutUsView'})">
            <MoneyCollectOutlined/>
            核算中心
          </button>
        </a-menu>
        <a-menu>
          <button class="text-spring hover:text-green-500 font-semibold"
                  @click="router.push({name:'CarbonAccountingView'})">
            <PayCircleOutlined/>
            我的交易
          </button>
        </a-menu>
      </div>
      <div class="col-span-2 flex justify-end">
        <a-dropdown :arrow="{ pointAtCenter: true }" placement="bottomRight">
          <a class="ant-dropdown-link" @click.prevent>
            <img id="UserAvatar" alt="UserAvatar" class="rounded-full h-10 w-auto" :src="getUserAvatar" :draggable="false">
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="router.replace({name: 'Dashboard', replace: true})">
                <DashboardOutlined/>
                仪表盘
              </a-menu-item>
              <a-menu-item @click="router.replace({name: 'UserProfile', replace: true})">
                <UserOutlined/>
                个人信息
              </a-menu-item>
              <a-menu-item @click="router.replace({name:'Index', replace: true})">
                <HomeOutlined/>
                回到首页
              </a-menu-item>
              <a-menu-divider/>
              <a-menu-item @click="userLogoutApi">
                <LogoutOutlined/>
                账号登出
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
    <img alt="" src="@/assets/images/market-navbar.png">
  </nav>
</template>

<script setup>
import router from "@/router/index.js";
import {
  DashboardOutlined,
  HomeOutlined, LogoutOutlined,
  MoneyCollectOutlined,
  PayCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from "@ant-design/icons-vue";
import {onMounted, ref} from "vue";
import {getUserCurrentApi} from "@/api/UserApi.js";
import {userLogoutApi} from "@/api/AuthApi.js";

const getUserAvatar = ref('');

onMounted(async _ => {
  const getData = await getUserCurrentApi();
  if (getData.output === 'Success') {
    if (getData.data.user.avatar === '') {
      getUserAvatar.value = getData.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
})
</script>