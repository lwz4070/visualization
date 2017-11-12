
          var myChart=echarts.init(document.getElementById('map')); 
         option = {  
            title : {  
                // 是否显示  
                show: true,  

                // 主标题文本，'\n'指定换行  
                text: '2016年我国各省份人均GDP收入',  

                // 主标题文本超链接  
                //link: 'http://www.baidu.com',  
                
                // 指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）  
                //target: 'self',  

                // 副标题文本，'\n'指定换行  
                //subtext: '纯属虚构', 

                // 副标题文本超链接  
                //sublink: 'http://www.baidu.com',
                
                // 指定窗口打开副标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）  
                //subtarget: 'self', 
                 
                // 水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）  
                x: 'center',  

                // 垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）  
                y: 'top',  

                // 水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center  
                textAlign: 'center', 

                // 标题背景颜色，默认透明  
                backgroundColor: 'rgba(0,0,0,0.1)',  

                // 标题边框颜色  
                borderColor: '#66FF00',  

                // 标题边框线宽，单位px，默认为0（无边框）  
                borderWidth: 1,  

                // 标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距，同css，见下图  
                padding: [20,40,20,40],  

                // 主副标题纵向间隔，单位px，默认为10  
                itemGap: 20,  

                // 主标题文本样式  
                textStyle: {  

                    // 颜色  
                    color: '#0066FF', 

                    // 水平对齐方式，可选为：'left' | 'right' | 'center'  
                    align: 'left',  

                    // 垂直对齐方式，可选为：'top' | 'bottom' | 'middle'  
                    baseline: 'bottom',

                    // 字体系列  
                    fontFamily: 'Arial, 宋体, sans-serif',

                    // 字号 ，单位px  
                    fontSize: 20,  

                    // 样式，可选为：'normal' | 'italic' | 'oblique'  
                    fontStyle: 'italic',  

                    // 粗细，可选为：'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 |... | 900  
                    fontWeight: 'normal'  
                },  
                // 副标题文本样式  
                subtextStyle: {  

                    // 颜色  
                    color: '#FF7F50',  

                    // 水平对齐方式，可选为：'left' | 'right' | 'center'  
                    align: 'left',  

                    // 垂直对齐方式，可选为：'top' | 'bottom' | 'middle'  
                    baseline: 'bottom', 

                    // 字体系列  
                    fontFamily: 'Arial, 宋体, sans-serif', 

                    // 字号 ，单位px  
                    fontSize: 15,  

                    // 样式，可选为：'normal' | 'italic' | 'oblique'  
                    fontStyle: 'italic', 

                    // 粗细，可选为：'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 |... | 900  
                    fontWeight: 'normal'  
                }  
            },  
            // 工具提示  
            tooltip : {  

                // 显示策略，可选为：true（显示） | false（隐藏）  
                show: true,  

                // tooltip主体内容显示策略，只需tooltip触发事件或显示axisPointer而不需要显示内容时可配置该项为false  
                showContent: true,  

                // 触发类型，默认数据触发，见下图，可选为：'item' | 'axis'  
                trigger: 'item',  

                // 位置指定，传入{Array}，如[x, y]， 固定位置[x, y]；传入{Function}，如function([x, y]) {return [newX,newY]}，默认显示坐标为输入参数，用户指定的新坐标为输出返回。  
                // position: getTooltipPosition(0,0),  
                
                // 内容格式器：{string}（Template） | {Function}，支持异步回调  
                /*formatter: function(data){ 
                    console.log(data); 
                    return data[1]+"："+data[5].count; 
                }*/  

                // 拖拽重计算独有，数据孤岛内容格式器：{string}（Template） | {Function}，见表格下方  
                // islandFormatter:  
                
                // 显示延迟，添加显示延迟可以避免频繁切换，特别是在详情内容需要异步获取的场景，单位ms  
                showDelay: 0,  

                // 隐藏延迟，单位ms  
                hideDelay: 0,  

                // 动画变换时长，单位s，如果你希望tooltip的跟随实时响应，showDelay设置为0是关键，同时transitionDuration设0也会有交互体验上的差别。  
                transitionDuration: 0,  

                // 鼠标是否可进入详情气泡中，默认为false，如需详情内交互，如添加链接，按钮，可设置为true。  
                //enterable: false,  
                
                // 提示背景颜色，默认为透明度为0.7的黑色  
                backgroundColor: 'white',  

                // 提示边框颜色  
                borderColor: '#FF7F50',  

                // 提示边框圆角，单位px，默认为4  
                borderRadius: 10,  

                // 提示边框线宽，单位px，默认为0（无边框）  
                borderWidth: 2,  

                // 提示内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距，同css  
                padding: [15,15,15,15],  

                // 坐标轴指示器  
                /*axisPointer:{ 

                    // 默认type为line，可选为：'line' | 'cross' | 'shadow' | 'none'(无)，指定type后对应style生效 
                    type: 'line', 

                    // lineStyle设置直线指示器 
                    lineStyle: { 

                        // 颜色 
                        color:'#48b', 

                        // 线条样式，可选为：'solid' | 'dotted' | 'dashed'， 树图还可以选：'curve' | 'broken' 
                        type:'solid', 

                        // 线宽 
                        width:10, 

                        // 折线主线(IE8+)有效，阴影色彩，支持rgba 
                        shadowColor:'rgba(0,0,0,0)',

                        // 折线主线(IE8+)有效，阴影模糊度，大于0有效 
                        shadowBlur:5, 

                        // 折线主线(IE8+)有效，阴影横向偏移，正值往右，负值往左 
                        shadowOffsetX:3, 

                        // 折线主线(IE8+)有效，阴影纵向偏移，正值往下，负值往上 
                        shadowOffsetY:3 

                    }, 
                    // crossStyle设置十字准星指示器 
                    crossStyle:{ 

                        // 颜色 
                        color:'#48b', 

                        // 线条样式，可选为：'solid' | 'dotted' | 'dashed'， 树图还可以选：'curve' | 'broken' 
                        type:'solid', 

                        // 线宽 
                        width:10, 

                        // 折线主线(IE8+)有效，阴影色彩，支持rgba 
                        shadowColor:'rgba(0,0,0,0)', 

                        // 折线主线(IE8+)有效，阴影模糊度，大于0有效 
                        shadowBlur:5, 

                        // 折线主线(IE8+)有效，阴影横向偏移，正值往右，负值往左 
                        shadowOffsetX:3, 

                        // 折线主线(IE8+)有效，阴影纵向偏移，正值往下，负值往上 
                        shadowOffsetY:3 

                    }, 
                    // shadowStyle设置阴影指示器，areaStyle.size默认为'auto'自动计算，可指定具体宽度 
                    shadowStyle:{ 

                        // 颜色 
                        color: 'rgba(150,150,150,0.3)', 

                        width: 'auto', 
                        // 填充样式，目前仅支持'default'(实填充) 
                        type: 'default' 
                    } 
                },*/  
                // 文本样式，默认为白色字体  
                textStyle:{  

                    // 颜色  
                    color: '#FF7F50', 

                    // 水平对齐方式，可选为：'left' | 'right' | 'center'  
                    align: 'left',  

                    // 垂直对齐方式，可选为：'top' | 'bottom' | 'middle'  
                    baseline: 'bottom',

                    // 字体系列  
                    fontFamily: 'Arial, 宋体, sans-serif',  

                    // 字号 ，单位px  
                    fontSize: 20,  

                    // 样式，可选为：'normal' | 'italic' | 'oblique'  
                    fontStyle: 'italic',  

                    // 粗细，可选为：'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 |... | 900  
                    fontWeight: 'normal'  

                }  
            },  
            legend: {  
                // 显示策略，可选为：true（显示） | false（隐藏）  
                show: true, 

                // 布局方式，默认为水平布局，可选为：'horizontal' | 'vertical'  
                orient: 'vertical',  

                // 水平安放位置，默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）  
                x: 'left',  

                // 垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）  
                y: 'top',  

                // 图例背景颜色，默认透明  
                backgroundColor: 'rgba(0,0,0,0.1)',  

                // 图例边框颜色  
                borderColor: '#0066FF',  

                // 图例边框线宽，单位px，默认为0（无边框）  
                borderWidth: 1,  

                // 图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距，同css  
                padding: [15,15,15,15],  

                // 各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔  
                itemGap: 20,  

                // 图例图形宽度  
                itemWidth: 30,  

                // 图例图形高度  
                itemHeight: 20,  

                // 默认只设定了图例文字颜色,更个性化的是，要指定文字颜色跟随图例,可设color为'auto'  
                textStyle:{  

                    // 颜色  
                    color: '#FF7F50',  

                    // 水平对齐方式，可选为：'left' | 'right' | 'center'  
                    align: 'left',  

                    // 垂直对齐方式，可选为：'top' | 'bottom' | 'middle'  
                    baseline: 'bottom', 

                    // 字体系列  
                    fontFamily: 'Arial, 宋体, sans-serif', 

                    // 字号 ，单位px  
                    fontSize: 20,  

                    // 样式，可选为：'normal' | 'italic' | 'oblique'  
                    fontStyle: 'italic',  

                    // 粗细，可选为：'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 |... | 900  
                    fontWeight: 'normal'  

                },  
                // 文本格式器：{string}（Template） | {Function}，模板变量为'{name}'，函数回调参数为name  
                /*formatter: function(data){ 
                    console.log(data); 
                    return data[1]+"："+data[5].count; 
                },*/  
                // 选择模式，默认开启图例开关，可选single，multiple  
                selectedMode: true,  

                // 配置默认选中状态，可配合LEGEND.SELECTED事件做动态数据载入  
                /*selected: { 
                    '降水量' : false 
                },*/  
                // 图例内容数组  
                data:[{name:'2016年GDP'/*,textStyle:{Object},icon:{string}*/}]  
            },  
            // 值域选择，每个图表最多仅有一个值域控件  
            dataRange: {  

                // 显示策略，可选为：true（显示） | false（隐藏）  
                show: true,  

                // 布局方式，默认为垂直布局，可选为：'horizontal' | 'vertical'  
                orient: 'vertical', 

                // 水平安放位置，默认为全图左对齐，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）  
                x: 'left',  

                // 垂直安放位置，默认为全图底部，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）  
                y: 'bottom',  

                // 值域控件背景颜色，默认透明  
                backgroundColor: 'rgba(0,0,0,0.1)', 

                // 图例边框颜色  
                borderColor: '#0066FF',  

                // 图例边框线宽，单位px，默认为0（无边框）  
                borderWidth: 1,  

                // 图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距，同css  
                padding: [15,15,15,15],  

                // 各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔  
                itemGap: 20,  

                // 图例图形宽度  
                itemWidth: 30,  

                // 图例图形高度  
                itemHeight: 20,  

                // 指定的最小值，eg: 0，默认无，必须参数，唯有指定了splitList时可缺省min。  
                min: 0,  

                // 指定的最大值，eg: 100，默认无，必须参数，唯有指定了splitList时可缺省max  
                max: 25000,  

                // 小数精度，默认为0，无小数点，当 min ~ max 间在当前精度下无法整除splitNumber份时，精度会自动提高以满足均分，不支持不等划分  
                precision: 1,  

                // 分割段数，默认为5，为0时为线性渐变，calculable为true是默认均分100份  
                splitNumber: 10,  
                // 自定义分割方式，支持不等距分割。splitList被指定时，splitNumber将被忽略。  
                /*splitList: [ 
                    {start: 1500}, 
                    {start: 900, end: 1500}, 
                    {start: 310, end: 1000}, 
                    {start: 200, end: 300}, 
                    {start: 10, end: 200, label: '10 到 200（自定义label）'}, 
                    {start: 5, end: 5, label: '5（自定义特殊颜色）', color: 'black'}, 
                    {end: 10} 
                ],*/  
                // 用于设置dataRange的初始选中范围。calculable为true时有效。  
                range: {start: 0, end: 100}, 

                // 选择模式，默认开启值域开关，可选single，multiple  
                selectedMode: 'multiple', 

                // 是否启用值域漫游，启用后无视splitNumber和splitList，值域显示为线性渐变  
                calculable : true,  

                // 是否启用地图hover时的联动响应  
                hoverLink: true,  

                // 值域漫游是否实时显示，在不支持Canvas的浏览器中该值自动强制置为false  
                realtime:true,  

                // 值域颜色标识，颜色数组长度必须>=2，颜色代表从数值高到低的变化，即颜色数组低位代表数值高的颜色标识 ，支持Alpha通道上的变化（rgba）  
                color:['#e42515','#fad3d0'],  

                // 内容格式器：{string}（Template） | {Function}，模板变量为'{value}'和'{value2}'，代表数值起始值和结束值，函数参数两个，含义同模板变量，当calculable为true时模板变量仅有'{value}'  
                /*formatter : function(v, v2){ 
                    if (v2 < 1000) { return '低于' + v2;} 
                    else if (v > 1000) { return '高于' + v;} 
                    else { return '中'; } 
                },*/  
                //  值域文字显示，splitNumber生效时默认以计算所得数值作为值域文字显示，可指定长度为2的文本数组显示简介的值域文本，如['高', '低']，'\n'指定换行  
                text:['高','低'],  

                // 默认只设定了值域控件文字颜色  
                textStyle:{  

                    // 颜色  
                    color: '#FF7F50',  

                    // 水平对齐方式，可选为：'left' | 'right' | 'center'  
                    align: 'left',  

                    // 垂直对齐方式，可选为：'top' | 'bottom' | 'middle'  
                    baseline: 'bottom',  

                    // 字体系列  
                    fontFamily: 'Arial, 宋体, sans-serif',  

                    // 字号 ，单位px  
                    fontSize: 20,  

                    // 样式，可选为：'normal' | 'italic' | 'oblique'  
                    fontStyle: 'italic',  

                    // 粗细，可选为：'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 |... | 900  
                    fontWeight: 'normal'  

                }  
            },  
            // 工具箱，每个图表最多仅有一个工具箱  
            toolbox: {  

                // 显示策略，可选为：true（显示） | false（隐藏）  
                show: true,  

                // 布局方式，默认为水平布局，可选为：'horizontal' | 'vertical'  
                orient : 'horizontal',  

                // 水平安放位置，默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）  
                x: 'right',  

                // 垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）  
                y: 'bottom',  

                // 工具箱背景颜色，默认透明  
                backgroundColor: '#fff', 

                // 工具箱边框颜色  
                borderColor: '#0066FF',  

                // 工具箱边框线宽，单位px，默认为0（无边框）  
                borderWidth: 1,  

                // 工具箱内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距，同css  
                padding: [15,15,15,15],  

                // 各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔  
                itemGap: 20,  

                // 工具箱icon大小，单位（px）  
                itemSize: 20,  

                // 工具箱icon颜色序列，循环使用，同时支持在具体feature内指定color  
                color:['#1e90ff','#22bb22','#4b0082','#d2691e'],  

                // 禁用颜色定义  
                disableColor:'#fff',  

                // 生效颜色定义  
                effectiveColor:'red',  

                // 是否显示工具箱文字提示，默认启用  
                showTitle:true,  

                // 工具箱提示文字样式  
                textStyle:{  

                    // 颜色  
                    color: '#FF7F50',  

                    // 水平对齐方式，可选为：'left' | 'right' | 'center'  
                    align: 'left',  

                    // 垂直对齐方式，可选为：'top' | 'bottom' | 'middle'  
                    baseline: 'bottom',  

                    // 字体系列  
                    fontFamily: 'Arial, 宋体, sans-serif',  

                    // 字号 ，单位px  
                    fontSize: 20,  

                    // 样式，可选为：'normal' | 'italic' | 'oblique'  
                    fontStyle: 'italic',  

                    // 粗细，可选为：'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 |... | 900  
                    fontWeight: 'normal'  

                },  
                // 启用功能，目前支持feature见下，工具箱自定义功能回调处理  
                feature : {  
                    // 辅助线标志,分别是启用，删除上一条，删除全部,可设置更多属性  
                    // mark : {  
                    //     show : true,  
                    //     title : {  
                    //         mark : '辅助线开关',  
                    //         markUndo : '删除辅助线',  
                    //         markClear : '清空辅助线'  
                    //     },  
                    //     lineStyle : {  
                    //         width : 2,  
                    //         color : '#1e90ff',  
                    //         type : 'dashed'  
                    //     }  
                    // },  
                    // 框选区域缩放，自动与存在的dataZoom控件同步，上图icon左数4/5，分别是启用，缩放后退  
                    // dataZoom : {  
                    //     show : true,  
                    //     title : {  
                    //         dataZoom : '区域缩放',  
                    //         dataZoomReset : '区域缩放后退'  
                    //     }  
                    // },  
                    // 数据视图，上图icon左数6，打开数据视图，可设置更多属性  
                    dataView : {  
                        show : true,  
                        title : '数据视图',  
                        readOnly: false,  
                        lang: ['数据视图', '关闭', '刷新']  
                    },  
                    // 动态类型切换，支持直角系下的折线图、柱状图、堆积、平铺转换，上图icon左数6~14，分别是切换为堆积，切换为平铺，切换折线图，切换柱形图，切换为力导向布局图，切换为和弦图，切换为饼图，切换为漏斗图  
                    magicType: {  
                        show : true,  
                        title : {  
                            line : '折线图切换',  
                            bar : '柱形图切换',  
                            stack : '堆积',  
                            tiled : '平铺',  
                            force: '力导向布局图切换',  
                            chord: '和弦图切换',  
                            pie: '饼图切换',  
                            funnel: '漏斗图切换'  
                        },  
                        option: {  
                            // line: {...},  
                            // bar: {...},  
                            // stack: {...},  
                            // tiled: {...},  
                            // force: {...},  
                            // chord: {...},  
                            // pie: {...},  
                            // funnel: {...}  
                        },  
                        type : []  
                    },  
                    // 还原，复位原始图表  
                    restore : {  
                        show : true,  
                        title : '还原'  
                    },  
                    // 保存图片（IE8-不支持），可设置更多属性  
                    saveAsImage : {  
                        show : true,  
                        title : '保存为图片',  
                        type : 'png',  
                        lang : ['点击保存']  
                    }  
                }  
            },  
            // 缩放漫游组件，仅对地图有效  
            roamController: {

                // 显示策略，可选为：true（显示） | false（隐藏）  
                show: true,  

                // 水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）  
                x: 'right',  

                // 垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）  
                y: 'top',  

                // 指定宽度，决定4向漫游圆盘大小，可指定 {number}（宽度，单位px）  
                width: 120,  

                // 指定高度，缩放控制键默认会在指定高度的最下方最大化显示，可指定 {number}（高度，单位px）  
                height:200,  

                // 缩放漫游组件背景颜色，默认透明  
                backgroundColor:'rgba(0,0,0,0.1)',  

                // 缩放漫游组件边框颜色  
                borderColor: '#1e90ff',  

                // 缩放漫游组件边框线宽，单位px，默认为0（无边框）  
                borderWidth: 1,  

                // 缩放漫游组件内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距，同css  
                padding: [15,15,15,15],  

                // 漫游组件文字填充颜色  
                fillerColor:'#000',  

                // 控制手柄主体颜色  
                handleColor:'#e3655a', 

                // 4向漫游移动步伐，单位px  
                step:10,  

                // 必须，指定漫游组件可控地图类型  
                mapTypeControl: {  
                    'china': true  
                }  
            },  
            series : [  
                {  
                    // 图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。可选为：   
                    // 'line'（折线图） | 'bar'（柱状图） | 'scatter'（散点图） | 'k'（K线图）   
                    // 'pie'（饼图） | 'radar'（雷达图） | 'chord'（和弦图） | 'force'（力导向布局图） | 'map'（地图）  
                    type: 'map',

                    // 系列名称  
                    name: '2016年GDP',  

                    // 地图类型，支持world，china及全国34个省市自治区  
                    mapType: 'china', 

                    // 是否开启滚轮缩放和拖拽漫游,默认为false（关闭），其他有效输入为true（开启），'scale'（仅开启滚轮缩放），'move'（仅开启拖拽漫游）  
                    roam: false,  

                    // 图形样式  
                    itemStyle:{  

                        // 默认状态下地图的文字  
                        normal:{label:{show:true}},

                        // 鼠标放到地图上面显示文字  
                        emphasis:{label:{show:true}}  
                    },  
                    data:[  
                        {name: '北京',value: 24541},  
                        {name: '天津',value: 26688},  
                        {name: '上海',value: 17800},  
                        {name: '重庆',value: 17010},  
                        {name: '河北',value: 5857.8},  
                        {name: '河南',value: 7994.2},  
                        {name: '云南',value: 4300.43},  
                        {name: '辽宁',value: 6712},  
                        {name: '黑龙江',value: 6101.6},  
                        {name: '湖南',value: 9323.7},  
                        {name: '安徽',value: 6274.3},  
                        {name: '山东',value: 6536.1},  
                        {name: '新疆',value: 2824},  
                        {name: '江苏',value: 10503.02},  
                        {name: '浙江',value:11050.49},  
                        {name: '江西',value: 4354.99},  
                        {name: '湖北',value: 11912.61},  
                        {name: '广西',value: 3703.39},  
                        {name: '甘肃',value: 2264.23},  
                        {name: '山西',value: 2955.6},
                        {name: '内蒙古',value:3173.6},  
                        {name: '陕西',value: 6257.18},  
                        {name: '吉林',value: 5928.55},  
                        {name: '福建',value: 6197.77},  
                        {name: '贵州',value: 3157.7},  
                        {name: '广东',value: 19610.94},  
                        {name: '青海',value: 1248.17},  
                        {name: '西藏',value: 424.95},  
                        {name: '四川',value: 12170.23},  
                        {name: '宁夏',value: 1617.28},  
                        {name: '海南',value: 1257.67},  
                        {name: '台湾',value: 10023.79},  
                        {name: '香港',value: 19667.53},  
                        {name: '澳门',value: 16785.47}  
                    ]  
                }
            ]  
        };  
  
        myChart.setOption(option);  