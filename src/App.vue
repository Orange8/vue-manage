<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import index from './pages/index';

  export default {
    name: 'app',
    components: {
      'v-index': index
    }
  };
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .wrapper{
    height: 100%;
  }
  .navbar{
    height: 100%;
  }
  .page-wrapper{
    height: 100%;
  }
}
</style>
