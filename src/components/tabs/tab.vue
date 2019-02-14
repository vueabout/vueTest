<!--
@tabs组件
@2017-09-12
@负责人:dingwang
@使用方法：
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
    components: {
      'tab': require('../../../../src/components/tabs/tab.vue')
    }
  }
</script>
@参数说明：
name    String
active    Boolean   true 默认显示页，只能有一个
-->
<style>
  .tabpanel {
    width: 100%;
    background-color: #fff;
    min-height: 500px;
  }
</style>
<template>
  <div class="tabpanel" v-if="tabpanel">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tabpanel: true
      }
    },
    props: {
      name: String,
      active: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      active: {
        hanlder () {
          this.tabpanel = this.active
        }
      }
    },
    created () {
      this.tabpanel = this.active
    }
  }
</script>
