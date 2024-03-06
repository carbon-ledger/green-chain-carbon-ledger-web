<template>
  <div style="display: flex; justify-content: space-between; align-items: center; background-color: #ffffff;">
    <a @click="$router.push('/')">
      <img src="/favicon.ico" alt="LOGO" style="margin-left:2vw; max-width:50%; height:auto; width:5vw; display: block;" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
