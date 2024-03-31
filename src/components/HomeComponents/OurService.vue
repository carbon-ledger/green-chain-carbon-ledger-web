<template>
  <div class="w-full flex justify-center">
    <div class="container p-20">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12">
          <a-typography-title class="text-center font-bold">我们的服务</a-typography-title>
          <a-typography-title :level="4" class="text-center">
            助力企业完成碳中和
          </a-typography-title>
        </div>
        <div class="col-span-6 md:col-span-3">
          <a-card class="shadow-md h-full w-full" hoverable>
            <template #cover>
              <img class="h-80" src="@/assets/images/img17.jpg"  alt=""/>
            </template>
            <a-card-meta title="碳交易平台">
              <template #description>提供碳配额买卖平台，助力企业优化碳资产。</template>
            </a-card-meta>
          </a-card>
        </div>
        <div class="col-span-6 md:col-span-3">
          <a-card class="shadow-md h-full w-full" hoverable>
            <template #cover>
              <img class="h-80" src="@/assets/images/img18.jpg" alt=""/>
            </template>
            <a-card-meta title="减排项目支持">
              <template #description>协助开发碳减排项目，确保项目合规获碳信用。</template>
            </a-card-meta>
          </a-card>
        </div>
        <div class="col-span-6 md:col-span-3">
          <a-card class="shadow-md h-full w-full" hoverable>
            <template #cover>
              <img class="h-80" alt="example" src="@/assets/images/img19.jpg" />
            </template>
            <a-card-meta title="碳足迹核算">
              <template #description>精确测量企业碳排放，兼容多行业标准，确保核算准确性和行业适应性。</template>
            </a-card-meta>
          </a-card>
        </div>
        <div class="col-span-6 md:col-span-3">
          <a-card class="shadow-md h-full w-full" hoverable>
            <template #cover>
              <img class="h-80" alt="example" src="@/assets/images/img20.jpg" />
            </template>
            <a-card-meta title="碳排放报告">
              <template #description>自动生成符合法规的碳排放报告和趋势分析。</template>
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>