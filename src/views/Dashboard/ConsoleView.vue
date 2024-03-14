<template>
  <div class="w-full px-6">
    <div class="flex mx-auto w-full bg-white h-24 mt-8 rounded-none">
      <div class="flex items-center ml-6">
        <a-avatar class="bg-blue-500 flex justify-center items-center" :size="64">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <p class="text-lg font-medium ml-6">早安，管理员，开启您一天的工作吧！</p>
      </div>
      <div class="flex mt-6 ml-44">
        <svg class="ml-[700px] w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/>
        </svg>项目数
        <svg class="ml-6 w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"/>
        </svg>待办项
        <svg class="ml-6 w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M3 6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.6l-2.9 2.6c-1 .9-2.5.2-2.5-1.1V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" clip-rule="evenodd"/>
        </svg>消息数
      </div>
    </div>
    <div class="flex w-full mx-auto justify-between gap-4">
      <a-card @click="$router.push('/backpage/user')" class="hover:shadow-md mt-4 w-56 h-32 flex flex-col justify-center items-center rounded-none">
        <UserOutlined class="text-4xl ml-4 text-blue-500"/>
        <p class="text-lg mt-2">系统用户</p>
      </a-card>
      <a-card class="hover:shadow-md mt-4 w-56 h-32 flex flex-col justify-center items-center rounded-none">
        <AntDesignOutlined class="text-4xl ml-4 text-emerald-400"/>
        <p class="text-lg mt-2">菜单管理</p>
      </a-card>
      <a-card @click="$router.push('/backpage/role')" class="hover:shadow-md mt-4 w-56 h-32 flex flex-col justify-center items-center rounded-none">
        <svg class="w-12 h-12 ml-2 mt-2 text-sky-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
        </svg>
        <p class="text-lg">角色管理</p>
      </a-card>
      <a-card class="hover:shadow-md mt-4 w-56 h-32 flex flex-col justify-center items-center rounded-none">
        <BankOutlined class="text-4xl ml-4 text-violet-500"/>
        <p class="text-lg mt-2">部门管理</p>
      </a-card>
      <a-card class="hover:shadow-md mt-4 w-56 h-32 flex flex-col justify-center items-center rounded-none">
        <PaperClipOutlined class="text-4xl ml-4 text-pink-400"/>
        <p class="text-lg mt-2">友情链接</p>
      </a-card>
      <a-card class="hover:shadow-md mt-4 w-56 h-32 flex flex-col justify-center items-center rounded-none">
        <SettingOutlined class="text-4xl ml-4 text-yellow-200"/>
        <p class="text-lg mt-2">系统配置</p>
      </a-card>
      <a-card @click="$router.push('/backpage/authority')" class="hover:shadow-md mt-4 w-56 h-32 flex flex-col justify-center items-center rounded-none">
        <UnlockOutlined class="text-4xl ml-4 text-fuchsia-500"/>
        <p class="text-lg mt-2">权限管理</p>
      </a-card>
    </div>
    <div class="flex mx-auto w-full justify-between gap-4">
      <a-card title="本月目标" class="w-1/4 mt-4 rounded-none">
        <a-progress type="dashboard" :percent="75" class="ml-[110px]" />
      </a-card>
      <a-card title="我的任务" class="w-1/2 mt-4 rounded-none">
        <a-table :columns="columns" :row-key="record => record.key" :data-source="data" :pagination="false">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'enabled'">
              <a-tag v-if="record.priority === true" :bordered="false" color="success">启用</a-tag>
              <a-tag v-if="record.priority === false" :bordered="false" color="error">禁用</a-tag>
            </template>
            <template v-else-if="column.key === 'name'">
               {{record.name}}
            </template>
            <template v-else-if="column.key === 'state'">
               {{record.state}}
            </template>
          </template>
        </a-table>
      </a-card>
      <a-card title="个人资料" class="w-1/4  mt-4 rounded-none">
        <div class="flex justify-center">
          <img class="w-16 h-16 rounded-full" src="" alt="UserAvatar">
        </div>
        <div class="flex flex-col mt-8">
          <div class="flex text-lg">
            <svg class="w-7 h-7 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
            </svg>
            用户名：
          </div>
          <div class="flex text-lg mt-5">
            <svg class="w-7 h-7 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            </svg>
            昵称：
          </div>
          <div class="flex text-lg mt-5">
            <svg class="w-6 h-6 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
            </svg>
            公司：
          </div>
        </div>
      </a-card>
    </div>
    <div class="mr-6 mt-4 w-full">
      <a-card class="rounded-none">
        <ol class="items-center sm:flex">
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
            </div>
          </li>
        </ol>
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

const columns = [
  {
    title: '优先级',
    dataIndex: 'priority',
    key: 'priority',
  },
  {
    title: '任务名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
  },
];

</script>