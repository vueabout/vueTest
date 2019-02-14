<style>

</style>
<template>
  <div>
    <button @click="test">modal open</button>
    <modal ref="name_active" :title="title">
      <div slot="dialog-content">
        <input type="text" value="123">
        <div> wo shi yi ge bing </div>
        <div> wo shi yi ge bing </div>
        <div> wo shi yi ge bing </div>
        <div> wo shi yi ge bing </div>
      </div>
    </modal>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: 'Title'
      }
    },
    methods: {
      test () {
        this.$refs.name_active.$emit('open-dialog')
      }
    },
    components: {
      'modal': require('../../../components/dialog/modal.vue')
    },
    created () {
      console.info('this', this)
    }
  }
</script>
