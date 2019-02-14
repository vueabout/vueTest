<style>
  #pageChartsLine {
    position: relative;
    width: 100%;
    height: 600px;
    margin: 0 auto;
  }
</style>
<template>
  <div class="content-wrap">
    <div class="pageChartsLine">
      <chart-line
        :chart-id="'pageChartsLine'"
        :chart-time="pageChartsLineTime"
        :chart-data="pageChartsLineData"
        :chart-style="screenWidth"></chart-line>
    </div>
  </div>
</template>
<script type="text/javascript">
  import chartline from '../../components/chartLine.vue'
  import PageChartsLine from '../../biz/modulerequest/modulecharts/pageChartsLine'
  const biz = new PageChartsLine()
  export default {
    data () {
      return {
        screenWidth: {
          width: ''
        },
        pageChartsLineTime: [],
        pageChartsLineData: []
      }
    },
    components: {
      'chart-line': chartline
    },
    methods: {
      getData () {
        const that = this
        biz.getpageChartsLine('').then(function (data) {
          // 数据处理 这里的data是个对象 有两个值{errno, data}
          that.pageChartsLineTime = data.data.time
          that.pageChartsLineData = data.data.data
        })
      },
      resize () {
        window.addEventListener('resize', () => {
          const obj = {
            width: document.getElementsByClassName('pageChartsLine').clientWidth + 'px'
          }
          this.screenWidth = {...obj}
        })
      }
    },
    mounted () { // 生命周期钩子created这个钩子在实例被创建之后被调用，this指向实例
      setTimeout(() => {
        const obj = {
          width: document.getElementsByClassName('pageChartsLine').clientWidth + 'px'
        }
        this.screenWidth = {...obj}
      }, 0)
      this.resize()
      this.getData()
    }
  }
</script>
