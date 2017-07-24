export default{
	methods: {
		//校验用户名
		regexUsername(val){
			if(!val){
				console.log('请输入用户名');
				return false;
			}
			if(!/^(?![0-9]+$)[0-9A-Za-z]{4,16}$/.test()){
				console.log('户名由4-16个英文字母、数字组成，且不能为纯数字');
				return false;
			}
		},
		//校验密码
		regexPassword(val){
			if(!val){
				console.log('请输入密码');
				return false;
			}
			if(!/^(?![^a-zA-Z]+$)(?!\D+$).{6,16}$/.test()){
				console.log('密码为6-16位字符，至少包含1位字母和1位数字');
				return false;
			}
		}
	}
}