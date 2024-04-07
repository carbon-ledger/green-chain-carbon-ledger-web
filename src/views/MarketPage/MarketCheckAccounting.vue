<template>
  <div class="col-span-12">
    <a-page-header
        title="核算详情"
        sub-title="用于查看此次核算后的详细内容"
        @back="router.push({name: 'MarketAccounting'})"
    />
    <a-card>
      <a-descriptions bordered title="核算报告" class="mb-10">
        <a-descriptions-item label="报告开始时间" span="2">{{ startTime }}</a-descriptions-item>
        <a-descriptions-item label="报告结束时间" span="2">{{ endTime }}</a-descriptions-item>
        <a-descriptions-item label="报告状态" span="2"><a-badge :status="getBadgeTypeWithReport(getCarbonReportSingle.data.reportStatus)" :text="getBadgeTypeWithReportMessage(getCarbonReportSingle.data.reportStatus)" /></a-descriptions-item>
        <a-descriptions-item label="核算状态" span="2"><a-badge :status="getBadgeTypeWithAccounting(getCarbonAccountingSingle.data.dataVerificationStatus)" :text="getBadgeTypeWithAccountingMessage(getCarbonAccountingSingle.data.dataVerificationStatus)" /></a-descriptions-item>
        <a-descriptions-item label="报告抬头" span="4">{{ getCarbonReportSingle.data.reportTitle }}</a-descriptions-item>
        <a-descriptions-item label="报告摘要" span="4">{{ getCarbonReportSingle.data.reportSummary }}</a-descriptions-item>
        <a-descriptions-item label="报告审核人" span="2">{{ getCarbonReportSingle.data.verifierUuid }}</a-descriptions-item>
        <a-descriptions-item label="报告审核日期" span="2">{{ getCarbonReportSingle.data.verificationDate }}</a-descriptions-item>
        <a-descriptions-item label="报告创建时间" span="2">{{ getCarbonReportSingle.data.createdAt }}</a-descriptions-item>
        <a-descriptions-item label="报告更新时间" span="2">{{ getCarbonReportSingle.data.updatedAt }}</a-descriptions-item>
      </a-descriptions>
      <a-descriptions bordered title="核算信息">
        <a-descriptions-item label="核算碳排放" span="2">{{ getCarbonAccountingSingle.data.emissionAmount }} 吨</a-descriptions-item>
        <a-descriptions-item label="核算创建时间" span="2">{{ getCarbonAccountingSingle.data.createdAt }}</a-descriptions-item>
        <a-descriptions-item v-if="viewMaterial" label="原料碳排放">{{ parseJson.materials.carbonEmissions }} 吨</a-descriptions-item>
        <a-descriptions-item v-if="viewCourse" label="过程碳排放">{{ parseJson.courses.carbonEmissions }} 吨</a-descriptions-item>
        <a-descriptions-item v-if="viewDesulfurization" label="脱硫碳排放">{{ parseJson.desulfuizations.carbonEmissions }} 吨</a-descriptions-item>
        <a-descriptions-item v-if="viewCarbonSequestration" label="固碳碳排放">{{ parseJson.carbonSequestrations.carbonEmissions }} 吨</a-descriptions-item>
        <a-descriptions-item v-if="viewElectricity" label="电力碳排放">{{ parseJson.electric.electricEmissions }} 吨</a-descriptions-item>
        <a-descriptions-item v-if="viewHeat" label="热碳排放">{{ parseJson.heat.heatEmissions }} 吨</a-descriptions-item>
      </a-descriptions>
    </a-card>
  </div>
</template>

<script setup>
import router from "@/router/index.js";
import {onMounted, ref, watch} from "vue";
import {getCarbonAccountingSingleApi, getCarbonReportSingleApi} from "@/api/CarbonApi.js";
import {getCarbonAccountingSingleDO, getCarbonReportSingleDO} from "@/models/DoModel.js";

