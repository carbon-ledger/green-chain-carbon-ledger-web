<template>
  <div class="flex h-full py-3">
    <div class="flex flex-1">
      <div class="flex">
        <div class="flex flex-1 justify-end">
          <a-dropdown :arrow="{ pointAtCenter: true }" placement="bottomRight">
            <a class="ant-dropdown-link" @click.prevent>
              <img alt="UserAvatar" class="rounded-full w-auto h-full" src="https://api.x-lf.cn/avatar/?uid=1">
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
    </div>
  </div>
</template>

<script setup>
import {LogoutOutlined, UserOutlined, SettingOutlined} from '@ant-design/icons-vue';
import {userLogoutApi} from "@/api/AuthApi.js";

function JumpToPersonal() {
  window.location.replace("/user/profile")
}

function JumpToSystemSetting() {
  window.location.replace("/setting")
}
</script>
