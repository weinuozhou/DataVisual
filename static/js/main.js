const jsonData = {
    "info": {
        "totalSale": 31568060.961,
        "totalProfit": 1871971.43,
        "rate": 0.05929953798279476
    },
    "store": {
        "storeName": [
            "临泉路",
            "人民路店",
            "众兴店",
            "定远路店",
            "庐江路",
            "杨店店",
            "海恒店",
            "燎原店",
            "金寨店"
        ],
        "saleByStore": [
            3774225.952,
            3329926.558,
            3791267.165,
            3445234.352,
            3505012.553,
            3344368.597,
            3625606.292,
            3314062.654,
            3438356.838
        ],
        "profitByStore": [
            221276.86,
            201987.6,
            225528.25,
            212202.94,
            214328.09,
            201630.02,
            202625.56,
            193641.39,
            198750.72
        ]
    },
    "category": {
        "name": [
            "办公用品",
            "家具",
            "技术"
        ],
        "saleByCategory": [
            13386644.285,
            9435154.225,
            8746262.451
        ],
        "profitByCategory": [
            881449.01,
            501008.33,
            489514.09
        ],
        "subcategory": {
            "name": [
                "信封",
                "器具",
                "收纳具",
                "标签",
                "用品",
                "系固件",
                "纸张",
                "美术",
                "装订机",
                "书架",
                "桌子",
                "椅子",
                "用具",
                "复印机",
                "电话",
                "设备",
                "配件"
            ],
            "saleBySubcategory": [
                1082641.945,
                3256882.286,
                2475678.38,
                932037.834,
                1154617.709,
                886784.43,
                973474.488,
                949465.566,
                1675061.647,
                3516038.89,
                1201921.406,
                3348251.1720000003,
                1368942.757,
                2960340.775,
                2840247.445,
                1390319.931,
                1555354.3
            ],
            "profitBySubcategory": [
                90499.06,
                143583.35,
                183047.76,
                61221.77,
                85855.83,
                63515.9,
                83270.08,
                60919.23,
                109536.03,
                189277.93,
                23497.28,
                183715.58,
                104517.54,
                150309.96,
                148648.45,
                82243.83,
                108311.85
            ]
        }
    },
    "pay": {
        "payWay": [
            "信用卡",
            "其它",
            "微信",
            "支付宝"
        ],
        "payCount": [
            6847,
            6324,
            3886,
            2433
        ]
    },
    "customer": {
        "type": [
            "消费者",
            "公司",
            "小型企业"
        ],
        "customerCount": [
            9973,
            6129,
            3388
        ]
    },
    "year": {
        "years": [
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020
        ],
        "saleByYear": [
            4412262.869,
            4498083.138,
            4539316.061,
            4679272.689,
            5058245.64,
            5930941.128,
            2449939.436
        ],
        "profitByYear": [
            262239.89,
            265923.03,
            271257.94,
            281202.8,
            301804.25,
            346431.11,
            143112.41
        ]
    },
    "region": {
        "regionName": [
            "东北",
            "中南",
            "华东",
            "华北",
            "西北",
            "西南"
        ],
        "saleByRegion": [
            5262995.22,
            8312590.139,
            8093188.337,
            5483013.452,
            1599054.17,
            2817219.643
        ],
        "profitByRegion": [
            301930.83,
            489934.11,
            481913.61,
            339859.13,
            96572.22,
            161761.53
        ]
    },
    "like": {
        "Name": "杨洪光",
        "sales": 9136594.442,
        "profit": 527548.76
    }
}

function formatValue(value) {
    if (value >= 1000000) {
        return (value / 1000000).toFixed(2) + 'M';
    } else if (value >= 10000) {
        return (value / 10000).toFixed(2) + 'w';
    } else {
        return value.toLocaleString('zh-CN');
    }
}

function info(jsonData) {
    document.getElementById("sale").innerHTML = Math.round(jsonData["info"]["totalSale"]).toLocaleString('zh-CN', { useGrouping: false });
    document.getElementById("profit").innerHTML = Math.round(jsonData["info"]["totalProfit"]).toLocaleString('zh-CN', { useGrouping: false });
}

