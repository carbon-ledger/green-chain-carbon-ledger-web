<template>
  <a-layout class="layout">
    <Navbar/>
    <a-layout-content class="mt-[70px]">
      <Carousel />
      <CarbonAccountingIntro/>
      <CarbonTradingIntro/>
      <ProductFeatures/>
      <IndustrySolutions/>
      <OurService/>
    </a-layout-content>
  </a-layout>
</template>

<script>
import Navbar from '@/components/HomeComponents/Navbar.vue';
import CarbonAccountingIntro from '@/components/HomeComponents/CarbonAccountingIntro.vue';
import CarbonTradingIntro from '@/components/HomeComponents/CarbonTradingIntro.vue';
import Footer from '@/components/HomeComponents/Footer.vue';
import Carousel from "@/components/HomeComponents/Carousel.vue";
import ProductFeatures from "@/components/HomeComponents/ProductFeatures.vue";
import IndustrySolutions from "@/components/HomeComponents/IndustrySolutions.vue";
import OurService from "@/components/HomeComponents/OurService.vue";

export default {
  name: 'IndexView',
  components: {
    OurService,
    IndustrySolutions,
    ProductFeatures,
    Carousel,
    Navbar,
    CarbonAccountingIntro,
    CarbonTradingIntro,
    Footer
  }
};
</script>
