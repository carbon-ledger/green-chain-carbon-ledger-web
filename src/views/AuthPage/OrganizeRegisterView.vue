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
            :rules="[{ required: true, message: '请输入您的公司名称！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="请输入您的公司名称" v-model:value="formState.organize">
            <template #prefix><HomeOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入您的姓名！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="请输入您的姓名" v-model:value="formState.username">
            <template #prefix><UserAddOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入您的手机号！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="请输入您的手机号" v-model:value="formState.phone">
            <template #prefix><PhoneOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入您的邮箱！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="请输入您的邮箱" v-model:value="formState.email">
            <template #prefix><PhoneOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入验证码！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="请输入验证码" v-model:value="formState.code">
            <template #prefix><CheckOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            <template #suffix>
              <a-button size="small" @click="handleGetVerificationCode" type="link">获取</a-button>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入邀请码！' }]"
        >
          <a-input style="width: 14vw; border-radius: 0 !important;" placeholder="请输入六位数邀请码" v-model:value="formState.invite">
            <template #prefix><UsergroupAddOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
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
        <a-form-item name="remember" >
          <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
          <a class="login-form-forgot" style="margin-left: 2.7vw" @click="$router.push('/login')">已有账号？立即登录</a>
        </a-form-item>
        <a-form-item class="flex justify-center items-center">
          <a-button type="primary" class="w-48 bg-blue-500" html-type="submit" @click="registerUser()">注册</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import requests from '@/assets/js/request.js'
import {message} from "ant-design-vue";
import {
  HomeOutlined,
  UserAddOutlined,
  PhoneOutlined,
  CheckOutlined,
  UsergroupAddOutlined,
  LockOutlined
} from '@ant-design/icons-vue';
import router from "@/router/index.js";

const data = ref(0);
const uuid = ref(1);
const formState = reactive({
  organize:'',
  username:'',
  phone:'',
  email:'',
  code:'',
  invite:'',
  password:'',
});

const EmailData = reactive({
  email:'',
  template:'user-register',
})


function registerUser() {
  console.log("registerData:",formState)
  requests. OrganizeRegister(uuid.value).then((res) => {
    console.log("registerData:",formState)
    console.log("registerResult:",res)
    if (res.data.code === 200) {
      formState.value = res.data.data
      //注册成功，提示+跳转页面
      console.log('注册成功')
      message.success('注册成功')
      router.push("/login")
    } else {
      //注册失败，消息提示
      console.log('注册失败')
    }
    console.log(res)
  })
}

/*
function getVerificationCode() {
  EmailData.email = formState.email
  requests.GetCode(data.value).then((res) => {
    if (res.data.code === 200) {
      // 成功发送验证码
      message.success('已发送验证码');
    } else {
      // 获取验证码失败，使用res.data.message提供具体的错误信息，如果后端返回了错误信息的话
      console.log('获取验证码失败:', res.data.message || '未知错误');
      message.error(`获取验证码失败: ${res.data.message || '请稍后重试'}`);
    }
  }).catch((error) => {
    // 捕获到请求过程中的异常
    console.error('请求过程中发生错误:', error);
    message.error('请求失败，请检查网络连接并重试');
  });
}

*/

function handleGetVerificationCode() {
  // 准备调用GetCode函数所需的参数
  const requestData = {
    email: formState.email,
    template: "user-register" // 根据实际情况替换模板ID
  };

  requests.GetCode(requestData).then(response => {
    // 这里处理响应，例如根据响应结果显示提示消息
    if (response.data.code === 200) {
      console.log('验证码发送成功', response.data);
      // 显示成功消息...
    } else {
      // 显示失败消息...
      console.error('获取验证码失败', response.data.message);
    }
  }).catch(error => {
    // 处理请求过程中的错误
    console.error('请求验证码时发生错误', error);
    // 显示错误消息...
  });
}


const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>