<template>
  <div class="col-span-12">
    <div class="grid gap-3">
      <a-typography-title :level="3">
        <ShoppingCartOutlined/>
        交易市场
      </a-typography-title>
      <div class="mb-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-3">
          <a-card v-for="tradeInfo in getTradeWithActive" :title="tradeInfo.organize.realName" class="shadow h-full"
                  hoverable
                  size="small">
            <template #extra>
              <a-button type="link" @click="() => {
              activeOpenModal = true
              activeTradeInfo = tradeInfo
            }">更多
              </a-button>
            </template>
            <div class="grid">
              <span><b>数量：</b> {{ tradeInfo.quotaAmount }}吨</span>
              <span><b>单价：</b> {{ tradeInfo.pricePerUnit }}/吨</span>
              <span><b>总价：</b> {{ tradeInfo.quotaAmount * tradeInfo.pricePerUnit }}元</span>
            </div>
          </a-card>
        </div>
      </div>
      <a-typography-title :level="3">
        <ClockCircleOutlined/>
        交易历史
      </a-typography-title>
      <div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-3">
          <a-card v-for="tradeInfo in getTradeWithCompleted" class="shadow h-full" hoverable size="small"
                  :title="tradeInfo.organize.realName">
            <template #extra>
              <a-button disabled type="link">已完成</a-button>
            </template>
            <div class="grid">
              <span><b>数量：</b> {{ tradeInfo.quotaAmount }}吨</span>
              <span><b>单价：</b> {{ tradeInfo.pricePerUnit }}/吨</span>
              <span><b>总价：</b> {{ tradeInfo.quotaAmount * tradeInfo.pricePerUnit }}元</span>
              <span><b>买方：</b> {{ tradeInfo.buyOrganization }}</span>
            </div>
          </a-card>
        </div>
      </div>
    </div>
  </div>

  <!-- 活动的交易模态框 -->
  <a-modal v-model:open="activeOpenModal" title="交易详情">
    <template #footer>
      <a-button @click="activeOpenModal = false">取消</a-button>
      <a-button
          v-if="getUserCurrent.data.role === 'organize' && getUserCurrent.data.user.uuid !== activeTradeInfo.organize.uuid"
          class="bg-aspargus"
          type="primary" @click="consoleTrade(activeTradeInfo.tradeId)"
      >
        交易
      </a-button>
      <a-popover v-else class="ps-2" title="提示">
        <template #content>
          <span>您不能与自己交易或您没有交易权限</span>
        </template>
        <a-button class="bg-aspargus" type="primary" disabled>交易</a-button>
      </a-popover>
    </template>
    <a-descriptions bordered class="mb-3">
      <a-descriptions-item :span="2" label="账户名">{{ activeTradeInfo.organize.userName }}</a-descriptions-item>
      <a-descriptions-item :span="2" label="账户邮箱">{{ activeTradeInfo.organize.email }}</a-descriptions-item>
      <a-descriptions-item :span="4" label="组织账户">{{ activeTradeInfo.organize.realName }}</a-descriptions-item>
      <a-descriptions-item :span="2" label="碳配额(吨)">{{ activeTradeInfo.quotaAmount }}</a-descriptions-item>
      <a-descriptions-item :span="2" label="单价(元)">{{ activeTradeInfo.pricePerUnit }}</a-descriptions-item>
      <a-descriptions-item :span="4" label="详细描述">{{ activeTradeInfo.description }}</a-descriptions-item>
    </a-descriptions>
    <div class="text-beaver">
      <span>Tips：确认是否进行交易。 确认交以后，系统将会向您展示对方组织相关的账户信息。请汇款后等待对方的确认。当对方确认无误后，系统将会自动将您的配额添加。</span>
    </div>
  </a-modal>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import {getUserCurrentApi} from "@/api/UserApi.js";
import {ClockCircleOutlined, ShoppingCartOutlined} from "@ant-design/icons-vue"
import {tradeDO, userCurrentDO} from "@/models/DoModel.js";
import {tradeBuyApi, tradeListApi} from "@/api/TradeApi.js";
import {searchAllVO} from "@/models/VoModel.js";
import {message} from "ant-design-vue";
import router from "@/router/index.js";

const getUserAvatar = ref('');
const getSearchVO = reactive(searchAllVO);
const getTradeList = ref(tradeDO);
const getTradeWithActive = ref([]);
const getTradeWithCompleted = ref([]);
const activeOpenModal = ref(false);
const activeTradeInfo = ref(tradeDO.data[0]);
const getUserCurrent = ref(userCurrentDO);


onMounted(async _ => {
  getUserCurrent.value = await getUserCurrentApi();
  getTradeList.value = await tradeListApi(getSearchVO);

  // 对获取的内容进行排列排序
  getTradeList.value.data.forEach(it => {
    if (it.status === 'active') {
      getTradeWithActive.value.push(it);
    } else {
      getTradeWithCompleted.value.push(it);
    }
  })

  const getData = await getUserCurrentApi();
  if (getData.output === 'Success') {
    if (getData.data.user.avatar === '') {
      getUserAvatar.value = getData.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
})

/**
 * 交易
 * @param id
 */
async function consoleTrade(id) {
  const getReturnData = await tradeBuyApi(id);
  if (getReturnData.output === 'Success') {
    activeOpenModal.value = false;
    message.success('交易成功，请及时付款');
    // 跳转对公转账支付页面
    await router.push({name: "MarketOrganizeTrade", params: {tradeId: id}})
  }
}

const getTradeListFun = async () => {
  getTradeList.value = await tradeListApi(getSearchVO);
  // 对获取的内容进行排列排序
  getTradeList.value.data.forEach(it => {
    if (it.status === 'active') {
      getTradeWithActive.value.push(it);
    } else {
      getTradeWithCompleted.value.push(it);
    }
  })
}
</script>