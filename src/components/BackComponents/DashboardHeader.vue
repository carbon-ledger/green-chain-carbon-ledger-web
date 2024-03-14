<template>
  <div class="flex h-full py-3">
    <div class="flex flex-1 items-center">
      <a-breadcrumb :routes="routes">
        <a-breadcrumb-item href="">
          <HomeOutlined />
        </a-breadcrumb-item>
        <template #itemRender="{ route, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
          <RouterLink v-else :to="`${basePath}/${paths.join('/')}`">
            {{ route.breadcrumbName }}
          </RouterLink>
        </template>
      </a-breadcrumb>
    </div>
    <div class="flex flex-1 justify-end">
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          <img class="rounded-full w-auto h-full" src="https://api.x-lf.cn/avatar/?uid=1" alt="UserAvatar">
        </a>
        <template #overlay>
          <a-menu @click="onClick">
            <a-menu-item key="1">1st menu item</a-menu-item>
            <a-menu-item key="2">2nd menu item</a-menu-item>
            <a-menu-item key="3">3rd menu item</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup>
import { HomeOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

const basePath = '/dashboard';
const routes = ref([
  {
    path: 'console',
    breadcrumbName: '管理首页',
  },
  {
    path: 'person',
    breadcrumbName: '个人中心',
  }
]);
</script>
