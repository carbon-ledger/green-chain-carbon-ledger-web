<template>
  <a-carousel autoplay>
    <div class="carousel-item" v-for="(item, index) in items" :key="index">
      <div class="content">
        <h1>{{ item.title }}</h1>
        <p>{{ item.description }}</p>
        <a-button type="primary" @click="handleLearnMore(item.link)">了解更多</a-button>
      </div>
    </div>
  </a-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      items: [
        {title: '碳核算服务', description: '提供全面的碳排放核算，帮助企业准确计算和管理其碳足迹。', link: '/accounting'},
        {
          title: '碳交易平台',
          description: '提供一个透明、安全的碳交易市场，促进碳排放权的有效分配和交易。',
          link: '/trading'
        },
        // 可以根据需要添加更多轮播项
      ],
    };
  },
  methods: {
    handleLearnMore(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
.carousel-item {
  height: 450px; /* 调整高度以适应内容 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  text-align: center; /* 文本居中对齐 */
  background-color: #364d79; /* 示例背景色 */
}

.content {
  text-align: center;
  color: #fff;
}

.content h1 {
  color: #fff; /* 标题颜色 */
  margin-top: 150px; /* 增加间距 */
}

.content p {
  color: #fff; /* 描述文字颜色 */
  margin-bottom: 20px; /* 增加间距 */
}
</style>
