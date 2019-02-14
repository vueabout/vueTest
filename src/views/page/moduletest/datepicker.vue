<template>
  <div class="test">
    <date-picker v-model="beginTime"></date-picker>
  </div>
</template>

<script>
  import datePicker from '../modulecomponent/datepicker.vue'
  export default {
    data () {
      return {
        beginTime: ''
      }
    },
    props: {

    },
    created () {

    },
    methods: {

    },
    watch: {
      beginTime (newVal) {
        console.log(newVal)
      }
    },
    computed: {

    },
    components: {
      datePicker
    }
  }
</script>
<style>
  .test {
    width: 20px;
  }
</style>
