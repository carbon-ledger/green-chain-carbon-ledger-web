<template>
  <div class="flex relative h-screen">
    <LeftBar></LeftBar>
    <router-view style="width: 85vw;"></router-view>
    <Last class="absolute bottom-0"></Last>
  </div>
</template>
<script setup>
import LeftBar from "@/components/BackComponents/LeftBar.vue";
import Last from "@/components/BackComponents/Last.vue";
</script>