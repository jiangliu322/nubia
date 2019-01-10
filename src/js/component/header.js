define(["jquery","cookie"], () => {
	class Header{
		constructor(){
			this.init();
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("#header").load("/html/component/header.html", () => {
					resolve();
				})
			}).then(() => {
				this.nav();
				this.move();
			})
		}
		nav(){
			let thisa = document.getElementById("login")
			//判断cookie
			if($.cookie("username") != undefined){
				thisa.className = "lo2"
			}else{
				thisa.className = "lo1"
			}
			
			thisa.onclick = function(){
				cooks()
				
			}
			function cooks(){
				if($.cookie("username") != undefined){
					$.cookie('username', "", {expires: -1,'path': '/'});
					thisa.className = "lo1"
				}else{
					location.href = "/html/login.html";
				}
			}
			//设置点击回到顶部
			
			$("#toptop").on("click",function(){
				document.body.top = "0px"
			})
			
			
		}
		move(){
			$("#phone").hover(function(){
				console.log(1)
			},function(){
				console.log(2)
			})
			
		}
		//设置一个函数来创建div
		
	}
	return new Header();
	
})
