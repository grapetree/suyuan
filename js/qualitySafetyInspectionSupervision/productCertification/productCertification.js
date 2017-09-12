$(function() {
  changeNavTo('质量安全检测', '三品一标认证', '产品认证情况一览');
  myChart1();
  myChart2();
  myChart3();
  myChart4();
})

//半环形图
function myChart1() {
  var barChartData = {
    dom:'myChart1',
    seriesData:[
      {
        name:'地理标识认证',
        value:'500'
      },
      {
        name:'无公害标示认证',
        value:'400'
      },
      {
        name:'绿色食品认证',
        value:'300'
      },
      {
        name:'有机产品认证',
        value:'200'
      }
      ]
  };
  pieChart(barChartData);
}

//柱状图调用
function myChart2() {
  var barChartData = {
    titleData:'主要产品认证情况',
    dom:'myChart2',
    units:'单位（个）',
    seriesData:[[2.0, 4.9, 7.0, 23.2, 25.6],[2.6, 5.9, 9.0, 26.4, 28.7],[2.6, 5.9, 9.0, 26.4, 28.7],[2.6, 5.9, 9.0, 26.4, 28.7]],
    // legendData:['有机农产品','绿色农产品','绿色农产品','其他农产品'],
    xAxisData:['苹果', '板栗', '香菇', '蟠桃', '杏子']
  };
  barChart(barChartData);
}
//折线图调用
function myChart3(){
  var lineNames = [];
  var xData = [];
  var seriesData = [];
  var startData = {
    "list2":[
      {
        "count":2,
        "name":"无公害认证",
        "days":"2017-08-09"
      },
      {
        "count":1,
        "name":"绿色食品认证",
        "days":"2017-08-09"
      },
      {
        "count":1,
        "name":"有机产品认证",
        "days":"2017-08-09"
      },
      {
        "count":1,
        "name":"农产品地理标识",
        "days":"2017-08-09"
      },
      {
        "count":1,
        "name":"无公害认证",
        "days":"2017-08-10"
      },
      {
        "count":1,
        "name":"农产品地理标识",
        "days":"2017-08-11"
      }
    ]
  };
  $.each(startData.list2,function (i,v) {
    // console.log(i,v);
   if($.inArray(v.name,lineNames)<0) {
     lineNames.push(v.name);
   }
   if($.inArray(v.days,xData)<0) {
      xData.push(v.days);
    }
  });
  console.log(lineNames,xData);
  // console.log(seriesData);
  var lineData = {
    dom: 'myChart3',
    title:'近一年新增认证情况',
    // seriesName:'采购量',
    grid:{
      top:'15%',
      bottom:'10%',
      left:'10%',
      right:'5%'
    },
    lineNames:lineNames,
    xData: xData,
    seriesData: [
      [2300, 1800, 1700,1600, 1900, 2200],
      [800, 1000, 1200,1400, 1100, 700],
      [1900, 1700, 1500,1500, 1600, 1800],
      [1300, 1400, 2200,2400, 2600, 2500]
    ]
  };
  lineChart2(lineData);
}
function myChart4(){
  var lineData = {
    dom: 'myChart4',
    title:'2017年认证截止情况',
    // seriesName:'化肥采购量',
    grid:{
      top:'15%',
      bottom:'10%',
      left:'10%',
      right:'5%'
    },
    lineNames:['线1','线2','线3','线4'],
    xData: ['17-7-1', '17-7-2', '17-7-3','17-7-4', '17-7-5', '17-7-6'],
    seriesData: [
      [2300, 1800, 1700,1600, 1900, 2200],
      [800, 1000, 1200,1400, 1100, 700],
      [1900, 1700, 1500,1500, 1600, 1800],
      [1300, 1400, 2200,2400, 2600, 2500]
    ]
  };
  lineChart2(lineData);
}