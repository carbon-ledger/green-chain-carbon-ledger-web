<template>
  <div class="col-span-3">
    <a-card class="shadow-lg grid gap-3">
      <div class="w-full text-center">
        <a-avatar :draggable="false" :size="78" :src="getUserAvatar"/>
      </div>
      <div class="text-center">
        <a-typography-text class="text-3xl font-bold">{{ getUserProfile.data.user.userName }}</a-typography-text>
      </div>
      <div class="text-center">
        <a-typography-text class="text-xl font-bold">{{ getUserProfile.data.user.realName }}</a-typography-text>
      </div>
    </a-card>
  </div>
  <div class="col-span-9">
    <a-card class="shadow-lg grid gap-3">
      <a-typography-title :level="3">
        <DashboardOutlined/>
        排放配额
      </a-typography-title>
      <div class="mb-6">
        <a-descriptions v-if="emissionsQuotaDO.data.length > 0" bordered>
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
        <a-descriptions v-else bordered>
          <a-descriptions-item label="配额信息">配额不存在</a-descriptions-item>
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
    </a-card>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {DashboardOutlined, FileOutlined} from "@ant-design/icons-vue"
import {getUserCurrentApi} from "@/api/UserApi.js";
import {emissionsQuotaDO, userCurrentDO} from "@/assets/js/DoModel.js";
import {emissionsQuotaApi} from "@/api/CarbonApi.js";

const getUserAvatar = ref('');
const getUserProfile = ref(userCurrentDO);
const getEmissionsQuota = ref(emissionsQuotaDO);

onMounted(async _ => {
  getUserProfile.value = await getUserCurrentApi();
  getEmissionsQuota.value = await emissionsQuotaApi(null, null);

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