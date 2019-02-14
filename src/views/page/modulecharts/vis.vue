<template>
  <div id="mynetwork" style="width: 100%; height: 600px" >

  </div>
</template>
<script>
  import vis from 'vis'
  import 'vis/dist/vis.min.css'
  export default {
    data () {
      return {
        nodes: null,
        edges: null
      }
    },
    methods: {
      init () {
        this.nodes = new vis.DataSet([
          {id: 1, label: 'Node 1'},
          {id: 2, label: 'Node 2'},
          {id: 3, label: 'Node 3'},
          {id: 4, label: 'Node 4'},
          {id: 5, label: 'Node 5'}
        ])

        this.edges = new vis.DataSet([
          {from: 1, to: 3},
          {from: 1, to: 2},
          {from: 2, to: 4},
          {from: 2, to: 5}
        ])

        var container = document.getElementById('mynetwork')

        var data = {
          nodes: this.nodes,
          edges: this.edges
        }
        var options = {}
        var network = new vis.Network(container, data, options)
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
