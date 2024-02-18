<template>
  <a-layout-header class="header">
    <div class="logo" />
    <a-menu theme="dark" mode="horizontal" default-selected-keys="['home']" class="menu-center">
      <a-menu-item key="home">首页</a-menu-item>
      <a-menu-item key="about">关于我们</a-menu-item>
      <a-menu-item key="accounting">碳核算服务</a-menu-item>
      <a-menu-item key="trading">碳交易市场</a-menu-item>
    </a-menu>
    <a-button type="primary" class="management-system">进入管理系统</a-button>
  </a-layout-header>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}

.menu-center {
  flex-grow: 1;
  justify-content: center;
}

.management-system {
  display: flex;
  justify-content: flex-end;
  margin-right: 24px;
}
</style>
