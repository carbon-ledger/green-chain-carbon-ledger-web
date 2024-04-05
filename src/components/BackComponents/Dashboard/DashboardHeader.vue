<template>
  <div class="grid h-full py-3">
    <div class="flex justify-end">
      <a-dropdown :arrow="{ pointAtCenter: true }" placement="bottomRight">
        <a class="ant-dropdown-link text-end" @click.prevent>
          <img :draggable="false" :src="getUserAvatar" alt="UserAvatar" class="rounded-full w-auto h-11">
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item @click="JumpToPersonal">
              <UserOutlined/>
              个人信息
            </a-menu-item>
            <a-menu-item @click="JumpToSystemSetting">
              <SettingOutlined/>
              系统设置
            </a-menu-item>
            <a-menu-divider/>
            <a-menu-item @click="userLogoutApi">
              <LogoutOutlined/>
              账号登出
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup>
import {LogoutOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons-vue';
import {userLogoutApi} from "@/api/AuthApi.js";
import {onMounted, ref} from "vue";
import {getUserCurrentApi} from "@/api/UserApi.js";
import {userCurrentDO} from "@/models/DoModel.js";

const getCurrentUser = ref(userCurrentDO);
const getUserAvatar = ref('');

onMounted(async _ => {
  getCurrentUser.value = await getUserCurrentApi();
  if (getCurrentUser.value.output === 'Success') {
    if (getCurrentUser.value.data.user.avatar === '') {
      getUserAvatar.value = getCurrentUser.value.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
})

function JumpToPersonal() {
  window.location.replace("/user/profile")
}

function JumpToSystemSetting() {
  window.location.replace("/setting")
}
</script>
