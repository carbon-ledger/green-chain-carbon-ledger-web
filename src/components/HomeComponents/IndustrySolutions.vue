<template>
  <div class="w-full flex justify-center">
    <div class="container p-20">
      <div class="mb-10">
        <h1 class="text-center text-2xl font-bold">行业解决方案</h1>
        <p class="text-center text-lg">
          提供专业碳排放与交易解决方案，助力企业应对碳市场挑战。
        </p>
      </div>
      <a-carousel class="h-auto" autoplay>
        <div class="relative bg-[url('@/assets/images/img32.jpg')] bg-cover bg-center">
          <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
          <div class="flex flex-col h-full z-10 relative justify-center">
            <div class="container p-72">
              <div class="grid grid-cols-6 gap-y-6">
                <div class="col-span-6">
                  <span class="text-start text-gray-100 text-4xl" style="text-shadow: 3px 3px 6px rgba(0,0,0,0.8);">
                    钢铁产业
                  </span>
                </div>
                <div class="col-span-6">
                  <span class="text-start text-gray-100 text-xl" style="text-shadow: 3px 3px 6px rgba(0,0,0,0.8);">
                    系统着重于生产过程的能效优化和清洁生产技术的应用，如电弧炉替代传统高炉，以显著降低碳排放。
                    同时，通过为企业制定和执行针对性的碳交易策略，优化其碳资产的市场价值，帮助钢铁产业企业在满足环保法规的同时，实现经济效益的提升。
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative bg-[url('@/assets/images/img33.jpg')] bg-cover bg-center">
          <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
          <div class="flex flex-col h-full z-10 relative justify-center">
            <div class="container p-72">
              <div class="grid grid-cols-6 gap-y-6">
                <div class="col-span-6">
                  <span class="text-start text-gray-100 text-4xl" style="text-shadow: 3px 3px 6px rgba(0,0,0,0.8);">
                    发电产业
                  </span>
                </div>
                <div class="col-span-6">
                  <span class="text-start text-gray-100 text-xl" style="text-shadow: 3px 3px 6px rgba(0,0,0,0.8);">
                    专注于深入分析和核算各类燃料的碳排放量，提供可再生能源如风能和太阳能的整合方案，以减少依赖化石燃料的碳排放。
                    系统支持发电企业通过实时数据驱动的碳交易策略，有效管理其碳排放权，利用碳市场机制实现碳减排目标与成本效益最大化。
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-carousel>
    </div>
  </div>
</template>
<script setup>
import ProductFeatures from "@/components/HomeComponents/ProductFeatures.vue";
import {LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons-vue";
</script>