<template>
  <div class="col-span-12">
    <a-page-header
        sub-title="用于在每一个核算周期内或者企业核算周期内进行碳排放统计工作，用于测算和统计组织进行的碳排放。"
        title="创建核算信息"
        @back="() => router.push({name: 'MarketAccounting'})"
    />
    <a-card class="shadow-lg">
      <!-- 创建表单 -->
      <a-form
          :model="createAccountingForm"
          class="grid grid-cols-1 md:grid-cols-2 gap-x-6"
          name="createAccountingForm"
      >
        <a-typography-title :level="4" class="col-span-2 pb-3">
          <EditOutlined/>
          基本信息
        </a-typography-title>
        <!-- 选择核算类型 -->
        <a-form-item
            :rules="[{ required: true, message: '核算类型为必填项' }]"
            label="核算模型"
        >
          <a-select v-model:value="createAccountingForm.type">
            <a-select-option value="steelProduction">中国钢铁生产企业温室气体排放核算方法</a-select-option>
            <a-select-option value="generateElectricity">中国发电企业温室气体排放核算方法</a-select-option>
            <a-select-option disabled>中国电网企业温室气体排放核算方法</a-select-option>
            <a-select-option disabled>中国化工生产企业温室气体排放核算方法</a-select-option>
            <a-select-option disabled>中国电解铝生产企业温室气体排放核算方法</a-select-option>
            <a-select-option disabled>中国镁冶炼企业温室气体排放核算方法</a-select-option>
            <a-select-option disabled>中国平板玻璃生产企业温室气体排放核算方法</a-select-option>
            <a-select-option disabled>中国水泥生产企业温室气体排放核算方法</a-select-option>
            <a-select-option disabled>中国陶瓷生产企业温室气体排放核算方法</a-select-option>
            <a-select-option disabled>中国民航企业温室气体排放核算方法</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item/>
        <!-- 核算开始时间 -->
        <a-form-item
            :rules="[{ required: true, message: '开始时间为必填项' }]"
            label="开始时间"
            name="startTime"
        >
          <a-date-picker
              v-model:value="createAccountingForm.startTime"
              name="startTime"
              placeholder="请选择开始时间"
              style="width: 100%"
          />
        </a-form-item>
        <!-- 核算结束时间 -->
        <a-form-item
            :rules="[{ required: true, message: '结束时间为必填项' }]"
            label="结束时间"
            name="endTime"
        >
          <a-date-picker
              v-model:value="createAccountingForm.endTime"
              placeholder="请选择结束时间"
              style="width: 100%"
          />
        </a-form-item>
        <!-- 核算标题 -->
        <a-form-item
            :rules="[{ required: true, message: '核算标题为必填项' }]"
            class="col-span-2"
            label="核算标题"
            name="title"
        >
          <a-input
              v-model:value="createAccountingForm.title"
              placeholder="请输入核算标题"
          >
            <template #suffix/>
          </a-input>
        </a-form-item>
        <!-- 报告摘要 -->
        <a-form-item
            :rules="[{ required: true, message: '报告摘要为必填项' }]"
            class="col-span-2"
            label="报告摘要"
            name="summary"
        >
          <a-textarea
              v-model:value="createAccountingForm.summary"
              placeholder="请输入报告摘要"
          >
            <template #suffix/>
          </a-textarea>
        </a-form-item>
        <a-typography-title :level="4" class="col-span-2">
          <FileSyncOutlined/>
          材料消耗
        </a-typography-title>
        <MaterialArea v-if="validMaterial"/>
        <CourseArea v-if="validCourse"/>
        <CarbonSequestrationArea v-if="validCarbonSequestration"/>
        <DesulfurizationArea v-if="validDesulfurization"/>
        <HeatArea v-if="validHeat"/>
        <ElectricArea v-if="validElectric"/>
        <DefaultArea v-if="validDefault"/>
        <!-- 提交按钮 -->
        <a-form-item class="col-span-2 text-center">
          <a-button
              class="w-36 bg-aspargus"
              html-type="submit"
              type="primary"
              @click="onFinish()"
          >提交
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import router from "@/router/index.js";
import {onMounted, reactive, ref, watch} from "vue";
import {
  carbonSequestrationAreaVO,
  courseAreaVO,
  desulfurizationAreaVO,
  heatAreaVO,
  materialAreaVO,
  sendAccountingVO
} from "@/models/VoModel.js";
import {EditOutlined, FileSyncOutlined} from "@ant-design/icons-vue";
import MaterialArea from "@/components/MarketComponents/MaterialArea.vue";
import CourseArea from "@/components/MarketComponents/CourseArea.vue";
import CarbonSequestrationArea from "@/components/MarketComponents/CarbonSequestrationArea.vue";
import DesulfurizationArea from "@/components/MarketComponents/DesulfurizationArea.vue";
import HeatArea from "@/components/MarketComponents/HeatArea.vue";
import DefaultArea from "@/components/MarketComponents/DefaultArea.vue";
import ElectricArea from "@/components/MarketComponents/ElectricArea.vue";
import {message} from "ant-design-vue";
import moment from "moment";
import {createCarbonReportApi, getCarbonItemTypeApi} from "@/api/CarbonApi.js";
import {getTypeDO} from "@/models/DoModel.js";

