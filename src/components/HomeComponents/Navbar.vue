<template>
  <nav class="bg-white border-gray-200 px-3 fixed top-0 left-0 right-0 z-50 flex justify-center">
    <div class="grid grid-cols-12 w-full container items-center mt-[2px]">
      <a href="/" class="col-span-2">
        <img src="/favicon.ico" alt="LOGO" class="w-11 h-11 m-1"/>
      </a>
      <div class="col-span-8 flex justify-center w-full gap-6 md:w-auto">
        <a-menu>
          <button @click="router.push({name:'Index'})" class="text-spring hover:text-green-500 font-semibold">
            首页
          </button>
        </a-menu>
        <a-menu>
          <button @click="router.push({name:'AboutUsView'})" class="text-spring hover:text-green-500 font-semibold">
            关于我们
          </button>
        </a-menu>
        <a-menu>
          <button @click="router.push({name:'CarbonAccountingView'})"
                  class="text-spring hover:text-green-500 font-semibold">
            碳核算服务
          </button>
        </a-menu>
        <a-menu>
          <button @click="router.push({name:'CarbonTradingView'})"
                        class="text-spring hover:text-green-500 font-semibold">
            碳交易服务
          </button>
        </a-menu>
      </div>
      <div v-if="value === false" class="col-span-2 flex justify-end ">
        <div class="col-span-2 w-32 p-2 gap-1 bg-aspargus flex justify-center items-center rounded-lg shadow-lg">
          <button class="text-gray-200 hover:text-spring" @click="router.replace({name:'LoginAccount'})">登录</button>
          <span class="text-gray-200 mx-1">|</span>
          <button class="text-gray-200  hover:text-spring" @click="router.replace({name:'Register'})">注册</button>
        </div>
      </div>
      <div v-if="value === true" class="col-span-2 flex justify-end">
        <a-dropdown :arrow="{ pointAtCenter: true }" placement="bottomRight">
          <a class="ant-dropdown-link" @click.prevent>
            <img alt="UserAvatar" class="rounded-full w-auto h-full" src="" id="UserAvatar">
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="router.replace({name: 'Dashboard', replace: true})">
                <DashboardOutlined />
                仪表盘
              </a-menu-item>
              <a-menu-item @click="router.replace({name: 'UserProfile', replace: true})">
                <UserOutlined/>
                个人信息
              </a-menu-item>
              <a-menu-item @click="router.replace({name: 'MarketDashboard', replace: true})">
                <MoneyCollectOutlined />
                交易市场
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
  </nav>
</template>

<script setup>
import router from "@/router/index.js";
import {UserOutlined, DashboardOutlined, MoneyCollectOutlined, LogoutOutlined} from "@ant-design/icons-vue";
import {onMounted, ref} from "vue";
import {getUserCurrentIndexApi} from "@/api/UserApi.js";
import {api} from "@/assets/js/Request.js";
import {userLogoutApi} from "@/api/AuthApi.js";

const value = ref(false);
const getUserAvatar = ref('');

onMounted(async _ => {
  const getData = await getUserCurrentIndexApi();
  if (getData.output === 'Success') {
    value.value = true;
    getUserAvatar.value = api + '/image/avatar/' + getData.data.user.uuid;
    document.getElementById("UserAvatar");
  }
})
</script>
