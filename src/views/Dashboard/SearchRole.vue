<template>
  <a-input-search v-model:value="data.search" placeholder="请输入角色名" enter-button/>
</template>


<script setup>
import {reactive, ref} from 'vue';

const data = reactive({
  type: 'all',
  search: '',
  limit: '',
  page: '',
  order: 'asc'
});

</script>

