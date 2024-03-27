<template>
  <div class="w-full flex justify-center bg-green-50">
    <div class="container p-32">
      <div class="grid grid-cols-6 gap-y-10">
        <div class="col-span-6">
          <h1 class="text-center text-2xl font-bold">碳核算服务</h1>
          <p class="text-center text-lg">
            提供全面的碳排放核算，帮助企业准确计算和管理其碳足迹。
          </p>
        </div>
        <div class="col-span-3">
          <a-card hoverable>
            <template #cover>
              <img src="@/assets/images/img8.jpg">
            </template>
          </a-card>
        </div>
        <div class="col-span-3 mt-6 flex-col space-y-10">
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
