<style>
  .table{
    width: 100%;
  }
  .table {
    border: 1px solid #d1d1d1;
  }

  .table tr th,td {
    height: 30px;
    border-left: 1px solid #d1d1d1;
    border-bottom: 1px solid #d1d1d1;
  }
  .hidden {
    display: none;
  }
</style>
<template>
  <div>
    <table class="table">
      <tr style="color: red">
        <th>等级</th>
        <th>层级</th>
        <th>占比</th>
      </tr>
      <tr v-for="(item, index) in changedListAll" :key="index">
        <td :rowspan="item.fieldspan" :class="{hidden: item.fielddis}">{{ item.field }}</td>
        <td :rowspan="item.classspan" :class="{hidden: item.classdis}">{{ item.class }}</td>
        <td :rowspan="item.percentspan" :class="{hidden: item.percentdis}">{{ item.percent}}%</td>
      </tr>
    </table>
    <template>
      <h1>1313131</h1>
      <p>有什么不同吗</p>
      <template>
        <p>有什么不同吗1</p>
      </template>
    </template>
    <checkbox-group v-model="checkGroup">
      <checkbox :disabled="false" label="123"></checkbox>
      <checkbox :disabled="false" label="456"></checkbox>
      <checkbox :disabled="false" label="789"></checkbox>
    </checkbox-group>
    <div v-for="(item, index) in lastChild" :key="index" class="last--test">
      <p>姓名： {{item.name}}</p>
      <p>年龄： {{item.years}}</p>
      <p>store: {{ storename }}</p>
    </div>
  </div>
</template>
<script>
import checkbox from '../../page/modulecomponent/checkbox'
import checkboxGroup from '../../page/modulecomponent/checkbox-group'
export default {
    data () {
      return {
//        list: [{
//          field: 'A',
//          class: '下级',
//          percent: '10',
//          rosfield: '2',
//          rosclass: '1',
//          rospercent: '1',
//          disfield: false
//        }, {
//          field: 'A',
//          class: '下级',
//          percent: '10',
//          rosfield: '1',
//          rosclass: '1',
//          rospercent: '1',
//          disfield: true
//        }]
        list: [{
          field: 'A',
          class: '下级',
          percent: '10'
        }, {
          field: 'A',
          class: '下下级',
          percent: '5'
        }, {
          field: 'A',
          class: '下下下级',
          percent: '1'
        }, {
          field: 'B',
          class: '下级',
          percent: '10'
        }, {
          field: 'C',
          class: '下级',
          percent: '10'
        }, {
          field: 'C',
          class: '下下级',
          percent: '5'
        }],
        lastChild: [{
          name: 'smidth',
          years: '18'
        },
        {
          name: 'kenny',
          years: '16'
        },
        {
          name: 'boday',
          years: '18'
        }],
        changedList: [],
        changedListAll: [],
        checkGroup: ['123', '456'],
        checked: true,
        checked2: true,
        checked3: true
      }
    },
    created () {
//      this.changedList = this.combineCell('field', this.list)
//      console.info('changeList', this.changedList)
      this.changedListAll = this.combineCellAll(this.list)
      console.info('changedListAll', this.changedListAll)
      console.log('checked', this.checked)
    },
    computed: {
      storename () {
        return this.$store.state.user.name
      }
    },
    methods: {
      combineCellAll (list) {
        for (var field in list[0]) {
          var k = 0
          while (k < list.length) {
            list[k][field + 'span'] = 1
            list[k][field + 'dis'] = false
            for (var i = k + 1; i <= list.length - 1; i++) {
              if (list[k][field] === list[i][field] && list[k][field] !== '') {
                list[k][field + 'span']++
                list[k][field + 'dis'] = false
                list[i][field + 'span'] = 1
                list[i][field + 'dis'] = true
              } else {
                break
              }
            }
            k = i
          }
        }
        return list
      },
      combineCell (field, list) {
        var k = 0
        while (k < list.length) {
          list[k][field + 'span'] = 1
          list[k][field + 'dis'] = false
          for (var i = k + 1; i <= list.length - 1; i++) {
            if (list[k][field] === list[i][field] && list[k][field] !== '') {
              list[k][field + 'span']++
              list[k][field + 'dis'] = false
              list[i][field + 'span'] = 1
              list[i][field + 'dis'] = true
            } else {
              break
            }
          }
          k = i
        }
        return list
      }
    },
    watch: {
      checked: function(val) {
        console.log('watch', val)
      }
    },
    components: {
      checkbox,
      checkboxGroup
    }
  }
</script>
<style>
.last--test:last-child {
  color: red;
}
</style>
