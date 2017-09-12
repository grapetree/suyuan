function bar(data) {
	var myChart = echarts.init(document.getElementById(data.id));
	var option = {
      grid:{
        left:'5%',
        top:'10%',
        bottom:'10%',
        right:'1%'
      },
    title:{
        text:data.title,
        left:'center',
        textStyle:{
            color:'#43638e',
            fontSize:15
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        show:false,
        data:['实际采收量']
    },
    xAxis: [
        {
            type: 'category',
            data: data.xData,
            axisPointer: {
                type: 'shadow'
            },
            
            axisLabel:{
                textStyle:{
                    color:'#496d99',
                    fontSize:14
                }
            },
            axisTick:{
                show:false
            },
            axisLine:{
                lineStyle:{
                    color:'#e7ebf2'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位：吨',
            nameTextStyle:{
                color:'#496d99',
                fontSize:14
            },
            axisLabel:{
                textStyle:{
                    color:'#496d99',
                    fontSize:14
                }
            },
            axisTick:{
                show:false
            },
            axisLine:{
                lineStyle:{
                    color:'#e7ebf2'
                }
            },
            splitLine:{
            	lineStyle:{
                    color:'#e7ebf2'
                }
            }
        },
        {
            type: 'value',
            axisTick:{
                show:false
            },
            axisLine:{
                lineStyle:{
                    color:'#e7ebf2'
                }
            }
        }
    ],
    series: [
        {
            name:'实际采收量',
            type:'bar',
            barWidth:14,
            itemStyle:{
                normal:{
                    barBorderRadius:[20,20,20,20]
                }
            },
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
                            {offset: 0, color: 'rgba(237,246,255,.4)'},
                            {offset: 1, color: 'rgba(0,135,255,.08)'}
                          ]
                        )
                      }
                    },
                  }, {
                    xAxis:  data.xData[8],
                  }]

                ]
              },
            data:[
                {
                    value:data.seriesData.barData[0],
                    itemStyle:{
                        normal:{
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#6792ff'},
                                    {offset: 1, color: '#466dff'}
                                ]
                            )
                        }
                    }
                },
                {
                    value:data.seriesData.barData[1],
                    itemStyle:{
                        normal:{
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#6bb2ff'},
                                    {offset: 1, color: '#3495ff'}
                                ]
                            )
                        }
                    }
                },
                {
                    value:data.seriesData.barData[2],
                    itemStyle:{
                        normal:{
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#1be05d'},
                                    {offset: 1, color: '#00b03b'}
                                ]
                            )
                        }
                    }
                },
                {
                    value:data.seriesData.barData[3],
                    itemStyle:{
                        normal:{
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#7de008'},
                                    {offset: 1, color: '#71c212'}
                                ]
                            )
                        }
                    }
                },
                {
                    value:data.seriesData.barData[4],
                    itemStyle:{
                        normal:{
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#24dbdb'},
                                    {offset: 1, color: '#37b1ff'}
                                ]
                            )
                        }
                    }
                },
                {
                    value:data.seriesData.barData[5],
                    itemStyle:{
                        normal:{
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#5be93f'},
                                    {offset: 1, color: '#008934'}
                                ]
                            )
                        }
                    }
                },
                {
                    value:data.seriesData.barData[6],
                    itemStyle:{
                        normal:{
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#23aaff'},
                                    {offset: 1, color: '#2f64dc'}
                                ]
                            )
                        }
                    }
                }
            ]
        }
    ]
	};
	myChart.setOption(option);

};