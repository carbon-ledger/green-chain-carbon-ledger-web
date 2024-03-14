<template>
  <a-config-provider
      :theme="{
        token: {
          colorPrimary: '#337155',
        }
      }"
  >
    <RouterView/>
  </a-config-provider>
</template>