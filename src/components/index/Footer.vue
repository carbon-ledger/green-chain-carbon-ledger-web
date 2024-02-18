<template>
  <a-layout-footer class="footer">
    <div class="footer-left">
      <div>&copy; 2023-{{ year }} <a href="https://www.frontleaves.com/" target="_blank">锋楪技术（深圳）有限公司</a>. All Rights Reserved. 版权所有</div>
      <div><hr/></div>
      <div><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备2023097009号</a></div>
      <div>粤公网安备 44030702003207号</div>
    </div>
    <div class="footer-right">
      <div>其他</div>
    </div>
  </a-layout-footer>
</template>

<script setup>
let year = new Date().getFullYear();
</script>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: #001529;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px;
}

.footer-left,
.footer-right {
  display: flex;
  flex-direction: column; /* Stack children vertically */
}

.footer-left > div,
.footer-right > div {
  padding: 2px 0; /* Add padding if needed */
}
</style>
