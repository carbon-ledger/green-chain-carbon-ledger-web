<template>
  <div class="md:flex md:h-screen items-center md:justify-end sm:justify-center md:content-around pb-20">
    <a-card
        class="shadow-xl md:w-[calc(60%-5rem)] lg:w-[450px] mx-5 md:mx-10 lg:mx-36 mt-20 md:mt-0"
    >
      <div class="container p-3">
        <div class="row-auto">
          <div class="row-span-1 mb-8 text-center font-bold text-2xl">
            绿链碳账本 - 登录
          </div>
          <div class="row-span-1">
            <a-form
                :label-col="{ span: 4 }"
                :model="loginForm"
                class="userLogin-form"
                name="normal_login"
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
                  name="password"
              >
                <a-input-password v-model:value="loginForm.password">
                  <template #prefix>
                    <KeyOutlined class="site-form-item-icon"/>
                  </template>
                </a-input-password>
              </a-form-item>
              <div class="flex justify-end mb-3">
                <div>
                  还没有账户?
                  <a class="text-aspargus hover:text-spring" @click="router.push('/auth/register/organize')">
                    注册
                  </a>
                </div>
                <div class="mx-1">|</div>
                <div>
                  <a class="text-aspargus hover:text-spring" @click="router.push('/auth/forget')">忘记密码？</a>
                </div>
              </div>
              <div class="text-center">
                <a-button :disabled="false" class="bg-aspargus" html-type="submit" type="primary"
                          @click="consoleUserLogin()">
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
import {onMounted, reactive, ref} from 'vue';
import {message} from "ant-design-vue";
import {KeyOutlined, UserOutlined} from "@ant-design/icons-vue";
import router from "@/router/index.js";
import {userLoginVO} from "@/models/VoModel.js";
import {userLoginApi} from "@/api/AuthApi.js";
import {userCurrentDO} from "@/models/DoModel.js";
import {getUserCurrentApi} from "@/api/UserApi.js";

const loginForm = reactive(userLoginVO);
const getUserCurrent = ref(userCurrentDO)

/**
 * 用户进行登陆操作
 * @return {Promise<void>}
 * @constructor
 */
async function consoleUserLogin() {
  if (loginForm.user === '' && loginForm.password === '') {
    message.warn("账户密码不能为空")
    return;
  }
  const getReturnData = await userLoginApi(loginForm);
  switch (getReturnData.output) {
    case "Success":
      localStorage.setItem("AuthorizationToken", "Bearer " + getReturnData.data.token);
      localStorage.setItem("X-Auth-UUID", getReturnData.data.user.uuid);
      if (getReturnData.data.recover) {
        message.success('账户 ' + getReturnData.data.user.userName + ' 用户已取消注销')
      } else {
        message.success('你好 ' + getReturnData.data.user.userName + ' 用户')
      }
      setTimeout(async () => {
        await router.replace({ name: 'Dashboard', replace: true })
      }, 1000);
  }
}

/**
 * 检查用户是否登陆
 * @return {Promise<void>}
 */
async function isUserLogin() {
  switch (getUserCurrent.value.output) {
    case "Success":
      await router.replace({ name: 'Dashboard', replace: true })
      break;
    default:
      if (localStorage.getItem("AuthorizationToken") !== undefined && localStorage.getItem("X-Auth-UUID") !== null) {
        message.warn("您的登陆已失效");
        console.warn("[VIEW] Login[isUserLogin]: 登陆失败，失败原因: " + getUserCurrent.output);
        localStorage.removeItem("AuthorizationToken");
        localStorage.removeItem("X-Auth-UUID");
      }
  }
}

onMounted(async _ => {
  getUserCurrent.value = await getUserCurrentApi();
  await isUserLogin();
})
</script>