$(function () {
  changeNavTo('数据统计','生产计划统计');

  layui.use(['form','laydate'],function () {
    var form = layui.form(),
      laydate = layui.laydate;
  });
  myChart8();
  myChart10();
  myChart9();
})

  //调用百分比图
	function myChart8() {
      var dataSet={
        name:'当前完成率',
        name1:'生产计划数量',
        value: 1000,
        max: 1900,
        num:29
      };

      var width = 400;
      var height = 400;
      var radius = 100;
      createDashBoardChart('myChart8', width, height,dataSet,radius);
	}
  //气泡图调用
  function myChart9() {
    function hotWord() {
			var data = [{
				"id": "红富士苹果",
				"value": 80
			}, {
				"id": "京东板栗",
				"value": 100
			}, {
				"id": "普通香菇",
				"value": 150
			}, {
				"id": "普通苹果",
				"value": 180
			}, {
				"id": "普通板栗",
				"value": 150
			}, {
				"id": "加工香菇",
				"value": 100
			}]
			var scatter = new scatterChart();
		
			var height = $("#myChart9").height(),
				width = $("#myChart9").width();

			var minRadius = height*0.08;
		    var maxRadius = height*0.16;

			scatter.init({
		
				"domEle": 'myChart9',
				"width": width,
				"height": height
		
			});
			scatter.setData({
		    	data:data,
		    	minRadius:minRadius,
		    	maxRadius:maxRadius,
		    	zoom:1
		    });
		    scatter.on('click', function (e) {
		        console.log(e);
		    });
			// scatter.setData(data, 1.5); //0.8是控制半径的倍数
		}
		hotWord();
  }
//圆头柱状图调用
  function myChart10() {
    var barData = {
      id:'myChart10',
      title:'亩农产品实际采收量',
      xData:['苹果','板栗','蟠桃','核桃','杏子','香梨','其他'],
      seriesData:{
        barData:[90, 40, 70, 30, 15, 21, 80]
      }
    }
    bar(barData);
  }