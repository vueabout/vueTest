<!--1. 写input
    2. 写lable
    3. label与input的关联关系： label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。
-->
<template>
  <label
    class="el-checkbox"
    :class="[
      {'is-checked': isChecked},
      {'is-disabled': isDisabled}
    ]"
    role="checkbox"
    :aria-checked="isChecked"
  >
    <span class="el-checkbox__input" aria-checked="mixed">
      <span class="el-checkbox__inner"></span>
    </span>
    <input
      type="checkbox"
      v-model="model"
      aria-hidden="true"
      :name="name"
      :value="label"
      :disabled="isDisabled"
      class="el-checkbox__original"
      @focus="focus = true"
      @blur="focus = false"
      @change="handleChange"
    />
    <span class="el-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
import Emitter from '../../../mixins/emitter'
  export default {
    name: 'ElCheckbox',

    mixins: [Emitter],

    data () {
      return {
        focus: false,
        id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
      }
    },

    props: {
      value: {},
      label: {},
      name: String,
      disabled: Boolean
    },

    created() {
      
    },
    methods: {
      addToStore() {
        if (
          Array.isArray(this.model) &&
          this.model.indexOf(this.label) === -1
        ) {
          this.model.push(this.label);
        } else {
          this.model = this.trueLabel || true;
        }
      },
      handleChange(ev) {
        console.log('handleChange', ev.target.checked)
        let value;
        if (ev.target.checked) {
          value = true;
        } else {
          value = false;
        }
        this.$emit('change', value, ev);
      }
    },

    computed: {
      model: {
        // get() {
        //   // 此处的this.value 是prop属性
        //   return this.value
        // },

        // set(val) {
        //   // 此处的val是用户输入
        //   console.log('输入 set', val)
        //   this.$emit('input', val);
        // },

        get() { // 取值
          return this.isGroup
            ? this.store : this.value !== undefined // 多选组的时候，返回store
              ? this.value : this.selfModel;  // 否则，如果 value 不是未定义，返回 value，要么返回selfModel:来自用户输入
        },

        set(val) { // 赋值
          if (this.isGroup) { // 如果是多选组
            this.isLimitExceeded = false;
            (this._checkboxGroup.min !== undefined &&
              val.length < this._checkboxGroup.min &&
              (this.isLimitExceeded = true));

            (this._checkboxGroup.max !== undefined &&
              val.length > this._checkboxGroup.max &&
              (this.isLimitExceeded = true));

            this.isLimitExceeded === false &&
            this.dispatch('ElCheckboxGroup', 'input', [val]); // 向父组件派发事件
          } else {
            this.$emit('input', val);
            this.selfModel = val; // 此处的val是用户输入
          }
        }
      },

      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElCheckboxGroup') {
            parent = parent.$parent;
          } else {
            this._checkboxGroup = parent; // 拿到checkbox-group 数组值给store
            console.log('_checkboxGroup', this._checkboxGroup)
            return true;
          }
        }
        return false;
      },

      isChecked() {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          console.log(this.model)
          return this.model;
        } else if (Array.isArray(this.model)) { // store返回数组被get 赋值给model 这里根据label来判断选中
          return this.model.indexOf(this.label) > -1;
        } else if (this.model !== null && this.model !== undefined) {
          return this.model === this.trueLabel;
        }
      },

      store() {// 给 get() 取值
        return this._checkboxGroup ? this._checkboxGroup.value : this.value; // 如果是多选框组，优先取多选框数组 this._checkboxGroup.value 输出 []值。
      },

      isDisabled() {
        return this.isGroup
          ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled
          : this.disabled || (this.elForm || {}).disabled;
      }
    },
    
    created() {
      this.checked && this.addToStore();
    }
  }
</script>
<style scoped>
  .el-checkbox {
    position: relative;
    display: inline-block;
    cursor: pointer;
    user-select: none;
  }
  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }
  /* 选中 外部框 */ 
  .is-checked .el-checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;
  }
  /* 禁用 外部框 */ 
  .is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
  }
  /* 未选中 外部框 */ 
  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
  }
  /* 钩子 */
  .is-checked .el-checkbox__inner:after { 
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg);
    width: 3px;
    transition: transform .15s ease-in .05s;
    transform-origin: center;
  }
  /* 隐藏的输入框input */
  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
  /* 文字 */
  .el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
  /* 选中文字 */
  .is-checked .el-checkbox__label {
    color: #409eff;
  }
</style>
