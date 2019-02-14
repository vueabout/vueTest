<style>

</style>
<template>
  <!--<input v-model="modelvalue">-->
  <input-password :param="param" :value="value"></input-password>
</template>
<script>
  export default {
    data () {
      return {
        value: 123,
        param: {
          type: 'text',
          minlength: 6,
          maxlength: 15,
          placeholder: '请输入',
          change (value, param) {
            this.value = value
            console.info('param', this.value, value, param)
          }
        }
      }
    },
    components: {
      'inputPassword': require('../../../../src/components/input/input-password.vue')
    }
  }
</script>
