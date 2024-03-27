<template>
  <div class="w-full mt-20 flex justify-center">
    <div class="container p-32">
      <div class="grid grid-cols-12 gap-x-8 gap-y-10">
        <div class="col-span-12">
          <h1 class="text-center text-2xl font-bold">我们的服务</h1>
          <p class="text-center text-lg">
            助力企业完成碳中和
          </p>
        </div>
        <div class="col-span-3">
          <a-card hoverable>
            <template #cover>
              <img class="h-80" src="@/assets/images/img17.jpg" />
            </template>
            <a-card-meta title="碳交易平台">
              <template #description>提供碳配额买卖平台，助力企业优化碳资产。</template>
            </a-card-meta>
          </a-card>
        </div>
        <div class="col-span-3">
          <a-card hoverable>
            <template #cover>
              <img class="h-80" alt="example" src="@/assets/images/img18.jpg" />
            </template>
            <a-card-meta title="减排项目支持">
              <template #description>协助开发碳减排项目，确保项目合规获碳信用。</template>
            </a-card-meta>
          </a-card>
        </div>
        <div class="col-span-3">
          <a-card hoverable>
            <template #cover>
              <img class="h-80" alt="example" src="@/assets/images/img19.jpg" />
            </template>
            <a-card-meta title="碳足迹核算">
              <template #description>精确测量企业碳排放，支持多行业标准。</template>
            </a-card-meta>
          </a-card>
        </div>
        <div class="col-span-3">
          <a-card hoverable>
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