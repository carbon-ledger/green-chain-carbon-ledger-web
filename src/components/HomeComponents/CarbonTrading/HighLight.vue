<template>
  <div class="w-full flex justify-center mt-20">
    <div class="container p-20">
      <div>
        <h1 class="text-center text-2xl font-bold">功能亮点</h1>
        <p class="text-center text-lg">
          采用高效的交易和监督机制，以促进碳市场的透明度和碳信用的合理流通。
        </p>
      </div>
      <div class="grid grid-cols-6 gap-y-10 my-20">
        <div class="col-span-3">
          <div class="bg-white border border-gray-200 rounded-lg shadow">
            <img class="rounded-lg" src="@/assets/images/img28.jpg"/>
          </div>
        </div>
        <div class="col-span-3 flex flex-col justify-center space-y-10">
          <h2 class="text-2xl text-end">实时碳排放数据追踪</h2>
          <div class="text-end">
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              用户定制：允许用户根据自己的具体需求定制数据追踪的参数。<CheckCircleOutlined class="text-aspargus" />
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              预警系统：设有排放量预警机制，实时预警排放超标情况。<CheckCircleOutlined class="text-aspargus" />
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              历史对比：与历史数据对比，帮助用户进行趋势分析和年度比较。<CheckCircleOutlined class="text-aspargus" />
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              适应性：根据企业的实际情况和行业特点灵活设定。<CheckCircleOutlined class="text-aspargus" />
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              集成数据：整合外部的环境数据，为用户提供更广泛的参考信息。<CheckCircleOutlined class="text-aspargus" />
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-y-10 my-40">
        <div class="col-span-3 flex flex-col justify-center space-y-10">
          <h2 class="text-2xl text-start">碳信用买卖平台</h2>
          <div class="text-start">
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2" />市场趋势分析：帮助用户捕捉市场动态，做出明智的买卖决策。
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2" />交易透明化：确保交易记录公开，便于用户追踪详情。
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2" />安全保障：采用先进的技术保护交易安全，防止数据泄露。
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2" />灵活的支付选项：提供多种支付方式，以满足不同用户的需求。
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2" />用户支持服务：提供全面的客户支持，提升用户体验。
            </p>
          </div>
        </div>
        <div class="col-span-3">
          <div class="bg-white border border-gray-200 rounded-lg shadow">
            <img class="rounded-lg" src="@/assets/images/img29.jpg"/>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-y-10 my-40">
        <div class="col-span-3">
          <div class="bg-white border border-gray-200 rounded-lg shadow">
            <img class="rounded-lg" src="@/assets/images/img30.jpg"/>
          </div>
        </div>
        <div class="col-span-3 flex flex-col justify-center space-y-10">
          <h2 class="text-2xl text-end">计算排放</h2>
          <div class="text-end">
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              转换性：将收集到的活动数据转换为二氧化碳当量。<CheckCircleOutlined class="text-aspargus" />
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              依赖性：依赖于准确的排放因子进行转换。<CheckCircleOutlined class="text-aspargus" />
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              专业性：需要专业知识正确选择和应用排放因子。<CheckCircleOutlined class="text-aspargus" />
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              复杂性：涉及多种排放源和活动类型，计算过程可能相当复杂。<CheckCircleOutlined class="text-aspargus" />
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              动态性：计算方法需根据排放因子和核算方法的更新及时调整。<CheckCircleOutlined class="text-aspargus" />
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-y-10 mt-20">
        <div class="col-span-3 flex flex-col justify-center space-y-10">
          <h2 class="text-2xl text-start">合规性管理</h2>
          <div class="text-start">
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2" />定制报告：根据用户需求定制化生成各类报告。
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2" />深度分析：强大的分析工具，支持用户进行深入分析。
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2" />实时反馈：分析结果即时反馈，帮助企业迅速识别并应对问题。
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2" />可视化呈现：通过图表和仪表板清晰展示分析结果，简化信息呈现。
            </p>
            <p class="text-gray-500 sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <CheckCircleOutlined class="text-aspargus mr-2" />分享与协作：支持报告和分析结果的共享功能，协作和沟通。
            </p>
          </div>
        </div>
        <div class="col-span-3">
          <div class="bg-white border border-gray-200 rounded-lg shadow">
            <img class="rounded-lg" src="@/assets/images/img31.jpg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import {CheckCircleOutlined} from "@ant-design/icons-vue";
</script>