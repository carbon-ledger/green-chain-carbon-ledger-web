<template>
  <nav class="bg-white border-gray-200 px-3 fixed top-0 left-0 right-0 z-50">
    <div class="w-full flex items-center justify-between">
      <a href="/">
        <img src="/favicon.ico" alt="LOGO" style="margin-left:2vw; max-width:50%; height:auto; width:5vw; display: block;" />
      </a>
      <div class="flex items-center w-full space-x-5 md:w-auto">
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
      <div class="w-32 p-2 gap-1 bg-aspargus flex justify-center items-center rounded-lg">
        <button class="text-gray-200 hover:text-spring" @click="router.replace({name:'LoginAccount'})">登录</button>
        <span class="text-gray-200 mx-1">|</span>
        <button class="text-gray-200  hover:text-spring" @click="router.replace({name:'Register'})">注册</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import router from "@/router/index.js";

</script>
