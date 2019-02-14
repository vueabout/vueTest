<style>

</style>
<template>
  <input-text :param="param" :value="value"></input-text>
</template>
<script>
  export default {
    data () {
      return {
        value: '123',
        param: {
          type: 'text',
          placeholder: '请输入',
          change (value, param) {
            this.value = value
            console.info('param', this.value, value, param)
          }
        }
      }
    },
    components: {
      'inputText': require('../../../../src/components/input/input-text.vue')
    }
  }
</script>
