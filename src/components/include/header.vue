<template>
	<el-row class="header pt10 pb10 pl10 pr10" type="flex" justify="space-between">
	  <el-col>
	  	<el-button type="primary" icon="menu"></el-button>
		<el-button>功能管理</el-button>
		<el-button>设置</el-button>
	  </el-col>
	  <el-col align="right">
	  	<span class="greet">大橘子 欢迎您！</span>
	  	<router-link to="/login" icon="circle-close">退出</router-link>
		<el-button class="exit-btn" type="text" icon="circle-close">退出</el-button>
	  </el-col>
	</el-row>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.header{
	background-color: #eff2f7;
}
</style>
