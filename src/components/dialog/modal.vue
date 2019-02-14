<!--
@modal组件
@2017-09-18
@负责人:dingwang
@使用方法：
<template>
  <div>
    <button @click="test">测试</button>
    <modal ref="name_active" :title="title">
      <div slot="dialog-content">
      </div>
    </modal>
  </div>
</template>
<script>
  export default {
    components: {
      'modal': require('../../../components/dialog/modal.vue')
    }
  }
</script>
@参数说明：
test () {
        this.$refs.name_active.$emit('open-dialog')
      }
title    String
公开事件              open-dialog     // 打开窗口
                     close-dialog   // 关闭窗口
-->
<style>
  .dialog-shade {
    position: fixed;
    zoom: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 90;
    background-image: url('../../../src/assets/images/dialog-shade.png');
    display: none;
  }
  .dialog-container {
    position: fixed;
    top:20%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 20px;
    width: 40%;
    background-color: #ffffff;
    border-radius: 20px;
    z-index: 100;
    display: none;
  }
  .active {
    display: block;
  }
  .dialog-title {
    overflow: auto; zoom: 1;
    border-bottom: solid 1px rgb(51, 51, 51);
  }
  .dialog-title .title {
    font-size: 24px;
    font-weight: 200;
    float: left;
    width: 50%;
    text-align: left;
  }
  .dialog-title .dialog-close {
    font-size: 20px;
    float: right;
    width: 50%;
    text-align: right;
  }
  .dialog-footer {
    overflow: auto; zoom: 1;
  }
  .dialog-footer .cancel {
    float: right;
    background-color: #49afcd;
    border-radius: 4px;
    padding: 4px 12px;
    text-align: center;
    border: 1px solid #cccccc;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  }
</style>
<template>
  <section class="dialog">
    <div class="dialog-shade" :class="{active: isactive}"></div>
    <div class="dialog-container" :class="{active: isactive}">
      <div class="dialog-title">
        <span class="title" v-text="title"></span>
        <span class="dialog-close">X</span>
      </div>
      <div class="dialog-content">
        <slot name="dialog-content"></slot>
      </div>
      <div class="dialog-footer">
        <button class="cancel" type="button" @click="close">{{ $t("dialog.cancel") }}</button>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        isactive: false
      }
    },
    props: {
      title: {}
    },
    methods: {
      close () {
        this.isactive = false
      }
    },
    created () {
      // global methods
      this.$on('open-dialog', () => {
        this.isactive = true
      })
      this.$on('close-dialog', () => {
        this.isactive = false
      })
    },
    mounted () {
    }
  }
</script>
