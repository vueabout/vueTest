<template>
  <div class="date-picker">
    <input class="vue-date-picker-input" v-model="value" @click="panelState = !panelState" readonly>
    <div class="date-panel" v-show="panelState">
      <div class="year-month">
        <span class="year" @click="panelType = 'year'"></span>
        <span class="month" @click="panelType = 'month'"></span>
      </div>
      <div class="type-year" v-show="panelType === 'year'">
        <ul class="year-list">
          <li v-for="item in yearList"
              v-text="item"
              @click="selectYear(item)"
          >
          </li>
        </ul>
      </div>
      <div class="type-month" v-show="panelType === 'month'">
        <div class="year-month">
          <span class="year" @click="panelType = 'year'">{{ currentYear }}年</span>
        </div>
        <ul class="month-list">
          <li v-for="item in monthList"
              v-text="item.name"
              @click="selectMonth(item)"
          >
          </li>
        </ul>
      </div>
      <div class="type-date" v-show="panelType === 'date'">
        <div class="year-month">
          <span class="year" @click="panelType = 'year'">{{ currentYear }}年</span>
          <span class="month" @click="panelType = 'month'">{{ currentMonth + 1 }}月</span>
        </div>
        <ul class="week">
          <li v-for="item in week"
              v-text="item">
          </li>
        </ul>
        <ul class="date-list">
          <li v-for="item in dateList"
              v-text="item.value"
              :class="{preMonth: item.previousMonth, nextMonth: item.nextMonth}"
              @click="selectDate(item)">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        panelState: false, // 初始值，默认panel关闭
        panelType: 'date',
        currentYear: '',
        currentMonth: 0,   // 查八月的
        currentDay: 0,
        yearList: Array.from({length: 12}, (value, index) => new Date().getFullYear() + index),
        date: [],
        monthList: [{name: '一月', num: 0}, {name: '二月', num: 1}, {name: '三月', num: 2}, {name: '四月', num: 3}, {name: '五月', num: 4}, {name: '六月', num: 5}, {name: '七月', num: 6}, {name: '八月', num: 7}, {name: '九月', num: 8}, {name: '十月', num: 9}, {name: '十一月', num: 10}, {name: '十二月', num: 11}],
        week: ['日', '一', '二', '三', '四', '五', '六']
      }
    },
    props: {
      value: String
    },
    created () {
      this.init()
      this.date = this.dateList
    },
    mounted () {

    },
    methods: {
      init () {
        let date = new Date()
        this.currentYear = date.getFullYear()
        this.currentMonth = date.getMonth()
      },
      selectYear (item) {
        this.currentYear = item
        this.panelType = 'date'
      },
      selectMonth (item) {
        this.currentMonth = item.num
      },
      selectDate (item) {
        this.currentDay = item.value
        let value = this.currentYear + '-' + (this.currentMonth + 1) + '-' + this.currentDay
        this.$emit('input', value)
        this.panelState = false
      }
    },
    computed: {
      dateList () {
        // 取得当月的天数
        let currentMonthLength = new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
        // 先将当月的日期塞入dateList
        let dateList = Array.from({length: currentMonthLength}, (val, index) => {
          return {
            currentMonth: true,
            value: index + 1
          }
        })
        // 获取当月1号的星期是为了确定在1号前需要插多少天
        let startDay = new Date(this.currentYear, this.currentMonth, 1).getDay()
        // 确认上个月一共多少天
        let previousMongthLength = new Date(this.currentYear, this.currentMonth, 0).getDate()
        // 在1号前插入上个月日期
        for (let i = 0, len = startDay; i < len; i++) {
          dateList = [{previousMonth: true, value: previousMongthLength - i}].concat(dateList)
        }
        // 补全剩余位置
        for (let i = dateList.length, item = 1; i < 42; i++, item++) {
          dateList[dateList.length] = {nextMonth: true, value: item}
        }
        console.log('dateList', dateList)
        return dateList
      }
    },
    components: {

    }
  }
</script>
<style>
  .date-picker {
    position: relative;
    outline: none;
    width: 260px;
    border: 1px solid #fff;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 8px rgba(0,0,0,.15);
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
    background-clip: padding-box;
    line-height: 1.5;
  }
  .type-date ul {
    padding: 8px 12px;
  }
  .type-date ul li {
    display: inline-block;
    padding: 6px 0;
    line-height: 18px;
    width: 33px;
    text-align: center;
    list-style: none;
  }
  .type-date ul li:active {
    color: #fff;
    background: #40a9ff;
  }
  .type-date ul li:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
  .year-month {
    text-align: center;
  }
  .vue-date-picker-input {
    font-family: Monospaced Number,Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    list-style: none;
    position: relative;
    display: inline-block;
    padding: 4px 11px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
  }
  .preMonth,.nextMonth {
    color: rgba(0,0,0,.25)
  }
  .type-month ul li {
    display: inline-block;
    width: 85px;
    height: 66px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
  }
  .type-month ul li:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
  .type-year ul li {
    display: inline-block;
    width: 85px;
    height: 66px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
  }
  .type-year ul li:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
</style>
