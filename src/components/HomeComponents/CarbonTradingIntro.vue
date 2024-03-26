<template>
  <div class="w-full mt-20">
    <div class="md:container md:w-3/4 mx-auto">
      <div>
        <h1 class="text-center text-2xl font-bold">碳交易服务</h1>
        <p class="text-center text-lg">
          提供全面的碳排放核算，帮助企业准确计算和管理其碳足迹。
        </p>
      </div>
      <div class="text-end">
        <a-button type="primary" class="bg-aspargus" @click="gotoCarbonTrade()">了解更多</a-button>
      </div>
      <div class="mt-16 flex space-x-64">
        <div class=" mb-40 h-96 w-1/2 bg-white shadow-lg" role="status">
          <img src="@/assets/images/img11.jpg">
        </div>
        <div class="mt-8">
          <p class="text-lg"><CheckCircleOutlined class="text-aspargus mr-2" />特点</p>
          <p class="text-lg"><CheckCircleOutlined class="text-aspargus mr-2" />特点</p>
          <p class="text-lg"><CheckCircleOutlined class="text-aspargus mr-2" />特点</p>
          <p class="text-lg"><CheckCircleOutlined class="text-aspargus mr-2" />特点</p>
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
