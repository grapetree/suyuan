$(function() {
	changeNavTo('政府监督', '召回监管');

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
		//点击取消弹出框
		$(".icon-quxiao").click(function() {
			layer.open({
				type: 1,
				title: '请填写不通过原因：',
				closeBtn: true,
				area: '600px;',
				shade: 0.8,
				id: 'LAY_layuipro',
				btn: ['取消','确认'],
				moveType: 1, //拖拽模式，0或者1
				content: '<div>'
							+'<div>'
								+'<textarea class="c-area borderRad border" style="width: 450px;padding:5px"></textarea>'
							+'</div>'
						  +'</div>',
				success: function(layero) {
				}
			});
		});
	})
});