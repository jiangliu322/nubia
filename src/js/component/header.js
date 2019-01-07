
require(["./requirejs.config"], () => {
	//引入shop需要依赖的模块
	require(["jquery"], () => {
		$(function(){
			$("#header").load("/html/component/header.html");
			$("#footer").load("/html/component/footer.html");
			//获取div
			var disbox = document.getElementById("disbox")
			function addbox(test){
				
				if(test){
					//设置div高度增加动画
					clearInterval(disbox.timer)
					disbox.timer = setInterval( () => {
						disbox.style.height = disbox.offsetHeight + 3 + "px"
						if(disbox.offsetHeight >= 220){
							clearInterval(disbox.timer)
							disbox.style.height = 220 + "px"
						}
					},5)
				}else{
					//设置div高度减少动画
					clearInterval(disbox.timer)
					disbox.timer = setInterval( () => {
						disbox.style.height = disbox.offsetHeight - 3 + "px"
						if(disbox.offsetHeight <= 0){
							disbox.style.height = "0px"
							clearInterval(disbox.timer)
							
							console.log(disbox.offsetHeight)
						}
					},5)
					
				}
				
				
			}
			
			document.getElementById("phone").onmouseenter = function(){
				addbox(true)	
				console.log("test")
			}
			document.getElementById("phone").onmouseleave = function(){
				addbox()
			}
			document.getElementById("hongmo").onmouseenter = function(){
				addbox(true)	
			}
			document.getElementById("hongmo").onmouseleave = function(){
				addbox()
			}
			document.getElementById("peijian").onmouseenter = function(){
				addbox(true)	
			}
			document.getElementById("peijian").onmouseleave = function(){
				addbox()
			}
			document.getElementById("sheyin").onmouseenter = function(){
				addbox(true)	
			}
			document.getElementById("sheyin").onmouseleave = function(){
				addbox()
			}
			document.getElementById("ui").onmouseenter = function(){
				addbox(true)	
			}
			document.getElementById("ui").onmouseleave = function(){
				addbox()
			}
			disbox.onmouseenter = function(){
				addbox(true)
			}
			disbox.onmouseleave = function(){
				addbox()
			}
			//设置点击回到顶部
			var toptop = document.getElementById("toptop")
				toptop.onclick =function(){
					document.body.top = "0px"
				}
			})
	})
})