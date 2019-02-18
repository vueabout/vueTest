<template>
  <div class="el-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
import Emitter from '../../../mixins/emitter'
export default {
  name: "ElCheckboxGroup",

  componentName: "ElCheckboxGroup",

  mixins: [Emitter],

  props: {
    value: {}
  },

  watch: {
      value(value) {
        console.log('checkbox-group-value', value)
        this.dispatch('ElFormItem', 'el.form.change', [value]);
      }
    }
};
</script>
<style scoped>
</style>
