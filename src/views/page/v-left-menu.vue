<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
  }
  .layout-assistant{
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
</style>
<template>
  <div class="layout">
    <div class="layout-content">
      <Row>
        <Col span="5">
          <Menu width="auto" :open-names="['1', '2', '3', '4']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                {{ $t("echarts") }}
              </template>
              <router-link :to="{ name: 'pageChartsBar'}"><MenuItem name="1-1">{{ $t("chartsBar") }}</MenuItem></router-link>
              <router-link :to="{ name: 'pageChartsLine'}"><MenuItem name="1-2">{{ $t("chartsLine") }}</MenuItem></router-link>
              <router-link :to="{ name: 'vis'}"><MenuItem name="1-3">{{ $t("vis") }}</MenuItem></router-link>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                {{ $t("baseComponent") }}
              </template>
              <router-link :to="{ name: 'slide'}"><MenuItem name="2-1">{{ $t("slide") }}</MenuItem></router-link>
              <router-link :to="{ name: 'tables'}"><MenuItem name="2-2">{{ $t("tables") }}</MenuItem></router-link>
              <router-link :to="{ name: 'form'}"><MenuItem name="2-3">{{ $t("form") }}</MenuItem></router-link>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                {{ $t("test") }}
              </template>
              <router-link :to="{ name: 'test'}"><MenuItem name="3-1">{{ $t("test") }}</MenuItem></router-link>
              <router-link :to="{ name: 'datepicker'}"><MenuItem name="3-2">{{ $t("datepicker") }}</MenuItem></router-link>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="stats-bars"></Icon>
                {{ $t("component") }}
              </template>
              <router-link :to="{ name: 'tabs'}"><MenuItem name="4-1">{{ $t("tabs") }}</MenuItem></router-link>
              <router-link :to="{ name: 'inputtext'}"><MenuItem name="4-2">{{ $t("inputtext") }}</MenuItem></router-link>
              <router-link :to="{ name: 'inputpassword'}"><MenuItem name="4-3">{{ $t("inputpassword") }}</MenuItem></router-link>
              <router-link :to="{ name: 'dialog'}"><MenuItem name="4-4">{{ $t("modal") }}</MenuItem></router-link>
              <router-link :to="{ name: 'checkbox'}"><MenuItem name="4-4">{{ $t("checkbox") }}</MenuItem></router-link>
              <router-link :to="{ name: 'drag'}"><MenuItem name="4-4">{{ $t("drag") }}</MenuItem></router-link>
            </Submenu>
          </Menu>
        </Col>
        <Col span="19">
          <div class="layout-content-main"><router-view></router-view></div>
        </Col>
      </Row>
    </div>
    <div class="layout-copy">
      2011-2016 &copy; TalkingData
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
