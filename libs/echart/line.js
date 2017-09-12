function lineChart(data) {
	var myChart = echarts.init(document.getElementById(data.dom));
	var option = {
		color:['#ff6868','#3dcebe','#0cabe3'],
		tooltip: {
			trigger: 'axis',
			backgroundColor:'transparent',
			confine:true,
			formatter:function(param){
				var html = '';
				html = '<div style="height:66px;padding:0 20px;border:1px solid #9dd5ff;border-radius:5px;background:rgba(255,255,255,.8);box-shandow:8px 2px #cccecc;"><p style="color:#2aa161;font-size:18px;height:30px;line-height:30px;padding:0;">'+param[0].name+'</p><p style="color:#666";font-size:14px;height:30px;line-height:30px;><span style="font-size:16px;color:#5b7aa1;">'+param[0].value+'</span>吨</p></div>';
				return html;
			}		
		},
		title:{
			text:data.title,
			textStyle:{
				color:'#2aa161',
				fontSize:14
			},
			left:'8%'
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
          name: '单位：吨',
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
			name:'查询量',
			type: 'line',
			// symbol:'image://../js/echart/image/symbolTip.png',
			symbolSize: 2,
			showSymbol:false,
			smooth:true,					
			data: data.seriesData[0],
			lineStyle:{
					normal:{
						color:'#0e62e8'
					}
			},
			areaStyle:{
				normal:{
					color: {
					    type: 'linear',
					    x: 0,
					    y: 0,
					    x2: 0,
					    y2: 1,
					    colorStops: [{
					        offset: 0, color: '#5f9ae4' // 0% 处的颜色
					    }, {
					        offset: 1, color: '#b6daf0' // 100% 处的颜色
					    }],
					    globalCoord: false // 缺省为 false
					},
					opacity:0.6
				}				
			}
		}]
	};
	myChart.setOption(option);
};
  
