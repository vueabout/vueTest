<!--<style>-->
  <!--.content-left {-->
    <!--width: 250px;-->
    <!--position: absolute;-->
    <!--left: 0;-->
  <!--}-->
  <!--.content-right {-->
    <!--padding-left: 250px;-->
  <!--}-->
<!--</style>-->
<template>
  <div class="page">
    <v-header></v-header>
    <v-left-menu></v-left-menu>
  </div>
</template>
<script>
  import header from './v-header.vue'
  import vLeftMenu from './v-left-menu.vue'
  export default {
    components: {
      'v-header': header,
      'vLeftMenu': vLeftMenu
    }
  }
</script>
