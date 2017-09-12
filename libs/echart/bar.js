function barChart(datas){
	var myChart = echarts.init(document.getElementById(datas.dom));
	var data1 = [],data2 = [], data3 = [],data4 = [];
  	var units = datas.units?datas.units:'单位（万亩）';
	var titleData = datas.titleData?datas.titleData:'本年度主要种植农产品';

		$.each(datas.seriesData[0],function(i,v){
			data1.push({
            		value:v,
            		itemStyle:{
            			normal:{
            				barBorderRadius:20,
			                color: {
							    type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 0,
							    y2: 1,
							    colorStops: [{
							        offset: 0, color: '#23aaff' // 0% 处的颜色
							    }, {
							        offset: 1, color: '#2f64dc' // 100% 处的颜色
							    }],
							   
							    globalCoord: false // 缺省为 false
							}
            			}
            		}
            	
			});
		});
		$.each(datas.seriesData[1],function(i,v){
			data2.push({
				
            		value:v,
            		itemStyle:{
            			normal:{
            				barBorderRadius:20,
			                color: {
							    type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 0,
							    y2: 1,
							    colorStops: [{
							        offset: 0, color: '#24dbdb' // 0% 处的颜色
							    }, {
							        offset: 1, color: '#37b1ff' // 100% 处的颜色
							    }],
							   
							    globalCoord: false // 缺省为 false
							}
            			}
            		}
            	
			});
		});
		$.each(datas.seriesData[2],function(i,v){
			data3.push({
				
            		value:v,
            		itemStyle:{
            			normal:{
            				barBorderRadius:20,
			                color: {
							    type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 0,
							    y2: 1,
							    colorStops: [{
							        offset: 0, color: '#5be93f' // 0% 处的颜色
							    }, {
							        offset: 1, color: '#008934' // 100% 处的颜色
							    }],
							   
							    globalCoord: false // 缺省为 false
							}
            			}
            		}
            	
			});
		});
		$.each(datas.seriesData[3],function(i,v){
			data4.push({
				
            		value:v,
            		itemStyle:{
            			normal:{
            				barBorderRadius:20,
			                color: {
							    type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 0,
							    y2: 1,
							    colorStops: [{
							        offset: 0, color: '#afe046' // 0% 处的颜色
							    }, {
							        offset: 1, color: '#6bb90f' // 100% 处的颜色
							    }],
							   
							    globalCoord: false // 缺省为 false
							}
            			}
            		}
            	
			});
		});
		myChart.setOption ({
				title:{
					text:titleData,
					textStyle:{
						color:'#496d99',
			            fontSize:14
					},
					left:'center'
				},
			    tooltip : {
			        trigger: 'axis'
			    },
			    color:['#278ff2','#2ec6ed','#39c53b','#95d131'],
			   legend: {
			            right: '8%',
			            top:'20',
			            padding: [10, 0, 0, 30],
			            itemWidth: 8,
			            icon:'circle',
			            textStyle:{
			            	color:'#496d99',
			            	fontSize:12
			            },
			       		data:datas.legendData
			        },
			   grid: {
			            left: '3%',
			            right: '1%',
			            bottom: '5%',
			            containLabel: true
			        },
			        xAxis: [
			            {
			                interval:0,
			                type: 'category',
			                data: datas.xAxisData,
			            	axisLine:{
			                	lineStyle:{
			                		color:'#dbe6f3'
			                	}
			                },
			                axisLabel: {
			                    //formatter: '{value}W'
			                    textStyle:{
			                    	color:'#496d99',
			                    	fontSize:14
			                    },
			                    formatter: '{value}'
			                },
			            }
			        ],
			        yAxis: [
			            {
			                type: 'value',
			                name: units,
			                nameTextStyle:{
			                	color:'#496d99',
			                    fontSize:14
			                },
			                axisLine:{
			                	lineStyle:{
			                		color:'#dbe6f3'
			                	}
			                },
			                axisLabel: {
			                    textStyle:{
			                    	color:'#496d99',
			                    	fontSize:14
			                    },
			                    formatter: '{value}'
			                },
			            }
			        ],
			    series : [
			        {
			            name:'有机农产品',
			            type:'bar',
			            barWidth:15,
			            markArea:{
                silent:true,
                data:[
                    [{
                      name: '',
                      xAxis:  datas.xAxisData[-1],
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
                      xAxis:  datas.xAxisData[5],
                  }]
                    
                ]
            },
			            data:data1,
			          
			        
			        },
			        {
			            name:'绿色农产品',
			            type:'bar',
			            barWidth:15,
			            data:data2,
			        },
			        {
			            name:'无公害农产品',
			            type:'bar',
			            barWidth:15,
			            data:data3,
			        },
			        {
			            name:'其他农产品',
			            type:'bar',
			            barWidth:15,
			            data:data4,
			        }

			      
			    ]
		});
}