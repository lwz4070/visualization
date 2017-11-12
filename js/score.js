            var myChart1;
			var domMain1 = document.getElementById('bar');

			var option1 = {
            //标题，每个图表最多仅有一个标题控件，每个标题控件可设主副标题
            title: {
                // text: '各科成绩分析',
                text: '成绩对比条形图',
                //主标题文本超链接
                // link: 'http://www.baidu.com',
                //副标题文本，'\n'指定换行
                //subtext: '奇怪的网站',
                //副标题文本超链接
                //sublink: 'http://www.haohaori8.com',
                //水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                // x: 'left',
                //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                //y: 'top'
               // show: false
            },
            //提示框，鼠标悬浮交互时的信息提示
            tooltip: {
            	show: true,
                //触发类型，默认（'item'）数据触发，可选为：'item' | 'axis'
                trigger: 'item'
            },
            //图例，每个图表最多仅有一个图例
            legend: {
            	textStyle: {
    					fontSize: '20',
    					color:'#000'
    				 },
                //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                // show: true,
                //水平安放位置，默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                // x: 'left',
                //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                //y: 'top',
                //legend的data: 用于设置图例，data内的字符串数组需要与sereis数组内每一个series的name值对应
                data: ['我的成绩', '班级平均成绩']
            },
            //工具箱，每个图表最多仅有一个工具箱
            toolbox: {
                //显示策略，可选为：true（显示） | false（隐藏），默认值为false
                show: true,
                //启用功能，目前支持feature，工具箱自定义功能回调处理
                feature: {
                    //辅助线标志
                    mark: {show: false},
                    //dataZoom，框选区域缩放，自动与存在的dataZoom控件同步，分别是启用，缩放后退
                    // dataZoom: {
                    // 	show: true,
                    // 	title: {
                    // 		dataZoom: '区域缩放',
                    // 		dataZoomReset: '区域缩放后退'
                    // 	}
                    // },
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
            //是否启用拖拽重计算特性，默认关闭(即值为false)
            calculable: false,
            //直角坐标系中横轴数组，数组中每一项代表一条横轴坐标轴，仅有一条时可省略数值
            //横轴通常为类目型，但条形图时则横轴为数值型，散点图时则横纵均为数值型
            xAxis: [
            {
                    //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                    show: true,
                    //坐标轴类型，横轴默认为类目型'category'
                    type: 'category',
                    //类目型坐标轴文本标签数组，指定label内容。 数组项通常为文本，'\n'指定换行
                    data: ['高等代数', '大学物理', '英语', '线性代数', '近代史'],
                    // 控制网格线是否显示
                    /* splitLine: {
                     show: false,
                     //  改变轴线颜色
                     lineStyle: {
                     // 使用深浅的间隔色
                     color: ['white']
                     }
                 }*/
                    //  改变x轴颜色
                    axisLine: {
                    	lineStyle: {
                    		color: '#e3e9c7',
                    		width: 4
                    	}
                    },
                    //  改变x轴字体颜色和大小
                    axisLabel: {
                    	textStyle: {
                    		color: '#dde264',
                    		fontSize: '20'
                    	}
                    }
                }
                ],
            //直角坐标系中纵轴数组，数组中每一项代表一条纵轴坐标轴，仅有一条时可省略数值
            //纵轴通常为数值型，但条形图时则纵轴为类目型
            yAxis: [
            {
                    //显示策略，可选为：true（显示） | false（隐藏），默认值为true
                    show: true,
                    //坐标轴类型，纵轴默认为数值型'value'
                    type: 'value',
                    //分隔区域，默认不显示
                    splitArea: {show: true},
                    // 控制网格线是否显示
                    /* splitLine: {
                     show: false,
                     //  改变轴线颜色
                     lineStyle: {
                     // 使用深浅的间隔色
                     color: ['white']
                     }
                 }*/
                    //  改变y轴颜色
                    axisLine: {
                    	lineStyle: {
                    		color: '#e3e9c7',
                    		width: 4
                    	}
                    },
                    //  改变y轴字体颜色和大小
                    axisLabel: {
                    	textStyle: {
                    		color: '#dde264',
                    		fontSize: '20'
                    	}
                    }
                }
                ],
            //sereis的数据: 用于设置图表数据之用。series是一个对象嵌套的结构；对象内包含对
            series: [
            {
                    //系列名称，如果启用legend，该值将被legend.data索引相关
                    name: '我的成绩',
                    //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                    type: 'bar',
                    // 系列级个性化样式，纵向渐变填充
                    itemStyle: {
                    	normal: {
                            //柱形边框圆角，单位px，默认为0，支持传入数组分别指定柱形4个圆角半径，如:[5, 5, 0, 0]（顺时针左上，右上，右下，左下）
                            barBorderRadius: [5, 5, 0, 0],
                            //柱形边框线宽，单位px，默认为0
                            barBorderWidth: 5,
                            //边框颜色
                            barBorderColor: 'yellow',
                            color: 'green',
                            //标签，饼图默认显示在外部，离饼图距离由labelLine.length决定，漏斗图默认显示在右侧，离图形距离由labelLine.length决定地图标签不可指定位置，折线图，柱形图，K线图，散点图可指定position见下
                            label: {
                            	show: false,
                            	position: 'top',
                            	formatter: '{b}\n{c}'
                            }
                        }
                    },
                    //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                    data: [95, 79, 69, 82, 90],
                    //系列中的数据标注内容
                    markPoint: {
                    	data: [
                    	{type: 'max', name: '最大值'},
                    	{type: 'min', name: '最小值'}
                    	]
                    },
                    //系列中的数据标线内容
                    markLine: {
                    	data: [
                    	{type: 'average', name: '平均值'}
                    	]
                    }
                },
                {
                    //系列名称，如果启用legend，该值将被legend.data索引相关
                    name: '班级平均成绩',
                    //图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。
                    type: 'bar',
                    itemStyle: {
                    	normal: {
                            //柱形边框圆角，单位px，默认为0，支持传入数组分别指定柱形4个圆角半径，如:[5, 5, 0, 0]（顺时针左上，右上，右下，左下）
                            barBorderRadius: [5, 5, 0, 0],
                            //柱形边框线宽，单位px，默认为0
                            barBorderWidth: '5',
                            //边框颜色
                            barBorderColor: 'blue',
                            color: 'red',
                            //标签，饼图默认显示在外部，离饼图距离由labelLine.length决定，漏斗图默认显示在右侧，离图形距离由labelLine.length决定地图标签不可指定位置，折线图，柱形图，K线图，散点图可指定position见下
                            label: {
                            	show: true,
                            	position: 'top',
                            	formatter: '{c}'
                            }
                        }
                    },
                    //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值
                    data: [70, 75, 68, 77, 80],
                    //系列中的数据标线内容
                    markLine: {
                    	data: [
                    	{type: 'average', name: '平均值'}
                    	]
                    }
                }
                ]
            };
            myChart1 = echarts.init(domMain1);
        //为echarts对象加载数据
        myChart1.setOption(option1, true);



//     </fieldset>
//     <fieldset class="mynav">
//     	<legend>历年绩点分析</legend>
//     	<div id="line" class="echart"></div>
//     	<script type="text/javascript">
