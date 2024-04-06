<template>
  <div class="col-span-9">
    <a-card class="shadow-lg grid gap-3">
      <!-- 我的交易 -->
      <a-typography-title :level="3">
        <TagsOutlined/>
        我的交易
      </a-typography-title>
      <a-table :columns="myBuy" :data-source="getOurBuy.data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'quotaAmount'">
            <span>
              碳数量(吨)
            </span>
          </template>
          <template v-if="column.key === 'totalPrice'">
            <span>
              {{ column.name }}
            </span>
          </template>
          <template v-if="column.key === 'organizeName'">
            <span>
              {{ column.name }}
            </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'organizeName'">
            <span>
              {{ record.organize.realName }}
            </span>
          </template>
          <template v-if="column.key === 'totalPrice'">
            <span>
              {{ record.quotaAmount * record.pricePerUnit }}
            </span>
          </template>
          <template v-else-if="column.key === 'status'">
            <span>
              <a-tag
                  :color="getTagsColor(record.status)"
              >
                {{ showTag(record.status) }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <span v-if="record.status === 'trade'">
              <a-button class="text-aspargus" type="text" @click="() => router.push({name: 'MarketOrganizeTrade', params: {tradeId: record.tradeId}})">
                付款
              </a-button>
            </span>
            <span v-else>
              <a-button class="text-aspargus" type="text" disabled>
                付款
              </a-button>
            </span>
          </template>
        </template>
      </a-table>

      <!-- 我发布的内容 -->
      <a-typography-title :level="3">
        <ToTopOutlined/>
        我发布的
      </a-typography-title>
      <a-table :columns="mySend" :data-source="getOurSend.data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'quotaAmount'">
            <span>
              {{ column.name }}
            </span>
          </template>
          <template v-if="column.key === 'totalPrice'">
            <span>
              {{ column.name }}
            </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'totalPrice'">
            <span>
              {{ record.quotaAmount * record.pricePerUnit }}
            </span>
          </template>
          <template v-else-if="column.key === 'status'">
            <span>
              <a-tag
                  :color="getTagsColor(record.status)"
              >
                {{ showTag(record.status) }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <span v-if="record.status !== 'trade' && record.status !== 'completed'">
              <span v-if="record.status === 'cancelled'">
                <a-button class="text-aspargus" type="text" disabled>
                  编辑
                </a-button>
                <a-button class="text-aspargus" type="text" disabled>
                  删除
                </a-button>
              </span>
              <span v-else-if="record.status !== 'active' && record.status !== 'completed'">
                <a-button class="text-aspargus" type="text" @click="openTradeModal(record)">
                编辑
                </a-button>
                <a-button class="text-aspargus" type="text" @click="consoleTradeDelete(record.tradeId)">
                  删除
                </a-button>
              </span>
              <span v-else>
                <a-button class="text-aspargus" type="text" disabled>
                编辑
                </a-button>
                <a-button class="text-aspargus" type="text" @click="consoleTradeDelete(record.tradeId)">
                  删除
                </a-button>
              </span>
            </span>
            <span v-else>
              <a-button v-if="record.status === 'trade'" class="text-aspargus" type="text" @click="consoleCheckIsCollection(record.tradeId)">
                确认收款
              </a-button>
              <a-button v-else class="text-aspargus" type="text" disabled>
                确认收款
              </a-button>
            </span>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
  <div class="col-span-3">
    <a-card class="shadow-lg">
      <template #cover>
        <img alt="MarketUserBackground" draggable="false" src="@/assets/images/market-user-background.webp"/>
      </template>
      <template #actions>
        <span @click="router.push({name: 'MarketList'})"><ShoppingCartOutlined/>  交易市场</span>
        <span @click="_ => showTradeModal = true"><AppstoreAddOutlined/> 创建交易</span>
      </template>
      <a-card-meta :description="getUserProfile.data.user.userName" :title="getUserProfile.data.user.realName">
        <template #avatar>
          <a-avatar :src="getUserAvatar"/>
        </template>
      </a-card-meta>
    </a-card>
  </div>

  <!-- 创建交易模态框 -->
  <div>
    <a-modal v-model:open="showTradeModal" :confirm-loading="confirmLoading" title="创建交易">
      <template #footer>
        <a-button danger @click="_ => showTradeModal = false">取消</a-button>
        <a-button class="text-aspargus border-aspargus" @click="consoleTradeSellAdd()">创建</a-button>
      </template>
      <a-form
          :model="sendTradeSell"
          class="grid grid-cols-2"
          name="trade_sell"
      >
        <a-form-item
            :rules="[{ required: true, message: '请输入销售碳量' }]"
            class="col-span-2 md:grid-cols-1"
            label="数量"
            name="amount"
        >
          <a-input v-model:value="sendTradeSell.amount" step="0.01" type="number">
            <template #suffix>吨</template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入单价' }]"
            class="col-span-2 md:grid-cols-1"
            label="单价"
            name="unit"
        >
          <a-input v-model:value="sendTradeSell.unit" step="0.01" type="number">
            <template #suffix>元</template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入描述' }]"
            class="col-span-2"
            label="描述"
            name="text"
        >
          <a-textarea v-model:value="sendTradeSell.text"/>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '草稿' }]"
            label="草稿"
            name="draft"
        >
          <a-switch v-model:checked="sendTradeSell.draft" class="bg-gray-400"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>

  <!-- 编辑模态框 -->
  <div>
    <a-modal v-model:open="showTradeEditModal" :confirm-loading="confirmLoading" title="编辑交易">
      <template #footer>
        <a-button danger @click="_ => showTradeEditModal = false">取消</a-button>
        <a-button class="text-aspargus border-aspargus" @click="consoleTradeEdit(sendTradeEdit)">编辑</a-button>
      </template>
      <a-form
          :model="sendTradeEdit"
          class="grid grid-cols-2"
          name="trade_edit"
      >
        <a-form-item
            :rules="[{ required: true, message: '请输入销售碳量' }]"
            class="col-span-2 md:grid-cols-1"
            label="数量"
            name="amount"
        >
          <a-input v-model:value="sendTradeEdit.amount" step="0.01" type="number">
            <template #suffix>吨</template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入单价' }]"
            class="col-span-2 md:grid-cols-1"
            label="单价"
            name="unit"
        >
          <a-input v-model:value="sendTradeEdit.unit" step="0.01" type="number">
            <template #suffix>元</template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入描述' }]"
            class="col-span-2"
            label="描述"
            name="text"
        >
          <a-textarea v-model:value="sendTradeEdit.text"/>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '草稿' }]"
            label="草稿"
            name="draft"
        >
          <a-switch v-model:checked="sendTradeEdit.draft" class="bg-gray-400"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import {getUserCurrentApi} from "@/api/UserApi.js";
