function lineChart2(data) {
  var myChart = echarts.init(document.getElementById(data.dom));
  var colors = data.colors?data.colors:['#84c723','#1875ee','#32bd3a','#38c9eb']
  var option = {
    color:['#ff6868','#3dcebe','#0cabe3'],
    tooltip: {
      trigger: 'axis',
      // backgroundColor:'transparent',
      // confine:true,
      // formatter:function(param){
      //   var html = '';
      //   html = '<div style="height:80px;padding:0 20px;border:1px solid #9dd5ff;border-radius:5px;background:rgba(255,255,255,.8);box-shandow:8px 2px #cccecc;"><p style="color:#2aa161;font-size:18px;height:30px;line-height:30px;padding:0;">'+param[0].name+'</p><p style="color:#666";font-size:14px;height:30px;line-height:30px;><span style="font-size:16px;color:#5b7aa1;">'+param[0].seriesName+'：'+param[0].value+'</span></p><p style="color:#666";font-size:14px;height:30px;line-height:30px;><span style="font-size:16px;color:#5b7aa1;">'+param[1].seriesName+'：'+param[1].value+'</span></p></div>';
      //   return html;
      // }
    },
    legend: {
      x:'center',
      y:'bottom',
      itemGap:20,
      orient: 'horizontal',
      itemHeight:4,
      itemWidth:15,
      bottom:5,
      padding:[0, 5]
      // data: [{name:'打印量',icon:'rect'},{name:'生成量',icon:'rect'}]
    },
    title:{
      text:data.title,
      textStyle:{
        color:'#577399',
        fontSize:15
      },
      left:'center'
    },
    grid:data.grid,
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine:{
        lineStyle:{
          color:'#bbd8c8'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel:{
        textStyle:{
          color:'#4b715d'
        }
      },
      splitLine: {
        show: true,
        lineStyle:{
          type:'solid',
          color:'#bbd8c8',
          width:1
        }
      },
      data: data.xData
    },
    yAxis: {
      name: '',
      nameTextStyle:{
        color:'#496d99',
        fontSize:14
      },
      axisTick: {
        show: false
      },
      axisLine:{
        lineStyle:{
          color:'#bbd8c8'
        }
      },
      axisLabel:{
        textStyle:{
          color:'#4b715d'
        }
      },
      splitLine: {
        show: true,
        lineStyle:{
          type:'solid',
          color:'#bbd8c8',
          width:1
        }
      },
      type: 'value'
    },
    series: [{
      name: data.lineNames[0],
      type: 'line',
      // symbol:'image://../js/echart/image/symbolTip.png',
      symbolSize: 2,
      showSymbol:false,
      smooth:true,
      markArea:{
        silent:true,
        data:[
          [{
            name: '',
            xAxis:  data.xData[-1],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(248,243,255,.2'},
                    {offset: 1, color: 'rgba(230,240,255,.8)'}
                  ]
                )
              }
            },
          }, {
            xAxis:  data.xData[5],
          }]
        ]
      },
      data: data.seriesData[0],
      lineStyle:{
        normal:{
          color:colors[0]
        }
      },
    },
      {
        name:data.lineNames[1],
        type: 'line',
        // symbol:'image://../js/echart/image/symbolTip.png',
        symbolSize: 2,
        showSymbol:false,
        smooth:true,
        data: data.seriesData[1],
        lineStyle:{
          normal:{
            color:colors[1]
          }
        }
      },
      {
        name:data.lineNames[2],
        type: 'line',
        // symbol:'image://../js/echart/image/symbolTip.png',
        symbolSize: 2,
        showSymbol:false,
        smooth:true,
        data: data.seriesData[2],
        lineStyle:{
          normal:{
            color:colors[2]
          }
        }
      },
      {
        name:data.lineNames[3],
        type: 'line',
        // symbol:'image://../js/echart/image/symbolTip.png',
        symbolSize: 2,
        showSymbol:false,
        smooth:true,
        data: data.seriesData[3],
        lineStyle:{
          normal:{
            color:colors[3]
          }
        }
      }]
  };
  myChart.setOption(option);
};
  
