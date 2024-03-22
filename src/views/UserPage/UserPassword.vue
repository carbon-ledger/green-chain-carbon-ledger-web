<template>
  <div class="container w-full">
    <div class="grid gap-3">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 text-xl">
          <ToolTwoTone/>
          修改密码
        </div>
        <div class="col-span-12 px-3 md:px-10 lg:px-20 xl:px-40">
          <div class="container p-3">
            <div class="row-auto">
              <div class="row-span-1">
                <a-form
                    :label-col="{ span: 4 }"
                    :model="data"
                >
                  <a-form-item
                      :rules="[{ required: true, message: '请输入当前密码' }]"
                      label="当前密码"
                      name="currentPassword"
                  >
                    <a-input-password v-model:value="data.currentPassword">
                      <template #prefix>
                        <KeyOutlined class="site-form-item-icon"/>
                      </template>
                    </a-input-password>
                  </a-form-item>
                  <a-form-item
                      :rules="[{ required: true, message: '请输入新密码' }]"
                      label="新密码"
                      name="newPassword"
                      extra="必须包含大小写字母和数字的组合，可以使用特殊字符，长度在6-30之间"
                  >
                    <a-input-password v-model:value="data.newPassword">
                      <template #prefix>
                        <KeyOutlined class="site-form-item-icon"/>
                      </template>
                    </a-input-password>
                  </a-form-item>
                  <a-form-item
                      :rules="[{ required: true, message: '请再输入一次' }]"
                      label="请再输一次"
                      name="newPassword"
                      extra="必须包含大小写字母和数字的组合，可以使用特殊字符，长度在6-30之间"
                  >
                    <a-input-password v-model:value="data.newPasswordConfirm">
                      <template #prefix>
                        <KeyOutlined class="site-form-item-icon"/>
                      </template>
                    </a-input-password>
                  </a-form-item>
                  <div class="text-center">
                    <a-button :disabled="false" class="bg-aspargus" html-type="submit" type="primary"
                              @click="ConfirmChange">
                      <div class="mx-10">确认修改</div>
                    </a-button>
                  </div>
                </a-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {KeyOutlined, ToolTwoTone} from "@ant-design/icons-vue";
import {reactive} from 'vue';
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";

const data = reactive({
  currentPassword: '',
  newPassword: '',
  newPasswordConfirm: ''
})

function ConfirmChange() {
  request.Change(data).then((res) => {
    message.success(res.data.message);
  }).catch((err) => {
    switch (err.response.data.output) {
      case "RequestBodyError":
        message.warn(err.response.data.data[0]);
        break;
      default:
        message.warn(err.response.data.message)
    }
  })
}
</script>