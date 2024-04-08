<template>
  <div class="md:flex md:h-screen items-center md:justify-end sm:justify-center md:content-around pb-20">
    <a-card
        class="shadow-xl md:w-[calc(60%-5rem)] lg:w-[450px] mx-5 md:mx-10 lg:mx-36 mt-20 md:mt-0"
    >
      <div class="container p-3">
        <div class="row-auto">
          <div class="row-span-1 mb-8 text-center font-bold text-2xl">
            监管账户注册
          </div>
          <div class="row-span-1">
            <a-form
                :label-col="{ span: 6 }"
                :model="managerRegisterForm"
                name="organize_name"
            >
              <a-form-item
                  :rules="[{ required: true, message: '监管用户名不能为空' }]"
                  label="监管用户名"
                  name="userName"
              >
                <a-input v-model:value="managerRegisterForm.username">
                  <template #prefix>
                    <UserOutlined class="site-form-item-icon"/>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                  :rules="[{ required: true, message: '监管用户真实姓名不能为空' }]"
                  label="真实姓名"
                  name="realName"
              >
                <a-input v-model:value="managerRegisterForm.realname">
                  <template #prefix>
                    <IdcardOutlined class="site-form-item-icon"/>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                  :rules="[{ required: false }]"
                  label="联系电话"
                  name="phone"
              >
                <a-input v-model:value="managerRegisterForm.phone">
                  <template #prefix>
                    <PhoneOutlined class="site-form-item-icon"/>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                  :rules="[{ required: true, message: '请输入账户邮箱' }]"
                  label="账户邮箱"
                  name="email"
              >
                <a-input v-model:value="managerRegisterForm.email">
                  <template #prefix>
                    <MailOutlined class="site-form-item-icon"/>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                  :rules="[{ required: true, message: '请输入邮箱验证码' }]"
                  label="验证码"
                  name="code"
              >
                <a-input v-model:value="managerRegisterForm.code">
                  <template #prefix>
                    <NumberOutlined class="site-form-item-icon"/>
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
                <a-input-password v-model:value="managerRegisterForm.password">
                  <template #prefix>
                    <KeyOutlined class="site-form-item-icon"/>
                  </template>
                </a-input-password>
              </a-form-item>
              <div class=" text-end mb-3">
                已有账户?
                <a class="text-aspargus hover:text-spring" @click="router.push('/auth/userLogin')">登陆</a>
                或 <a class="text-aspargus hover:text-spring"
                      @click="router.push({name: 'OrganizeRegister'})">组织注册</a>
              </div>
              <div class="text-center">
                <a-button :disabled="false" class="bg-aspargus" html-type="submit" type="primary"
                          @click="UserRegister()">
                  <div class="mx-10">注册</div>
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
import {reactive} from 'vue';
import {
  UserOutlined,
  IdcardOutlined,
  PhoneOutlined,
  NumberOutlined,
  MailOutlined,
  KeyOutlined
} from '@ant-design/icons-vue';
import router from "@/router/index.js";
import {message} from "ant-design-vue";
import {managerUserRegisterVO, sendMailVO} from "@/models/VoModel.js";
import {managerRegisterApi} from "@/api/AuthApi.js";
import {sendCodeMailApi} from "@/api/MailApi.js";

const managerRegisterForm = reactive(managerUserRegisterVO);
const requestData = reactive(sendMailVO);

function addZero(i) {
  return i < 10 ? "0" + i : i + "";
}

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

async function UserRegister() {
  if (managerRegisterForm.username !== ''
      && managerRegisterForm.realname !== ''
      && managerRegisterForm.email !== ''
      && managerRegisterForm.code !== ''
      && managerRegisterForm.password !== '') {
    const getReturnData = await managerRegisterApi(managerRegisterForm);
    if (getReturnData.output === "Success") {
      message.success("注册成功，请登录");
      await router.push({name: 'AccountingLogin'});
    }
  } else {
    message.warn("必填项不可缺")
  }
}

function getEmailVerifyCode() {
  document.getElementById('send_button').disabled = true;
  if (managerRegisterForm.email === '' || managerRegisterForm.email === null || managerRegisterForm.email === undefined) {
    message.error('邮箱不能为空');
    document.getElementById('send_button').disabled = false;
    return;
  }
  // 准备调用GetCode函数所需的参数
  requestData.email = managerRegisterForm.email;
  requestData.template = 'user-register';
  setTimeout(async _ => {
    const getReturnData = await sendCodeMailApi(requestData);
    if (getReturnData.output === "Success") {
      message.success('验证码已发送，有效期15分钟');
      await countDown(new Date().getTime() + 120000);
    } else {
      document.getElementById('send_button').disabled = false;
    }
  }, 1);
}
</script>
