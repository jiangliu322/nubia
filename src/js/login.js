require(["./requirejs.config"], () => {
	require(["jquery", "cookie"], () => {
		$(function(){
			//点击登陆后获取输入的值
			$(".loa").on("click", function(){
				console.log($("#username").val())
				console.log($("#password").val())
				$.ajax({
						url: "http://localhost/nubiaphp/login.php",
						type: "post",
						data: {
							name: $("#username").val(),
							password: $("#password").val()
						},
						success: function(res){
							if(res == $("#username").val()){
								//用户名存cookie
								$.cookie("username", res, {path: "/"});
								location.href = "/html/shop.html";
							}else if(res === 111){
								console.log($("#lop"))
								$("#lop").css({
									"display":"block"
								})
							}
						},
						dataType: "json"
					})
			})
		})
	})
})
