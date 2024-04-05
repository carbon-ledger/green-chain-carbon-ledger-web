<template>
  <div class="container w-full">
    <div class="grid gap-3">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 text-xl">
          <ToolTwoTone/>
          修改密码
        </div>
        <div class="col-span-12 px-3 sm:px-6 md:px-10 lg:px-20 xl:px-30">
          <div class="container p-3">
            <div class="row-auto">
              <div class="row-span-1">
                <a-form
                    :label-col="{ span: 5 }"
                    :model="userChangePassword"
                >
                  <a-form-item
                      :rules="[{ required: true, message: '请输入当前密码' }]"
                      label="当前密码"
                      name="currentPassword"
                  >
                    <a-input-password v-model:value="userChangePassword.currentPassword">
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
                    <a-input-password v-model:value="userChangePassword.newPassword">
                      <template #prefix>
                        <KeyOutlined class="site-form-item-icon"/>
                      </template>
                    </a-input-password>
                  </a-form-item>
                  <a-form-item
                      :rules="[{ required: true, message: '请再输入一次' }]"
                      label="请再输一次"
                      name="newPasswordConfirm"
                  >
                    <a-input-password v-model:value="userChangePassword.newPasswordConfirm">
                      <template #prefix>
                        <KeyOutlined class="site-form-item-icon"/>
                      </template>
                    </a-input-password>
                  </a-form-item>
                  <div class="text-center">
                    <a-button :disabled="false" class="bg-aspargus" html-type="submit" type="primary"
                              @click="consoleConfirmChangUserPassword" :loading="isLoading">
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
import {reactive, ref} from 'vue';
import {userChangePasswordVO} from "@/models/VoModel.js";
import {userPasswordChangeApi} from "@/api/AuthApi.js";
import router from "@/router/index.js";
import {message} from "ant-design-vue";

const userChangePassword = reactive(userChangePasswordVO)
const isLoading = ref(false);

async function consoleConfirmChangUserPassword() {
  // 数据校验
  if (userChangePassword.newPasswordConfirm === '' || userChangePassword.newPassword === '' || userChangePassword.currentPassword === '') {
    message.warn("数据不完整");
    return;
  }
  if (userChangePassword.currentPassword === userChangePassword.newPassword) {
    message.warn("修改密码不能与原密码相同");
    return;
  }
  if (userChangePassword.newPassword !== userChangePassword.newPasswordConfirm) {
    message.warn("两次密码不一致");
    return;
  }
  isLoading.value = true;
  const getReturnData = await userPasswordChangeApi(userChangePassword);
  switch (getReturnData.output) {
    case "Success":
      // 删除 token 信息
      localStorage.removeItem("AuthorizationToken");
      localStorage.removeItem("X-Auth-UUID");
      message.success("密码修改完毕");
      setTimeout(_ => {
        router.replace({ name: 'LoginAccount', replace: true });
      }, 500)
  }
  isLoading.value = false;
}
</script>