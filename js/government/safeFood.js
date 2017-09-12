$(function(){
    changeNavTo('质量安全检测','三品一标认证','无公害农产品认证');
    //分页，表单，日历
	layui.use(['laypage', 'form', 'layedit', 'laydate'], function() {
		var laypage = layui.laypage;
		var form = layui.form();
		var laydate = layui.laydate;

		//调用分页
		laypage({
			cont: 'page',
			pages: 100,
			groups: 3,
			skin: '#28a96c',
			skip: true,
			// 触发分页后的回调，函数返回两个参数。
			//obj是一个object类型。包括了分页的所有配置信息。
			//first一个Boolean类，检测页面是否初始加载。非常有用，可避免无限刷新。
			jump: function(obj, first) {
				//得到了当前页，用于向服务端请求对应数据
				var curr = obj.curr;
			}
		});
		$(".seeBig").click(function() {
			layer.open({
				type: 1,
				title: '请填写取消黑名单的原因：',
				closeBtn: true,
				area: '770px;',
				shade: 0.8,
				id: 'LAY_layuipro',
				btn: ['确认'],
				moveType: 1, //拖拽模式，0或者1
				content: $("#adjunct"),
				success: function(layero) {

				}
			});
		});	
	});	
	//附件证书效果
	$(".adjunct-small li").click(function(){
		var imgSrc = $(this).find("img").attr("src");
		var imgWid = $(this).find("img").width()*5,
		    imgHei = $(this).find("img").height()*6;
		$(this).addClass("active").siblings().removeClass("active");    
		$(".adjunct-big img")
			.attr("src",imgSrc)
			.width(imgWid)
			.height(imgHei);
		
	});
	//证书翻看效果
	var ind = 0 ;
	$(".adjunct-prev").click(function(){
		var offsetTop = $(".adjunct-small li").last().position().top;
		if(offsetTop>419){
			ind--;
			$(".adjunct-small ul").css("transform","translateY("+100*ind+"px)")
		}
		
	});
	$(".adjunct-next").click(function(){
		var offsetTop = $(".adjunct-small li").first().position().top;
		if(offsetTop<-1){
			ind++;
			$(".adjunct-small ul").css("transform","translateY("+100*ind+"px)")
		}
		
	});
})

