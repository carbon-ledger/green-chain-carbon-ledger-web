<template>
  <div class="bg-green-50 flex justify-center">
    <div class="container p-32">
      <div class="grid grid-cols-6 gap-x-8 gap-y-10">
        <div class="col-span-6">
          <h1 class="text-center text-2xl font-bold">给您带来的价值</h1>
          <p class="text-center text-lg">
            提供创新的碳排放和碳交易解决方案，助力企业实现碳足迹优化和市场价值最大化。
          </p>
        </div>
        <div class="col-span-3">
          <a-card class="flex">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><InteractionTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">成本节约</h2>
                <p class="text-base text-gray-600">
                  通过识别和实施节能减排措施，企业可以显著降低能源消耗和相关成本，特别是在能源价格上涨的情况下。
                </p>
              </div>
            </div>
          </a-card>
        </div>
        <div class="col-span-3">
          <a-card class="flex">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><CheckSquareTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">竞争优势</h2>
                <p class="text-base text-gray-600">
                  在越来越多消费者和业务伙伴关注企业环境责任的今天，能够展示其积极管理和减少碳足迹的企业将更容易获得市场份额和投资。
                </p>
              </div>
            </div>
          </a-card>
        </div>
        <div class="col-span-3">
          <a-card class="flex">
            <div class="grid grid-cols-9">
              <div class="col-span-1 text-5xl"><DollarCircleTwoTone /></div>
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
              <div class="col-span-1 text-5xl"><StarTwoTone /></div>
              <div class="col-span-8">
                <h2 class="text-2xl">投资吸引力</h2>
                <p class="text-base text-gray-600">
                  企业的环境、社会和治理（ESG）表现对投资者越来越重要。有效的碳足迹管理展示了企业的责任感和前瞻性，吸引了对可持续发展感兴趣的投资者。
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
  InteractionTwoTone,
  CheckSquareTwoTone,
  DollarCircleTwoTone,
  StarTwoTone,
} from "@ant-design/icons-vue";
</script>