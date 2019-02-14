<style>
  #pageChartsBar {
    position: relative;
    width: 100%;
    height: 600px;
    margin: 0 auto;
  }
</style>
<template>
  <div class="content-wrap">
    <div class="pageChartsBar">
      <chart-bar
        :chart-id="'pageChartsBar'"
        :chart-country="pageChartsBarCountry"
        :chart-data="pageChartsBarData"
        :chart-style="screenWidth"></chart-bar>
    </div>
  </div>
</template>
<script type="text/javascript">
  import chartbar from '../../components/chartBar.vue'
  import PageChartsBar from '../../biz/modulerequest/modulecharts/pageChartsBar'
  const biz = new PageChartsBar()

  export default {
    data () {
      return {
        screenWidth: {
          width: ''
        },
        pageChartsBarCountry: [],
        pageChartsBarData: []
      }
    },
    components: {
      'chart-bar': chartbar
    },
    methods: {
      getData () {
        const that = this
        biz.getpageChartsBar('').then(function (data) {
          // 数据处理 这里的data是个对象 有两个值{errno, data}
          that.pageChartsBarData = data.data.data
          that.pageChartsBarCountry = data.data.country
        })
      },
      resize () {
        window.addEventListener('resize', () => {
          const obj = {
            width: document.getElementsByClassName('pageChartsBar').clientWidth + 'px'
          }
          this.screenWidth = {...obj}
        })
      }
    },
    mounted () { // 生命周期钩子created这个钩子在实例被创建之后被调用，this指向实例
      setTimeout(() => {
        const obj = {
          width: document.getElementsByClassName('pageChartsBar').clientWidth + 'px'
        }
        this.screenWidth = {...obj}
      }, 0)
      this.resize()
      this.getData()
    }
  }
</script>
