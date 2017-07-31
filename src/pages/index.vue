<template>
  <el-row class="wrapper">
    <el-col class="navbar" :xs="2" :sm="2" :md="4">
      <v-sidebar></v-sidebar>
    </el-col>
    <el-col class="page-wrapper" :xs="22" :sm="22" :md="20">
      <v-header></v-header>
      <v-main></v-main>
    </el-col>
  </el-row>
</template>

<script>
import header from '../components/header';
import sidebar from '../components/sidebar';
import main from '../components/main';

export default {
  components: {
    'v-header': header,
    'v-sidebar': sidebar,
    'v-main': main
  }
};
</script>

<style lang="scss">

</style>
