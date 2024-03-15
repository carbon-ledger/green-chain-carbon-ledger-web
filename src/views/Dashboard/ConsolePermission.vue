<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="权限管理"
  >
    <template #extra>
      <!--头部-->
      <div class="flex w-full justify-end">
        <a-input class="h-8 border-gray-300 rounded-md" placeholder="请输入权限名字"/>
        <a-button class="ml-4 mr-4 flex justify-center items-center">
          <SearchOutlined/>
          查询
        </a-button>
      </div>
    </template>
    <a-descriptions-item>
      <div class="text-mount-pink">
        权限管理，不包含修改与添加操作，只有查看权限。查阅对应对权限可以被用作什么操作。
      </div>
    </a-descriptions-item>
  </a-page-header>
</template>

<script setup>
import {SearchOutlined} from "@ant-design/icons-vue";
import breadcrumbs from "@/assets/js/DashboardBreadCrumb.js";

breadcrumbs.push({breadcrumbName: '网站管理'});
breadcrumbs.push({path: '/user', breadcrumbName: '权限管理'});
const routes = breadcrumbs
setTimeout(() => {
  breadcrumbs.pop();
  breadcrumbs.pop();
}, 1)

</script>