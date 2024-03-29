<template>
  <MarketNavbar/>
  <div class="p-3">
    <div class="grid grid-cols-12 gap-3 px-20">
      <RouterView/>
    </div>
  </div>
  <DashboardFooter/>
</template>

<script setup>

import MarketNavbar from "@/components/BackComponents/Market/MarketNavbar.vue";
import DashboardFooter from "@/components/BackComponents/Dashboard/DashboardFooter.vue";
</script>