const getCarbonReportSingle = ref(getCarbonReportSingleDO);
const getCarbonAccountingSingle = ref(getCarbonAccountingSingleDO);
const startTime = ref('');
const endTime = ref('');
const parseJson = ref('');

// 定义显示的内容
const viewMaterial = ref(false);
const viewCourse = ref(false);
const viewDesulfurization = ref(false);
const viewCarbonSequestration = ref(false);
const viewElectricity = ref(false);
const viewHeat = ref(false);

onMounted(async _ => {
  getCarbonReportSingle.value = await getCarbonReportSingleApi(router.currentRoute.value.params.id);
  getCarbonAccountingSingle.value = await getCarbonAccountingSingleApi(router.currentRoute.value.params.id);

  await disassemblyTimeFrame();
  parseJson.value = JSON.parse(getCarbonAccountingSingle.value.data.emissionVolume);
})

// 将时间 20240401-20240407 拆解为 2024年04月01日 和 2024年04月07日
const disassemblyTimeFrame = () => {
    startTime.value = getCarbonReportSingle.value.data.accountingPeriod.substring(0, 4) + '年' + getCarbonReportSingle.value.data.accountingPeriod.substring(4, 6) + '月' + getCarbonReportSingle.value.data.accountingPeriod.substring(6, 8) + '日';
    endTime.value = getCarbonReportSingle.value.data.accountingPeriod.substring(9, 13) + '年' + getCarbonReportSingle.value.data.accountingPeriod.substring(13, 15) + '月' + getCarbonReportSingle.value.data.accountingPeriod.substring(15, 17) + '日';
}

const getBadgeTypeWithAccounting = (getStatus) => {
  switch (getStatus) {
    case 'pending':
      return 'warning';
    case 'verified':
      return 'success';
    case 'rejected':
      return 'error';
  }
}

const getBadgeTypeWithAccountingMessage = (getStatus) => {
  switch (getStatus) {
    case 'pending':
      return '正在审核';
    case 'verified':
      return '审核通过';
    case 'rejected':
      return '审核拒绝';
  }
}

const getBadgeTypeWithReport = (getStatus) => {
  switch (getStatus) {
    case 'draft':
      return 'default';
    case 'pending_review':
      return 'warning';
    case 'approved':
      return 'success';
    case 'rejected':
      return 'error';
  }
}

const getBadgeTypeWithReportMessage = (getStatus) => {
  switch (getStatus) {
    case 'draft':
      return '当前草稿';
    case 'pending_review':
      return '正在审核';
    case 'approved':
      return '审核通过';
    case 'rejected':
      return '审核拒绝';
  }
}

watch(parseJson, newValue => {
  if (newValue.electric !== undefined) {
    viewElectricity.value = true;
  }
  if (newValue.heat !== undefined) {
    viewHeat.value = true;
  }
  if (newValue.materials !== undefined) {
    viewMaterial.value = true;
  }
  if (newValue.courses !== undefined) {
    viewCourse.value = true;
  }
  if (newValue.desulfuizations !== undefined) {
    viewDesulfurization.value = true;
  }
  if (newValue.carbonSequestration !== undefined) {
    viewCarbonSequestration.value = true;
  }
  console.log(newValue);
})

//"{"electric": {"name": "eElectric", "electricEmissions": 1.1}, "materials": {"name": "eCombustion", "carbonEmissions": 0.0}, "desulfuizations": {"name": "eDesulfurization", "carbonEmissions": 3.735}}"
//"{"heat": {"name": "eCourse", "heatEmissions": 0.88}, "courses": {"name": "eCourse", "carbonEmissions": 7.92}, "electric": {"name": "eElectric", "electricEmissions": 0.66}, "materials": {"name": "eCombustion", "carbonEmissions": 0.0}, "carbonSequestrations": {"name": "eCarbonSequestration", "carbonEmissions": 0.0}}"
</script>
