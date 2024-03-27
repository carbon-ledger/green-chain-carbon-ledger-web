<template>
  <div class="w-full mt-20 flex justify-center">
    <div class="container p-32">
      <div class="grid grid-cols-6 gap-y-10">
        <div class="col-span-6">
          <h1 class="text-center text-2xl font-bold">碳核算服务</h1>
          <p class="text-center text-lg">
            提供全面的碳排放核算，帮助企业准确计算和管理其碳足迹。
          </p>
        </div>
        <div class="col-span-3 mt-6 flex-col space-y-10">
          <div class="text-start">
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl"><CheckCircleOutlined class="text-aspargus mr-2" />简洁直观的界面，易于操作。</p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl"><CheckCircleOutlined class="text-aspargus mr-2" />确保交易和碳信用数据完全公开。</p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl"><CheckCircleOutlined class="text-aspargus mr-2" />流程自动化以提高效率。</p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl"><CheckCircleOutlined class="text-aspargus mr-2" />与其他平台和系统兼容。</p>
            <p class="sm:text-sm md:text-base lg:text-lg xl:text-xl"><CheckCircleOutlined class="text-aspargus mr-2" />强大的分析工具帮助用户做出决策。</p>
          </div>
          <div class="text-start">
            <a-button type="primary" class="bg-aspargus" @click="gotoCarbonAccount()">了解更多</a-button>
          </div>
        </div>
        <div class="col-span-3">
          <a-card class="col-span-3" hoverable>
            <template #cover>
              <img src="@/assets/images/img11.jpg">
            </template>
          </a-card>
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
