<template>
  <div class="grid grid-cols-12 gap-3">
    <a-card size="small" class="col-span-12 shadow" hoverable>
      <div class="grid grid-cols-1 gap-3">
        <a-typography-title :level="3" class="pt-3 ps-3">碳配额日志</a-typography-title>
        <div v-if="getLength">
          <a-table :columns="columns" :data-source="getEmissionsQuota.data[0].auditLog">
            <template #headerCell="{ column }">
              <template v-if="column.key === 'date'">
                日期
              </template>
            </template>
          </a-table>
        </div>
        <div v-else>
          <a-result title="您还没有任何配额"/>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {emissionsQuotaDO} from "@/models/DoModel.js";
import {emissionsQuotaApi} from "@/api/CarbonApi.js";

const getEmissionsQuota = ref(emissionsQuotaDO);
const getLength = ref(0);

onMounted(async _ => {
  getEmissionsQuota.value = await emissionsQuotaApi(null, null);
  getLength.value = getEmissionsQuota.value.data.length;
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
