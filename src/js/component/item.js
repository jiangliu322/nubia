define(["jquery","template"],($,template) => {
	function Items(){
		
	}
	Items.prototype.init = function(url){
		
		//先load到页面上，得到url，然后去请求数据,渲染结构，
		//load
		new Promise((resolve,reject) =>{
			$("#disbox").load("/html/component/item.html", () =>{
				resolve();
			})
		}).then(() => {
			$.ajax({
				url: url,
				type: "get",
				success: function(res){
//					let list = res
					console.log(res)
					let list = res.data.luelue;
					//通过模板引擎渲染结构
					console.log(list)
					let html = template("list-template", {list : res.data.luelue});
					console.log(html)
					$("#disbox ul").html(html);

					
				}
			})	

		})
	}
	return new Items();
})
