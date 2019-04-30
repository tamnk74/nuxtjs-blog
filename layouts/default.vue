<template>
  <div id="app">
    <nav-bar/>
    <nuxt/>
  </div>
</template>
<script>
import NavBar from "~/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
<style lang="scss" >
@import "./assets/scss/style";
@import "./assets/scss/index";
</style>