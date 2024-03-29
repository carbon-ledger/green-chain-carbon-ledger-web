<template>
  <div class="w-full flex justify-center">
    <div class="container p-20">
      <div>
        <a-typography-title class="text-center font-bold">碳足迹核算的四大流程</a-typography-title>
        <a-typography-title :level="4" class="text-center">
          采取适合的核算和报告机制，以促进有效的碳管理和减排活动
        </a-typography-title>
      </div>
      <div class="grid grid-cols-6 gap-3 my-20">
        <div class="col-span-3">
          <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
            <img alt="img24" class="rounded-lg" src="@/assets/images/img24.jpg"/>
          </div>
        </div>
        <div class="col-span-3 flex flex-col justify-center space-y-10">
          <h2 class="text-2xl text-end">确定核算范围</h2>
          <div class="text-end">
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              基础性：设定了核算的基本框架和边界
              <CheckCircleOutlined class="text-aspargus ml-2"/>
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              选择性：涉及决策哪些直接和间接排放被包括
              <CheckCircleOutlined class="text-aspargus ml-2"/>
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              决定性：对最终碳足迹计算结果有决定性影响
              <CheckCircleOutlined class="text-aspargus ml-2"/>
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              适应性：根据企业的实际情况和行业特点灵活设定
              <CheckCircleOutlined class="text-aspargus ml-2"/>
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              影响广泛：范围的确定直接影响到核算的全面性和深入性
              <CheckCircleOutlined class="text-aspargus ml-2"/>
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-3 my-40">
        <div class="col-span-3 flex flex-col justify-center space-y-10">
          <h2 class="text-2xl text-start">收集数据</h2>
          <div class="text-start">
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2"/>
              实务性：具体、详细地收集相关能源使用和活动数据
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2"/>
              精确性：数据准确度直接影响碳排放计算的可靠性
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2"/>
              挑战性：完整且精确地收集数据可能面临诸多实际挑战
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2"/>
              系统性：建立系统的数据收集和管理机制
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2"/>
              持续性：一个持续进行的过程，需要定期更新和校验数据的准确性
            </p>
          </div>
        </div>
        <div class="col-span-3">
          <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
            <img alt="img25" class="rounded-lg" src="@/assets/images/img25.jpg"/>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-3 my-40">
        <div class="col-span-3">
          <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
            <img alt="img23" class="rounded-lg" src="@/assets/images/img23.jpg"/>
          </div>
        </div>
        <div class="col-span-3 flex flex-col justify-center space-y-10">
          <h2 class="text-2xl text-end">计算排放</h2>
          <div class="text-end">
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              转换性：将收集到的活动数据转换为二氧化碳当量
              <CheckCircleOutlined class="text-aspargus ml-2"/>
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              依赖性：依赖于准确的排放因子进行转换
              <CheckCircleOutlined class="text-aspargus ml-2"/>
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              专业性：需要专业知识正确选择和应用排放因子
              <CheckCircleOutlined class="text-aspargus ml-2"/>
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              复杂性：涉及多种排放源和活动类型，计算过程复杂
              <CheckCircleOutlined class="text-aspargus ml-2"/>
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              动态性：计算方法需根据排放因子和核算方法的更新
              <CheckCircleOutlined class="text-aspargus ml-2"/>
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-3">
        <div class="col-span-3 flex flex-col justify-center space-y-10">
          <h2 class="text-2xl text-start">报告和验证</h2>
          <div class="text-start">
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2"/>
              透明性：提供一个公开透明的结果展示平台
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2"/>
              可信性：通过第三方审核增加报告的准确性和信任度
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2"/>
              责任性：体现企业对环境责任的承担和未来减排的承诺
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2"/>
              标准化：遵循相关的标准和指南,保证标准和一致
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2"/>
              持续改进：验证揭示的问题促进环境管理的持续优化
            </p>
          </div>
        </div>
        <div class="col-span-3">
          <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
            <img class="rounded-lg" src="@/assets/images/img26.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import {CheckCircleOutlined} from "@ant-design/icons-vue";
</script>