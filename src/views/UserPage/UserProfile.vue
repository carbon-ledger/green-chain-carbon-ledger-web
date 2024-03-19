<template>
  <div class="container w-full">
    <div class="grid gap-3">
      <div class="grid grid-cols-12 py-6 gap-3">
        <div class="col-span-2 flex items-center justify-center">
          <img alt="image description" class="rounded-full w-16 h-16" src="@/assets/images/user-icon.png">
        </div>
        <div class="col-span-10">
          <a-typography-title :level="2">{{ getData }}</a-typography-title>
        </div>
      </div>
    </div>
    <hr/>
  </div>
</template>

<script setup>
import request from "@/assets/js/request.js";
import {message} from "ant-design-vue";
import {onMounted, reactive, ref} from "vue";

let getData = "null"
onMounted(() => {
  request.getUserCurrent().then((res) => {
    switch (res.data.output) {
      case "Success":
        getData = res.data.data
        break;
      default: message.warn(res.data.message)
    }
  }).catch((err) => {
    switch (err.response.data.output) {
      case "TokenVerifyError": {
        message.warn(err.response.data.data.errorMessage)
        window.location.replace("/auth/login")
        break;
      }
      default: message.warn(err.response.data.message)
    }
  });
})
</script>