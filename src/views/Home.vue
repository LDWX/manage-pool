<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{testVal}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
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