import {tradeDO, userCurrentDO} from "@/models/DoModel.js";
import {
  AppstoreAddOutlined,
  ShoppingCartOutlined,
  TagsOutlined,
  ToTopOutlined
} from "@ant-design/icons-vue"
import router from "@/router/index.js";
import {searchAllVO, sendTradeSellVO} from "@/models/VoModel.js";
import {
  getMyBuyTradeApi,
  tradeDeleteApi,
  tradeEditApi,
  tradeSellApi,
  tradeSendApi,
  tradeSuccessApi
} from "@/api/TradeApi.js";
import {message} from "ant-design-vue";

const getUserAvatar = ref('');
const getUserProfile = ref(userCurrentDO);
const getOurSend = ref(tradeDO);
const getOurBuy = ref(tradeDO);
const toSearchSend = reactive(searchAllVO)
// 模态框内容
const confirmLoading = ref(false);
const showTradeModal = ref(false);
const sendTradeSell = reactive(sendTradeSellVO)
const showTradeEditModal = ref(false);
const sendTradeEdit = reactive(sendTradeSellVO)
const sendTradeEditId = ref(0);


onMounted(async _ => {
  getUserProfile.value = await getUserCurrentApi();
  getOurSend.value = await tradeSendApi(toSearchSend);
  getOurBuy.value = await getMyBuyTradeApi();

  if (getUserProfile.value.output === 'Success') {
    if (getUserProfile.value.data.user.avatar === '') {
      getUserAvatar.value = getUserProfile.value.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
});

const openTradeModal = (record) => {
  showTradeEditModal.value = true;
  sendTradeEdit.amount = record.quotaAmount;
  sendTradeEdit.unit = record.pricePerUnit;
  sendTradeEdit.text = record.description;
  sendTradeEdit.draft = record.status === 'draft';
  sendTradeEditId.value = record.tradeId;
};

/**
 * 发布我的碳交易内容
 *
 * @returns {Promise<void>}
 */
async function consoleTradeSellAdd() {
  if (sendTradeSell.amount === 0.000 || sendTradeSell.unit === 0.000 || sendTradeSell.text === '') {
    message.warn("填写项不完整");
    return;
  }
  // 上传数据
  const getReturnData = await tradeSellApi(sendTradeSell);
  if (getReturnData.output === 'Success') {
    if (sendTradeSell.draft) {
      message.success("已发布草稿");
    } else {
      message.success("交易已发布，请等待审核");
    }
    getOurSend.value = await tradeSendApi(toSearchSend);
    showTradeModal.value = false;
  }
}

/**
 * 对内容进行确认收款
 *
 * @param getTradeId
 * @returns {Promise<void>}
 */
async function consoleCheckIsCollection(getTradeId) {
  const getReturnData = await tradeSuccessApi(getTradeId);
  if (getReturnData.output === 'Success') {
    message.success("已确认收款");
    getOurSend.value = await tradeSendApi(toSearchSend);
  }
}

/**
 * 删除我的碳交易内容
 *
 * @param getTradeId
 * @returns {Promise<void>}
 */
async function consoleTradeDelete(getTradeId) {
  const getReturnData = await tradeDeleteApi(getTradeId);
  if (getReturnData.output === 'Success') {
    message.success("已删除");
    getOurSend.value = await tradeSendApi(toSearchSend);
  }
}

/**
 * 编辑我的碳交易内容
 *
 * @param record
 * @returns {Promise<void>}
 */
async function consoleTradeEdit(record) {
  const getReturnData = await tradeEditApi(record, sendTradeEditId.value)
  if (getReturnData.output === 'Success') {
    message.success("已修改");
    getOurSend.value = await tradeSendApi(toSearchSend);
    showTradeEditModal.value = false;
  }
}
</script>

<script>
const showTag = (getThisTag) => {
  switch (getThisTag) {
    case 'draft':
      return '草稿';
    case 'pending_review':
      return '待审核';
    case 'active':
      return '进行中';
    case 'completed':
      return '已完成';
    case 'trade':
      return '待收款';
    case 'cancelled':
      return '已取消';
    default:
      return '进行中';
  }
}

const getTagsColor = (getThisTags) => {
  switch (getThisTags) {
    case 'draft':
      return 'volcano';
    case 'pending_review':
      return 'geekblue';
    case 'active':
      return 'green';
    case 'completed':
      return 'green';
    case 'cancelled':
      return 'volcano';
    case 'trade':
      return 'volcano';
    default:
      return 'green';
  }
}

const mySend = [
  {
    name: '总价(元)',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
  },
  {
    name: '碳数量(吨)',
    dataIndex: 'quotaAmount',
    key: 'quotaAmount',
  },
  {
    title: '碳单价(元)',
    dataIndex: 'pricePerUnit',
    key: 'pricePerUnit',
  },
  {
    title: '当前状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    key: 'action',
  },
];

const myBuy = [
  {
    name: '交易组织',
    dataIndex: 'organizeName',
    key: 'organizeName',
  },
  {
    name: '总价(元)',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
  },
  {
    name: '碳数量(吨)',
    dataIndex: 'quotaAmount',
    key: 'quotaAmount',
  },
  {
    title: '碳单价(元)',
    dataIndex: 'pricePerUnit',
    key: 'pricePerUnit',
  },
  {
    title: '当前状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    key: 'action',
  },
];
</script>