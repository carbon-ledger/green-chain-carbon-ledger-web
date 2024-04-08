<template>
  <div class="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-3">
    <!-- 组织使用 -->
    <a-card v-if="checkUserRole" class="grid w-full shadow my-1" hoverable
            size="small"
            @click="router.replace({name: 'MarketDashboard', replace: true})"
    >
      <div class="text-center">
        <DashboardOutlined class="text-2xl text-aspargus"/>
      </div>
      <div class="text-center font-bold">配额管理</div>
    </a-card>
    <a-card v-if="checkUserRole" class="grid w-full shadow my-1" hoverable
            size="small"
            @click="router.replace({name: 'MarketList', replace: true})"
    >
      <div class="text-center">
        <ShoppingCartOutlined class="text-2xl text-teal-500"/>
      </div>
      <div class="text-center font-bold">交易市场</div>
    </a-card>
    <a-card v-if="checkUserRole" class="grid w-full shadow my-1" hoverable
            size="small"
            @click="router.replace({name: 'MarketAccounting', replace: true})"
    >
      <div class="text-center">
        <MoneyCollectOutlined class="text-2xl text-orange-500"/>
      </div>
      <div class="text-center font-bold">核算中心</div>
    </a-card>
    <a-card v-if="checkUserRole" class="grid w-full shadow my-1" hoverable
            size="small"
            @click="router.replace({name: 'MarketTrade', replace: true})"
    >
      <div class="text-center">
        <PayCircleOutlined class="text-2xl text-indigo-500"/>
      </div>
      <div class="text-center font-bold">我的交易</div>
    </a-card>
    <!-- 管理方面 -->
    <a-card v-if="checkUserHasPermission('review:getList')" class="grid w-full shadow my-1" hoverable
            size="small"
            @click="router.replace({name: 'DashboardVerify', replace: true})"
    >
      <div class="text-center">
        <SafetyOutlined class="text-2xl text-beaver"/>
      </div>
      <div class="text-center font-bold">实名审核</div>
    </a-card>
    <a-card v-if="checkUserHasPermission('carbon:getCarbonOperateList')" class="grid w-full shadow my-1" hoverable
            size="small"
            @click="router.replace({name: 'DashboardQuotaManager', replace: true})"
    >
      <div class="text-center">
        <MoneyCollectOutlined class="text-2xl text-aspargus"/>
      </div>
      <div class="text-center font-bold">配额管理</div>
    </a-card>
    <a-card v-if="checkUserHasPermission('trade:review')" class="grid w-full shadow my-1" hoverable
            size="small"
            @click="router.replace({name: 'DashboardTradeManager', replace: true})"
    >
      <div class="text-center">
        <ShoppingOutlined class="text-2xl text-teal-500"/>
      </div>
      <div class="text-center font-bold">交易审核</div>
    </a-card>
    <a-card v-if="checkUserHasPermission('carbon:getCarbonReviewReport')" class="grid w-full shadow my-1" hoverable
            size="small"
            @click="router.replace({name: 'DashboardCheckReport', replace: true})"
    >
      <div class="text-center">
        <FileProtectOutlined class="text-2xl text-yellow-500"/>
      </div>
      <div class="text-center font-bold">报告审核</div>
    </a-card>
    <!--  通用部分 -->
    <a-card class="grid w-full shadow my-1" hoverable size="small"
            @click="router.replace({name: 'UserProfile', replace: true})"
    >
      <div class="text-center">
        <UserOutlined class="text-2xl text-blue-500"/>
      </div>
      <div class="text-center font-bold">个人设置</div>
    </a-card>
    <a-card class="grid w-full shadow my-1" hoverable size="small"
            @click="router.replace({name: 'UserVerify', replace: true})"
    >
      <div class="text-center">
        <IdcardOutlined class="text-2xl text-red-500"/>
      </div>
      <div class="text-center font-bold">实名认证</div>
    </a-card>
  </div>
</template>

<script setup>
import router from "@/router/index.js";
import {
  DashboardOutlined,
  FileProtectOutlined,
  IdcardOutlined,
  MoneyCollectOutlined,
  PayCircleOutlined,
  SafetyOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined
} from "@ant-design/icons-vue";
import {userCurrentDO} from "@/models/DoModel.js";
import {onMounted, ref} from "vue";
import {getUserCurrentApi} from "@/api/UserApi.js";

const getUserCurrent = ref(userCurrentDO);
const checkUserRole = ref(false);

onMounted(async _ => {
  getUserCurrent.value = await getUserCurrentApi();
  checkUserRole.value = getUserCurrent.value.data.role === 'organize';
  console.log(getUserCurrent.value.data.role === 'organize')
})

const checkUserHasPermission = (permission) => {
  let boolean = true;
  try {
    getUserCurrent.value.data.permission.rolePermission.find(item => item === permission)
    getUserCurrent.value.data.permission.userPermission.find(item => item === permission)
  } catch (err) {
    boolean = false;
  }
  return boolean;
}
</script>
