<template>
  <div class="container w-full">
    <div class="grid gap-3">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 text-xl"><PhoneTwoTone /> 当前登陆设备</div>
        <div class="col-span-12">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                >
                  <template #title>
                    <div class="grid">
                      <div>设备IP地址：{{ item.userIp }}</div>
                      <div class="grid grid-cols-2">
                        <div class="text-mount-pink">设备：{{ item.deviceType }}</div>
                        <div class="text-mount-pink">浏览器：{{ item.browserType }}</div>
                        <div class="text-mount-pink">登陆：{{ item.loginTime }}</div>
                        <div class="text-mount-pink">失效：{{ item.expireTime }}</div>
                      </div>
                    </div>
                  </template>
                  <template #avatar>
                    <img class="w-12 h-12 rounded-xl" v-if="item.deviceType.includes('Windows')" src="@/assets/images/drive-windows.webp" alt="WindowsDriver">
                    <img class="w-12 h-12 rounded-xl" v-else-if="item.deviceType.includes('Mac')" src="@/assets/images/drive-mac.webp" alt="MacDriver">
                    <img class="w-12 h-12 rounded-xl" v-else src="@/assets/images/drive-phone.webp" alt="OtherDriver">
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {PhoneTwoTone} from "@ant-design/icons-vue";
import {getLoginInfoRequest} from "@/assets/js/PublishUtil.js";

const data = getLoginInfoRequest()
</script>