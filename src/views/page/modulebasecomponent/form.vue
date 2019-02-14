<template>
  <div>
    <form @submit.prevent="submit">
      <div>
        test:<input type="text" name="user.test" value="wo" v-model="user.test"/>
      </div>
      <div>
        姓名：<Input v-model="user.name" placeholder="请输入..." style="width: 300px"></Input>
      </div>
      <div>
        性別：
        <RadioGroup v-model="user.gender">
          <Radio label="男">
            <span>男</span>
          </Radio>
          <Radio label="女">
            <span>女</span>
          </Radio>
        </RadioGroup>
      </div>
      <input type="submit" value="提交"/>
    </form>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <button @click="commit">提交</button>
  </div>
</template>
<script>
  import ElCheckbox from '@/components/checkbox/src/checkbox.vue'
  import ElCheckboxGroup from '@/components/checkbox/src/checkbox-group.vue'
  export default {
    components: {
      ElCheckbox,
      ElCheckboxGroup
    },
    data () {
      return {
        user: {
          test: '我',
          name: '',
          gender: ''
        },
        checkList: ['选中且禁用', '复选框 A']
      }
    },
    methods: {
      submit () {
        const that = this
        console.info('methods that', that)
        console.info('methods this', this)
        var formData = JSON.stringify(this.user)
        console.info('form data', formData)
      },
      commit () {
        console.log('checkbox', this.checkList)
      }
    },
    mounted () {
      console.info('mounted this', this)
    }
  }
</script>
