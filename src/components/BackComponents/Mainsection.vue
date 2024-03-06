<template>
  <div class="flex">
    <LeftBar></LeftBar>
    <router-view style="width: 85vw;"></router-view>
  </div>
</template>
<script setup>
import LeftBar from "@/components/BackComponents/LeftBar.vue";
</script>