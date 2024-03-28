<template>
  <a-menu
      id="UserMenuBar"
      v-model:selectedKeys="selectedKey"
      :items="items"
      class="rounded-lg border"
      mode="inline"
      @click="handleClick"
  ></a-menu>
</template>
<script setup>
import {h, reactive, ref} from 'vue';
import {DeleteOutlined, IdcardOutlined, KeyOutlined, LinkOutlined, UserOutlined} from "@ant-design/icons-vue";
import router from "@/router/index.js";

let selectedKey = ref(['1']);

const getItem = (label, key, icon, children, type) => {
  return {key, icon, children, label, type};
}

const items = reactive([
  getItem('个人信息', '1', () => h(UserOutlined)),
  getItem('实名审核', '2', () => h(IdcardOutlined)),
  getItem('修改密码', '3', () => h(KeyOutlined)),
  getItem('登陆状态', '4', () => h(LinkOutlined)),
  getItem('注销账户', '5', () => h(DeleteOutlined))
]);

const handleClick = selectInfo => {
  switch (selectInfo.key) {
    case "2":
      router.push({name: 'UserVerify'})
      break;
    case "3":
      router.push({name: 'UserPassword'})
      break;
    case "4":
      router.push({name: 'UserConnect'})
      break;
    case "5":
      router.push({name: 'UserDelete'})
      break;
    default:
      router.push({name: 'UserProfile'})
  }
};

switch (router.currentRoute.value.name) {
  case "UserVerify":
    selectedKey.value = ["2"];
    break;
  case "UserPassword":
    selectedKey.value = ["3"];
    break;
  case "UserConnect":
    selectedKey.value = ["4"];
    break;
  case "UserDelete":
    selectedKey.value = ["5"];
    break;
  default:
    selectedKey.value = ["1"];
}
</script>