require(["./requirejs.config"], () => {
	
	require(["jquery"], () => {
		$(function(){
			//设置一个标识符
			let flag = true;
			var phoneNumber = $("#phoneNumber");
			var password1 = $("#password1");
			var password2 = $("#password2");
			var emailNumber = $("#emailNumber")
			var allSpan = $(".aspan")
			var loa = $("#loa")
			phoneNumber.blur(function(){
				if(!(/^1[34578]\d{9}$/.test(phoneNumber.val()))){
					flag = false;
					allSpan.eq(0).css({
						"display":"block"
					})
					
				}else{
					flag = true;
					allSpan.eq(0).css({
						"display":"none"
					})
				}
			})
			password1.blur(function(){
				if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(password1.val()))){
					
					flag = false
					allSpan.eq(1).css({
						"display":"block"
					})
				}else{
					flag = true;
					allSpan.eq(1).css({
						"display":"none"
					})
				}
			})
			password2.blur(function(){
				if(password1.val()!= password2.val()){
					
					flag = false
					allSpan.eq(2).css({
						"display":"block"
					})
				}else{
					flag = true;
					allSpan.eq(2).css({
						"display":"none"
					})
				}
			})
			emailNumber.blur(function(){
				if(!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(emailNumber.val()))){
					
					flag = false
					allSpan.eq(3).css({
						"display":"block"
					})
				}else{
					flag = true;
					allSpan.eq(3).css({
						"display":"none"
					})
				}
			})
			
			loa.on("click", function(){
				phoneNumber = $("#phoneNumber");
				password1 = $("#password1");
				password2 = $("#password2");
				emailNumber = $("#emailNumber")
				if(!(/^1[34578]\d{9}$/.test(phoneNumber.val()))){
					flag = false;
					allSpan.eq(0).css({
						"display":"block"
					})
					
				};
				if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(password1.val()))){
					
					flag = false
					allSpan.eq(1).css({
						"display":"block"
					})
				}
				if(password1.val()!= password2.val()){
					
					flag = false
					allSpan.eq(2).css({
						"display":"block"
					})
				}
				if(!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(emailNumber.val()))){
					
					flag = false
					allSpan.eq(3).css({
						"display":"block"
					})
				}
				if(flag){
					$.ajax({
						url: "http://localhost/nubiaphp/register.php",
						type: "post",
						data: {
							name: phoneNumber.val(),
							password: password2.val(),
							email: emailNumber.val()
						},
						success: function(res){
							console.log(res);
							if(res.res_code === 1){
								alert("注册成功，马上去登录");
								location.href = "/html/login.html";
							}else if(res.res_code === 0){
								alert("用户名已存在或数据库操作失败")
							}
						},
						dataType: "json"
					})
				}
			})

			
		})
	})
})