<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
    init() {
      const vm = this
      // vm.axios.get('/test')
      //   .then(res => {
      //     let data = res.data
      //     // vm.testVal = data
      //     console.log(data)
      //   })
      vm.axios.get('/v1/user/list')
        .then(res => {
          let data = res.data
          vm.testVal = data
          console.log(data)
        })
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
