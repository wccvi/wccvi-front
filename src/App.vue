<template>
  <v-app>
    <navbar></navbar>
  </v-app>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  export default {
    components: {
      'navbar': Navbar
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
