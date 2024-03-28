<template>
  <div class="w-screen h-screen grid justify-center items-center">
    <a-result status="403" sub-title="抱歉，您没有权限！" title="401">
      <template #extra>
        <a-button class="bg-aspargus" type="primary" @click="router.back()">返回上一页</a-button>
      </template>
    </a-result>
  </div>
</template>

<script setup>
import router from "@/router/index.js";
</script>