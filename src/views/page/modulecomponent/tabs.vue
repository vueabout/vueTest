<style>

</style>
<template>
  <tabs>
    <tab :name="tab.tab1" :active="active">
      <div>tab1</div>
    </tab>
    <tab :name="tab.tab2">
      <div>tab2</div>
    </tab>
    <tab :name="tab.tab3">
      <div>tab3</div>
    </tab>
  </tabs>
</template>
<script>
  export default {
    data () {
      return {
        tab: {
          tab1: 'tab1',
          tab2: 'tab2',
          tab3: 'tab3'
        },
        active: true
      }
    },
    components: {
      'tabs': require('../../../../src/components/tabs/tabs.vue'),
      'tab': require('../../../../src/components/tabs/tab.vue')
    }
  }
</script>
