<template>
  <div class="col-span-2">
    <a-empty :image="simpleImage" />
  </div>
</template>
<script setup>
import { Empty } from 'ant-design-vue';
const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
</script>