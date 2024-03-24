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
      </a-input>
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '请输入组织成立日期！' }]"
        class="col-span-6"
        label="成立日期"
        name="establishmentDate"
    >
      <a-input v-model:value="form.establishmentDate">
        <template #prefix>
          <CalendarOutlined class="site-form-item-icon"/>
        </template>
      </a-input>
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
          id="ledge"
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer"
          type="file">
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '法人身份证正面照不可缺少' }]"
        class="col-span-12"
        label="法人身份证正"
    >
      <input
          id="ledge"
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer"
          type="file">
    </a-form-item>
    <a-form-item
        :rules="[{ required: true, message: '法人身份证反面照不可缺少' }]"
        class="col-span-12"
        label="法人身份证反"
    >
      <input
          id="ledge"
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer"
          type="file">
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
      <a-button class="bg-aspargus" type="primary">提交</a-button>
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
  CalendarOutlined
} from "@ant-design/icons-vue";
import {UserVerifyVO} from "@/assets/js/VoModel.js";

// 获取表单信息
const form = UserVerifyVO
</script>