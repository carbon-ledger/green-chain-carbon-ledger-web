<template>
  <div class="flex justify-center my-3">
    <img alt="UserAvatar" class="rounded-full w-auto h-[40px]" src="/favicon.ico">
  </div>
  <a-menu v-model:openKeys="openKey" v-model:selectedKeys="leftBarKey" mode="inline">
    <a-menu-item key="1" @click="pushTo()">
      <DashboardOutlined/>
      <span class="nav-text">仪表盘</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #title>
        <span>
          <ApartmentOutlined/>
          <span>网站管理</span>
        </span>
      </template>
      <a-menu-item key="2" @click="router.push('/dashboard/user')">
        <span>
          <UserOutlined/>
          <span class="nav-text">账户管理</span>
        </span>
      </a-menu-item>
      <a-menu-item key="3" @click="router.push('/dashboard/role')">
        <span>
          <UserSwitchOutlined/>
          <span class="nav-text">角色管理</span>
        </span>
      </a-menu-item>
      <a-menu-item key="4" @click="router.push('/dashboard/permission')">
        <span>
          <KeyOutlined/>
          <span class="nav-text">权限管理</span>
        </span>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #title>
        <span>
          <SettingOutlined/>
          <span>系统设置</span>
        </span>
      </template>
      <a-menu-item key="5">
        <span>
          <LayoutOutlined/>
          <span class="nav-text">网站设置</span>
        </span>
      </a-menu-item>
      <a-menu-item key="6">
        <span>
          <IssuesCloseOutlined/>
          <span class="nav-text">测试管理</span>
        </span>
      </a-menu-item>
      <a-menu-item key="7">
        <span>
          <CopyrightCircleOutlined/>
          <span class="nav-text">版权页面</span>
        </span>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <template #title>
        <span>
          <BarChartOutlined/>
          <span>系统分析</span>
        </span>
      </template>
      <a-menu-item key="8">
        <span>
          <span class="nav-text">系统信息</span>
        </span>
      </a-menu-item>
      <a-menu-item key="9">
        <span>
          <span class="nav-text">系统信息获取</span>
        </span>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script setup>
import {onMounted, ref} from 'vue';
import {
  IssuesCloseOutlined,
  DashboardOutlined,
  SettingOutlined,
  CopyrightCircleOutlined,
  LayoutOutlined,
  BarChartOutlined,
  UserOutlined,
  UserSwitchOutlined,
  KeyOutlined,
  ApartmentOutlined
} from '@ant-design/icons-vue';
import router from "@/router/index.js";
import request from "@/assets/js/request.js";

// 服务挂载
onMounted(() => {
  getUserCurrent()
})

let userRole = null;

/**
 * 获取用户信息
 */
function getUserCurrent() {
  console.log("[DashboardLeftBar] 获取用户权限")
  // 权限获取
  request.getUserCurrent().then((res) => {
    userRole = res.data.data.role
  }).catch(() => {
    console.warn("获取用户权限失败")
  })
}

/**
 * 跳转到对应页面
 */
function pushTo() {
  if (userRole === null) {
    router.push("/auth/login")
  } else {
    router.push("/dashboard/" + userRole)
  }
}

let leftBarKey
let openKey

switch (router.currentRoute.value.name) {
  case "DashboardConsole":
    leftBarKey = ref(["1"])
    openKey = ref([""])
    break
  case "DashboardUser":
    leftBarKey = ref(["2"])
    openKey = ref(["sub1"])
    break
  case "DashboardRole":
    leftBarKey = ref(["3"])
    openKey = ref(["sub1"])
    break
  case "DashboardPermission":
    leftBarKey = ref(["4"])
    openKey = ref(["sub1"])
    break
  default:
    leftBarKey = ref(["1"])
}
</script>