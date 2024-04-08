<template>
  <div class="grid grid-cols-12 gap-3">
    <a-card v-if="checkUserHasPermission('carbon:getCarbonOperateList')" key="11" class="col-span-6 shadow"
            hoverable size="small" @click="router.push({name: 'DashboardQuotaManager'})">
      <template #title>
        配额审核
      </template>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 text-center flex items-center">
          <MoneyCollectOutlined class="text-7xl text-blue-300"/>
        </div>
        <div class="col-span-3 grid text-center items-center">
          <span class="text-xl"><b>{{ getCarbonOperateList.data.length }}</b> 个待审核</span>
        </div>
      </div>
    </a-card>
    <a-card v-if="checkUserHasPermission('trade:review')" key="11" class="col-span-6 shadow"
            hoverable size="small" @click="router.push({name: 'DashboardTradeManager'})">
      <template #title>
        交易审核
      </template>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 text-center flex items-center">
          <ShoppingOutlined class="text-7xl text-blue-300"/>
        </div>
        <div class="col-span-3 grid text-center items-center">
          <span class="text-xl"><b>{{ getTradeReview.data.length }}</b> 个待审核</span>
        </div>
      </div>
    </a-card>
    <a-card v-if="checkUserHasPermission('carbon:getCarbonReviewReport')" key="11" class="col-span-6 shadow"
            hoverable size="small" @click="router.push({name: 'DashboardCheckReport'})">
      <template #title>
        报告审核
      </template>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 text-center flex items-center">
          <FileProtectOutlined class="text-7xl text-blue-300"/>
        </div>
        <div class="col-span-3 grid text-center items-center">
          <span class="text-xl"><b>{{ getCarbonReviewReport.data.length }}</b> 个待审核</span>
        </div>
      </div>
    </a-card>
    <a-card v-if="checkUserHasPermission('review:getList')" key="11" class="col-span-6 shadow"
            hoverable size="small" @click="router.push({name: 'DashboardVerify'})">
      <template #title>
        实名审核
      </template>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 text-center flex items-center">
          <SafetyOutlined class="text-7xl text-blue-300"/>
        </div>
        <div class="col-span-3 grid text-center items-center">
          <span class="text-xl"><b>{{ getReviewList.data.length }}</b> 个待审核</span>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import {MoneyCollectOutlined, ShoppingOutlined, FileProtectOutlined, SafetyOutlined} from '@ant-design/icons-vue';
import router from "@/router/index.js";
import {carbonOperateListDO, getCarbonReportDO, reviewDO, tradeDO, userCurrentDO} from "@/models/DoModel.js";
import {onMounted, ref} from "vue";
import {getUserCurrentApi} from "@/api/UserApi.js";
import {getReviewListApi} from "@/api/ReviewApi.js";
import {carbonOperateList, getCarbonReviewReportApi} from "@/api/CarbonApi.js";
import {tradeReviewApi} from "@/api/TradeApi.js";

const getUserCurrent = ref(userCurrentDO);
const getReviewList = ref(reviewDO);
const getCarbonOperateList = ref(carbonOperateListDO);
const getTradeReview = ref(tradeDO);
const getCarbonReviewReport = ref(getCarbonReportDO);

onMounted(async _ => {
  getUserCurrent.value = await getUserCurrentApi();
  getReviewList.value = await getReviewListApi();
  getCarbonOperateList.value = await carbonOperateList();
  getTradeReview.value = await tradeReviewApi();
  getCarbonReviewReport.value = await getCarbonReviewReportApi();
})

function checkUserHasPermission(permission) {
  let boolean = false;
  if (getUserCurrent.value.data.permission.rolePermission.find(item => item === permission)) {
    boolean = true;
  }
  if (getUserCurrent.value.data.permission.userPermission.find(item => item === permission)) {
    boolean = true;
  }
  return boolean;
}
</script>
