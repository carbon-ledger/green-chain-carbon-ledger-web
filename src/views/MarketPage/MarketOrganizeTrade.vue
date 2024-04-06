<template>
  <a-result title="太好了，我们已经完成了大部分操作！还剩下最后一步" class="col-span-12">
    <template #icon>
      <SmileTwoTone/>
    </template>
    <template #subTitle>
      <a-descriptions bordered class="shadow rounded-lg">
        <a-descriptions-item :span="2" label="账户名">{{ tradeInfo.data.organize.userName }}</a-descriptions-item>
        <a-descriptions-item :span="2" label="账户邮箱">{{ tradeInfo.data.organize.email }}</a-descriptions-item>
        <a-descriptions-item :span="4" label="组织账户">{{ tradeInfo.data.organize.realName }}</a-descriptions-item>
        <a-descriptions-item :span="4" label="开户银行">{{ tradeInfo.data.accountOpen.accountBank }}</a-descriptions-item>
        <a-descriptions-item :span="4" label="开户账号">{{ tradeInfo.data.accountOpen.accountNumber }}</a-descriptions-item>
      </a-descriptions>
      <span>Tips: 向对方账户进行对公转账，转账完毕后点击下方按钮完成交易，等待对方确认收款。收款后将会为您分配碳排放配额。</span>
    </template>
    <template #extra>
      <a-button type="primary" class="bg-aspargus" @click="router.push({name: 'MarketTrade'})">支付完成</a-button>
    </template>
  </a-result>
</template>

<script setup>
import router from "@/router/index.js";
import {SmileTwoTone} from "@ant-design/icons-vue";
import {onMounted, ref} from "vue";
import {tradeBuyOneDO} from "@/models/DoModel.js";
import {getTradeBankApi} from "@/api/TradeApi.js";

const tradeInfo = ref(tradeBuyOneDO);

onMounted(async _ => {
  tradeInfo.value = await getTradeBankApi(router.currentRoute.value.params.tradeId);

  if (tradeInfo.value.output !== "Success") {
    await router.push({name: "MarketList"});
  }
})
</script>