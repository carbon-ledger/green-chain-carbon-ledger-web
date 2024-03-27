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
      <a-table :columns="columns" :data-source="permissionList.permissionList_data" :rowKey="record => record.id">
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
import {onMounted, reactive} from "vue";
import request from "@/assets/js/Request.js";

breadcrumbs.push({breadcrumbName: '网站管理'});
breadcrumbs.push({path: '/user', breadcrumbName: '权限管理'});
const routes = breadcrumbs
setTimeout(() => {
  breadcrumbs.pop();
  breadcrumbs.pop();
}, 1)

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

const userChangePassword = reactive({
  limit:'',
  page:'',
  order:'asc'
})

const permissionList = reactive({
  permissionList_data:[]
})

onMounted(() => {
    PermissionList()
})


//获取权限列表
function PermissionList(){
  request.getPermissionList(data).then((res) => {
    permissionList.permissionList_data = res.data.data
  })
}
</script>