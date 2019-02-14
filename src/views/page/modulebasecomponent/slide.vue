<style>
  .ivu-carousel-track {
    height: 620px;
  }
</style>
<template>
  <Carousel autoplay v-model="value2">
    <CarouselItem>
      <div class="demo-carousel">
        <page-charts-bar></page-charts-bar>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">2</div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <tables></tables>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">4</div>
    </CarouselItem>
  </Carousel>
</template>
<script>
  export default {
    data () {
      return {
        value2: 0
      }
    },
    components: {
      'pageChartsBar': require('../modulecharts/pageChartsBar.vue'),
      'tables': require('./tables.vue')
    }
  }
</script>
