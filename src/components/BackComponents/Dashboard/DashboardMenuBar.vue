<template>
  <div class="flex justify-center my-3">
    <img alt="UserAvatar" class="rounded-full w-auto h-[40px]" src="/favicon.ico">
  </div>
  <a-menu v-model:openKeys="openMenuKey" v-model:selectedKeys="selectedKey" mode="inline">
    <a-menu-item key="a" @click="router.replace({name: 'Index', replace: true})">
      <HomeOutlined/>
      <span class="nav-text">返回主页</span>
    </a-menu-item>
    <a-menu-item key="b" @click="router.replace({name: 'MarketDashboard', replace: true})">
      <ShoppingOutlined/>
      <span class="nav-text">交易核算</span>
    </a-menu-item>
    <hr class="m-3"/>
    <a-menu-item key="1" @click="sendTo()">
      <DashboardOutlined/>
      <span class="nav-text">仪表盘</span>
    </a-menu-item>
    <a-menu-item v-if="checkUserHasPermission('review:getList')" key="10"
                 @click="router.push({name: 'DashboardVerify'})">
      <span>
        <SafetyOutlined/>
        <span class="nav-text">实名审核</span>
      </span>
    </a-menu-item>
    <a-menu-item v-if="checkUserHasPermission('carbon:getCarbonOperateList')" key="11"
                 @click="router.push({name: 'DashboardQuotaManager'})">
      <span>
        <MoneyCollectOutlined/>
        <span class="nav-text">配额管理</span>
      </span>
    </a-menu-item>
    <a-menu-item v-if="checkUserHasPermission('trade:review')" key="12"
                 @click="router.push({name: 'DashboardTradeManager'})">
      <span>
        <ShoppingOutlined/>
        <span class="nav-text">交易审核</span>
      </span>
    </a-menu-item>
    <a-menu-item v-if="checkUserHasPermission('carbon:getCarbonReviewReport')" key="13"
                 @click="router.push({name: 'DashboardCheckReport'})">
      <span>
        <FileProtectOutlined/>
        <span class="nav-text">报告审核</span>
      </span>
    </a-menu-item>
    <a-sub-menu v-if="checkUserHasPermission('user:getUserList') || checkUserHasPermission('role:getRoleList') || checkUserHasPermission('permission:getPermissionList')"
                key="sub1">
      <template #title>
        <span>
          <ApartmentOutlined/>
          <span>网站管理</span>
        </span>
      </template>
      <a-menu-item v-if="checkUserHasPermission('user:getUserList')" key="2"
                   @click="router.push({name: 'DashboardUser'})">
        <span>
          <UserOutlined/>
          <span class="nav-text">账户管理</span>
        </span>
      </a-menu-item>
      <a-menu-item v-if="checkUserHasPermission('role:getRoleList')" key="3"
                   @click="router.push({name: 'DashboardRole'})">
        <span>
          <UserSwitchOutlined/>
          <span class="nav-text">角色管理</span>
        </span>
      </a-menu-item>
      <a-menu-item v-if="checkUserHasPermission('permission:getPermissionList')" key="4"
                   @click="router.push({name: 'DashboardPermission'})">
        <span>
          <KeyOutlined/>
          <span class="nav-text">权限管理</span>
        </span>
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item v-if="checkUserHasPermission('system:getSystemInfo')" key="8"
                 @click="router.push({name:'DashboardSystemInfo'})">
        <span>
          <BarChartOutlined/>
          <span class="nav-text">系统信息</span>
        </span>
    </a-menu-item>
    <a-sub-menu v-if="checkUserHasPermission('system:getWebSetting') || checkUserHasPermission('system:getCopyRight')"
                key="sub2">
      <template #title>
        <span>
          <SettingOutlined/>
          <span>系统设置</span>
        </span>
      </template>
      <a-menu-item v-if="checkUserHasPermission('system:getWebSetting')" key="5"
                   @click="router.push({name:'DashboardWebSetting'})">
        <span>
          <LayoutOutlined/>
          <span class="nav-text">网站设置</span>
        </span>
      </a-menu-item>
      <a-menu-item v-if="checkUserHasPermission('system:getCopyRight')" key="7"
                   @click="router.push({name:'DashboardCopyRight'})">
        <span>
          <CopyrightCircleOutlined/>
          <span class="nav-text">版权页面</span>
        </span>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script setup>
import {onMounted, ref} from 'vue';
import {
  ApartmentOutlined,
  BarChartOutlined,
  CopyrightCircleOutlined,
  DashboardOutlined,
  FileProtectOutlined,
  HomeOutlined,
  KeyOutlined,
  LayoutOutlined,
  MoneyCollectOutlined,
  SafetyOutlined,
  SettingOutlined,
  ShoppingOutlined,
  UserOutlined,
  UserSwitchOutlined
} from '@ant-design/icons-vue';
import router from "@/router/index.js";
import {userCurrentDO} from "@/models/DoModel.js";
import {getUserCurrentApi} from "@/api/UserApi.js";

const selectedKey = ref([""]);
const openMenuKey = ref([""]);
const getUserCurrent = ref(userCurrentDO);

onMounted(async _ => {
  getUserCurrent.value = await getUserCurrentApi();
})

function sendTo() {
  switch (getUserCurrent.value.data.role) {
    case "console":
      router.replace({name: 'DashboardConsole', replace: true})
      break
    case "admin":
      router.replace({name: 'DashboardConsole', replace: true})
      break
    case "organize":
      router.replace({name: 'DashboardConsole', replace: true})
      break
    default:
      router.replace({name: 'DashboardConsole', replace: true})
  }
}

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

switch (router.currentRoute.value.name) {
  case "DashboardConsole":
    selectedKey.value = ["1"]
    break
  case "DashboardUser":
    selectedKey.value = ["2"]
    openMenuKey.value = ["sub1"]
    break
  case "DashboardRole":
    selectedKey.value = ["3"]
    openMenuKey.value = ["sub1"]
    break
  case "DashboardPermission":
    selectedKey.value = ["4"]
    openMenuKey.value = ["sub1"]
    break
  case "DashboardVerify":
    selectedKey.value = ["10"]
    openMenuKey.value = [""]
    break
  case "DashboardVerifyCheck":
    selectedKey.value = ["10"]
    openMenuKey.value = [""]
    break
  case "DashboardWebSetting":
    selectedKey.value = ["5"]
    openMenuKey.value = ["sub2"]
    break
  case "DashboardCopyRight":
    selectedKey.value = ["7"]
    openMenuKey.value = ["sub2"]
    break
  case "DashboardSystem":
    selectedKey.value = ["8"]
    openMenuKey.value = [""]
    break
  case "DashboardQuotaManager":
    selectedKey.value = ["11"]
    openMenuKey.value = [""]
    break
  case "DashboardTradeManager":
    selectedKey.value = ["12"]
    openMenuKey.value = [""]
    break
  case "DashboardCheckReport":
    selectedKey.value = ["13"]
    openMenuKey.value = [""]
    break
  case "DashboardCheckReportView":
    selectedKey.value = ["13"]
    openMenuKey.value = [""]
    break

  default:
    selectedKey.value = ["1"]
}
</script>
