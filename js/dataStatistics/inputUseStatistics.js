$(function () {
  changeNavTo('数据统计','投入品使用统计');

  layui.use(['form','laydate'],function () {
    var form = layui.form(),
      laydate = layui.laydate;
  });
  //切换tab
  $('.use-title li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  myChart2();
  myChart3();
});

//折线图调用
function myChart2() {
  var lineData = {
    dom: 'myChart2',
    // title:'化肥采购走势',
    grid:{
      top:'20%',
      bottom:'10%',
      left:'10%',
      right:'3%'
    },
    xData: ['1月', '2月', '3月','4月', '5月', '6月'],
    seriesData: [
      [30, 46, 65, 44, 100, 39]
    ]
  };
  lineChart(lineData);
}
  //柱状图调用
  function myChart3() {
    var barChartData = {
      titleData:'各类产品亩化肥使用量',
      dom:'myChart3',
      seriesData:[[2.0, 4.9, 7.0, 23.2, 25.6],[2.6, 5.9, 9.0, 26.4, 28.7],[2.6, 5.9, 9.0, 26.4, 28.7],[2.6, 5.9, 9.0, 26.4, 28.7]],
      legendData:['有机农产品','绿色农产品','绿色农产品','其他农产品'],
      xAxisData:['苹果', '板栗', '香菇', '蟠桃', '杏子']
    };
    barChart(barChartData);
  }