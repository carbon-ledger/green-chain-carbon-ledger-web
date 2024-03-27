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
import Footer_Second from "@/components/HomeComponents/Footer_Second.vue";
import CarbonAccountingIntro from "@/components/HomeComponents/CarbonAccountingIntro.vue";
import CarbonTradingIntro from "@/components/HomeComponents/CarbonTradingIntro.vue";
import IndustrySolutions from "@/components/HomeComponents/IndustrySolutions.vue";
import Carousel from "@/components/HomeComponents/Carousel.vue";
import ProductFeatures from "@/components/HomeComponents/ProductFeatures.vue";
import Navbar from "@/components/HomeComponents/Navbar.vue";
import OurService from "@/components/HomeComponents/OurService.vue";
</script>