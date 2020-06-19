// 柱状图
(function() {
    var myChart = echarts.init(document.querySelector(".bar .chart"));

    //指定配置项和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            axisTick: {
                alignWithLabel: true
            },
            //刻度标签样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            //不显示x坐标轴的样式
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            //刻度标签样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            //y抽线条为2像素
            axisLine: {
                color: "rgba(255,255,255,.1)",
                // width: 2
            },
            //y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            //修改柱子为圆角
            barBorderRadius: 5
        }],
    };

    //把配置给实例对象
    myChart.setOption(option)

    //让图表跟随屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize();
    })

})();