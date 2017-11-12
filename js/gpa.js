    		var myChart3 = echarts.init(document.getElementById('gpa'));
    		var option3 = {
    			//title 标题组件，包含主标题和副标题
    			title: {
    				text:'大学四年绩点对比'
    			},
    			tooltip: {
    				trigger: 'axis'
    			},
    			//legend 图例组件 图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示
    			legend: {
    				textStyle: {
    					fontSize: '20'
    				},

    				data: ['自己绩点', '学院平均绩点']
    			},
    			toolbox: {
    				show: true,
    				feature: {
    					mark: {show: false},
    					dataView: {show: false, readOnly: true},
    					magicType: {show: false, type: ['line', 'bar']},
    					restore: {show: true},
    					saveAsImage: {show: true}
    				}
    			},
    			calculable: false,
    			xAxis: [
    			{
    				type: 'category',
    				boundaryGap: false,
    				data: ['2015/2016(1)', '2015/2016(2)', '2016/2017(1)', '2016/2017(2)', '2017/2018(1)', '2017/2018(2)', '2018/2019(1)', '2018/2019(2)'].concat(),
    				axisLabel: {
    					textStyle: {
    						color: '#fff'
    					},
    					fontSize: '24'
    				},
    				axisLine: {
    					lineStyle: {
    						color: '#00f',
    						width: 4
    					}
    				}
    			}
    			],
    			yAxis: [
    			{
    				type: 'value',
    				axisLabel: {
    					textStyle: {
    						color: '#fff'
    					},
    					fontSize: '20',
    					formatter: '{value}.0'
    				},
    				axisLine: {
    					lineStyle: {
    						color: '#fff',
    						width: 4
    					}
    				}
    			}
    			],
    			series: [
    			{
    				name: '自己绩点',
    				type: 'line',
    				data: [2.81, 3.01, 3.26, 3.01, 2.78, 3.45, 3.07, 2.84],
    				markPoint: {
    					data: [
    					{type: 'max', name: '最大值'},
    					{type: 'min', name: '最小值'}
    					]
    				},
    				markLine: {
    					data: [
    					{type: 'average', name: '平均值'}
    					]
    				}
    			},
    			{
    				name: '学院平均绩点',
    				type: 'line',
    				data: [1.9, 2.4, 2.3, 2.1, 2.4, 2.5, 2.2],
    				markPoint: {
    					data: [
    					{type: 'max', name: '最大值'},
    					{type: 'min', name: '最小值'}
    					]
    				},
    				markLine: {
    					data: [
    					{type: 'average', name: '平均值'}
    					]
    				}
    			}
    			]
    		};
    		myChart3.setOption(option3);