<template>
  <div class="container w-full">
    <div class="grid gap-3">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 text-xl"><ToolTwoTone /> 修改密码</div>
        <div class="col-span-12">
            <div class="container p-3">
              <div class="row-auto">
                <div class="row-span-1">
                  <a-form
                      :label-col="{ span: 7 }"
                      :model="data"
                  >
                    <a-form-item
                        :rules="[{ required: true, message: '请输入当前密码' }]"
                        label="当前密码"
                        name="currentPassword"
                    >
                      <a-input v-model:value="data.currentPassword">
                        <template #prefix>
                          <MailOutlined class="site-form-item-icon"/>
                        </template>
                      </a-input>
                    </a-form-item>
                    <a-form-item
                        :rules="[{ required: true, message: '请输入新密码' }]"
                        label="新密码"
                        name="newPassword"
                    >
                      <a-input-password v-model:value="data.newPassword">
                        <template #prefix>
                          <SafetyOutlined class="site-form-item-icon"/>
                        </template>
                      </a-input-password>
                    </a-form-item>
                    <a-form-item
                        :rules="[{ required: true, message: '请再输入一次' }]"
                        label="新密码"
                        name="newPassword"
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
import {KeyOutlined, MailOutlined, SafetyOutlined, ToolTwoTone} from "@ant-design/icons-vue";
import { reactive } from 'vue';
import request from "@/assets/js/Request.js";
import {message} from "ant-design-vue";
import requests from "@/assets/js/Request.js";

const data = reactive({
  currentPassword:'',
  newPassword:'',
  newPasswordConfirm:''
})

function ConfirmChange(){
    request.Change(data).then((res) => {
      switch (data.currentPassword){

      }
    })
}
</script>