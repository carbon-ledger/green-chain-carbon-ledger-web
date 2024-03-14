<template>
  <a-config-provider
      :theme="{
        token: {
          colorPrimary: '#77ad78',
          colorInfo: '#1d7aed'
        }
      }"
  >
    <RouterView/>
  </a-config-provider>
</template>