<template>
  <a-page-header
      :breadcrumb="{ routes }"
      title="交易审核"
  >
    <a-descriptions-item>
      <div class="text-mount-pink">
        对组织发布的碳交易进行审核，确认交易是否合规。
      </div>
    </a-descriptions-item>
  </a-page-header>
  <div class="px-3">
    <div class="w-full h-auto mt-6">
      <a-table :columns="columns" :data-source="getTradeReviewList.data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'userName'">{{ record.organize.userName }}</template>
          <template v-if="column.key === 'realName'">{{ record.organize.realName }}</template>
          <template v-if="column.key === 'email'">{{ record.organize.email }}</template>
          <template v-if="column.key === 'quota'">{{ record.quotaAmount }}</template>
          <template v-if="column.key === 'price'">{{ record.pricePerUnit }}</template>
          <template v-if="column.key === 'action'">
            <a-button class="text-aspargus"
                      type="link"
                      @click="() => {
                        openModel = true;
                        singleTradeReview = record;
                      }">
              配额分配
            </a-button>
          </template>
        </template>
      </a-table>
    </div>
  </div>

  <template>
    <a-modal v-model:open="openModel" title="配额管理">
      <template #footer>
        <a-button key="submit" @click="consoleReviewCheck(singleTradeReview.tradeId, false)" danger>审核拒绝</a-button>
        <a-button key="submit" class="bg-aspargus" type="primary" @click="consoleReviewCheck(singleTradeReview.tradeId, true)">审核通过</a-button>
      </template>
      <div>
        <a-descriptions bordered>
          <a-descriptions-item label="碳配额(吨)" :span="2">{{ singleTradeReview.quotaAmount }}</a-descriptions-item>
          <a-descriptions-item label="单价(元)" :span="2">{{ singleTradeReview.pricePerUnit }}</a-descriptions-item>
          <a-descriptions-item label="详细描述" :span="4">{{ singleTradeReview.description }}</a-descriptions-item>
        </a-descriptions>
      </div>
    </a-modal>
  </template>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {tradeDO} from "@/models/DoModel.js";
import {message} from "ant-design-vue";
import {tradeReviewApi, tradeReviewPassApi} from "@/api/TradeApi.js";

const routes = breadcrumbs;
const openModel = ref(false)
const getTradeReviewList = ref(tradeDO)
const singleTradeReview = ref(tradeDO.data[0])

onMounted(async _ => {
  getTradeReviewList.value = await tradeReviewApi()
})


/**
 * 处理是否合规操作
 * @param tradeId
 * @param hasPass
 * @returns {Promise<void>}
 */
async function consoleReviewCheck(tradeId, hasPass) {
  // 获取参数整合
  const getData = {
    tradeId: tradeId,
    pass: hasPass
  }
  // 对接口进行操作
  const getReturnData = await tradeReviewPassApi(getData);
  if (getReturnData.output === "Success") {
    message.success("操作成功");
    getTradeReviewList.value = await tradeReviewApi()
    openModel.value = false;
  }
}
</script>

<script>
import {breadcrumbs} from "@/utils/DashboardBreadCrumb.js";

breadcrumbs.push({breadcrumbName: '交易审核'});
setTimeout(() => {
  breadcrumbs.pop();
}, 1)

const columns = [
  {
    title: '用户名',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '真实信息',
    dataIndex: 'realName',
    key: 'realName',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '配额',
    dataIndex: 'quota',
    key: 'quota',
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  }
]
</script>