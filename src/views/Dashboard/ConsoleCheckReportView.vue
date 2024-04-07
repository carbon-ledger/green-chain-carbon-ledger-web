<template>
  <div class="px-3">
    <a-page-header
        sub-title="用于查看此次核算后的详细内容"
        title="核算详情"
        @back="router.push({name: 'DashboardCheckReport'})"
    />
    <a-card>
      <a-descriptions bordered class="mb-10" title="核算报告">
        <a-descriptions-item label="账户">{{ getUserInfo.data.userName }}</a-descriptions-item>
        <a-descriptions-item label="邮箱">{{ getUserInfo.data.email }}</a-descriptions-item>
        <a-descriptions-item label="组织账户">{{ getUserInfo.data.realName }}</a-descriptions-item>
        <a-descriptions-item label="报告开始时间" span="2">{{ startTime }}</a-descriptions-item>
        <a-descriptions-item label="报告结束时间" span="2">{{ endTime }}</a-descriptions-item>
        <a-descriptions-item label="报告抬头" span="4">{{
            getCarbonReportSingle.data.reportTitle
          }}
        </a-descriptions-item>
        <a-descriptions-item label="报告摘要" span="4">{{
            getCarbonReportSingle.data.reportSummary
          }}
        </a-descriptions-item>
        <a-descriptions-item label="报告创建时间" span="2">{{
            getCarbonReportSingle.data.createdAt
          }}
        </a-descriptions-item>
        <a-descriptions-item label="报告更新时间" span="2">{{
            getCarbonReportSingle.data.updatedAt
          }}
        </a-descriptions-item>
      </a-descriptions>
      <a-descriptions bordered class="mb-10" title="核算信息">
        <a-descriptions-item label="核算碳排放" span="2">{{ getCarbonAccountingSingle.data.emissionAmount }} 吨
        </a-descriptions-item>
        <a-descriptions-item label="核算创建时间" span="2">{{
            getCarbonAccountingSingle.data.createdAt
          }}
        </a-descriptions-item>
        <a-descriptions-item v-if="viewMaterial" label="原料碳排放">{{ parseJson.materials.carbonEmissions }} 吨
        </a-descriptions-item>
        <a-descriptions-item v-if="viewCourse" label="过程碳排放">{{ parseJson.courses.carbonEmissions }} 吨
        </a-descriptions-item>
        <a-descriptions-item v-if="viewDesulfurization" label="脱硫碳排放">{{
            parseJson.desulfuizations.carbonEmissions
          }} 吨
        </a-descriptions-item>
        <a-descriptions-item v-if="viewCarbonSequestration" label="固碳碳排放">
          {{ parseJson.carbonSequestrations.carbonEmissions }} 吨
        </a-descriptions-item>
        <a-descriptions-item v-if="viewElectricity" label="电力碳排放">{{ parseJson.electric.electricEmissions }} 吨
        </a-descriptions-item>
        <a-descriptions-item v-if="viewHeat" label="热碳排放">{{ parseJson.heat.heatEmissions }} 吨
        </a-descriptions-item>
      </a-descriptions>
      <a-descriptions bordered title="原料信息">
        <a-descriptions-item v-if="viewMaterial" label="排放源" span="4">
          <a-list :data-source="getMaterials.data.materials.materials" item-layout="horizontal">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta>
                  <template #title>{{ getCarbonTypeName(item.name) }} <span class="text-beaver">[{{ item.name }}]</span></template>
                  <template #description>
                    <div class="grid grid-cols-5">
                      <span>购入量：{{ item.material.buy }} 吨</span>
                      <span>期初量：{{ item.material.openingInv }} 吨</span>
                      <span>期末量：{{ item.material.endingInv }} 吨</span>
                      <span>生产外：{{ item.material.outside }} 吨</span>
                      <span>外销量：{{ item.material.export }} 吨</span>
                    </div>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item v-if="viewCourse" label="过程源" span="4">
          <a-list :data-source="getMaterials.data.materials.courses" item-layout="horizontal">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta>
                  <template #title>{{ getFactorProcessName(item.name) }} <span class="text-beaver">[{{ item.name }}]</span></template>
                  <template #description>
                    <div class="grid grid-cols-5">
                      <span>购入量：{{ item.material.buy }} 吨</span>
                      <span>期初量：{{ item.material.openingInv }} 吨</span>
                      <span>期末量：{{ item.material.endingInv }} 吨</span>
                      <span>生产外：{{ item.material.outside }} 吨</span>
                      <span>外销量：{{ item.material.export }} 吨</span>
                    </div>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item v-if="viewCarbonSequestration" label="固碳源" span="4">
          <a-list :data-source="getMaterials.data.materials.carbonSequestrations" item-layout="horizontal">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta>
                  <template #title>{{ getFactorOtherName(item.name) }} <span class="text-beaver">[{{ item.name }}]</span></template>
                  <template #description>
                    <div class="grid grid-cols-3">
                      <span>期初量：{{ item.material.openingInv }} 吨</span>
                      <span>期末量：{{ item.material.endingInv }} 吨</span>
                      <span>外销量：{{ item.material.export }} 吨</span>
                    </div>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item v-if="viewDesulfurization" label="脱硫源" span="4">
          <a-list :data-source="getMaterials.data.materials.desulfurization" item-layout="horizontal">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta>
                  <template #title>{{ getFactorDesulfurizationName(item.name) }} <span class="text-beaver">[{{ item.name }}]</span></template>
                  <template #description>
                    <div class="grid">
                      <span>周期量：{{ item.material.consumption }} 吨</span>
                    </div>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-descriptions-item>
        <a-descriptions-item v-if="viewHeat" label="热源(购入量)" span="1">{{
            getMaterials.data.materials.heats[0].buy
          }}
        </a-descriptions-item>
        <a-descriptions-item v-if="viewHeat" label="热源(生产外)" span="1">
          {{ getMaterials.data.materials.heats[0].outside }}
        </a-descriptions-item>
        <a-descriptions-item v-if="viewHeat" label="热源(外销量)" span="1">{{
            getMaterials.data.materials.heats[0].export
          }}
        </a-descriptions-item>
        <a-descriptions-item v-if="viewElectricity" label="电源(购入量)" span="1">
          {{ getMaterials.data.electric.electricBuy }}
        </a-descriptions-item>
        <a-descriptions-item v-if="viewElectricity" label="电源(生产外)" span="1">
          {{ getMaterials.data.electric.electricOutside }}
        </a-descriptions-item>
        <a-descriptions-item v-if="viewElectricity" label="电源(外销量)" span="1">
          {{ getMaterials.data.electric.electricExport }}
        </a-descriptions-item>
        <a-descriptions-item v-if="viewElectricity" label="电源(电力公司)" span="1">
          {{ getFactorOtherName(getMaterials.data.electric.electricCompany) }}
        </a-descriptions-item>
      </a-descriptions>
      <div class="flex justify-center gap-x-3 mt-6">
        <a-button danger @click="consoleCheckReport(router.currentRoute.value.params.id, 'false')">审核拒绝</a-button>
        <a-button class="border-aspargus text-aspargus" @click="consoleCheckReport(router.currentRoute.value.params.id, 'true')">审核通过</a-button>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import router from "@/router/index.js";