function show(jsonData) {
    document.getElementById("name").innerHTML = jsonData["like"]["Name"].toLocaleString('zh-CN')
    document.getElementById("like").innerHTML = Math.round(jsonData["like"]["sales"]).toLocaleString('zh-CN', { useGrouping: false });
    document.getElementById("rate").innerHTML = Math.round(jsonData["like"]["profit"]).toLocaleString('zh-CN', { useGrouping: false });

}

function barEcharts(jsonData) {
    var chart = echarts.init(document.getElementById("barChartContainer"), null);
    var option = {
        title: {
            text: '不同门店销售额与利润额',
            left: "center",
            left: "20%",
            textStyle: {
                color: "#ffffff",
                fontWeight: 600,
                fontSize: 18
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            backgroundColor: "rgba(204, 255, 204, 0.9)",
            borderColor: '#333333',
            borderWidth: 1,
        },
        legend: {
            data: ["销售额", "利润额"],
            textStyle: {
                color: "#898ea3",
                fontWeight: 400,
            },
            top: "40px",
            padding: 2,
            itemGap: 5,
            itemWidth: 30,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        xAxis: {
            type: "category",
            data: jsonData['store']['storeName'],
            axisLabel: {
                interval: 0,
                rotate: 0,
                textStyle: {
                    color: "#898ea3",
                    fontSize: 12,
                    fontWeight: 400,
                }
            },
            splitLine: {
                show: false,
            }
        },
        yAxis: [
            {
                "type": "value",
                "name": "销售额",
                "position": "left",
                "axisLine": {
                    lineStyle: {
                        color: "#898ea3"
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: function (value) {
                        if (value >= 1000000) {
                            return (value / 1000000) + 'M';
                        } else if (value >= 10000) {
                            return (value / 10000) + 'w';
                        } else {
                            return value;
                        }
                    }
                }
            },
            {
                type: 'value',
                name: '利润额',
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: '#898ea3'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: function (value) {
                        if (value >= 1000000) {
                            return (value / 1000000) + 'M';
                        } else if (value >= 10000) {
                            return (value / 10000) + 'w';
                        } else {
                            return value;
                        }
                    }
                }
            }
        ],
        toolbox: {
            show: true,
            itemSize: 15,
            right: "2%",
            itemGap: 5,
            feature: {
                saveAsImage: {
                    title: "保存为图片",
                    type: "png",
                    backgroundColor: "#ffffff",
                    pixelRatio: 2
                },
                magicType: {
                    title: {
                        line: '切换为折线图',
                        bar: '切换为柱状图',
                        stack: '切换为堆叠',
                        tiled: '切换为平铺'
                    },
                    type: ['line', 'bar', 'stack', 'tiled'],

                },
                dataView: {
                    backgroundColor: "#5470c6",
                    textareaColor: '#ffffff',
                    textareaBorderColor: '#333',
                    textColor: '#898ea3',
                    buttonColor: '#c23531',
                    buttonTextColor: '#fff'
                },
                restore: {},
            }
        },
        series: [
            {
                name: "销售额",
                type: 'bar',
                data: jsonData['store']['saleByStore'],
                itemStyle: {
                    color: "#0088cc",
                    barBorderRadius: 2
                },
                yAxisIndex: 0
            },
            {
                name: "利润额",
                type: 'bar',
                data: jsonData['store']['profitByStore'],
                itemStyle: {
                    color: "#62b62f",
                    barBorderRadius: 2
                },
                yAxisIndex: 1
            }
        ],
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        }
    };
    chart.setOption(option);
}

function lineEcharts(jsonData) {
    var chart = echarts.init(document.getElementById("lineChartContainer"), null);
    var option = {
        title: {
            text: "不同年份的销售额与利润额",
            left: "center",
            textStyle: {
                fontSize: 18,
                fontWeight: 600,
                color: "#ffffff",
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            },
            backgroundColor: "rgba(204, 255, 204, 0.9)",
            borderColor: '#333333',
            borderWidth: 1,
        },
        legend: {
            data: ['销售额', '利润额'],
            top: '10%',
            textStyle: {
                fontSize: 12,
                fontWeight: 'bold',
                color: '#898ea3',
            }
        },
        xAxis: {
            type: "category",
            data: jsonData["year"]["years"],
            axisLine: {
                lineStyle: {
                    color: '#333'
                }
            },
            axisLabel: {
                rotate: 0,
                interval: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#898ea3',
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#898ea3',
                    fontWeight: 400,
                    fontSize: 12
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {
                formatter: function (value) {
                    if (value >= 1000000) {
                        return (value / 1000000) + 'M';
                    } else if (value >= 10000) {
                        return (value / 10000) + 'w';
                    } else {
                        return value;
                    }
                }
            }
        },
        series: [
            {
                name: "销售额",
                data: jsonData["year"]["saleByYear"],
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 3
                },
                itemStyle: {
                    color: "#0088cc"
                },
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ],
                    label: {
                        formatter: function (param) {
                            return formatValue(param.value);
                        },
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: 10
                    }
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ],
                    label: {
                        formatter: function (param) {
                            return formatValue(param.value);
                        },
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: 10
                    }
                }
            },
            {
                name: "利润额",
                data: jsonData["year"]["profitByYear"],
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 3
                },
                itemStyle: {
                    color: "#62b62f"
                },
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ],
                    label: {
                        formatter: function (param) {
                            return formatValue(param.value);
                        },
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: 10
                    }
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ],
                    label: {
                        formatter: function (param) {
                            return formatValue(param.value);
                        },
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: 10
                    }
                }
            }
        ],
        grid: {
            top: '20%',
            bottom: '15%'
        }
    };
    chart.setOption(option);
}

