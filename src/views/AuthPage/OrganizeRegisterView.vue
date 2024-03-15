<template>
  <div class="md:flex md:h-screen items-center md:justify-end sm:justify-center md:content-around bg-[url('@/assets/images/img1.jpg')]">
    <a-card class="shadow-xl md:w-[calc(65%-5rem)] lg:w-[450px] mx-5 md:mx-10 lg:mx-28 mt-20 md:mt-0">
      <div class="container p-3">
        <div class="row-auto">
          <div  class="row-span-1 mb-8 text-center font-bold text-2xl">
            绿链碳系统 - 组织账号注册
          </div>
          <div class="row-span-1 flex justify-center">
            <a-form
                :label-col="{ span: 6 }"
                :model="formState"
                name="basic"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="公司名称"
                  :rules="[{ required: true, message: '请输入您的公司名称！' }]"
              >
                <a-input class="w-[250px]" v-model:value="formState.organize">
                  <template #prefix><HomeOutlined/></template>
                </a-input>
              </a-form-item>
              <a-form-item
                  label="姓名"
                  :rules="[{ required: true, message: '请输入您的姓名！' }]"
              >
                <a-input class="w-[250px]" v-model:value="formState.username">
                  <template #prefix><UserAddOutlined/></template>
                </a-input>
              </a-form-item>
              <a-form-item
                  label="手机号"
                  :rules="[{ required: true, message: '请输入您的手机号！' }]"
              >
                <a-input class="w-[250px]" v-model:value="formState.phone">
                  <template #prefix><PhoneOutlined/></template>
                </a-input>
              </a-form-item>
              <a-form-item
                  label="邮箱"
                  :rules="[{ required: true, message: '请输入您的邮箱！' }]"
              >
                <a-input class="w-[250px]" v-model:value="formState.email">
                  <template #prefix><MailOutlined/></template>
                </a-input>
              </a-form-item>
              <a-form-item
                  label="验证码"
                  :rules="[{ required: true, message: '请输入验证码！' }]"
              >
                <a-input class="w-[250px]" v-model:value="formState.code">
                  <template #prefix><CheckOutlined/></template>
                  <template #suffix>
                    <a class="text-spring hover:text-green-500" size="small" @click="handleGetVerificationCode" type="link">获取</a>
                    <!--              <a-button class="text-spring hover:text-green-500" size="small" @click="handleGetVerificationCode" type="link">获取</a-button>-->
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                  label="邀请码"
                  :rules="[{ required: true, message: '请输入邀请码！' }]"
              >
                <a-input class="w-[250px]" v-model:value="formState.invite">
                  <template #prefix><UsergroupAddOutlined/></template>
                </a-input>
              </a-form-item>
              <a-form-item
                  label="密码"
                  name="password"
                  :rules="[{ required: true, message: '请设置您的密码！' }]"
              >
                <a-input-password class="w-[250px]" v-model:value="formState.password">
                  <template #prefix><LockOutlined/></template>
                </a-input-password>
              </a-form-item>
              <a-form-item class="text-end" name="remember" >
                <a class="ml-10 text-spring hover:text-green-500" @click="$router.push('/auth/login')">登录</a>
                <span class="text-spring mx-1">|</span>
                <a class="text-spring hover:text-green-500" @click="$router.push('/auth/register/manager')">注册管理账号</a>
              </a-form-item>
              <a-form-item class="flex justify-center items-center">
                <a-button type="primary" class="w-48 bg-aspargus" html-type="submit" @click="registerUser()">注册</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
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
  LockOutlined,
  MailOutlined
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