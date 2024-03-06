<template>
  <a-menu
      :default-selected-keys="state.selectedKeys"
      :open-keys="state.openKeys"
      style="width: 256px"
      mode="inline"
      :items="items"
      @click="handleClick"
      @openChange="onOpenChange"
  ></a-menu>
</template>
<script setup>
import { reactive, ref, watch, h } from 'vue';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import {useRouter} from 'vue-router';

const router = useRouter();
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
  getItem('首页',0),
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


const state = reactive({
  rootSubmenuKeys: ['sub1', 'sub2'],
  openKeys: ['sub1'],
  selectedKeys: [],
});

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
      router.push('/BackPage/main');
      break;
    case '1':
      router.push('/BackPage/console');
      break;
    case '2':
      router.push('/BackPage/analysis');
      break;
    default:
      break;
  }
};
watch(openKeys, val => {
  console.log('openKeys', val);
});
</script>