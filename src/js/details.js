require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery","header","footer","cookie"], () => {
		$(function(){
			//获取当前URL
		    var local_url = decodeURI(document.location.href);
		    //截取get字符串
		    var getstr = local_url.substr(local_url.indexOf('=')+1);
			var get = getstr.split('-')
			var phonename = get[0];
			var money = get[1];
			var kohao = get[2];
			$("#buyh3").text("购买"+phonename);
			$("#buyspan").text(money);
			$("#kohao").text(kohao);
			//设置一个价格计算函数
			let colordiv = $(".colorDiv")
			let edition = $(".edition")
			let set = $(".set")
			let service = $(".fuwu")
			function price(){
				let allmoney = Number(money.split('￥')[1])
				for(let i = 0 ; i < colordiv.length; i++){
					if(colordiv[i].className === "colorDiv ac"){
						if(i === 0){
							allmoney += 0
						}else if(i === 1){
							allmoney += 100
						}else if(i === 2){
							allmoney += 200
						}else if(i === 3){
							allmoney += 150
						}
					}
				}
				
				for(let i = 0 ; i < edition.length; i++){
					if(edition[i].className === "edition ac"){
						if(i === 0){
							allmoney += 0
						}else if(i === 1){
							allmoney += -100
						}
					}
				}
				
				for(let i = 0 ; i < set.length; i++){
					if(set[i].className === "set ac"){
						if(i === 0){
							allmoney += 0
						}else if(i === 1){
							allmoney += 0
						}
					}
				}
				
				for(let i = 0 ; i < service.length; i++){
					if(service[i].className === "fuwu ac"){
						if(i === 0){
							allmoney += 159
						}else if(i === 1){
							allmoney += 109
						}
					}
				}
				$("#allmon").text("￥"+allmoney)
			}
			price()
			alltxt()
			//商品属性函数
			function alltxt(){
				let allcolor
				let alledition
				for(let i = 0; i < colordiv.length; i++){
					if(colordiv[i].className === "colorDiv ac"){
						allcolor = colordiv[i].innerHTML
					}
				}
				for(let i = 0; i < edition.length; i++){
					if(edition[i].className === "edition ac"){
						alledition = edition[i].innerHTML
					}
				}
				$("#alltext").text(phonename+"  " + allcolor+"  " + alledition)
			}
			for(let i = 0; i < colordiv.length; i++){
				colordiv[i].onclick = function(){
					for(let j = 0 ; j < colordiv.length; j++){
						colordiv[j].className = "colorDiv"
					}
					colordiv[i].className = "colorDiv ac"
					price()
					alltxt()
				}
			}
			for(let i = 0; i < edition.length; i++){
				edition[i].onclick = function(){
					for(let j = 0 ; j < edition.length; j++){
						edition[j].className = "edition"
					}
					edition[i].className = "edition ac"
					price()
					alltxt()
				}
			}
			for(let i = 0; i < set.length; i++){
				set[i].onclick = function(){
					for(let j = 0 ; j < set.length; j++){
						set[j].className = "set"
					}
					set[i].className = "set ac"
					price()
					alltxt()
				}
			}
			for(let i = 0; i < service.length; i++){
				service[i].onclick = function(){
					for(let j = 0 ; j < service.length; j++){
						service[j].className = "fuwu"
					}
					service[i].className = "fuwu ac"
					price()
					alltxt()
				}
			}
			//点击跳转到购物车传cookie
			$(".buy").on("click",function(){
				if($.cookie("shopCar")){
					let thiscookie = $.cookie("shopCar")
					let allxx = thiscookie + $("#alltext").text() + "  " + $("#allmon").text()+"  "+1+":"
					console.log(allxx)
					$.cookie("shopCar",allxx, {path: "/"});
					location.href = "/html/buyCar.html";
				}else{
					let allxx = $("#alltext").text() + "  " + $("#allmon").text()+"  "+1+":"
					$.cookie("shopCar",allxx, {path: "/"});
					location.href = "/html/buyCar.html";
				}
				
				
				
			})
			
			
		})
		
		
	})
})