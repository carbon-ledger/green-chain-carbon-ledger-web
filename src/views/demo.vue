<template>
  <div>
    <a-transfer
        v-model:target-keys="targetKeys"
        :data-source="mockData"
        :titles="['Source', 'Target']"
        :render="item => item.title"
        @change="handleChange"
        @scroll="handleScroll"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue';
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}
const targetKeys = ref(mockData.filter(item => +item.key % 3 > 1).map(item => item.key));
console.log(mockData)
console.log(targetKeys)
const handleChange = _ => {
  console.log(mockData)
  console.log(targetKeys)
};

const handleScroll = _ => {
  console.log(mockData)
  console.log(targetKeys)
};
</script>