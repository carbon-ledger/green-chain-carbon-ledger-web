<template>
  <div class="grid grid-cols-12 gap-3 p-3">
    <a-card class="col-span-12 shadow">
      <div class="flex items-center">
        <div class="text-lg">
          <SmileTwoTone class="pe-3"/>
          <span>
            {{ getHelloWithHour() }}
            <span class="font-medium">{{ getUserCurrent.data.user.userName }}</span>
            {{ getHelloWithHourFooter() }}
          </span>
        </div>
      </div>
    </a-card>
    <div class="col-span-12 lg:col-span-8 flex flex-col gap-3">
      <div><DashboardMainSubmenu/></div>
      <div><DashboardOrganizeKanban/></div>
      <div><DashboardDetailedForm/></div>
    </div>
    <div class="col-span-12 lg:col-span-4">
      <a-card class="shadow">
        <template #cover>
          <img alt="example" src="@/assets/images/market-user-background.webp"/>
        </template>
        <template #actions>
          <span @click="router.replace({name: 'UserConnect', replace: true})"><LinkOutlined/> 登录设备</span>
          <span @click="router.replace({name: 'UserPassword', replace: true})"><KeyOutlined/> 修改密码</span>
        </template>
        <a-card-meta :description="getUserCurrent.data.user.userName" :title="getUserCurrent.data.user.realName">
          <template #avatar>
            <a-avatar :src="getUserAvatar"/>
          </template>
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import {
  KeyOutlined,
  LinkOutlined,
  SmileTwoTone,
} from '@ant-design/icons-vue'
import {onMounted, ref} from "vue";
import {userCurrentDO} from "@/models/DoModel.js";
import {getUserCurrentApi} from "@/api/UserApi.js";
import router from "@/router/index.js";
import DashboardMainSubmenu from "@/components/BackComponents/Dashboard/DashboardMainSubmenu.vue";
import DashboardOrganizeKanban from "@/components/BackComponents/Dashboard/DashboardOrganizeKanban.vue";
import DashboardDetailedForm from "@/components/BackComponents/Dashboard/DashboardDetailedForm.vue";
import DashboardConsoleKanban from "@/components/BackComponents/Dashboard/DashboardConsoleKanban.vue";

const getUserCurrent = ref(userCurrentDO);
const getUserAvatar = ref('');

onMounted(async _ => {
  getUserCurrent.value = await getUserCurrentApi();

  if (getUserCurrent.value.output === 'Success') {
    if (getUserCurrent.value.data.user.avatar === '') {
      getUserAvatar.value = getUserCurrent.value.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
})

const getHelloWithHour = () => {
  const hour = new Date().getHours()
  if (hour < 6) {
    return '凌晨好,怎么还不休息'
  } else if (hour < 9) {
    return '早上好'
  } else if (hour < 12) {
    return '上午好'
  } else if (hour < 14) {
    return '中午好'
  } else if (hour < 17) {
    return '嘿'
  } else if (hour < 19) {
    return '傍晚好'
  } else {
    return '晚上好'
  }
}

const getHelloWithHourFooter = () => {
  const hour = new Date().getHours()
  if (hour < 6) {
    return '还是休息一下吧！'
  } else if (hour < 9) {
    return '那么早就上班啦！'
  } else if (hour < 12) {
    return '努力工作吧！'
  } else if (hour < 14) {
    return '欢迎回来哦！'
  } else if (hour < 17) {
    return '三点几了，饮茶先啦！'
  } else if (hour < 19) {
    return '要下班了，早点休息哦！'
  } else {
    return '看来你还在加班'
  }
}
</script>
