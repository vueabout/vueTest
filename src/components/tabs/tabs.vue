<!--
@tabs组件
@2017-09-12
@负责人:dingwang
@使用方法：(modulecomponent/tabs.vue)
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
      'tabs': require('../../../../src/components/tabs/tabs.vue')
    }
  }
</script>
-->

<style>
  .tabs li {
    display: inline-block;
    height: 30px;
    min-width: 100px;
  }
  .tabs .active {
    border-bottom: 1px solid black;
  }
</style>
<template>
  <div>
    <ul class="tabs">
      <li v-for="(item, index) in tablist" :class="{active: item.active}" @click="chosen(index)" v-text="item.name"></li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tablist: [],
        active: []
      }
    },
    methods: {
      chosen (index) {
        // 取消所有选中状态
        this.tablist.map((item, index) => {
          item.active = false
        })
        this.tablist[index].active = true
        this.active[index] = true
        console.info('tabs this', this)
        this.$children.map((item, index) => {
          item.$data.tabpanel = false
        })
        this.$children[index].$data.tabpanel = true
      },
      getlist () {
        this.$children.map((item, index) => {
          this.tablist.push({
            name: item.name,
            active: item.active
          })
        })
      }
    },
    mounted () {
      this.getlist()
    }
  }
</script>
