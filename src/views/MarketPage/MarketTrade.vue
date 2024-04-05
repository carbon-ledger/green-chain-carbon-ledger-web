<template>
  <div class="col-span-9">
    <a-card class="shadow-lg grid gap-3">
      <a-typography-title :level="3">
        <TagsOutlined/>
        我的交易
      </a-typography-title>
      <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'quotaAmounts'">
        <span>
          <SmileOutlined/>
          Name
        </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'tags'">
            <span>
              <a-tag
                  v-for="tag in record.tags"
                  :key="tag"
                  :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <span>
              <a-button type="primary" @click="handleEdit(record)">
                编辑
              </a-button>
              <a-button type="danger" @click="handleDelete(record)">
                删除
              </a-button>
            </span>
          </template>
        </template>
      </a-table>
      <a-typography-title :level="3">
        <ToTopOutlined/>
        我发布的
      </a-typography-title>
      <a-table :columns="columns" :data-source="getOurSend.data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'quotaAmount'">
        <span>
          {{ column.name }}
        </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
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
            <span v-if="record.status !== 'active' && record.status !== 'completed'">
              <a-button type="text" class="text-aspargus">
              编辑
              </a-button>
              <a-button type="text" class="text-aspargus">
                删除
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
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import {getUserCurrentApi} from "@/api/UserApi.js";
import {tradeSendDO, userCurrentDO} from "@/assets/js/DoModel.js";
import {
  AppstoreAddOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
  TagsOutlined,
  ToTopOutlined
} from "@ant-design/icons-vue"
import router from "@/router/index.js";
import {searchAllVO, sendTradeSellVO} from "@/assets/js/VoModel.js";
import {tradeSellApi, tradeSend} from "@/api/TradeApi.js";
import {message} from "ant-design-vue";

const getUserAvatar = ref('');
const getUserProfile = ref(userCurrentDO);
const getOurSend = ref(tradeSendDO);
const toSearchSend = reactive(searchAllVO)
const tagList = ["draft", "pending_review", "active", "completed", "cancelled"]
// 模态框内容
const confirmLoading = ref(false);
const showTradeModal = ref(false);
const sendTradeSell = reactive(sendTradeSellVO)


onMounted(async _ => {
  getUserProfile.value = await getUserCurrentApi();
  getOurSend.value = await tradeSend(toSearchSend);

  if (getUserProfile.value.output === 'Success') {
    if (getUserProfile.value.data.user.avatar === '') {
      getUserAvatar.value = getUserProfile.value.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
});

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
    getOurSend.value = await tradeSend(toSearchSend);
    showTradeModal.value = false;
  }
}

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
    case 'cancelled':
      return '已取消';
    default:
      return '进行中';
  }
}

const  getTagsColor = (getThisTags) => {
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
    default:
      return 'green';
  }
}
</script>

<script>
const columns = [
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
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
</script>