function stackBarEcharts(jsonData) {
    var myChart = echarts.init(document.getElementById('stackBarChart'));
    var optionCategory = {
        title: {
            text: '不同商品类别销售额与利润额',
            left: "center",
            textStyle: {
                fontSize: 18,
                fontWeight: 600,
                color: "#ffffff",
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            backgroundColor: "rgba(204, 255, 204, 0.9)",
            borderColor: '#333333',
            borderWidth: 1,
        },
        legend: {
            data: ['销售额', '利润额'],
            top: 30,
            textStyle: {
                color: '#898ea3',
                fontSize: 12
            }
        },
        toolbox: {
            show: true,
            itemSize: 15,
            right: "2%",
            top: "7%",
            itemGap: 5,
            feature: {
                saveAsImage: {
                    title: "保存为图片",
                    type: "png",
                    backgroundColor: "#ffffff",
                    pixelRatio: 2
                },
                magicType: {
                    title: {
                        line: '切换为折线图',
                        bar: '切换为柱状图',
                        stack: '切换为堆叠',
                        tiled: '切换为平铺'
                    },
                    type: ['line', 'bar', 'stack', 'tiled'],

                },
                dataView: {
                    backgroundColor: "#5470c6",
                    textareaColor: '#ffffff',
                    textareaBorderColor: '#333',
                    textColor: '#898ea3',
                    buttonColor: '#c23531',
                    buttonTextColor: '#fff'
                },
                restore: {},
            }
        },
        xAxis: {
            type: 'category',
            data: jsonData.category.name,
            axisLabel: {
                rotate: 0,
                interval: 0
            },
            axisLabel: {
                interval: 0,
                rotate: 0,
                textStyle: {
                    color: "#898ea3",
                    fontSize: 12,
                    fontWeight: 400,
                }
            },
            splitLine: {
                show: false,
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: function (value) {
                    if (value >= 1000000) {
                        return (value / 1000000) + 'M';
                    } else if (value >= 10000) {
                        return (value / 10000) + 'w';
                    } else {
                        return value;
                    }
                }
            }
        },
        series: [
            {
                name: '销售额',
                type: 'bar',
                data: jsonData.category.saleByCategory,
                itemStyle: {
                    color: "#0088cc",
                    barBorderRadius: 2
                },

            },
            {
                name: '利润额',
                type: 'bar',
                data: jsonData.category.profitByCategory,
                itemStyle: {
                    color: "#62b62f",
                    barBorderRadius: 2
                },
            }
        ],
    };
    var optionSubcategory = {
        title: {
            text: '商品子类别与销售额、利润额关系图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            backgroundColor: "rgba(204, 255, 204, 0.9)",
            borderColor: '#333333',
            borderWidth: 1,
        },
        xAxis: {
            type: 'category',
            data: jsonData.category.subcategory.name
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '销售额',
                type: 'bar',
                data: jsonData.category.subcategory.saleBySubcategory,
                itemStyle: {
                    color: "#0088cc",
                    barBorderRadius: 2
                },
            },
            {
                name: '利润额',
                type: 'bar',
                data: jsonData.category.subcategory.profitBySubcategory,
                itemStyle: {
                    color: "#62b62f",
                    barBorderRadius: 2
                },
            }
        ],
    };
    myChart.setOption(optionCategory);
    var currentChart = 'category';
    myChart.on('click', function (params) {
        if (currentChart === 'category') {
            myChart.setOption(optionSubcategory);
            currentChart = 'subcategory';
        } else {
            myChart.setOption(optionCategory);
            currentChart = 'category';
        }
    });
}

