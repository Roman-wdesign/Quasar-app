<template>
  <div id="q-app">
    <the-menu ></the-menu>
    <router-view />
  </div>
</template>
<script>
import TheMenu from "components/TheMenu";
export default {
  name: 'App',
  components: {TheMenu}
}
</script>
<style lang="scss">
.body--dark {
  background-color: $dark-page;
}
body{
  background-color: #CDE7FD;
}
</style>

