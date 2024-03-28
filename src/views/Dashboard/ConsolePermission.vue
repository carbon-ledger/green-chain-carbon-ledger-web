<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="权限管理"
  >
    <a-descriptions-item>
      <div class="text-mount-pink">
        权限管理，不包含修改与添加操作，只有查看权限。查阅对应对权限可以被用作什么操作。
      </div>
    </a-descriptions-item>
  </a-page-header>
  <div class="px-3">
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns" :data-source="getPermissionList.data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key==='name'">
            {{ record.name }}
          </template>
          <template v-else-if="column.key === 'description'">
            {{ record.description }}
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup>
import {breadcrumbs} from "@/utils/DashboardBreadCrumb.js";
import {onMounted, ref} from "vue";
import {permissionListDO} from "@/assets/js/DoModel.js";
import {getPermissionListApi} from "@/api/PermissionApi.js";

const routes = breadcrumbs;
const getPermissionList = ref(permissionListDO);

breadcrumbs.push({breadcrumbName: '网站管理'});
breadcrumbs.push({path: '/user', breadcrumbName: '权限管理'});
setTimeout(() => {
  breadcrumbs.pop();
  breadcrumbs.pop();
}, 1)

onMounted(async _ => {
  getPermissionList.value = await getPermissionListApi();
})
</script>

<script>
const columns = [
  {
    title: '权限名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '权限描述',
    dataIndex: 'description',
    key: 'description',
  }
];
</script>