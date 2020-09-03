<template>
  <div id="app">
    <router-view></router-view>
    <about></about>
  </div>
</template>

<script>
// 根据环境不同引入不同baseApi地址
// import config from "@/config"; import也可以 但是毕竟是module.export导出的所以用require()接收
// const { title, baseUrl, baseApi, desc, $cdn } = require('@/config')
import About from './views/About'
export default {
  name: 'App',
  components: {
    About
  },
  methods: {
    showInfo() {
      console.log(process.env.NODE_ENV)
    }
  },
  created() {
    // this.showInfo()
    console.log(this.$cdn)
    console.log(this.$api)
  },
  mounted() {
    console.log(100)
  }
}
</script>

<style  lang="scss">
#app {
}
</style>
