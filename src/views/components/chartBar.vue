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
          color: ['#3398DB'],
          tooltip: {},
          xAxis: {
            data: []
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: []
          }]
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
      chartCountry: {
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
          this.chartOption.xAxis.data = this.chartCountry
          this.chartOption.series[0].data = this.chartData
          this.chartInstance.setOption(this.chartOption)
        }
      }
    },
    mounted () {
    }
  }
</script>
