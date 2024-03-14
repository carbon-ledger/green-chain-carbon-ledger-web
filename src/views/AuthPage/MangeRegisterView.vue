<template>
  <div class="md:flex md:h-screen items-center md:justify-end sm:justify-center md:content-around bg-[url('@/assets/images/img2.jpg')]">
    <a-card class="shadow-xl md:w-[calc(65%-5rem)] lg:w-[450px] mx-5 md:mx-10 lg:mx-28 mt-20 md:mt-0">
      <div class="container">
        <div class="row-auto">
          <div  class="row-span-1 my-4 text-center font-bold text-2xl">
            绿链碳系统 - 管理账号注册
          </div>
          <div class="row-span-1 flex justify-center">
            <a-form
                :model="formState"
                name="basic"
                :label-col="{ span: 6}"
                :wrapper-col="{ span: 24 }"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="用户名"
                  :rules="[{ required: true, message: '请输入管理员用户名！' }]"
              >
                <a-input class="w-[250px]" v-model:value="formState.username">
                  <template #prefix><HomeOutlined/></template>
                </a-input>
              </a-form-item>
              <a-form-item
                  label="姓名"
                  :rules="[{ required: true, message: '请输入您的真实姓名！' }]"
              >
                <a-input class="w-[250px]" v-model:value="formState.password">
                  <template #prefix><UserAddOutlined/></template>
                </a-input>
              </a-form-item>
              <a-form-item
                  label="手机号"
                  :rules="[{ required: true, message: '请输入您的手机号！' }]"
              >
                <a-input class="w-[250px]" v-model:value="formState.password">
                  <template #prefix><PhoneOutlined/></template>
                </a-input>
              </a-form-item>
              <a-form-item
                  label="邮箱"
                  :rules="[{ required: true, message: '请输入您的邮箱！' }]"
              >
                <a-input class="w-[250px]" v-model:value="formState.password">
                  <template #prefix><MailOutlined/></template>
                </a-input>
              </a-form-item>
              <a-form-item
                  label="验证码"
                  :rules="[{ required: true, message: '请输入验证码！' }]"
              >
                <a-input class="w-[250px]" v-model:value="formState.password">
                  <template #prefix><CheckOutlined/></template>
                  <template #suffix>
                    <a class="text-spring hover:text-green-500" size="small" @click="handleGetVerificationCode" type="link">获取</a>
                  </template>
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
              <a-form-item class="ml-16" name="remember" >
                <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
                <a class="ml-10 text-spring hover:text-green-500" @click="$router.push('/auth/login')">登录</a>
                <span class="text-spring mx-1">|</span>
                <a class="text-spring hover:text-green-500" @click="$router.push('/auth/register/organize')">注册组织账号</a>
              </a-form-item>
              <a-form-item class="flex justify-center items-center">
                <a-button type="primary" class="w-48 bg-aspargus" html-type="submit" @click="$router.push('/login')">注册</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
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
  LockOutlined, UsergroupAddOutlined
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