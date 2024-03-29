<template>
  <a-layout class="layout">
    <Header>
      <Navbar/>
    </Header>
    <a-layout-content>
      <router-view/>
    </a-layout-content>
      <FooterIndex/>
  </a-layout>
</template>
<script setup>
import FooterIndex from "@/components/HomeComponents/FooterIndex.vue";
import Navbar from "@/components/HomeComponents/Navbar.vue";
</script>