// 获取总表单
const createAccountingForm = reactive(sendAccountingVO);
// 获取每个 form 的内容
const getMaterialAreaForm = reactive(materialAreaVO);
const getCourseAreaForm = reactive(courseAreaVO);
const getCarbonSequestrationAreaForm = reactive(carbonSequestrationAreaVO);
const getDesulfurizationAreaForm = reactive(desulfurizationAreaVO);
const getHeatAreaForm = reactive(heatAreaVO);
// 监听器，监听选择的类型已匹配不同的添加内容的模式
const validMaterial = ref(false);
const validCourse = ref(false);
const validCarbonSequestration = ref(false);
const validDesulfurization = ref(false);
const validHeat = ref(false);
const validElectric = ref(false);
const validDefault = ref(true);
// 获取选择类型
const getCarbonType = ref(getTypeDO);
const getFactorProcess = ref(getTypeDO);
const getFactorDesulfurization = ref(getTypeDO);
const getFactorOther = ref(getTypeDO);

onMounted(async _ => {
  getCarbonType.value = await getCarbonItemTypeApi();
  getFactorProcess.value = await getCarbonItemTypeApi();
  getFactorDesulfurization.value = await getCarbonItemTypeApi();
  getFactorOther.value = await getCarbonItemTypeApi();
})

/**
 * 提交表单
 */
async function onFinish() {
  // 检查选择的内容是否正确
  if (createAccountingForm.type === '请选择类型') {
    message.warn("请选择核算模型");
    return;
  }
  // 检查每一个 Form 表单输入是否有空的内容
  if (validMaterial.value) {
    if (!checkGetMaterialAreaFormHasNullValue(getMaterialAreaForm)) {
      message.warn("提交失败，请检查原料消耗是否填写完整");
      return;
    }
  }
  if (validCourse.value) {
    if (!checkGetCourseAreaFormHasNullValue(getCourseAreaForm)) {
      message.warn("提交失败，请检查课程消耗是否填写完整");
      return;
    }
  }
  if (validCarbonSequestration.value) {
    if (!checkGetCarbonSequestrationAreaFormHasNullValue(getCarbonSequestrationAreaForm)) {
      message.warn("提交失败，请检查碳捕获消耗是否填写完整");
      return;
    }
  }
  if (validDesulfurization.value) {
    if (!checkGetDesulfurizationAreaFormHasNullValue(getDesulfurizationAreaForm)) {
      message.warn("提交失败，请检查脱硫消耗是否填写完整");
      return;
    }
  }
  if (validHeat.value) {
    if (!checkGetHeatAreaFormHasNullValue(getHeatAreaForm)) {
      message.warn("提交失败，请检查热处理消耗是否填写完整");
      return;
    }
  }
  // 对数据进行整合
  const createMaterialsData = {
    materials: getMaterialAreaForm,
    courses: getCourseAreaForm,
    carbonSequestration: getCarbonSequestrationAreaForm,
    desulfurization: getDesulfurizationAreaForm,
    heat: getHeatAreaForm,
  }
  // 数据转义 Json 进行存储进入主要数据主要存储
  createAccountingForm.materials = JSON.stringify(createMaterialsData);
  // 对时间进行处理
  //对开始时间和结束时间进行格式化，格式化为 yyyy-MM-DD
  const startTime = moment(createAccountingForm.startTime);
  const endTime = moment(createAccountingForm.endTime);
  if (createAccountingForm.startTime !== undefined && createAccountingForm.endTime !== undefined) {
    createAccountingForm.startTime = startTime.format('yyyy-MM-DD');
    createAccountingForm.endTime = endTime.format('yyyy-MM-DD');
    console.debug(createAccountingForm);
    const getReturnData = await createCarbonReportApi(createAccountingForm);
    if (getReturnData.output === "Success") {
      message.success("提交成功");
      await router.push({name: "MarketAccounting"});
    }
  } else {
    message.warn("请选择时间范围");
  }
  createAccountingForm.startTime = startTime;
  createAccountingForm.endTime = endTime;
}

