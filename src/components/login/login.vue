<template>
	<el-row class="login" type="flex" justify="center">
		<el-col class="login-center" :md="12">
			<i class="login-icon"></i>
			<h1>Element后台管理</h1>
			<form>
				<el-input class="mb10" v-model="input" placeholder="用户名"></el-input>
				<el-input class="mb10" v-model="input" placeholder="密码"></el-input>
				<el-button class="login-btn" type="primary">登录</el-button>
			</form>
		</el-col>
	</el-row>
</template>

<script>
export default{
	data: function(){
		return {
			input: ''
		};
	}
};
</script>

<style lang="scss">
.login{
	width: 100%;
	height: 100%;
	background-color: #f3f3f4;
	.login-center{
		width: 300px;
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -80%);
		.login-icon{
			display: block;
			width: 100%;
			height: 60px;
			background: url('../../common/img/logo.svg') no-repeat center {
				size: contain;
			};
			margin-bottom: 60px;
		}
		h1{
			line-height: 30px;
			text-align: center;
			margin-bottom: 30px;
			font-size: 30px;
			color: #666;
		}
		.login-btn{
			width: 100%;
		}
	}
}
</style>