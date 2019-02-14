<style>

</style>
<template>
  <input type="password"
         v-model="val"
         :placeholder="param.placeholder"
         :readonly="param.readonly"
         :maxlength="param.maxlength"
         :minlength="param.minlength"
         @change="change"
         @focus="focus"
         @keyup="keyup"
         @blur="blur"
         @click="click"
  />
</template>
<script>
  export default {
    data () {
      return {
        val: this.value
      }
    },
    props: {
      value: {},
      param: {
        type: Object
      }
    },
    methods: {
      change () {
        if (this.param.change) {
          this.param.change(this.val, this.param)
        }
      },
      focus () {
        if (this.param.focus) {
          this.param.change(this.val, this.param)
        }
      },
      keyup () {
        if (this.param.keyup) {
          this.param.change(this.val, this.param)
        }
      },
      blur () {
        if (this.param.blur) {
          this.param.change(this.val, this.param)
        }
      },
      click () {
        if (this.param.click) {
          this.param.change(this.val, this.param)
        }
      },
      checkValue () {
        // 验证数据 param.checkType
      }
    }
  }
</script>
