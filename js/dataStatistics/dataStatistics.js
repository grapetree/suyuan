$(function () {
  changeNavTo('首页');
  myChart1();
  myChart3();
  myChart5();
  myChart6();
  myChart7();
})
//横向柱状图
function myChart1() {
  var barChartData = {
    dom:'myChart1',
    seriesData:[20, 25, 28, 34, 54, 69],
    yAxisData:['1星企业', '2星企业', '3星企业', '4星企业', '5星企业','未评星企业']
  };
  barCharts(barChartData);
}
//柱状图调用
function myChart3() {
  var barChartData = {
    dom:'myChart3',
    seriesData:[[2.0, 4.9, 7.0, 23.2, 25.6],[2.6, 5.9, 9.0, 26.4, 28.7],[2.6, 5.9, 9.0, 26.4, 28.7],[2.6, 5.9, 9.0, 26.4, 28.7]],
    legendData:['有机农产品','绿色农产品','绿色农产品','其他农产品'],
    xAxisData:['苹果', '板栗', '香菇', '蟠桃', '杏子']
  };
  barChart(barChartData);
}
//圆头柱状图调用
function myChart7() {
  var barData = {
    id:'myChart7',
    title:'主要投诉产品',
    xData:['苹果','板栗','蟠桃','核桃','杏子','香梨','其他'],
    seriesData:{
      barData:[90, 40, 70, 30, 15, 21, 80]
    }
  }
  bar(barData);
}
//气泡图调用
function myChart5() {
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
		
			var height = $("#myChart5").height(),
				width = $("#myChart5").width();

			var minRadius = height*0.08;
		    var maxRadius = height*0.16;

			scatter.init({
		
				"domEle": 'myChart5',
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
//调用
	function myChart6() {
	  var dataSet={
		name:'本月投诉处理率',
		name1:'本月投诉总量',
		value: 1000,
		max: 1900,
		num:'1000'
	  };

	  var width = 400;
	  var height = 400;
	  var radius = 100;
	  createDashBoardChart('myChart6', width, height,dataSet,radius);
	}
/*setInterval(function(){
 var rateData = {
 totalCapacity:1000,
 currentRate:Math.floor( Math.random()*1000 )
 };

 },2000)*/
var rateData = {
  totalCapacity:1000,
  currentRate:700
};
$('.icon-num').hide();
getRate(rateData);
function getRate(rateData){
  var rate = (rateData.currentRate/rateData.totalCapacity*100).toFixed(2),
    angle = 255/100*rate;
  $(".rate-num").text(rate+"%");
  $(".capacity-num").text(rateData.totalCapacity+"吨");
  $(".end-num").text(rateData.totalCapacity+"吨");
  $(".icon-num").text(rateData.currentRate+"吨");
  $(".icon").css({
    "transform":"rotateZ("+angle+"deg)",
	   "transition":"all 1s linear"
  })
  setTimeout(function(){
    $('.icon-num').show();
  },1000);
  $(".icon-num").css({
    "transform":"rotateZ("+(-angle)+"deg)",
  })
};