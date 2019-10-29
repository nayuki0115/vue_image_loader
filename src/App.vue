<template>
  <div id="app">
    <router-view
      style="width:100%; height:100%; position:absolute"
      v-if="isReloadAlive"
    />
  </div>
</template>

<script>
export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return { isReloadAlive: true }
  },
  methods: {
    reload () {
      this.isReloadAlive = false
      this.$nextTick(function () {
        this.isReloadAlive = true
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  #app {
    font-family: Helvetica, Arial, sans-serif, '微軟正黑體';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
