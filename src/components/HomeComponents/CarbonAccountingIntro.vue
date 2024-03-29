<template>
  <div class="w-full flex justify-center mt-20">
    <div class="container p-20">
      <div class="grid grid-cols-6">
        <div class="col-span-6  mb-10">
          <a-typography-title class="text-center font-bold">碳核算服务</a-typography-title>
          <a-typography-title :level="4" class="text-center">
            提供全面的碳排放核算，帮助企业准确计算和管理其碳足迹
          </a-typography-title>
        </div>
        <div class="col-span-3">
          <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
            <img class="rounded-lg" src="@/assets/images/img8.jpg" alt=""/>
          </div>
        </div>
        <div class="col-span-3 flex flex-col justify-center space-y-10">
          <div class="text-end">
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl">自动收集能源和排放数据 <CheckCircleOutlined class="text-aspargus" /></p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl">支持实时数据监测 <CheckCircleOutlined class="text-aspargus" /></p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl">符合国际碳核算标准 <CheckCircleOutlined class="text-aspargus" /></p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl">设定并跟踪减排目标 <CheckCircleOutlined class="text-aspargus" /></p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl">确保遵守环境法规和政策 <CheckCircleOutlined class="text-aspargus" /></p>
          </div>
          <div class="text-end">
            <a-button type="primary" class="bg-aspargus" @click="gotoCarbonAccount()">了解更多</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>


import {CheckCircleOutlined} from "@ant-design/icons-vue";


function gotoCarbonAccount(){
  window.location.replace("/accounting")
}
</script>
