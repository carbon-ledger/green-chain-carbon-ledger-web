<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="实名审核"
  >
    <template #extra>
      <!--头部-->
      <div class="flex w-full justify-end">
        <a-input class="h-8 border-gray-300 rounded-md" placeholder="输入账户信息"/>
        <a-button @click="data.search = true" class="ml-4 mr-4 flex justify-center items-center">
          <SearchOutlined/>
          查询
        </a-button>
        <a-button class="bg-aspargus flex justify-center items-center" type="primary">
          <SafetyOutlined />
            审核
        </a-button>
      </div>
    </template>
    <a-descriptions-item>
      <div class="text-mount-pink">
        账户管理，包括账户的增删改查，账户的状态，账户的创建时间，账户的更新时间，账户是否已被删除等。
      </div>
    </a-descriptions-item>
  </a-page-header>
  <div class="px-3">
    <div class="w-full h-auto mt-6">
      <a-table v-if="data.search === false" :columns="columns">

      </a-table>
    </div>
  </div>
</template>
<script setup>
import {onMounted, reactive, ref} from 'vue';
import {SafetyOutlined, SearchOutlined} from "@ant-design/icons-vue";
import breadcrumbs from "@/assets/js/DashboardBreadCrumb.js";
breadcrumbs.push({breadcrumbName: '系统分析'});
breadcrumbs.push({path: '/user', breadcrumbName: '实名审核'});


const routes = breadcrumbs
setTimeout(() => {
  breadcrumbs.pop();
  breadcrumbs.pop();
}, 1)

const columns = [
  {
    title: '账户名',
    dataIndex: 'uuid',
    key: 'uuid',
  },
  {
    title: '真实信息',
    dataIndex: 'uuid',
    key: 'uuid',
  },
  {
    title: '法人代表',
    dataIndex: 'uuid',
    key: 'uuid',
  },
  {
    title: '组织名称',
    dataIndex: 'uuid',
    key: 'uuid',
  }
]

const data = reactive({
  search:false,
})
</script>