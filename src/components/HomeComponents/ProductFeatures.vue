<template>
  <div class="bg-green-50 flex justify-center">
    <div class="container p-20">
      <div class="grid grid-cols-6">
        <div class="col-span-6 mb-10">
          <a-typography-title class="text-center font-bold">产品特色</a-typography-title>
          <a-typography-title :level="4" class="text-center">
            提供创新的碳排放和碳交易解决方案，助力企业实现碳足迹优化和市场价值最大化
          </a-typography-title>
        </div>
        <div class="col-span-3 my-b mr-4">
          <a-card class="flex shadow-sm">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><ProjectTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">一体化解决方案</h2>
                <p class="text-base text-gray-600">
                  提供碳排放核算和碳交易一站式服务，简化企业碳管理流程。提供碳排放核算和碳交易一站式服务，简化企业碳管理流程。
                </p>
              </div>
            </div>
          </a-card>
        </div>
        <div class="col-span-3 mb-4 ml-4">
          <a-card class="flex shadow-sm">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><SecurityScanTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">透明与合规性</h2>
                <p class="text-base text-gray-600">
                  确保碳交易过程的公开透明，增加市场信任度。自动检测企业活动是否符合国际、国家及地方的碳排放规则。
                </p>
              </div>
            </div>
          </a-card>
        </div>
        <div class="col-span-3 my-4 mr-4">
          <a-card class="flex shadow-sm">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><ToolTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">绿色创新驱动</h2>
                <p class="text-base text-gray-600">
                  通过碳资金支持绿色技术项目，推动清洁能源和低碳技术的发展。接入多种碳补偿项目，为企业提供多样化的减排选择。
                </p>
              </div>
            </div>
          </a-card>
        </div>
        <div class="col-span-3 my-4 ml-4">
          <a-card class="flex shadow-sm">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><SettingTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">动态配额管理</h2>
                <p class="text-base text-gray-600">
                  利用实时数据和分析优化配额分配，提升效率。智能推荐配额交易时机，助力企业最大化益。
                </p>
              </div>
            </div>
          </a-card>
        </div>
        <div class="col-span-3  mt-4 mr-4">
          <a-card class="flex shadow-sm">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><HourglassTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">环境影响评估</h2>
                <p class="text-base text-gray-600">
                  评估全周期碳排放，揭示减排潜力；赋予产品碳足迹标签，提升绿色品牌形象，吸引环保消费者。
                </p>
              </div>
            </div>
          </a-card>
        </div>
        <div class="col-span-3 mt-4 ml-4">
          <a-card class="flex shadow-sm">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><FileTextTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">社会责任和可持续性报告</h2>
                <p class="text-base text-gray-600">
                  提供工具和模板助企业编撰、发布可持续性报告，彰显环保成就；确保碳排放数据透明，增强绿色公信力。
                </p>
              </div>
            </div>
          </a-card>
        </div>
      </div>
      </div>
  </div>
</template>
<script setup>
import {
  ProjectTwoTone,
  SecurityScanTwoTone,
  ToolTwoTone,
  SettingTwoTone,
  HourglassTwoTone,
  FileTextTwoTone
} from "@ant-design/icons-vue";
</script>