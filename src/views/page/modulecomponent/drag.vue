<template>
    <div>
        <div class="drop" draggable="true" @dragover="dragOver" @drop="drop(event)">
            <p v-for="(item, index) in toggle.drop" :key="index" draggable="true" @dragover="dragOver(index)" @drop="drop(event)">{{item}}</p>
        </div>
        <div class="drag">
            <p v-for="(item, index) in toggle.drag" :key="index" @dragstart="dragStart(index)" draggable="true">{{item}}</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
      return {
          toggle: {
            
          }
      }
  },
  created() {
    this.$set(this.toggle, 'drop', ["1"]);
    this.$set(this.toggle, 'drag', ["4", "5", "6"]);
  },
  mounted() {
    
  },
  methods: {
      dragStart(index) {
          console.log(index)
      },
      drop(event) {
          console.log('1')
          this.toggle.drop.push('4')
      },
      dragOver() {
          console.log('index')
      }
  }
};
</script>
<style scoped>
.drop  {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background: #ff5858;
    width: 300px;
    height: 200px;
    text-align: center;
    line-height: 100px;
    align-items: center;
}
.drop p {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background: #ff5858;
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 100px;
    align-items: center;
}
.drag p {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background: #33a8ee;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    align-items: center;
}
</style>

