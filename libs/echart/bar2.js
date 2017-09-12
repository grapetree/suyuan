function barCharts(datas){
	var myChart = echarts.init(document.getElementById(datas.dom));
	var seriesMax = Math.max.apply(null, datas.seriesData)*1.3;
		myChart.setOption ({
		      grid:{
		        left:'20%',
		        top:'3%',
		        bottom:'3%',
		        right:'1%'
		    },
		    yAxis: [{
		        data: datas.yAxisData,
		        axisLabel: {
		            textStyle: {
		                color: '#2F64DC',
		                fontSize:14,
		                align:'left',
		            }
		        },
		        offset:100,
		        splitLine: {
		            show: false
		        },
		        axisTick:{
		          show:false
		        },
		        axisLine: {
		            show: false
		        }
		    }],
		    xAxis: {
		        max: 100,
		        show:false,
		        axisLine: {
		            show: false
		        }
		    },
		    series: [{
		        // 辅助系列
		        type: 'bar',
		        silent: true,
		        barGap:'-100%',
		        itemStyle: {
		            normal: {
		                barBorderRadius:20,
		                color: '#ddd',
		 
		            }
		        },
		        barWidth: 18,
		        data: datas.seriesData.map(function (val) {
		            return  seriesMax;
		        })
		    }, {
		        type: 'bar',
		        data: datas.seriesData,
		        barWidth: 18,
		        label: {
		            normal: {
		                position: 'left',
		                offset:[0,-2],
		                show:true,
		                textStyle:{
		                    fontSize:14,
		                    color:'#ff7400'
		                },
		                formatter: function(value){
		                   return value.data+'家';
		                }               
		            }
		        },
		       itemStyle: {
		            normal: {
		                barBorderRadius:20,
		                color: function(d) {
		                     
		                     return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                                offset: 0,
		                                color: '#2F64DC'
		                            }, {
		                                offset: 1,
		                                color: '#20A8FF'
		                            }])
		               
		                           
		                }
		            }
		        }
		    }]
		});
}