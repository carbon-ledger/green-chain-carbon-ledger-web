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
        :rules="[{ required: true, message: '开户银行不可缺少' }]"
        class="col-span-6"
        label="开户银行"
        name="legalRepresentativeId"
    >
      <a-input v-model:value="form.accountBank">
        <template #prefix>
          <BankOutlined class="site-form-item-icon"/>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '开户账号不可缺少' }]"
        class="col-span-6"
        label="开户账号"
        name="legalRepresentativeId"
    >
      <a-input v-model:value="form.accountNumber">
        <template #prefix>
          <MoneyCollectOutlined class="site-form-item-icon"/>
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
      <a-button class="bg-aspargus" type="primary" @click="upload()">提交</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup>
import {
  BankOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import {reactive} from "vue";
import {message} from "ant-design-vue";
import moment from "moment";
import {UserVerifyVO} from "@/models/VoModel.js";
import {reviewAddOrganizeApi} from "@/api/ReviewApi.js";

// 获取表单信息
const form = reactive(UserVerifyVO)

async function upload() {
  if (document.getElementById('file_license').files[0] !== undefined) {
    const imgFileLicense = reactive(new FileReader());
    imgFileLicense.readAsDataURL(document.getElementById('file_license').files[0]);
    imgFileLicense.onload = () => {
      form.license = imgFileLicense.result;
      console.debug("OrganizeLicense: ", form.license)
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
      console.debug("LegalIdCardFront: ", form.legalIdCardFront)
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
      console.debug("LegalIdCardBack: ", form.legalIdCardBack)
    };
  } else {
    message.error('法人身份证反面照不可缺少');
    return;
  }
  // 时间格式化
  form.establishmentDate = moment(form.establishmentDate).format('yyyy-MM-DD');
  // 发送数据
  const getReturnData = await reviewAddOrganizeApi(form);
  if (getReturnData.output === "Success") {
    message.success("提交成功");
    await clickLocation()
  }
}

async function clickLocation() {
  window.location.replace('?edit=false');
}
</script>
