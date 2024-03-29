<template>
  <a-card class="col-span-3 shadow-lg grid gap-3">
    <div class="w-full text-center">
      <a-avatar :size="78" :src="getUserAvatar" :draggable="false"/>
    </div>
  </a-card>
  <a-card class="col-span-9 shadow-lg">
    <RouterView/>
  </a-card>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {getUserCurrentApi} from "@/api/UserApi.js";

const getUserAvatar = ref('');
onMounted(async _ => {
  const getData = await getUserCurrentApi();
  if (getData.output === 'Success') {
    if (getData.data.user.avatar === '') {
      getUserAvatar.value = getData.data.user.avatar;
    } else {
      getUserAvatar.value = '/no-image-p.webp';
    }
  }
});
</script>