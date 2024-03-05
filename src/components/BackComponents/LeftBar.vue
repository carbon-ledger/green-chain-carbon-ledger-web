<template>
  <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="inline"
      :items="items"
      @click="handleClick"
  ></a-menu>
</template>
<script setup>
import { reactive, ref, watch, h } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
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
  getItem('首页',0),
  getItem('控制面板', 'sub2', () => h(AppstoreOutlined), [
    getItem('控制台', '5'),
    getItem('分析页', '6'),
    getItem('监控页', 'sub3'),
  ]),
  {
    type: 'divider',
  },
  getItem('Navigation Three', 'sub4', () => h(SettingOutlined), [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
]);
const handleClick = e => {
  console.log('click', e);
};
watch(openKeys, val => {
  console.log('openKeys', val);
});
</script>