import {onMounted, ref, watch} from "vue";
import {
  checkCarbonReportApi,
  getCarbonAccountingSingleApi,
  getCarbonItemTypeApi,
  getCarbonReportMaterialsApi,
  getCarbonReportSingleApi, getFactorDesulfurizationApi, getFactorOtherApi, getFactorProcessApi
} from "@/api/CarbonApi.js";
import {
  getBackUserDO,
  getCarbonAccountingSingleDO,
  getCarbonReportMaterialsDO,
  getCarbonReportSingleDO, getTypeDO
} from "@/models/DoModel.js";
import {findUserByUuidApi} from "@/api/UserApi.js";
import {message} from "ant-design-vue";

const getCarbonReportSingle = ref(getCarbonReportSingleDO);
const getCarbonAccountingSingle = ref(getCarbonAccountingSingleDO);
const getUserInfo = ref(getBackUserDO);
const getMaterials = ref(getCarbonReportMaterialsDO);
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

// 定义原理内容
const getCarbonType = ref(getTypeDO);
const getFactorProcess = ref(getTypeDO);
const getFactorDesulfurization = ref(getTypeDO);
const getFactorOther = ref(getTypeDO);

onMounted(async _ => {
  getCarbonReportSingle.value = await getCarbonReportSingleApi(router.currentRoute.value.params.id);
  getCarbonAccountingSingle.value = await getCarbonAccountingSingleApi(router.currentRoute.value.params.id);
  getMaterials.value = await getCarbonReportMaterialsApi(router.currentRoute.value.params.id);
  getUserInfo.value = await findUserByUuidApi(getCarbonReportSingle.value.data.organizeUuid);
  getCarbonType.value = await getCarbonItemTypeApi();
  getFactorProcess.value = await getFactorProcessApi();
  getFactorDesulfurization.value = await getFactorDesulfurizationApi();
  getFactorOther.value = await getFactorOtherApi();

  await disassemblyTimeFrame();
  parseJson.value = JSON.parse(getCarbonAccountingSingle.value.data.emissionVolume);
})

// 将时间 20240401-20240407 拆解为 2024年04月01日 和 2024年04月07日
const disassemblyTimeFrame = () => {
  startTime.value = getCarbonReportSingle.value.data.accountingPeriod.substring(0, 4) + '年' + getCarbonReportSingle.value.data.accountingPeriod.substring(4, 6) + '月' + getCarbonReportSingle.value.data.accountingPeriod.substring(6, 8) + '日';
  endTime.value = getCarbonReportSingle.value.data.accountingPeriod.substring(9, 13) + '年' + getCarbonReportSingle.value.data.accountingPeriod.substring(13, 15) + '月' + getCarbonReportSingle.value.data.accountingPeriod.substring(15, 17) + '日';
}

const getCarbonTypeName = (name) => getCarbonType.value.data.find(item => item.name === name).displayName;
const getFactorProcessName = (name) => getFactorProcess.value.data.find(item => item.name === name).displayName;
const getFactorDesulfurizationName = (name) => getFactorDesulfurization.value.data.find(item => item.name === name).displayName;
const getFactorOtherName = (name) => getFactorOther.value.data.find(item => item.name === name).displayName;

async function consoleCheckReport(id, pass) {
  const getReturnData = await checkCarbonReportApi({reportId: id, pass: pass})
  if (getReturnData.output === 'Success') {
    message.success('审核完成');
    await router.push({name: 'DashboardCheckReport'})
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
  if (newValue.carbonSequestrations !== undefined) {
    viewCarbonSequestration.value = true;
  }
  console.log(newValue);
})

</script>
