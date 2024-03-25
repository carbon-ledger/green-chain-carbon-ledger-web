<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="实名审核"
  >
    <a-descriptions-item>
      <div class="text-mount-pink">
        实名审核，审核用户提交的实名信息，审核通过后用户可以正常使用系统功能；审核不通过则用户无法使用系统功能。
      </div>
    </a-descriptions-item>
  </a-page-header>
  <div class="px-3">
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns" :data-source="getReview">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'email'">{{ record.account.email }}</template>
          <template v-if="column.key === 'userName'">{{ record.account.userName }}</template>
          <template v-if="column.key === 'applyTime'">{{ applyTimeArrange(record.applyTime) }}</template>
          <template v-if="column.key === 'action'">
            <a-button type="link"
                      @click="router.push({name: 'DashboardVerifyCheck', query: {id: record.id, type: record.type}})"
            class="text-aspargus">
              审核
            </a-button>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script setup>
/*
 * 引入区
 */
import {breadcrumbs} from "@/assets/js/DashboardBreadCrumb.js";
import {getReviewList} from "@/assets/js/PublishUtil.js";
import moment from "moment";
import router from "@/router/index.js";

/*
 * 数据初始化区
 */
const routes = breadcrumbs
const getReview = getReviewList()

const columns = [
  {
    title: '账户邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '账户名',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '法人代表',
    dataIndex: 'legalRepresentativeName',
    key: 'legalRepresentativeName',
  },
  {
    title: '组织名称',
    dataIndex: 'organizeName',
    key: 'organizeName',
  },
  {
    title: '申请时间',
    dataIndex: 'applyTime',
    key: 'applyTime',
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  }
]

/*
 * 函数执行区
 */

// 面包屑导航
breadcrumbs.push({breadcrumbName: '实名审核'});
setTimeout(() => {
  breadcrumbs.pop();
  breadcrumbs.pop();
}, 1)

function applyTimeArrange(applyTime) {
  return moment(applyTime).format('YYYY年MM月DD日')
}
</script>