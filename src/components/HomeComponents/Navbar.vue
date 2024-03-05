<template>
  <div style="display: flex; justify-content: space-between; align-items: center; background-color: #ffffff;">
    <a @click="$router.push('/')">
      <img src="/favicon.ico" alt="LOGO" style="margin-left:2vw; max-width:50%; height:auto; width:5vw; display: block;" />
    </a>
    <a-menu mode="horizontal" style="flex-grow: 1; justify-content: center;">
      <a-menu-item key="home" @click="$router.push('/')">首页</a-menu-item>
      <a-menu-item key="about">关于我们</a-menu-item>
      <a-menu-item key="accounting" @click="$router.push('/CarbonAccounting')">碳核算服务</a-menu-item>
      <a-menu-item key="trading" @click="$router.push('/CarbonTrading')">碳交易平台</a-menu-item>
    </a-menu>
    <a-button type="link" @click="$router.push('/login')">登录</a-button>
    <a-button type="link" style="margin-right: 2vw" @click="$router.push('/register')">注册</a-button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
