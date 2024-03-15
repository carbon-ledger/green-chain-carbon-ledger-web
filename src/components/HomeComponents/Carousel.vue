<template>
  <a-carousel autoplay>
    <div class="h-[600px] flex flex-col justify-center items-center text-center bg-center bg-cover" v-for="(item, index) in items" :key="index">
      <div class="text-center text-gray-800 h-full">
        <h1 class="text-gray-200">{{ items.title }}</h1>
        <p class="text-gray-200">{{ items.description }}</p>
        <a-button class="mt-2 bg-aspargus" type="primary" @click="handleLearnMore(item.link)">了解更多</a-button>
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
          link: '/trading',
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
