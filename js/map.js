
		var myChart2 = echarts.init(document.getElementById('map'));
		var ecConfig = echarts.config;
		var zrEvent = zrender.tool.event;
		var curIndx = 0;
		var mapType = [
		'china',
            // 23个省
            '广东', '青海', '四川', '海南', '陕西',
            '甘肃', '云南', '湖南', '湖北', '黑龙江',
            '贵州', '山东', '江西', '河南', '河北',
            '山西', '安徽', '福建', '浙江', '江苏',
            '吉林', '辽宁', '台湾',
            // 5个自治区
            '新疆', '广西', '宁夏', '内蒙古', '西藏',
            // 4个直辖市
            '北京', '天津', '上海', '重庆',
            // 2个特别行政区
            '香港', '澳门'
            ];
            document.getElementById('map').onmousewheel = function (e) {
            	var event = e || window.event;
            //提取鼠标滚轮变化
            curIndx += zrEvent.getDelta(event) > 0 ? (-1) : 1;
            if (curIndx < 0) {
            	curIndx = mapType.length - 1;
            }
            var mt = mapType[curIndx % mapType.length];
            if (mt == 'china') {
                //地图 : a（系列名称），b（区域名称），c（合并数值）, d（无）
                option2.tooltip.formatter = '{b}平均绩点';
            }
            else {
            	option2.tooltip.formatter = '{b}平均绩点';
            }
            option2.series[0].mapType = mt;
            myChart2.setOption(option2, true);
            zrEvent.stop(event);
        };
        myChart2.on(ecConfig.EVENT.MAP_SELECTED, function (param) {
        	var len = mapType.length;
        	var mt = mapType[curIndx % len];
        	if (mt == 'china') {
                // 全国选择时指定到选中的省份
                var selected = param.selected;
                for (var i in selected) {
                	if (selected[i]) {
                		mt = i;
                		while (len--) {
                			if (mapType[len] == mt) {
                				curIndx = len;
                			}
                		}
                		break;
                	}
                }
                option2.tooltip.formatter = '{b}平均绩点';
            }
            else {
            	curIndx = 0;
            	mt = 'china';
            	option2.tooltip.formatter = '{b}平均绩点';
            }
            option2.series[0].mapType = mt;
            myChart2.setOption(option2, true);
        });
        var option2 = {
        	title: {
        		textStyle: {
        			color:'#dde264'
        		},
        		text: '滚轮或点击切换'

        	},
        	tooltip: {
        		trigger: 'item',
        		formatter: '{b}平均绩点'
        	},
        	legend: {
                //布局方式，默认为水平布局，可选为：'horizontal' | 'vertical'
                orient: 'vertical',
                x: 'center',
                data: ['成绩绩点']
            },
            //工具箱，每个图表最多仅有一个工具箱
            toolbox: {
                //显示策略，可选为：true（显示） | false（隐藏），默认值为false
                show: true,
                //启用功能，目前支持feature，工具箱自定义功能回调处理
                feature: {
                    //辅助线标志
                    mark: {show: false},
                    //数据视图，打开数据视图，可设置更多属性,readOnly 默认数据视图为只读(即值为true)，可指定readOnly为false打开编辑功能
                    dataView: {show: false, readOnly: true},
                    //magicType，动态类型切换，支持直角系下的折线图、柱状图、堆积、平铺转换
                    magicType: {show: false},
                    //restore，还原，复位原始图表
                    restore: {show: true},
                    //saveAsImage，保存图片（IE8-不支持）,图片类型默认为'png'
                    saveAsImage: {show: true}
                }
            },
            dataRange: {
                // 布局方式，默认为垂直布局，可选为：'horizontal' | 'vertical'
                min: 0,
                max: 5,
                color: ['green', 'red'],
                text: ['高', '低'],           // 文本，默认为数值文本
                calculable: true
            },
            series: [
            {
            	name: '绩点',
            	type: 'map',
            	mapType: 'china',
                    //选中模式，默认关闭，可选single，multiple
                    selectedMode: 'single',
                    itemStyle: {
                    	normal: {label: {show: true}},
                    	emphasis: {label: {show: true}}
                    },
                    data: [
                    {name: '重庆市', value: Math.round(Math.random() * 5)},
                    {name: '北京市', value: Math.round(Math.random() * 5)},
                    {name: '天津市', value: Math.round(Math.random() * 5)},
                    {name: '上海市', value: Math.round(Math.random() * 5)},
                    {name: '香港', value: Math.round(Math.random() * 5)},
                    {name: '澳门', value: Math.round(Math.random() * 5)}
                    ]
                }
                ]
            };
            /*参数赋值*/
            myChart2.setOption(option2);
        