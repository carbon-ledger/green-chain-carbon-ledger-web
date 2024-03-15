<template>
  <div class="md:flex md:h-screen items-center md:justify-end sm:justify-center md:content-around">
    <a-card
        class="shadow-xl md:w-[calc(60%-5rem)] lg:w-[400px] mx-5 md:mx-10 lg:mx-28 mt-20 md:mt-0"
    >
      <div class="container p-3">
        <div class="row-auto">
          <div class="row-span-1 mb-8 text-center font-bold text-2xl">
            绿链碳账本 - 登录
          </div>
          <div class="row-span-1">
            <a-form
                :label-col="{ span: 5 }"
                :model="loginForm"
                class="login-form"
                name="normal_login"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  :rules="[{ required: true, message: '请输入用户名' }]"
                  label="用户名"
                  name="user"
              >
                <a-input v-model:value="loginForm.user">
                  <template #prefix>
                    <UserOutlined class="site-form-item-icon"/>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                  :rules="[{ required: true, message: '请输入密码' }]"
                  label="密码"
                  name="user"
              >
                <a-input-password v-model:value="loginForm.password">
                  <template #prefix>
                    <KeyOutlined class="site-form-item-icon"/>
                  </template>
                </a-input-password>
              </a-form-item>
              <div class=" text-end mb-3">
                还没有账户? <a class="text-aspargus hover:text-spring" @click="router.push('/auth/register/organize')">注册</a>
              </div>
              <div class="text-center">
                <a-button :disabled="false" class="bg-aspargus" html-type="submit" type="primary"
                          @click="UserLogin()">
                  <div class="mx-10">登录</div>
                </a-button>
              </div>
            </a-form>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue';
import {message} from "ant-design-vue";
import requests from "@/assets/js/request.js";
import {KeyOutlined, UserOutlined} from "@ant-design/icons-vue";
import router from "@/router/index.js";

// 路由表
// 表单登陆
const loginForm = reactive({
  user: '',
  password: ''
});

function UserLogin() {
  if (loginForm.user !== '' && loginForm.password !== '') {
    requests.login(loginForm).then((res) => {
      localStorage.setItem("AuthorizationToken", "Bearer " + res.data.data.token);
      localStorage.setItem("X-Auth-UUID", res.data.data.user.uuid);
      message.success('你好 ' + res.data.data.user.userName + ' 用户')
      setTimeout(() => {
        switch (res.data.data.role.name) {
          case "console":
            router.push("/dashboard/console")
            break
          case "admin":
            router.push("/dashboard/admin")
            break
          case "organize":
            router.push("/dashboard/organize")
            break
          default:
            router.push("/dashboard/default")
        }
      }, 1000)
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
}


const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

onMounted(() => {
  // 检查用户是否已登陆
  requests.getUserCurrent().then((res) => {
    if (res.data.data.uuid !== null) {
      message.success("您已登陆，正在为您跳转至控制台")
      setTimeout(() => {
        // 检查登陆用户组
        switch (res.data.data.role) {
          case "console":
            router.push("/dashboard/console")
            break
          case "admin":
            router.push("/dashboard/admin")
            break
          case "organize":
            router.push("/dashboard/organize")
            break
          default:
            router.push("/dashboard/default")
        }
      }, 1000)
    }
  }).catch((err) => {
    console.warn("[LoginView] 用户未登录，失败缘由 " + err.response.data.output)
  })
})
</script>