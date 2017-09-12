$(function () {
  changeNavTo('数据统计','政府抽检统计');

  layui.use(['form','laydate'],function () {
    // var form = layui.form(),
    //   laydate = layui.laydate;
  });
  myChart5();
  myChart6();
  myChart7();
});
//调用百分比图
function myChart5() {
  var dataSet={
    name:'抽检合格率',
    name1:'抽检次数',
    value: 1000,
    max: 1900,
    num:29
  };

  var width = 400;
  var height = 400;
  var radius = 100;
  if(dataSet.value && dataSet.num){
  createDashBoardChart('myChart5', width, height,dataSet,radius);
  }else {
    $('.myChart5').addClass('bg-pic')
  }
}
  //饼图调用
  function myChart6() {
    var sourceData = {
      titleText:'各类产品检测次数占比',
      topPosition:'top',
      dom: 'myChart6',
      seriesdata:[
        {value:320, name:'蟠桃'},
        {value:230, name:'苹果'},
        {value:300, name:'板栗'},
        {value:150, name:'杏子'},
        {value:50, name:'核桃'},
        {value:50, name:'香梨'},
        {value:50, name:'其他'}
      ],
      colordata:['#2983ec','#4fa3ff','#26d6df','#07bb43','#60d524','#ffbd00','#fb8f2e']
    };

    if(sourceData.seriesdata[0] && sourceData.titleText){
      source(sourceData);
    }else{
      $('.myChart6').addClass('bg-pic')
    }

  }
  //圆头柱状图调用
  function myChart7() {
    var barData = {
      id:'myChart7',
      title:'各类产品合格率',
      xData:['苹果','板栗','蟠桃','核桃','杏子','香梨','其他'],
      seriesData:{
        barData:[90, 40, 70, 30, 15, 21, 80]
      }
    };
    if(barData.xData[0] && barData.seriesData.barData[0]){
      bar(barData);
    }else {
      $('.myChart7').addClass('bg-pic')
    }

}