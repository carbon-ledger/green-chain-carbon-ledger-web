<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <a-card class="flex justify-center items-center w-1/4">
      <h1 class="my-5 font-bold text-xl flex justify-center">欢迎使用绿链碳系统</h1>
      <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 24 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            :rules="[{ required: true, message: '请输入管理员用户名！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="管理员用户名" v-model:value="formState.username">
            <template #prefix><HomeOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入您的真实姓名！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="真实姓名" v-model:value="formState.password">
            <template #prefix><UserAddOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入您的手机号！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="请输入您的手机号" v-model:value="formState.password">
            <template #prefix><PhoneOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入您的邮箱！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="邮箱" v-model:value="formState.password">
            <template #prefix><MailOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入验证码！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="请输入验证码" v-model:value="formState.password">
            <template #prefix><CheckOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            <template #suffix>
              <a-button size="small" @click="getVerificationCode" type="link">获取</a-button>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            name="password"
            :rules="[{ required: true, message: '请设置您的密码！' }]"
        >
          <a-input-password style="width: 14vw; border-radius: 0 !important;" placeholder="请设置密码" v-model:value="formState.password">
            <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input-password>
        </a-form-item>
        <a-form-item
            name="password"
            :rules="[{ required: true, message: '请再次确认密码！' }]"
        >
          <a-input-password style="width: 14vw; border-radius: 0 !important;" placeholder="请再次确认密码" v-model:value="formState.password">
            <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input-password>
        </a-form-item>
        <a-form-item name="remember" >
          <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
          <a class="login-form-forgot" style="margin-left: 2.7vw" @click="$router.push('/login')">已有账号？立即登录</a>
        </a-form-item>
        <a-form-item class="flex justify-center items-center">
          <a-button type="primary" class="w-48 bg-blue-500" html-type="submit" @click="$router.push('/login')">注册</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import {
  HomeOutlined,
  UserAddOutlined,
  PhoneOutlined,
  CheckOutlined,
  MailOutlined,
  LockOutlined
} from '@ant-design/icons-vue';

const formState = reactive({
  username: '',
  password: '',
  remember: true,
});
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>