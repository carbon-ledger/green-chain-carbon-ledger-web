<template>
  <div class="col-span-9">
    <a-card class="shadow-lg grid gap-3">
      <div v-if="getCarbonReport.data !== undefined">
        <a-typography-title :level="3"><FileOutlined /> 核算信息</a-typography-title>
        <a-table :columns="columns" :data-source="getCarbonReport.data">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'accountingPeriod'">
              核算周期
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'accountingPeriod'">
              {{ record.accountingPeriod }}
            </template>
            <template v-else-if="column.key === 'totalEmission'">
              {{ record.totalEmission }} 吨
            </template>
            <template v-else-if="column.key === 'reportStatus'">
              <a-tag :color="getTagColor(record.reportStatus)">{{ getTagName(record.reportStatus) }}</a-tag>
            </template>
            <template v-else-if="column.key === 'action'">
              <a-button class="text-aspargus" type="text" @click="router.push({name: 'MarketCheckAccounting', params: {id: record.id}})">详情</a-button>
            </template>
          </template>
        </a-table>
      </div>
      <div class="flex justify-center my-10" v-else>
        <a-empty
            class="text-center"
        >
          <template #description>
            还找不到您的核算信息，要不还是创建一个吧～
          </template>
          <a-button type="primary" class="bg-aspargus" @click="router.replace({name: 'MarketAccountingCreate', replace: true})">创建核算信息</a-button>
        </a-empty>
      </div>
    </a-card>
  </div>
  <div class="col-span-3">
    <a-card class="shadow-lg">
      <template #cover>
        <img alt="example" src="@/assets/images/market-user-background.webp"/>
      </template>
      <template #actions>
        <span @click="router.push({name: 'MarketDashboard'})"><UserOutlined /> 我的信息</span>
        <span @click="router.replace({name: 'MarketAccountingCreate', replace: true})"><EditOutlined/>  创建核算</span>
      </template>
      <a-card-meta :description="getUserProfile.data.user.userName" :title="getUserProfile.data.user.realName">
        <template #avatar>
          <a-avatar :src="getUserAvatar"/>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref, watch} from "vue";
import {getUserCurrentApi} from "@/api/UserApi.js";
import {getCarbonReportDO, userCurrentDO} from "@/models/DoModel.js";
import {UserOutlined, EditOutlined, FileOutlined} from "@ant-design/icons-vue"
import router from "@/router/index.js";
import {getCarbonReportApi} from "@/api/CarbonApi.js";
import {searchAllVO} from "@/models/VoModel.js";
import moment from "moment";

const getUserAvatar = ref('');
const getUserProfile = ref(userCurrentDO);
const getCarbonReport = ref(getCarbonReportDO);
const sendSelect = reactive(searchAllVO);

onMounted(async _ => {
  getUserProfile.value = await getUserCurrentApi();
  getCarbonReport.value = await getCarbonReportApi(sendSelect);

  if (getUserProfile.value.output === 'Success') {
    if (getUserProfile.value.data.user.avatar === '') {
      getUserAvatar.value = getUserProfile.value.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
});

const getTagName = (status) => {
  switch (status) {
    case 'draft':
      return "草稿";
    case 'pending_review':
      return "审核";
    case 'approved':
      return "通过";
    case 'rejected':
      return "拒绝";
  }
}

const getTagColor = (status) => {
  switch (status) {
    case 'draft':
      return "blue";
    case 'pending_review':
      return "orange";
    case 'approved':
      return "green";
    case 'rejected':
      return "red";
  }
}

watch(getCarbonReport , async _ => {
  // 对时间进行处理
  getCarbonReport.value.data.forEach(item => {
    item.createdAt = moment(item.createdAt).format("yyyy年MM月DD日");
  });
});
</script>

<script>
const columns = [
  {
    name: '核算周期',
    dataIndex: 'accountingPeriod',
    key: 'accountingPeriod',
  },
  {
    title: '总排放量',
    dataIndex: 'totalEmission',
    key: 'totalEmission',
  },
  {
    title: '状态',
    dataIndex: 'reportStatus',
    key: 'reportStatus',
  },
  {
    title: '创建时间',
    key: 'createdAt',
    dataIndex: 'createdAt',
  },
  {
    title: '操作',
    key: 'action',
  },
];
</script>