<template>
  <div class="col-span-3">
    <a-card class="shadow-lg">
      <template #cover>
        <img alt="example" src="@/assets/images/market-user-background.webp"/>
      </template>
      <template #actions>
        <span @click="router.replace({name: 'UserProfile', replace: true})"><UserOutlined /> 个人信息</span>
        <span @click="router.push({name: 'MarketAccounting'})"><MoneyCollectOutlined/>  核算中心</span>
      </template>
      <a-card-meta :description="getUserProfile.data.user.userName" :title="getUserProfile.data.user.realName">
        <template #avatar>
          <a-avatar :src="getUserAvatar"/>
        </template>
      </a-card-meta>
    </a-card>
  </div>
  <div class="col-span-9">
    <a-card class="shadow-lg grid gap-3">
      <div v-if="getLength">
        <a-typography-title :level="3">
          <DashboardOutlined/>
          排放配额
        </a-typography-title>
        <div class="mb-6">
          <a-descriptions bordered>
            <template #extra>
              <a-button type="primary" class="bg-aspargus">历史信息</a-button>
            </template>
            <a-descriptions-item label="可支配碳币（吨）">{{ getEmissionsQuota.data[0].totalQuota }}</a-descriptions-item>
            <a-descriptions-item label="已分配碳币（吨）">
              {{ getEmissionsQuota.data[0].allocatedQuota }}
            </a-descriptions-item>
            <a-descriptions-item label="配额年份信息">{{ getEmissionsQuota.data[0].quotaYear }}年</a-descriptions-item>
            <a-descriptions-item label="已使用配额（吨）">{{ getEmissionsQuota.data[0].usedQuota }}</a-descriptions-item>
            <a-descriptions-item :span="2" label="分配时间">
              {{ getEmissionsQuota.data[0].allocationDate }}
            </a-descriptions-item>
            <a-descriptions-item :span="3" label="碳币有效状态">
              <a-badge v-if="!getEmissionsQuota.data[0].complianceStatus" status="success" text="状态正常"/>
              <a-badge v-else status="error" text="状态异常"/>
            </a-descriptions-item>
          </a-descriptions>
        </div>
        <a-typography-title :level="3">
          <FileOutlined/>
          审计日志
        </a-typography-title>
        <div>
          <a-table :columns="columns" :data-source="getEmissionsQuota.data[0].auditLog">
            <template #headerCell="{ column }">
              <template v-if="column.key === 'date'">
                日期
              </template>
            </template>
          </a-table>
        </div>
      </div>
      <div v-else>
        <a-result title="您还没有任何配额"/>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {DashboardOutlined, MoneyCollectOutlined, FileOutlined, UserOutlined} from "@ant-design/icons-vue"
import {getUserCurrentApi} from "@/api/UserApi.js";
import {emissionsQuotaDO, userCurrentDO} from "@/assets/js/DoModel.js";
import {emissionsQuotaApi} from "@/api/CarbonApi.js";
import router from "@/router/index.js";

const getUserAvatar = ref('');
const getUserProfile = ref(userCurrentDO);
const getEmissionsQuota = ref(emissionsQuotaDO);
const getLength = ref(0);

onMounted(async _ => {
  getUserProfile.value = await getUserCurrentApi();
  getEmissionsQuota.value = await emissionsQuotaApi(null, null);
  getLength.value = getEmissionsQuota.value.data.length;

  if (getUserProfile.value.output === 'Success') {
    if (getUserProfile.value.data.user.avatar === '') {
      getUserAvatar.value = getUserProfile.value.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
});
</script>

<script>
const columns = [
  {
    name: '日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '操作人',
    dataIndex: 'operate',
    key: 'operate',
  },
  {
    title: '日志',
    dataIndex: 'log',
    key: 'log',
  }
];
</script>