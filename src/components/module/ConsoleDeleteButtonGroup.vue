<script setup>

</script>

<template>
  <a-button key="back" @click="handleCancel">Return</a-button>
  <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
</template>

<style scoped>

</style>