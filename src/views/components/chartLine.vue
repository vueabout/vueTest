<template>
  <div :id="chartId" :style="chartStyle"></div>
</template>
<script type="text/javascript">
  import echarts from 'echarts'

  export default {
    data () {
      return {
        chartInstance: null,
        isInit: false,
        chartOption: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            data: ['邮件营销', '联盟广告']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
          },
          yAxis: {
            type: 'value'
          },
          series: []
        }
      }
    },
    props: {
      chartId: {
        type: String,
        default: ''
      },
      chartData: {
        type: Array,
        default: function () {
          return []
        }
      },
      chartTime: {
        type: Array,
        default: function () {
          return []
        }
      },
      chartStyle: {
        type: Object,
        default () {
          return {
            width: ''
          }
        }
      }
    },
    watch: {
      'chartData': {
        handler () {
          if (this.isInit) {                // 这里的判断至关重要
            this.chartOption.xAxis.data = this.chartCountry
            this.chartOption.series[0].data = this.chartData
            this.chartInstance.setOption(this.chartOption)
          } else {
            this.isInit = true
            this.chartsInit()
          }
        }
      },
      chartStyle () {
        if (this.chartData !== 0 && this.chartInstance) { // 这里的判断至关重要
          this.chartInstance.resize()
        }
      }
    },
    methods: {
      chartsInit () {
        if (document.getElementById(this.chartId)) {
          this.chartInstance = echarts.init(document.getElementById(this.chartId))
          this.chartOption.xAxis.data = this.chartTime
          this.chartOption.series = this.chartData
          this.chartInstance.setOption(this.chartOption)
        }
      }
    }
  }
</script>
