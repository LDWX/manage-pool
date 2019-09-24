<template>
  <div id="app">
    <v-header></v-header>
    <v-navigate></v-navigate>
    <div  class="g-body">
      <router-view class="g-wrapper"/>

    </div>
      <!-- <router-view class="g-body"/> -->
  </div>
</template>
<script>
import vHeader from '@/components/layout/header.vue'
import vNavigate from '@/components/layout/navigate.vue'
export default {
  name: 'app',
  components: {
    vHeader,
    vNavigate,
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
}
.g-body {
  // box-sizing: content-box;
  // padding: 60px 0 0 200px;
  // height: 100%;
  position: absolute;
  top: 60px;
  left: 200px;
  right: 0;
  bottom: 0;
  background: pink;
  // min-width: 900px;
  overflow-x: auto;
}
.g-wrapper {
  position: relative;
  background: red;
  width: 1000px;
  min-width: 900px;
  // overflow-x: auto;
}

</style>
