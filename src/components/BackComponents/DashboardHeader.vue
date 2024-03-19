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
                <a-menu-item @click="UserLogout">
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
import request from "@/assets/js/request.js";
import {message} from "ant-design-vue";

function JumpToPersonal() {
  window.location.replace("/user/profile")
}

function JumpToSystemSetting() {
  window.location.replace("/setting")
}

// 账号登出
function UserLogout() {
  console.log("[DashboardHeader] 账号 " + " 登出")
  request.userLogout().then((res) => {
    switch (res.data.output) {
      case "Success": {
        console.log("[DashboardHeader] " + res.data.output)
        message.success("账号登出成功")
        localStorage.removeItem("AuthorizationToken")
        localStorage.removeItem("X-Auth-UUID")
        window.location.replace("/auth/login")
        break
      }
      default: {
        console.log("[DashboardHeader] " + res.data.output)
        message.warn("其他错误：" + res.data.message)
      }
    }
  }).catch((err) => {
    console.warn("[DashboardHeader] " + err.response.data.output)
    message.error(err.response.data.message)
  })
}
</script>
