
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
function pieChart(datas){
	var myChart = echarts.init(document.getElementById(datas.dom));
	var seriesMin = [];
	var seriesMax = [];
	var html = "";
    datas.seriesData.forEach(function(v,i){
    		html+='<p><span class="dataName">'+v.name+'：</span><span class="datavalue">'+v.value+'</span></p>';
    		seriesMax.push(v.value)
    });
    console.log(html)
    $.each(seriesMax,function (i,n) {
      seriesMin.push(seriesMax[0]*1.7 - seriesMax[i]);
      return seriesMin;
    });
    $("<div class='chart1-detiles'></div>").html(html).appendTo($("#"+datas.dom))
  console.log(seriesMin);
		myChart.setOption ({
		       tooltip : {
			        show: true,
			        formatter: "{a} : {c}"
			    },
			    backgroundColor:'#fff',
			    color:['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80'],
			    series : [
			        {
			            name:'地理标识认证',
			            type:'pie',
			            clockWise:false,
			            radius : ['73%', '80%'],
			            itemStyle : {
                          normal: {
                            label: {show:false},
                            labelLine: {show:false},
                            color: new echarts.graphic.LinearGradient(
                              0, 0, 0, 1,
                              [
                                {offset: 0, color: 'rgba(39,165,255,.9)'},
                                {offset: 1, color: 'rgba(45,105,225,.9)'}
                              ]
                            )
                          }

                        },
			            data:[
			                {
			                    value:seriesMax[0],
			                    name:'20-50万元'
			                },
			                {
			                    value:seriesMin[0],
			                    name:'invisible',
			                    itemStyle : placeHolderStyle
			                }
			            ]
			        },
			        {
			            name:'无公害标示认证',
			            type:'pie',
			            clockWise:false,
			            radius : ['60%', '67%'],
			            itemStyle : {
							normal: {
								label: {show:false},
								labelLine: {show:false},
	                          	color: new echarts.graphic.LinearGradient(
	                            0, 0, 0, 1,
	                            [
	                              {offset: 0, color: 'rgba(38,218,219,.8)'},
	                              {offset: 1, color: 'rgba(54,180,255,.9)'}
	                            ]
	                          )
							}

					},
			            data:[
			                {
			                    value:seriesMax[1],
			                    name:'50-100万元'
			                },
			                {
			                    value:seriesMin[1],
			                    name:'invisible',
			                    itemStyle : placeHolderStyle
			                }
			            ]
			        },
			        {
			            name:'绿色食品认证',
			            type:'pie',
			            clockWise:false,
			            radius : ['47%', '54%'],
			            itemStyle : {
						normal: {
							label: {show:false},
							labelLine: {show:false},
                          	color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                              {offset: 0, color: 'rgba(174,223,69,.9)'},
                              {offset: 1, color: 'rgba(110,187,52,.9)'}
                            ]
                          )
						}
					},
			            data:[
			                {
			                    value:seriesMax[2],
			                    name:'100-1000万元'
			                },
			                {
			                    value:seriesMin[2],
			                    name:'invisible',
			                    itemStyle : placeHolderStyle
			                }
			            ]
			        },
			        {
			            name:'有机产品认证',
			            type:'pie',
			            clockWise:false,
			            radius : ['34%', '41%'],
			            itemStyle : {
						normal: {
							label: {show:false},
							labelLine: {show:false},
                          	color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                              {offset: 0, color: 'rgba(38,218,219,.9)'},
                              {offset: 1, color: 'rgba(54,180,255,.9)'}
                            ]
                          )
						}
					},
			            data:[
			                {
			                    value:seriesMax[3],
			                    name:'1000万元以上'
			                },
			                {
			                    value:seriesMin[3],
			                    name:'invisible',
			                    itemStyle : placeHolderStyle
			                }
			            ]
			        }
			    ]
		});
}