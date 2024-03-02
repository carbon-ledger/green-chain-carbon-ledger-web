<template>
<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
  <a-card style="width: 20vw; display: flex; justify-content: center;  background-color: white">
    <h1 style="margin-top: 2vh">欢迎使用绿链碳系统</h1>
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
            name="username"
            :rules="[{ required: true, message: '请输入您的账号！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="用户名/手机号/邮箱" v-model:value="formState.username">
            <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
            name="password"
            :rules="[{ required: true, message: '请输入您的密码！' }]"
        >
          <a-input-password style="width: 14vw; border-radius: 0 !important;" placeholder="密码" v-model:value="formState.password">
            <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input-password>
        </a-form-item>
        <a-form-item name="remember" >
          <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
          <a class="login-form-forgot" @click="$router.push('/forgetpassword')" style="margin-left: 2vw">忘记密码？ | </a>
          <a class="login-form-forgot" @click="$router.push('/register')">立即注册</a>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
          <a-button type="primary" style="color: white; width: 10vw" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
  </a-card>
</div>
</template>

<script setup>
import { reactive } from 'vue';
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';

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