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

onMounted(() => {
  request.getUserCurrent().then((res) => {
    switch (res.data.output) {
      case "Success": {
        console.log("[Dashboard] 用户有效")
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
    console.warn("[Dashboard] 失败")
    router.push("/login")
  })
})
</script>