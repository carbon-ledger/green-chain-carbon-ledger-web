<template>
  <MarketNavbar/>
  <div class="p-3 bg-gray-50">
    <div class="grid grid-cols-12 gap-3 px-20">
      <RouterView/>
    </div>
    <DashboardFooter/>
  </div>
</template>

<script setup>
import MarketNavbar from "@/components/BackComponents/Market/MarketNavbar.vue";
import DashboardFooter from "@/components/BackComponents/Dashboard/DashboardFooter.vue";
</script>