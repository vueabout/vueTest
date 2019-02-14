<style>
  .header {
    width: 100%;
    height: 50px;
    background: #fff;
    position: relative;
    z-index: 10;
  }
  .header .header-left {
    width: 200px;
    height: 50px;
    position: absolute;
    left: 0;
  }
  .header-left img {
    height: 50px;
    width: 100px;
  }
  .header .header-right {
    position: absolute;
    right: 0;
    width: 200px;
    height: 50px;
    font-size: 15px;
  }
  .header .header-language {
    width: 100px;
    height: 50px;
    color: #495060;
  }
  .header-language .language {
    display: inline-block;
    line-height: 20px;
    text-align: center;
    height: 20px;
    width: 40px;
    border: 1px solid #dddee1;
    border-radius: 4px;
    margin-top: 15px;
  }
  .header-language .language:hover {
    border-color: #2d8cf0;
    color: #2d8cf0;
  }
</style>
<template>
  <div class="header">
    <div class="header-left">
      <img src="../assets/img/logo.png">
    </div>
    <div class="header-right">
      <div class="header-language">
        <span class="language" @click = "language">{{  lan }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        lan: 'EN'
      }
    },
    methods: {
      language () {
        if (this.$i18n.locale === 'zh') {
          this.$i18n.locale = 'en'
          this.lan = '中文'
        } else {
          this.$i18n.locale = 'zh'
          this.lan = 'EN'
        }
      }
    }
  }
</script>
