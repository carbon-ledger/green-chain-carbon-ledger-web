<template>
  <div class="md:flex md:h-screen items-center md:justify-end sm:justify-center md:content-around pb-20">
    <a-card
        class="shadow-xl md:w-[calc(60%-5rem)] lg:w-[450px] mx-5 md:mx-10 lg:mx-36 mt-20 md:mt-0"
    >
      <div class="container p-3">
        <div class="row-auto">
          <div class="row-span-1 mb-8 text-center font-bold text-2xl">
            绿链碳账本 - 忘记密码
          </div>
          <div class="row-span-1">
            <a-form
                :label-col="{ span: 5 }"
                :model="data"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  :rules="[{ required: true, message: '请输入邮箱' }]"
                  label="邮箱"
                  name="email"
              >
                <a-input v-model:value="data.email">
                  <template #prefix>
                    <MailOutlined class="site-form-item-icon"/>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                  :rules="[{ required: true, message: '请输入校验码' }]"
                  label="校验码"
                  name="code"
              >
                <a-input v-model:value="data.code">
                  <template #prefix>
                    <SafetyOutlined class="site-form-item-icon"/>
                  </template>
                  <template #suffix>
                    <a-button id="send_button" class="text-aspargus hover:text-spring" size="small" type="link"
                              @click="getEmailVerifyCode">
                      获取
                    </a-button>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                  :rules="[{ required: true, message: '请输入密码' }]"
                  label="密码"
                  name="password"
              >
                <a-input-password v-model:value="data.password">
                  <template #prefix>
                    <KeyOutlined class="site-form-item-icon"/>
                  </template>
                </a-input-password>
              </a-form-item>
              <a-form-item
                  :rules="[{ required: true, message: '请确认密码' }]"
                  label="确认密码"
                  name="confirmPassword"
              >
                <a-input-password v-model:value="data. confirmPassword">
                  <template #prefix>
                    <KeyOutlined class="site-form-item-icon"/>
                  </template>
                </a-input-password>
              </a-form-item>
              <div class="text-center">
                <a-button :disabled="false" class="bg-aspargus" html-type="submit" type="primary"
                          @click="ForgetPassword">
                  <div class="mx-10">确认修改</div>
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
import { reactive } from 'vue';
import {KeyOutlined, MailOutlined, SafetyOutlined} from "@ant-design/icons-vue";
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";
import requests from "@/assets/js/Request.js";

const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const data = reactive({
  email:'',
  code:'',
  password:'',
  confirmPassword:''
})

function addZero(i) {
  return i < 10 ? "0" + i : i + "";
}

//倒计时
async function countDown(endTime) {
  const now = new Date().getTime();
  const leftTime = parseInt((endTime - now) / 1000);

  if (leftTime > 0) {
    document.getElementById('send_button').innerText = addZero(leftTime) + '秒后重发';
  } else {
    document.getElementById('send_button').disabled = false;
    document.getElementById('send_button').innerText = '获取';
  }
  setTimeout(function () {
    countDown(endTime);
  }, 1000);
}

//获取邮箱验证码
function getEmailVerifyCode() {
  document.getElementById('send_button').disabled = true;
  if (data.email === '' || data.email === null || data.email === undefined) {
    message.error('邮箱不能为空');
    document.getElementById('send_button').disabled = false;
    return;
  }
  // 准备调用GetCode函数所需的参数
  const requestData = {
    email: data.email,
    template: "user-register"
  };
  requests.GetCode(requestData).then(response => {
    countDown(new Date().getTime() + 120000);
    switch (response.data.output) {
      case "Success":
        message.success('验证码已发送，有效期15分钟');
        break;
      default:
        message.error(response.data.output);
    }
  }).catch(error => {
    switch (error.response.data.output) {
      case "VerifyCodeValid":
        message.warn(error.response.data.data.errorMessage);
        break;
      default:
        message.error(error.response.data.output);
    }
  })
}

//忘记密码，确认修改
function ForgetPassword(){
  request.Forget(data).then((res) => {
    message.success(res.data.message)
    setTimeout(() => {
      window.location.replace("/auth/login")
    }, 4000)
  }).catch((err) => {
    message.error(err.response.data.message)
  })
}



</script>