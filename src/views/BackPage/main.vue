<template>
  <div>
    <a-card class="h-24 ml-6 mr-6 mt-4">
      <div class="flex items-center">
        <a-avatar class="bg-blue-500 flex justify-center items-center" :size="64">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <p class="text-lg font-medium ml-6">早安，管理员，开启您一天的工作吧！</p>
      </div>
    </a-card>
    <div class="flex">
      <a-card class="mt-4 ml-6 w-48 h-32 flex flex-col justify-center items-center rounded-none">
        <UserOutlined class="text-4xl ml-4 text-blue-500"/>
        <p class="text-lg mt-2">系统用户</p>
      </a-card>
      <a-card class="mt-4 ml-5 w-48 h-32 flex flex-col justify-center items-center rounded-none">
        <AntDesignOutlined class="text-4xl ml-4 text-emerald-400"/>
        <p class="text-lg mt-2">菜单管理</p>
      </a-card>
      <a-card class="mt-4 ml-5 w-48 h-32 flex flex-col justify-center items-center rounded-none">
        <svg class="w-12 h-12 ml-2 mt-2 text-sky-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
        </svg>
        <p class="text-lg">角色管理</p>
      </a-card>
      <a-card class="mt-4 ml-5 w-48 h-32 flex flex-col justify-center items-center rounded-none">
        <BankOutlined class="text-4xl ml-4 text-violet-500"/>
        <p class="text-lg mt-2">部门管理</p>
      </a-card>
      <a-card class="mt-4 ml-5 w-48 h-32 flex flex-col justify-center items-center rounded-none">
        <PaperClipOutlined class="text-4xl ml-4 text-pink-400"/>
        <p class="text-lg mt-2">友情链接</p>
      </a-card>
      <a-card class="mt-4 ml-5 w-48 h-32 flex flex-col justify-center items-center rounded-none">
        <SettingOutlined class="text-4xl ml-4 text-yellow-200"/>
        <p class="text-lg mt-2">系统配置</p>
      </a-card>
      <a-card class="mt-4 ml-5 w-48 h-32 flex flex-col justify-center items-center rounded-none">
        <UnlockOutlined class="text-4xl ml-4 text-fuchsia-500"/>
        <p class="text-lg mt-2">权限管理</p>
      </a-card>
    </div>
    <div>
      <a-card title="本月目标" class="w-96 ml-6 mt-4 rounded-none">
        <a-progress type="dashboard" :percent="75" class="ml-[110px]" />
      </a-card>
    </div>
  </div>
</template>
<script setup>
import {
  UserOutlined,
  AntDesignOutlined,
  BankOutlined,
  PaperClipOutlined,
  SettingOutlined,
 UnlockOutlined
} from "@ant-design/icons-vue";
</script>