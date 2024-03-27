<template>
  <div class="w-full mt-20">
    <div class="md:container md:w-3/4 mx-auto">
      <div>
        <h1 class="text-center text-2xl font-bold">行业解决方案</h1>
        <p class="text-center text-lg">
          提供专业碳排放与交易解决方案，助力企业应对碳市场挑战。
        </p>
      </div>
      <div class="mt-16 flex space-x-64">
        <div class=" h-96 w-1/2 bg-white shadow-lg" role="status">
          <img src="@/assets/images/img13.jpg">
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
import ProductFeatures from "@/components/HomeComponents/ProductFeatures.vue";
import {CheckCircleOutlined} from "@ant-design/icons-vue";
</script>