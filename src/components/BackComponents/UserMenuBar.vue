<template>
  <a-menu
      id="UserMenuBar"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      :items="items"
      class="rounded-lg border"
      mode="inline"
      @click="handleClick"
  ></a-menu>
</template>
<script setup>
import {h, reactive, ref, watch} from 'vue';
import {DeleteOutlined, IdcardOutlined, KeyOutlined, LinkOutlined, UserOutlined} from "@ant-design/icons-vue";
import router from "@/router/index.js";

let selectedKeys = ref(['1']);
let openKeys = ref(['sub1']);

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = reactive([
  getItem('个人信息', '1', () => h(UserOutlined)),
  getItem('实名审核', '2', () => h(IdcardOutlined)),
  getItem('修改密码', '3', () => h(KeyOutlined)),
  getItem('登陆状态', '4', () => h(LinkOutlined)),
  getItem('注销账户', '5', () => h(DeleteOutlined))
]);

const handleClick = e => {
  console.log(e)
  switch (e.key) {
    case "2": {
      router.push("/user/verify")
      break;
    }
    case "3": {
      router.push("/user/password")
      break;
    }
    case "4": {
      router.push("/user/connect")
      break;
    }
    case "5": {
      router.push("/user/delete")
      break;
    }
    default: {
      router.push("/user/profile")
    }
  }
};

watch(openKeys, val => {
  console.log('openKeys', val);
});
</script>