const checkGetMaterialAreaFormHasNullValue = (getValues) => {
  let hasNullValue = true;
  getValues.forEach(item => {
    if (item.name === undefined || item.name === null || item.name === "") hasNullValue = false;
    if (item.material.buy === undefined || item.material.buy === null || item.material.buy === "") hasNullValue = false;
    if (item.material.openingInv === undefined || item.material.openingInv === null || item.material.openingInv === "") hasNullValue = false;
    if (item.material.endingInv === undefined || item.material.endingInv === null || item.material.endingInv === "") hasNullValue = false;
    if (item.material.outside === undefined || item.material.outside === null || item.material.outside === "") hasNullValue = false;
    if (item.material.export === undefined || item.material.export === null || item.material.export === "") hasNullValue = false;
  });
  return hasNullValue;
};
const checkGetCourseAreaFormHasNullValue = (getValues) => checkGetMaterialAreaFormHasNullValue(getValues);
const checkGetCarbonSequestrationAreaFormHasNullValue = (getValues) => {
  let hasNullValue = true;
  getValues.forEach(item => {
    if (item.name === undefined || item.name === null || item.name === "") hasNullValue = false;
    if (item.material.openingInv === undefined || item.material.openingInv === null || item.material.openingInv === "") hasNullValue = false;
    if (item.material.endingInv === undefined || item.material.endingInv === null || item.material.endingInv === "") hasNullValue = false;
    if (item.material.export === undefined || item.material.export === null || item.material.export === "") hasNullValue = false;
  });
  return hasNullValue;
}
const checkGetDesulfurizationAreaFormHasNullValue = (getValues) => {
  let hasNullValue = true;
  getValues.forEach(item => {
    if (item.name === undefined || item.name === null || item.name === "") hasNullValue = false;
    if (item.material.consumption === undefined || item.material.consumption === null || item.material.consumption === "") hasNullValue = false;
  });
  return hasNullValue;
}
const checkGetHeatAreaFormHasNullValue = (getValues) => {
  let hasNullValue = true;
  if (getValues.buy === undefined || getValues.buy === null || getValues.buy === "") hasNullValue = false;
  if (getValues.outside === undefined || getValues.outside === null || getValues.outside === "") hasNullValue = false;
  if (getValues.export === undefined || getValues.export === null || getValues.export === "") hasNullValue = false;
  return hasNullValue;
}

/**
 * 监听器，监听选择的类型已匹配不同的添加内容的模式
 */
watch(createAccountingForm, newValue => {
  validMaterial.value = false;
  validCourse.value = false;
  validCarbonSequestration.value = false;
  validDesulfurization.value = false;
  validHeat.value = false;
  validElectric.value = true;
  validDefault.value = false;

  switch (newValue.type) {
    case "steelProduction":
      validMaterial.value = true;
      validCourse.value = true;
      validCarbonSequestration.value = true;
      validHeat.value = true;
      break;
    case "generateElectricity":
      validMaterial.value = true;
      validDesulfurization.value = true;
      break;
    default:
      validDefault.value = true;
      break;
  }
})
</script>