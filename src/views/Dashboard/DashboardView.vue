<template >
  <div class="flex flex-col bg-gray-100 h-screen">
    <Header></Header>
    <MainSection></MainSection>
  </div>
</template>
<script setup>
import Header from "@/components/BackComponents/Header.vue";
import MainSection from "@/components/BackComponents/Mainsection.vue";
import {onMounted} from "vue";
import request from "@/assets/js/request.js";
import router from "@/router/index.js";
import {message} from "ant-design-vue";

onMounted(() => {
  request.getUserCurrent().then((res) => {
    switch (res.data.output) {
      case "Success": {
        console.log("[Dashboard] 登陆用户 " + res.data.data.user.userName)
        break
      }
      case "TokenVerifyError": {
        console.warn("[Dashboard] 用户未登录")
        router.push("/login")
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