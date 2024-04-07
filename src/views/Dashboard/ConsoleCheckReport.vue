<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="报告审核"
  >
    <a-descriptions-item>
      <div class="text-mount-pink">
        对组织发布的碳核算内容进行检查，检查组织发布的内容是否有问题。
      </div>
    </a-descriptions-item>
  </a-page-header>
  <div class="px-3">
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns" :data-source="getCarbonReportList.data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'accountingPeriod'">{{ record.accountingPeriod }}</template>
          <template v-if="column.key === 'totalEmission'">{{ record.totalEmission }}</template>
          <template v-if="column.key === 'createdAt'">{{ record.createdAt }}</template>
          <template v-if="column.key === 'action'">
            <a-button class="text-aspargus" type="link"
                      @click="router.push({name: 'DashboardCheckReportView', params: {id: record.id}})">
              审核
            </a-button>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {getCarbonReportDO, tradeDO} from "@/models/DoModel.js";
import {getCarbonReviewReportApi} from "@/api/CarbonApi.js";
import router from "@/router/index.js";

const routes = breadcrumbs;
const openModel = ref(false);
const getCarbonReportList = ref(getCarbonReportDO);
const singleTradeReview = ref(tradeDO.data[0]);


onMounted(async _ => {
  getCarbonReportList.value = await getCarbonReviewReportApi()
})
</script>

<script>
import {breadcrumbs} from "@/utils/DashboardBreadCrumb.js";

breadcrumbs.push({breadcrumbName: '报告审核'});
setTimeout(() => {
  breadcrumbs.pop();
}, 1)

const columns = [
  {
    title: '报告时间范围',
    dataIndex: 'accountingPeriod',
    key: 'accountingPeriod',
  },
  {
    title: '碳消耗数',
    dataIndex: 'totalEmission',
    key: 'totalEmission',
  },
  {
    title: '创建时间',
    dataIndex: ' createdAt',
    key: 'createdAt',
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  }
]
</script>