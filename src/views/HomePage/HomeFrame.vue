<template>
  <a-layout class="layout">
    <Header>
      <Navbar/>
    </Header>
    <a-layout-content>
      <router-view/>
    </a-layout-content>
      <Footer_Second/>
  </a-layout>
</template>
<script setup>
import Footer_Second from "@/components/HomeComponents/FooterIndex.vue";
import Navbar from "@/components/HomeComponents/Navbar.vue";
</script>