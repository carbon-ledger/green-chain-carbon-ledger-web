<template>
  <div class="w-full flex justify-center bg-green-50">
    <div class="container p-20">
      <div class="grid grid-cols-6">
        <div class="col-span-6 mb-10">
          <a-typography-title class="text-center font-bold">碳交易服务</a-typography-title>
          <a-typography-title :level="4" class="text-center">
            提供全面的碳排放核算，帮助企业准确计算和管理其碳足迹
          </a-typography-title>
        </div>
        <div class="col-span-3 flex flex-col justify-center space-y-10">
          <div class="text-start">
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl"><CheckCircleOutlined class="text-aspargus mr-2" />简洁直观的界面，易于操作</p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl"><CheckCircleOutlined class="text-aspargus mr-2" />确保交易和碳信用数据完全公开</p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl"><CheckCircleOutlined class="text-aspargus mr-2" />流程自动化以提高效率</p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl"><CheckCircleOutlined class="text-aspargus mr-2" />与其他平台和系统兼容</p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl"><CheckCircleOutlined class="text-aspargus mr-2" />强大的分析工具帮助用户做出决策</p>
          </div>
          <div class="text-start">
            <a-button type="primary" class="bg-aspargus" @click="gotoCarbonAccount()">了解更多</a-button>
          </div>
        </div>
        <div class="col-span-3">
          <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
            <img class="rounded-lg" src="@/assets/images/img11.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  CheckCircleOutlined
} from "@ant-design/icons-vue";

function gotoCarbonTrade(){
  window.location.replace("/trade")
}
</script>