function barcharts(jsonData) {
    var chart = echarts.init(document.getElementById("bar"));
    var option = {
        title: {
            text: '不同地区销售额与利润额',
            left: "20%",
            textStyle: {
                color: "#ffffff",
                fontWeight: 600,
                fontSize: 18
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            backgroundColor: "rgba(204, 255, 204, 0.9)",
            borderColor: '#333333',
            borderWidth: 1,
        },
        legend: {
            data: ["销售额", "利润额"],
            textStyle: {
                color: "#898ea3",
                fontWeight: 400,
            },
            top: "40px",
            padding: 2,
            itemGap: 5,
            itemWidth: 30,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        xAxis: {
            type: "category",
            data: jsonData['region']['regionName'],
            axisLabel: {
                interval: 0,
                rotate: 0,
                textStyle: {
                    color: "#898ea3",
                    fontSize: 12,
                    fontWeight: 400,
                }
            },
            splitLine: {
                show: false,
            }
        },
        yAxis: [
            {
                type: "value",
                name: "销售额",
                position: "left",
                min: 0,
                max: 9000000,
                splitNumber: 3,
                axisLine: {
                    lineStyle: {
                        color: "#898ea3"
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: function (value) {
                        if (value >= 1000000) {
                            return (value / 1000000) + 'M';
                        } else if (value >= 10000) {
                            return (value / 10000) + 'w';
                        } else {
                            return value;
                        }
                    }
                }
            },
            {
                type: 'value',
                name: '利润额',
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: '#898ea3'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: function (value) {
                        if (value >= 1000000) {
                            return (value / 1000000) + 'M';
                        } else if (value >= 10000) {
                            return (value / 10000) + 'w';
                        } else {
                            return value;
                        }
                    }
                }
            }
        ],
        toolbox: {
            show: true,
            itemSize: 15,
            right: "2%",
            itemGap: 5,
            feature: {
                saveAsImage: {
                    title: "保存为图片",
                    type: "png",
                    backgroundColor: "#ffffff",
                    pixelRatio: 2
                },
                magicType: {
                    title: {
                        line: '切换为折线图',
                        bar: '切换为柱状图',
                        stack: '切换为堆叠',
                        tiled: '切换为平铺'
                    },
                    type: ['line', 'bar', 'stack', 'tiled'],

                },
                dataView: {
                    backgroundColor: "#5470c6",
                    textareaColor: '#ffffff',
                    textareaBorderColor: '#333',
                    textColor: '#898ea3',
                    buttonColor: '#c23531',
                    buttonTextColor: '#fff'
                },
                restore: {},
            }
        },
        series: [
            {
                name: "销售额",
                type: 'bar',
                data: jsonData['region']['saleByRegion'],
                itemStyle: {
                    color: "#0088cc",
                    barBorderRadius: 2
                },
                yAxisIndex: 0
            },
            {
                name: "利润额",
                type: 'bar',
                data: jsonData['region']['profitByRegion'],
                itemStyle: {
                    color: "#62b62f",
                    barBorderRadius: 2
                },
                yAxisIndex: 1
            }
        ],
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        }
    };
    chart.setOption(option);
}


function pieEcharts(jsonData) {
    var chart = echarts.init(document.getElementById("pie1"));
    var option = {
        title: {
            text: '不同支付方式比例',
            left: 'center',
            textStyle: {
                fontSize: 18,
                fontWeight: 600,
                color: "#ffffff",
            }
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: "rgba(204, 255, 204, 0.9)",
            borderColor: '#333333',
            borderWidth: 1,
        },
        legend: {
            left: "center",
            top: '10%',
            data: jsonData["pay"]["payWay"],
            textStyle: {
                color: '#898ea3',
                fontWeight: 400,
                fontSize: 12
            },
        },
        series: {
            name: '支付方式',
            type: 'pie',
            radius: '50%',
            center: ['50%', '60%'],
            data: [
                { value: jsonData["pay"]["payCount"][0], name: jsonData["pay"]["payWay"][0] },
                { value: jsonData["pay"]["payCount"][1], name: jsonData["pay"]["payWay"][1] },
                { value: jsonData["pay"]["payCount"][2], name: jsonData["pay"]["payWay"][2] },
                { value: jsonData["pay"]["payCount"][3], name: jsonData["pay"]["payWay"][3] },
            ],
            label: {
                fontSize: 12,
                fontWeight: 400,
                textStyle: {
                    color: '#898ea3',
                }
            },
            startAngle: 0,
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDuration: 2000
        },
        color: ['#0088cc', '#62b62f', '#fccb00', '#EE6666']
    };
    chart.setOption(option)
    setInterval(function () {
        var angle = chart.getOption().series[0].startAngle;
        angle = (angle + 10) % 360;
        chart.setOption({
            series: [{
                startAngle: angle
            }]
        });
    }, 1000);
}

function pie2(jsonData) {
    var chart = echarts.init(document.getElementById("pie2"))
    var options = {
        title: {
            text: '不同客户类型比例',
            left: 'center',
            textStyle: {
                fontSize: 18,
                fontWeight: 600,
                color: "#ffffff",
            }
        },
        tooltip: {
            trigger: 'item',
            // formatter: '{a} <br/>{b}: {c} 占比:<br/>{d}%',
            backgroundColor: "rgba(204, 255, 204, 0.9)",
            borderColor: '#333333',
            borderWidth: 1,
        },
        legend: {
            left: "center",
            top: '10%',
            data: jsonData["customer"]["type"],
            textStyle: {
                color: '#898ea3',
                fontWeight: 400,
                fontSize: 12
            },
        },
        series: {
            name: '支付方式',
            type: 'pie',
            radius: '50%',
            center: ['50%', '60%'],
            data: [
                { value: jsonData["customer"]["customerCount"][0], name: jsonData["customer"]["type"][0] },
                { value: jsonData["customer"]["customerCount"][1], name: jsonData["customer"]["type"][1] },
                { value: jsonData["customer"]["customerCount"][2], name: jsonData["customer"]["type"][2] },
            ],
            label: {
                fontSize: 12,
                fontWeight: 400,
                textStyle: {
                    color: '#898ea3',
                }
            },
            startAngle: 0,
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDuration: 2000
        },
        color: ['#0088cc', '#62b62f', '#fccb00', '#EE6666']
    };
    chart.setOption(options)
    setInterval(function () {
        var angle = chart.getOption().series[0].startAngle;
        angle = (angle + 10) % 360;
        chart.setOption({
            series: [{
                startAngle: angle
            }]
        });
    }, 1000);
}

info(jsonData)
show(jsonData)
barEcharts(jsonData)
lineEcharts(jsonData)
stackBarEcharts(jsonData)
pieEcharts(jsonData)
pie2(jsonData)
barcharts(jsonData)