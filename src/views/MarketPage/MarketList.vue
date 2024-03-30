<template>
  <div class="col-span-12">
    <div class="grid gap-3">
      <a-typography-title :level="3">
        <ShoppingCartOutlined/>
        交易市场
      </a-typography-title>
      <div class="mb-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-3">
          <a-card v-for="data in getTradableInformation" class="shadow" hoverable size="small" title="锋叶技术（深圳）有限公司">
            <template #extra><a-button type="link">更多</a-button></template>
            <div class="grid">
              <span><b>数量（吨）：</b> 100.00</span>
              <span><b>单价：</b> 20.00/吨</span>
              <span><b>总价：</b> 2000.00 元</span>
            </div>
          </a-card>
        </div>
      </div>
      <a-typography-title :level="3">
        <ClockCircleOutlined />
        交易历史
      </a-typography-title>
      <div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-3">
          <a-card v-for="data in getTransactionRecords" class="shadow" hoverable size="small" title="锋叶技术（深圳）有限公司">
            <template #extra><a-button type="link" disabled>已完成</a-button></template>
            <div class="grid">
              <span><b>数量（吨）：</b> 100.00</span>
              <span><b>单价：</b> 20.00/吨</span>
              <span><b>总价：</b> 2000.00 元</span>
              <span><b>买方：</b> 深圳华为集团</span>
            </div>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {getUserCurrentApi} from "@/api/UserApi.js";
import {ShoppingCartOutlined, ClockCircleOutlined} from "@ant-design/icons-vue"

const getUserAvatar = ref('');
const getTradableInformation = ref(['1','2','3','4','5','6']);
const getTransactionRecords = ref(['1','2','3','4']);

onMounted(async _ => {
  const getData = await getUserCurrentApi();
  if (getData.output === 'Success') {
    if (getData.data.user.avatar === '') {
      getUserAvatar.value = getData.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
})
</script>