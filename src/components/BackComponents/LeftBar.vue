<template>
  <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      class="h-full w-[280px]"
      mode="inline"
      :items="items"
      @click="handleClick"
  ></a-menu>
</template>
<script setup>
import { reactive, ref, watch, h } from 'vue';
import {HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const selectedKeys = ref(['1']);
const openKeys = ref(['sub1']);
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
  getItem('首页', '0', () => h(HomeOutlined)),
  {
    type: 'divider',
  },
  getItem('控制面板', 'sub1', () => h(AppstoreOutlined), [
    getItem('控制台', '1'),
    getItem('分析页', '2'),
    getItem('监控页', '3'),
  ]),
  {
    type: 'divider',
  },
  getItem('系统管理', 'sub2', () => h(SettingOutlined), [
    getItem('用户管理', '4'),
    getItem('角色管理', '5'),
    getItem('权限管理', '6'),
    getItem('日志管理', '7'),
  ]),
]);

const onOpenChange = (openKeys) => {
  const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1);
  if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    state.openKeys = openKeys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};

const handleClick = (e) => {
  const key = e.key;
  console.log(e.key);
  switch (key) {
    case '0':
      router.push('/backpage/main');
      break;
    case '1':
      router.push('/backpage/console');
      break;
    case '2':
      router.push('/backpage/analysis');
      break;
    case '3':
      router.push('/backpage/monitor');
      break;
    case '4':
      router.push('/backpage/user');
      break;
    default:
      break;
  }
};
watch(openKeys, val => {
  console.log('openKeys', val);
});
</script>