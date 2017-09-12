/*
 * id dom的ID
 * width dom的宽
 * height dom的高
 * dataSet 数据
 *      value: 数值
 *      max: 最大值，最好是整数 - 当数值超过最大值，仪表盘指向最大值，显示数值是原值
 * radius 圆的 半径
 */
function createDashBoardChart(dom, width, height, dataSet,radius) {
    var publicGraph = {};

    //------------------------------function begin--------------------------
    function setCirclePath(angle, circle, sectorWidth, circleFlg) {
        var printSector = {
            bigX: Math.cos(angle) * circle.radius + circle.cx,
            bigY: Math.sin(angle) * circle.radius + circle.cy,
            smallX: Math.cos(angle) * (circle.radius - sectorWidth) + circle.cx,
            smallY: Math.sin(angle) * (circle.radius - sectorWidth) + circle.cx
        };

        var big = 0;
        var wise = 0;

        if(angle - circle.thetaBegin > 0) {
            if((angle - circle.thetaBegin) / UA > 180) {
                big = 1;
            } else {
                big = 0;
            }
            wise1 = 1;
            wise2 = 0;
        } else if(angle - circle.thetaBegin < 0) {
            if((angle - circle.thetaBegin) / UA < -180) {
                big = 1;
            } else {
                big = 0;
            }
            wise1 = 0;
            wise2 = 1;
        }

        var ary = [];
        ary.push('M');
        ary.push(circle.startX);
        ary.push(",");
        ary.push(circle.startY);
        ary.push(' ');

        ary.push('A');
        ary.push(circle.radius);
        ary.push(",");
        ary.push(circle.radius);
        ary.push(' ');

        ary.push('0,' + big + ',' + wise1);
        ary.push(' ');
        ary.push(printSector.bigX);
        ary.push(",");
        ary.push(printSector.bigY);
        ary.push(' ');

        if(circleFlg) {
            ary.push('A');
            ary.push(sectorWidth / 2);
            ary.push(",");
            ary.push(sectorWidth / 2);
            ary.push(' ');

            ary.push('0,1,0');
            ary.push(' ');
            ary.push(printSector.smallX);
            ary.push(",");
            ary.push(printSector.smallY);
            ary.push(' ');
        } else {
            ary.push('L');
            ary.push(printSector.smallX);
            ary.push(",");
            ary.push(printSector.smallY);
            ary.push(' ');
        }

        ary.push('A');
        ary.push(circle.radius - sectorWidth);
        ary.push(",");
        ary.push(circle.radius - sectorWidth);
        ary.push(' ');

        ary.push('0,' + big + ',' + wise2);
        ary.push(' ');
        ary.push(circle.startX_small);
        ary.push(",");
        ary.push(circle.startY_small);
        ary.push(' ');

        if(circleFlg) {
            ary.push('A');
            ary.push(sectorWidth / 2);
            ary.push(",");
            ary.push(sectorWidth / 2);
            ary.push(' ');

            ary.push('0,1,0');
            ary.push(' ');
            ary.push(circle.startX);
            ary.push(",");
            ary.push(circle.startY);
            ary.push(' ');
        } else {
            ary.push("Z");
        }

        return ary.join('');
    }

    function setCircleData(circle, sectorWidth) {
        circle.startX = Math.cos(circle.thetaBegin) * circle.radius + circle.cx;
        circle.startY = Math.sin(circle.thetaBegin) * circle.radius + circle.cy;
        circle.startX_small = Math.cos(circle.thetaBegin) * (circle.radius - sectorWidth) + circle.cx;
        circle.startY_small = Math.sin(circle.thetaBegin) * (circle.radius - sectorWidth) + circle.cy;

    }
    //------------------------------function end--------------------------
    //绘制一个svg
    var svg = d3.select("#" + dom).append("svg")
        .attr("width", width)
        .attr("height", height);
    if(dataSet.value > dataSet.max) {
        dataSet.disValue = dataSet.max;
    } else {
        dataSet.disValue = dataSet.value;
    };

    var UA = Math.PI / 180;
    var sectorWidth = 15;//空心圆环粗细
    var beginAngle = 270;
    var maxAngle = beginAngle - 360 + 0.1;
    var endAngle = beginAngle + (maxAngle - beginAngle) * dataSet.disValue / dataSet.max;

    var circle1 = {
        thetaBegin: beginAngle * UA,
        thetaEnd: endAngle * UA,
        thetaMax: maxAngle * UA,
        radius: radius,
        cx: radius,
        cy: radius,
        startX: 0,
        startY: 0,
        startX_small: 0,
        startY_small: 0
    };
    setCircleData(circle1, sectorWidth);

    var circle2 = {
        thetaBegin: beginAngle * UA,
        thetaEnd: endAngle * UA,
        thetaMax: maxAngle * UA,
        radius: radius,
        cx: radius,
        cy: radius,
        startX: 0,
        startY: 0,
        startX_small: 0,
        startY_small: 0
    };
    setCircleData(circle2, sectorWidth);
    var g = svg.append("g")
    	.attr('transform','translate(10,0)');
    g.append("path")
        .attr("fill", "#d0d8eb")
        .attr("d", setCirclePath(circle2.thetaMax, circle2, sectorWidth));
        
    //数量值处理
    var textValue = g.append("text")
        .attr("x", function(d) { 
            return radius;
        })
        .attr("y", function(d) {
            return radius+8;
        })
        .attr("font-size", "28px")
        .attr("font-family", "sans-serif")
        .attr("font-weight", "bolder")
        .style("fill", "#ff9338")
        .style("text-anchor", function(d) { 
            return "middle";
        })
        .text(0)
        .attr("fill", "#0cabe3");
    
    //名称处理    
	var textData = [];
	textData.push(dataSet.name);
	var textName = g.append('text')
		.data(textData)
		.attr('x',radius)
		.attr('y',height-260)
		.style('font-size','15px')
		.style('fill',"#5d73ac")
		.attr("font-family", "微软雅黑")
        .style("text-anchor",'middle')
		.text(function(d){
            return d
		});
	
	//生产计划数量    
	var textData = [];
	textData.push(dataSet.name1);
	var textName = g.append('text')
		.data(textData)
		.attr('x',radius-40)
		.attr('y',height-160)
		.style('font-size','16px')
		.style('fill',"#666")
		.attr("font-family", "微软雅黑")
        .style("text-anchor",'middle')
		.text(function(d){
            return d+" :"
		});
		
	//生产数据    
	var textData = [];
	textData.push(dataSet.num);
	var textName = g.append('text')
		.data(textData)
		.attr('x',radius+50)
		.attr('y',height-160)
		.attr('font-weight',"bold")
		.style('font-size','16px')
		.style('fill',"#ffb98e")
		.attr("font-family", "微软雅黑")
        .style("text-anchor",'middle')
		.text(function(d){
            return d+'次'
		});	
		
    var d = g.append("path")
        .attr("fill", "#0cabe3")
        .on('mouseover',function(){
        	var tipBox = $('<div class="tipBox"></div>');    	
        	tipBox.html(dataSet.value+'条').attr('x',radius+50).attr('y',height-160)
        	$('.'+dom).append(tipBox)        	
        })
        .on('mouseout',function(){        	
        	$('.tipBox').remove();       	
        });

    var o = {
        t: 0
    };
    var c = createjs.Tween.get(o, {
            loop: false,
            onChange: function() {
                var val = (circle1.thetaEnd - circle1.thetaBegin) * o.t;
                d.attr("d", setCirclePath(circle1.thetaBegin + val, circle1, sectorWidth, true));
				//数量占比（%）
				var dataTxt = ((dataSet.value * o.t)/dataSet.max*100).toFixed(1);
				if(dataTxt>0.1){					
					 textValue.html(dataTxt+'%');
				}else{					
					textValue.text("<0.1%");
				};				                
            }
        })
        .to({
            t: 1
        }, 1000);

    return publicGraph;
}