<template>
  <div class="grid grid-cols-12 gap-3">
    <a-card class="col-span-6 shadow" hoverable size="small" @click="router.push({name: 'DashboardUser'})">
      <template #title>
        用户统计
      </template>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 text-center flex items-center">
          <UserOutlined class="text-7xl text-blue-300"/>
        </div>
        <div class="col-span-3 grid text-center items-center">
          <span>组织账户 <b>{{ getOrganizeUserLength }}</b> 个</span>
          <span>监管账户 <b>{{ getAdminUserLength }}</b> 个</span>
          <span>管理账户 <b>{{ getConsoleUserLength }}</b> 个</span>
        </div>
      </div>
    </a-card>
    <a-card class="col-span-6 shadow" hoverable size="small" @click="router.push({name: 'DashboardRole'})">
      <template #title>
        角色统计
      </template>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 text-center flex items-center">
          <UsergroupAddOutlined class="text-7xl text-blue-300"/>
        </div>
        <div class="col-span-3 grid text-center items-center">
          <span>角色组 <b>4</b> 个</span>
        </div>
      </div>
    </a-card>
    <a-card class="col-span-4 shadow" hoverable size="small" @click="router.push({name: 'DashboardVerify'})">
      <div class="grid grid-cols-3 gap-3">
        <div class="col-span-1 text-center flex items-center">
          <SafetyOutlined class="text-3xl text-blue-300"/>
        </div>
        <div class="col-span-2 grid text-center items-center">
          <span class="text-lg font-medium">实名审核</span>
          <span>待审核账户 <b>{{ getReviewList.data.length }}</b> 个</span>
        </div>
      </div>
    </a-card>
    <a-card class="col-span-4 shadow" hoverable size="small" @click="router.push({name: 'DashboardQuotaManager'})">
      <div class="grid grid-cols-3 gap-3">
        <div class="col-span-1 text-center flex items-center">
          <MoneyCollectOutlined class="text-3xl text-blue-300"/>
        </div>
        <div class="col-span-2 grid text-center items-center">
          <span class="text-lg font-medium">配额管理</span>
          <span>待审核配额 <b>{{ getCarbonOperateList.data.length }}</b> 个</span>
        </div>
      </div>
    </a-card>
    <a-card class="col-span-4 shadow" hoverable size="small" @click="router.push({name: 'DashboardTradeManager'})">
      <div class="grid grid-cols-3 gap-3">
        <div class="col-span-1 text-center flex items-center">
          <ShoppingOutlined class="text-3xl text-blue-300"/>
        </div>
        <div class="col-span-2 grid text-center items-center">
          <span class="text-lg font-medium">交易审核</span>
          <span>待审核交易 <b>{{ getTradeReview.data.length }}</b> 个</span>
        </div>
      </div>
    </a-card>
    <a-card class="col-span-4 shadow" hoverable size="small" @click="router.push({name: 'DashboardCheckReport'})">
      <div class="grid grid-cols-3 gap-3">
        <div class="col-span-1 text-center flex items-center">
          <FileProtectOutlined class="text-3xl text-blue-300"/>
        </div>
        <div class="col-span-2 grid text-center items-center">
          <span class="text-lg font-medium">报告审核</span>
          <span>待审核报告 <b>{{ getCarbonReviewReport.data.length }}</b> 个</span>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import {
  FileProtectOutlined,
  MoneyCollectOutlined,
  SafetyOutlined,
  ShoppingOutlined,
  UsergroupAddOutlined,
  UserOutlined
} from '@ant-design/icons-vue';
import router from "@/router/index.js";
import {onMounted, reactive, ref} from "vue";
import {
  carbonOperateListDO,
  getCarbonReportDO,
  reviewDO, roleListDO,
  tradeDO,
  userCurrentDO,
  userListDO
} from "@/models/DoModel.js";
import {getUserCurrentApi, getUserListApi} from "@/api/UserApi.js";
import {getReviewListApi} from "@/api/ReviewApi.js";
import {carbonOperateList, getCarbonReviewReportApi} from "@/api/CarbonApi.js";
import {tradeReviewApi} from "@/api/TradeApi.js";
import {searchAllVO, userListVO} from "@/models/VoModel.js";
import {getRoleListApi} from "@/api/RoleApi.js";

const getUserCurrent = ref(userCurrentDO);
const getReviewList = ref(reviewDO);
const getCarbonOperateList = ref(carbonOperateListDO);
const getTradeReview = ref(tradeDO);
const getCarbonReviewReport = ref(getCarbonReportDO);
const getAllUser = ref(userListDO);
const getRoleList = ref(userListDO);
const getOrganizeUserLength = ref(0);
const getAdminUserLength = ref(0);
const getConsoleUserLength = ref(0);

const userList = reactive(userListVO);
const roleList = reactive(searchAllVO);

onMounted(async _ => {
  getUserCurrent.value = await getUserCurrentApi();
  getReviewList.value = await getReviewListApi();
  getCarbonOperateList.value = await carbonOperateList();
  getTradeReview.value = await tradeReviewApi();
  getCarbonReviewReport.value = await getCarbonReviewReportApi();
  getAllUser.value = await getUserListApi('all', userList);
  getRoleList.value = await getRoleListApi('all', roleList);

  if (getAllUser.value.output === "Success") {
    getAllUser.value.data.forEach(userItem => {
      getRoleList.value.data.forEach(roleItem => {
        if (userItem.role === roleItem.uuid) {
          if (roleItem.name === 'organize') {
            getOrganizeUserLength.value++;
          } else if (roleItem.name === 'admin') {
            getAdminUserLength.value++;
          } else if (roleItem.name === 'console') {
            getConsoleUserLength.value++;
          }
        }
      })
    })
  }
})
</script>
