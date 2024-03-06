<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <a-card style="width: 20vw; display: flex; justify-content: center;  background-color: white">
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
            name="CurrentPassword"
            :rules="[{ required: true, message: '请输入您的当前密码！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="当前密码" v-model:value="formState.CurrentPassword">
            <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
            name="NewPassword"
            :rules="[{ required: true, message: '请输入您的新密码！' }]"
        >
          <a-input-password style="width: 14vw; border-radius: 0 !important;" placeholder="新密码" v-model:value="formState.NewPassword">
            <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input-password>
        </a-form-item>
        <a-form-item
            name="NewPassword"
            :rules="[{ required: true, message: '请再次输入您的新密码！' }]"
        >
          <a-input-password style="width: 14vw; border-radius: 0 !important;" placeholder="再次输入新密码" v-model:value="formState.NewPassword">
            <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input-password>
        </a-form-item>
        <a-form-item name="remember" >
          <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
          <a class="ml-28" @click="$router.push('/organizeregister')">立即注册</a>
        </a-form-item>
        <a-form-item class="flex justify-center items-center">
          <a-button @click="$router.push('/')" type="primary" class="w-48 bg-blue-500" html-type="submit">确认修改</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';

const formState = reactive({
  CurrentPassword: '',
  NewPassword: '',
  remember: true,
});
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>