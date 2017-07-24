<template>
	<el-row class="login" type="flex" justify="center">
		<el-col class="login-center" :md="12">
			<i class="login-icon"></i>
			<h1>Element后台管理</h1>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form">
				<el-form-item  prop="username">
					<el-input type="text" v-model="ruleForm.username" placeholder="用户名" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item  prop="pass">
					<el-input type="password" v-model="ruleForm.pass" placeholder="密码" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item  prop="checkPass">
					<el-input type="password" v-model="ruleForm.checkPass" placeholder="确认密码" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>

<script>

  export default {
    data() {
    	var validateUserName = (rule, value, callback) => {
    		if (value === '') {
    			callback(new Error('请输入用户名'))
    		} else if (!/^(?![0-9]+$)[0-9A-Za-z]{4,16}$/.test(value)){
    			callback(new Error('用户名由4-16个英文字母、数字组成，且不能为纯数字'))
    		} else {
    			callback();
    		}
    	};
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else if (!/^(?![^a-zA-Z]+$)(?!\D+$).{6,16}$/.test(value)) {
				callback(new Error('密码为6-16位字符，至少包含1位字母和1位数字'))
			} else {
				if (this.ruleForm.checkPass !== '') {
					this.$refs.ruleForm.validateField('checkPass');
				}
				callback();
			}
		};
		var validateCheckPass = (rule, value, callback) => {
			if (value === '') {
			  callback(new Error('请再次输入密码'));
			} else if (value !== this.ruleForm.pass) {
			  callback(new Error('两次输入密码不一致!'));
			} else {
			  callback();
			}
		};
		return {
			ruleForm: {
				username: '',
			  	pass: '',
			  	checkPass: ''
			},
			rules: {
				username: [
					{ validator: validateUserName, trigger: 'blur' }
				],
			  	pass: [
			    	{ validator: validatePass, trigger: 'blur' }
			  	],
			  	checkPass: [
			    	{ validator: validateCheckPass, trigger: 'blur' }
			  	]
			}
		};
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	this.axios({
          		methods: 'POST',
          		url: '/api/login/getAccount',
          		data: {
          			username: this.ruleForm.username,
          			password: this.ruleForm.password,
          			checkPass: this.ruleForm.checkPass
          		},
          		setTimeout: 3000,
          		responseType: 'json'
          	})
          	.then(function(res){
          		console.log(res);
          	})
          	.catch(function(err){
          		console.log(err);
          	})
         //  	this.$message({
	        //   showClose: true,
	        //   message: '登录成功！',
	        //   type: 'success'
	        // });
	        // this.$router.push('/')
          } else {
          	this.$message({
	          showClose: true,
	          message: '登录失败！',
	          type: 'warning'
	        });
            return false;
          }
        });
      }
    }
  }
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