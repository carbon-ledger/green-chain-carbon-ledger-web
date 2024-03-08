<template>
  <div class="carbon-accounting-container" @click="$router.push('/CarbonAccounting')">
    <h1 class="title">碳核算服务</h1>
    <div class="description">
      提供全面的碳排放核算，帮助企业准确计算和管理其碳足迹。
    </div>
    <div class="images-container">
      <div class="row">
        <!-- 第一行图片及描述 -->
        <div class="image-container">
          <img class="image" src="/favicon.ico" alt="描述1" />
          <div class="image-description">图片描述1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarbonAccountingIntro',
};
</script>

<style scoped>
.carbon-accounting-container {
  text-align: left;
  padding: 20px;
}

.title,
.description {
  text-align: center;
}

.images-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  justify-content: center; /* 中心对齐替换为 space-between */
  flex-wrap: wrap; /* 允许项目换行 */
  gap: 100px; /* 替换 margin，简化间距设置 */
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* 垂直居中图片和描述 */
  margin: 50px; /* 保持一些外边距 */
}

.image {
  /* 保持图片原始大小，不超过容器宽度 */
  max-width: 50%;
  height: auto;
  width: 200px;
  display: block; /* 避免默认的行内样式，确保可以应用margin */
}

.image-description {
  margin-top: 10px; /* 描述与图片间距 */
}
</style>
