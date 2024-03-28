<template>
  <div class="bg-green-50 flex justify-center">
    <div class="container p-32">
      <div class="grid grid-cols-6 gap-x-8 gap-y-10">
        <div class="col-span-6">
          <h1 class="text-center text-2xl font-bold">给您带来的价值</h1>
          <p class="text-center text-lg">
            提供先进的碳交易平台和服务，促进企业在全球碳市场中有效管理碳资产，实现经济效益和环境责任的双重提升。
          </p>
        </div>
        <div class="col-span-3">
          <a-card class="flex">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><DollarCircleTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">经济激励与成本控制</h2>
                <p class="text-base text-gray-600">
                  为企业开辟新的收入渠道通过出售碳信用，同时提供一个成本效益的减排途径，降低环境管理的总成本。
                </p>
              </div>
            </div>
          </a-card>
        </div>
        <div class="col-span-3">
          <a-card class="flex">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><SafetyCertificateTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">增强企业透明度和信任度</h2>
                <p class="text-base text-gray-600">
                  通过系统的碳排放和减排数据公开，增加企业的透明度，建立和加强利益相关者的信任，同时确保企业的环境合规性。
                </p>
              </div>
            </div>
          </a-card>
        </div>
        <div class="col-span-3">
          <a-card class="flex">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><ToolTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">品牌和企业价值</h2>
                <p class="text-base text-gray-600">
                  通过展示对环境的承诺和行动，企业可以增强其品牌形象，吸引和保留客户以及优秀员工，从而提高企业的整体价值。
                </p>
              </div>
            </div>
          </a-card>
        </div>
        <div class="col-span-3">
          <a-card class="flex">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><ProfileTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">促进环境责任和可持续发展</h2>
                <p class="text-base text-gray-600">
                  加强公众形象与品牌价值，通过碳减排行动支撑企业的长期可持续发展战略。
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
  ToolTwoTone,
  SafetyCertificateTwoTone ,
  DollarCircleTwoTone,
  ProfileTwoTone,
} from "@ant-design/icons-vue";
</script>