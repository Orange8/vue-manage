<template>
<div class="sidebar">
	<el-row class="tac">
		<el-col class="logo-wrapper" :md="24">
			<img class="logo" src="../assets/logo.svg" alt="广告位招租">
		</el-col>
		<el-col :span="24">
			<el-menu default-active="2" theme="dark" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
		  	<el-submenu index="1">
		    <template slot="title"><i class="el-icon-message"></i>导航一</template>
			    <el-menu-item-group>
			      <template slot="title">分组一</template>
			      <el-menu-item index="1-1">选项1</el-menu-item>
			      <el-menu-item index="1-2">选项2</el-menu-item>
			    </el-menu-item-group>
			    <el-menu-item-group title="分组2">
			      <el-menu-item index="1-3">选项3</el-menu-item>
			    </el-menu-item-group>
			    <el-submenu index="1-4">
			      <template slot="title">选项4</template>
			      <el-menu-item index="1-4-1">选项1</el-menu-item>
			    </el-submenu>
		  	</el-submenu>
		  <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
		  <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
			</el-menu>
		</el-col>
	</el-row>
</div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key);
  },
    handleClose(key, keyPath) {
	  console.log(key);
	}
  }
};
</script>

<style lang="scss">
.sidebar{
	height: 100%;
	background-color: #2f4050;
	.logo-wrapper{
		height: 56px;
		line-height: 56px;
		text-align: center;
		img{
			width: 65%;
			display: inline-block;
			vertical-align: middle;
		}
	}
}
</style>
