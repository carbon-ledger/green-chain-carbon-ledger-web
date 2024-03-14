<template>
  <div class="relative items-center h-[100vh] bg-[url('@/assets/images/img2.jpg')]">
    <a-card class="absolute right-56 top-56 w-1/5 flex justify-center items-center bg-white">
      <h1 class="my-5 font-bold text-xl flex justify-center">欢迎使用绿链碳系统</h1>
      <a-form
          :label-col="{ span: 8 }"
          :model="formState"
          :wrapper-col="{ span: 24 }"
          autocomplete="off"
          name="basic"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            :rules="[{ required: true, message: '请输入您的账号！' }]"
            name="username"
        >
          <a-input v-model:value="formState.user" class="w-[14vw] rounded-none" placeholder="用户名/手机号/邮箱">
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25)"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            :rules="[{ required: true, message: '请输入您的密码！' }]"
            name="password"
        >
          <a-input-password v-model:value="formState.password" class="w-[14vw] rounded-none" placeholder="密码">
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.25)"/>
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item class="flex items-center whitespace-nowrap" name="remember">
          <a class="w-[2vw] ml-4" @click="$router.push('/forgetpassword')">忘记密码？ | </a>
          <a class="ml-2" @click="$router.push('/organizeregister')">立即注册</a>
        </a-form-item>
        <a-form-item class="flex justify-center items-center">
          <a-button class="w-48 bg-blue-500" html-type="submit" type="primary" @click="LoginUser()">登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import {reactive} from 'vue';
import {message} from "ant-design-vue";
import {LockOutlined, UserOutlined} from '@ant-design/icons-vue';
import requests from "@/assets/js/request.js";
import {useRouter} from "vue-router";

const router = useRouter()
const formState = reactive({
  user: '',
  password: ''
});

function LoginUser() {
  console.log("formState:", formState)
  requests.login(formState).then((res) => {
    localStorage.setItem("AuthorizationToken", "Bearer " + res.data.data.token);
    localStorage.setItem("X-Auth-UUID", res.data.data.user.uuid);
    message.success('你好 ' + res.data.data.user.email + ' 用户')
    router.push("/dashboard")
  }).catch((err) => {
    console.warn("[LoginView] 用户登录失败，失败缘由 " + err.response.data.output)
    switch (err.response.data.output) {
      case "RequestBodyError":
        message.error(err.response.data.data[0])
        break
      default:
        message.error(err.response.data.message)
        break
    }
  });
}


const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>