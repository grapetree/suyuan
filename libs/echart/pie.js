function source(datas){
		var myChart = echarts.init(document.getElementById(datas.dom));
		var radius = datas.radius?datas.radius:[[110, 111],[55, 95]];
		var topPosition = datas.topPosition?datas.topPosition:['bottom','top'];
		var option = {
			    title : {
			        text: datas.titleText,
			        textStyle: {
				        color: '#577399',
				        fontSize: 15
			        },
			        left: 'center',
				  	top: topPosition[0]
			    },
			    tooltip : {
			        trigger: 'item',
			        backgroundColor:'transparent',
			        formatter:function(param){
						var html = '';
						html = '<div style="height:66px;padding:0 20px;border:1px solid #ccc;border-radius:5px;background:rgba(255,255,255,.8);box-shandow:8px 2px #cccecc;"><p style="color:#2aa161;font-size:18px;height:30px;line-height:30px;padding:0;">'+param.name+'</p><p style="color:#666";font-size:14px;height:30px;line-height:30px;>'+param.seriesName+'&nbsp;:&nbsp;<span style="font-size:16px;color:#ff9100;">'+param.value+'</span>次</p></div>';
						return html;
					}
			    },
			    color: datas.colordata,
			    legend: {
			    	x:'center',
			    	y:topPosition[1],
			    	itemGap:20,
			        orient: 'horizontal',
			        data: datas.legend
			    },
			    series : [{
					z: 0,
					name: '',
					type: 'pie',
					center: ['50%', '50%'],    //位置
					radius: radius[0],
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
						value: 0,
						itemStyle: {
							normal: {
								color: '#c3ddcf' //颜色填充
							}
						},
						
					}]
				},
			        {
			            name: '查询量',
			            type: 'pie',
			            clockwise:false,
			            radius : radius[1],
			            center: ['50%', '50%'],
			            data: datas.seriesdata,
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            },
			            label: {
			                normal: {
			                    position: 'outside',
			                    show: true,
			                    formatter: "{b} {d}%",
			                    textStyle: {
			                        fontSize:16
			                    }
			                }
			            },
			            labelLine: {
							normal: {
								textStyle: {
									fontSize: 10,
								},
								length: 20,
								length2: 30,
								lineStyle: {
									width: 1
								}
							}
						},
			        }
			    ]
			};

			myChart.setOption(option);
	}