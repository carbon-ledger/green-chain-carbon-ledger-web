<template>
  <a-layout has-sider>
    <a-layout-sider
        :style="{
          overflow: 'auto',
          position: 'fixed',
          left: 0, top: 0, bottom: 0,
          background: '#fff',
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
import {onMounted} from "vue";
import request from "@/assets/js/Request.js";
import router from "@/router/index.js";
import {message} from "ant-design-vue";
import LeftBar from "@/components/BackComponents/DashboardLeftBar.vue";
import DashboardHeader from "@/components/BackComponents/DashboardHeader.vue";
import DashboardFooter from "@/components/BackComponents/DashboardFooter.vue";

onMounted(() => {
  request.getUserCurrent().then((res) => {
    switch (res.data.output) {
      case "Success": {
        console.log("[Dashboard] 登陆用户 " + res.data.data.user.userName)
        break
      }
      default: {
        console.log("[Dashboard] " + res.data.output)
      }
    }
  }).catch((err) => {
    if (err.response.data.output === "TokenVerifyError") {
      console.warn("[Dashboard] " + err.response.data.data.errorMessage)
      message.warn(err.response.data.data.errorMessage)
      router.push("/auth/login")
    } else {
      console.warn("[Dashboard] 未知错误" + err.response.data.output)
      message.error(err.response.data.message)
      router.push("/auth/login")
    }
  })
})
</script>