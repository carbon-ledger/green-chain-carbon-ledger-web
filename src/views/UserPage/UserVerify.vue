<template>
  <div class="container w-full">
    <div class="grid gap-3">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 text-xl"><CheckCircleTwoTone /> 实名认证</div>
        <div class="col-span-12 px-3 md:px-10 lg:px-20 xl:px-40">
          <div class="container p-3">
            <div class="row-auto">
              <a-form
                  :model="verifyForm"
                  name="basic"
                  :label-col="{ span: 4 }"
                  autocomplete="off"
              >
                <a-form-item
                    label="真实姓名"
                    name="realname"
                    :rules="[{ required: true, message: '请输入真实姓名！' }]"
                >
                  <a-input v-model:value="verifyForm.realname">
                    <template #prefix>
                      <UserOutlined class="site-form-item-icon"/>
                    </template>
                  </a-input>
                </a-form-item>

                <a-form-item
                    label="身份证号"
                    name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                  <a-input v-model:value="verifyForm.number">
                    <template #prefix>
                      <NumberOutlined class="site-form-item-icon"/>
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item
                    label="身份证"
                    :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                  <a-upload action="/upload.do" list-type="picture-card">
                    <div>
                      <PlusOutlined />
                      <div style="margin-top: 8px">上传</div>
                    </div>
                  </a-upload>
                </a-form-item>
                <a-form-item class="text-center">
                  <a-button type="primary" class="bg-aspargus">认证</a-button>
                </a-form-item>
              </a-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup>
import {CheckCircleTwoTone, UserOutlined, NumberOutlined ,PlusOutlined } from "@ant-design/icons-vue";
import {reactive} from "vue";

const verifyForm = reactive({
  realname:'',
  number:''
})
</script>