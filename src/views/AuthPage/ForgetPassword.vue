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
                :model="forgetForm"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  :rules="[{ required: true, message: '请输入邮箱' }]"
                  label="邮箱"
                  name="email"
              >
                <a-input v-model:value="forgetForm.user">
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
                <a-input v-model:value="forgetForm.code">
                  <template #prefix>
                    <SafetyOutlined class="site-form-item-icon"/>
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                  :rules="[{ required: true, message: '请输入密码' }]"
                  label="密码"
                  name="password"
              >
                <a-input-password v-model:value="forgetForm.password">
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
                <a-input-password v-model:value="forgetForm. confirmPassword">
                  <template #prefix>
                    <KeyOutlined class="site-form-item-icon"/>
                  </template>
                </a-input-password>
              </a-form-item>
              <div class="text-center">
                <a-button :disabled="false" class="bg-aspargus" html-type="submit" type="primary"
                          @click="UserLogin()">
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
import {onMounted, reactive} from 'vue';
import router from "@/router/index.js";
import {KeyOutlined, MailOutlined, SafetyOutlined} from "@ant-design/icons-vue";

const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const forgetForm = reactive({
  email:'',
  code:'',
  password:'',
  confirmPassword:''
})
</script>