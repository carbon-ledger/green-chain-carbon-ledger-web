<template>
  <a-layout class="layout">
    <Navbar/>
    <Carousel />
    <a-layout-content>
      <CarbonAccountingIntro/>
      <CarbonTradingIntro/>
      <ProductFeatures/>
      <IndustrySolutions/>
      <OurService/>
    </a-layout-content>
    <Footer/>
  </a-layout>
</template>

<script>
import Navbar from '@/components/index/Navbar.vue';
import CarbonAccountingIntro from '@/components/index/CarbonAccountingIntro.vue';
import CarbonTradingIntro from '@/components/index/CarbonTradingIntro.vue';
import Footer from '@/components/index/Footer.vue';
import Carousel from "@/components/index/Carousel.vue";
import ProductFeatures from "@/components/index/ProductFeatures.vue";
import IndustrySolutions from "@/components/index/IndustrySolutions.vue";
import OurService from "@/components/index/OurService.vue";

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
