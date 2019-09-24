<template>
  <div >
    helloworld
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      testVal: []
    }
  },
  methods: {
    init() {
      const vm = this
      vm.axios.get('/test')
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
