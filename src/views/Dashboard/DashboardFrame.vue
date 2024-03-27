<template>
  <a-layout has-sider>
    <a-layout-sider
        :style="{
          overflow: 'auto',
          position: 'fixed',
          left: 0, top: 0, bottom: 0,
          background: '#fff'
        }"
        class="shadow"
    >
      <LeftBar/>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff' }" class="shadow">
        <DashboardHeader/>
      </a-layout-header>
      <a-layout-content>
        <RouterView/>
      </a-layout-content>
      <a-layout-footer>
        <DashboardFooter/>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style>
body {
  background: #F5F5F5;
}
</style>

<script setup>
import {nextTick, onMounted, ref} from "vue";
import router from "@/router/index.js";
import LeftBar from "@/components/BackComponents/DashboardLeftBar.vue";
import DashboardHeader from "@/components/BackComponents/DashboardHeader.vue";
import DashboardFooter from "@/components/BackComponents/DashboardFooter.vue";
import {getUserCurrentApi} from "@/api/UserApi.js";
import {getUrlRelativePath} from "@/assets/js/ProcessUtil.js";
import {userCurrentDO} from "@/assets/js/DoModel.js";

const getUserCurrent = ref(userCurrentDO);

onMounted(async _ => {
  getUserCurrent.value = await getUserCurrentApi();
})

nextTick(async _ => {
  if (getUrlRelativePath() === "/dashboard") {
    switch (getUserCurrent.value.data.role) {
      case "console":
        await router.replace({ name: 'DashboardConsole', replace: true })
        break
      case "admin":
        await router.replace({ name: 'DashboardConsole', replace: true })
        break
      case "organize":
        await router.replace({ name: 'DashboardConsole', replace: true })
        break
      default:
        await router.replace({ name: 'DashboardConsole', replace: true })
    }
  }
})
</script>