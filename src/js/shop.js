require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery","header","footer","cookie"], () => {
		$(function(){
			let index = 0
			//获取所有li
			let lis = $(".nav li")
			console.log(lis)
			//获取点击按钮
			$("#next").on("click",function(){
				lis.eq(index).removeClass("ac").animate({opacity: 0});
				index++;
				if(index >= 3) index = 0;
				lis.eq(index).addClass("ac").animate({opacity: 1});
			})
			$("#prev").on("click",function(){
				lis.eq(index).removeClass("ac").animate({opacity: 0});
				index--;
				if(index < 0) index = 2;
				lis.eq(index).addClass("ac").animate({opacity: 1});
			})
			//设置自动轮播
			let timer = null;

			$(".nav").hover(function(){
				clearInterval(timer);
			}, (function autoPlay(){
				timer = setInterval(() => {
					$("#next").trigger("click");
				},3000);
				return autoPlay;
			})());
		})
	})
})