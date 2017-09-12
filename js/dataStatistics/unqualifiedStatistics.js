$(function () {
  changeNavTo('数据统计','不合格检测统计');

  layui.use(['form','laydate'],function () {
      var form = layui.form(),
        laydate = layui.laydate;
  });
  myChart()
})
  //生产计划统计-柱图
    function myChart() {
      //折线图-柱图结合
      var barLineData = {
        id:'myChart',
        title:'各类产品农残检测不合格情况',
        xData:['苹果','板栗','蟠桃','核桃','杏子','香梨','其他'],
        seriesData:{
          linedata:[20, 50, 33, 25, 13, 20, 62],
          barData:[90, 40, 70, 30, 15, 21, 80]
        }
      }
      barLine(barLineData);
  }