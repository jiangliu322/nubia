define(["item","url","template","jquery","cookie"], (items,urls) => {
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
				 $('body,html').animate({ scrollTop: 0 }, 1000);
			})
			
			
		}
		move(){
			//定义一个函数来渲染页面
			function add(){
				items.init(urls.baseUrlRap+"/nubia");
			}
			let flag = false
			$("#phone").hover(function(){
				flag = true
				$("#disbox").animate({height:'260px'})
				add()
			},function(){
				flag = false
				$("#disbox").hover(function(){
					flag = true
				},function(){
					flag = false
					$("#disbox").animate({height:'0px'})
					$("#disbox").text("")
				})
				setTimeout(function(){
					console.log(flag)
					if(flag == false){
						$("#disbox").animate({height:'0px'})
						$("#disbox").text("")
					}
				},10)
			})
			
		}
		
		
	}
	return new Header();
	
})
