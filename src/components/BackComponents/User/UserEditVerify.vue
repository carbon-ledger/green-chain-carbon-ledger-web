<template>
  <a-form
      :model="form"
      autocomplete="off"
      class="grid grid-cols-12 gap-3"
      name="basic"
  >
    <a-form-item
        :rules="[{ required: true, message: '请输入组织名称！' }]"
        class="col-span-6"
        label="组织名称"
        name="organizeName"
    >
      <a-input v-model:value="form.organizeName">
        <template #prefix>
          <HomeOutlined class="site-form-item-icon"/>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '请输入组织信用代码！' }]"
        class="col-span-6"
        label="信用代码"
        name="creditCode"
    >
      <a-input v-model:value="form.creditCode">
        <template #prefix>
          <CheckCircleOutlined class="site-form-item-icon"/>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '请输入注册资本！' }]"
        class="col-span-6"
        label="注册资本"
        name="registeredCapital"
    >
      <a-input v-model:value="form.registeredCapital">
        <template #prefix>
          <DollarCircleOutlined class="site-form-item-icon"/>
        </template>
        <template #suffix>
          <a-space>万元</a-space>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '请输入组织成立日期！' }]"
        class="col-span-6"
        label="成立日期"
        name="establishmentDate"
    >
      <a-date-picker v-model:value="form.establishmentDate" class="w-full"/>
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '法人姓名不可缺少' }]"
        class="col-span-6"
        label="法人姓名"
        name="legalRepresentativeName"
    >
      <a-input v-model:value="form.legalRepresentativeName">
        <template #prefix>
          <UserOutlined class="site-form-item-icon"/>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '法人身份证号不可缺少' }]"
        class="col-span-6"
        label="身份证号"
        name="legalRepresentativeId"
    >
      <a-input v-model:value="form.legalRepresentativeId">
        <template #prefix>
          <NumberOutlined class="site-form-item-icon"/>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '组织营业执照不可缺少' }]"
        class="col-span-12"
        label="组织营业执照"
    >
      <input
          id="file_license" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer"
          name="file_license"
          required type="file">
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '法人身份证正面照不可缺少' }]"
        class="col-span-12"
        label="法人身份证正"
    >
      <input
          id="file_ledge_front"
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer"
          name="file_ledge_front"
          required type="file">
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '法人身份证反面照不可缺少' }]"
        class="col-span-12"
        label="法人身份证反"
    >
      <input
          id="file_ledge_back"
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer"
          name="file_ledge_back"
          required type="file">
    </a-form-item>
    <a-form-item
        :rules="[{ required: false }]"
        class="col-span-12"
        label="备注内容"
        name="password"
    >
      <a-textarea v-model:value="form.remark" :rows="4"/>
    </a-form-item>
    <a-form-item class="col-span-12 text-center">
      <a-button class="mx-3" danger type="primary" @click="clickLocation()">取消</a-button>
      <a-button class="bg-aspargus mx-3" type="primary" @click="reUpload()">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import {
  UserOutlined,
  NumberOutlined,
  HomeOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons-vue";

import {onMounted, reactive, ref} from "vue";
import moment from "moment";
import {message} from "ant-design-vue";
import {UserVerifyVO} from "@/assets/js/VoModel.js";
import {reviewGetApi, reviewResendOrganizeApi} from "@/api/ReviewApi.js";
import {reviewDO} from "@/assets/js/DoModel.js";

// 获取表单信息
const form = reactive(UserVerifyVO)
const getVerifyInfo = ref(reviewDO);

onMounted(async _ => {
  getVerifyInfo.value = await reviewGetApi();
  await getDataToForm(getVerifyInfo);
})

async function reUpload() {
  if (document.getElementById('file_license').files[0] !== undefined) {
    const imgFileLicense = reactive(new FileReader());
    imgFileLicense.readAsDataURL(document.getElementById('file_license').files[0]);
    imgFileLicense.onload = () => {
      form.license = imgFileLicense.result;
    };
  } else {
    message.error('组织营业执照不可缺少');
    return;
  }
  if (document.getElementById('file_ledge_front').files[0] !== undefined) {
    const imgFileLedgeFront = reactive(new FileReader());
    imgFileLedgeFront.readAsDataURL(document.getElementById('file_ledge_front').files[0]);
    imgFileLedgeFront.onload = () => {
      form.legalIdCardFront = imgFileLedgeFront.result;
    };
  } else {
    message.error('法人身份证正面照不可缺少');
    return;
  }
  if (document.getElementById('file_ledge_back').files[0] !== undefined) {
    const imgFileLedgeBack = reactive(new FileReader());
    imgFileLedgeBack.readAsDataURL(document.getElementById('file_ledge_back').files[0]);
    imgFileLedgeBack.onload = () => {
      form.legalIdCardBack = imgFileLedgeBack.result;
    };
  } else {
    message.error('法人身份证反面照不可缺少');
    return;
  }
  // 时间格式化
  form.establishmentDate = moment(form.establishmentDate).format('yyyy-MM-DD');
  console.log('[EditVerify] 准备提交 `form` 内容:', form)
  // 发送数据
  setTimeout(async _ => {
    const getReturnData = await reviewResendOrganizeApi(form, getVerifyInfo.value.data.id);
    if (getReturnData.output === "Success") {
      message.success("提交成功");
    }
  }, 10);
  setTimeout(async _ => {
    clickLocation()
  }, 500);
}

function clickLocation() {
  window.location.replace('?edit=false');
}

async function getDataToForm(getData) {
  form.organizeName = getData.value.data.organizeName;
  form.creditCode = getData.value.data.organizeCreditCode;
  form.registeredCapital = getData.value.data.organizeRegisteredCapital;
  form.establishmentDate = reactive(moment(getData.value.data.organizeEstablishmentDate + "00:00:00", 'yyyy-MM-DD HH:ii:ss').utc());
  form.legalRepresentativeName = getData.value.data.legalRepresentativeName;
  form.legalRepresentativeId = getData.value.data.legalRepresentativeId;
  form.remark = getData.data.remarks;
}
</script>