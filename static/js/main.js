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
        ]
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
        ],
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

function chart1(jsonData) {
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
                rotate: 30,
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

function chart2(jsonData) {
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

function chart3(jsonData) {
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
    myChart.setOption(optionCategory);
    myChart.on('click', function (params) {
        if (params.seriesType === 'bar') {
            var category = params.name;
            showDetail(category);
        }
    });
    function showDetail(category) {
        var dataMap = {
            "办公用品": {
                name: ["信封", "器具", "收纳具", "标签", "用品", "系固件", "纸张", "美术", "装订机"],
                sales: [1082641.945, 3256882.286, 2475678.38, 932037.834, 1154617.709, 886784.43, 973474.488, 949465.566, 1675061.647,],
                profit: [90499.06, 143583.35, 183047.76, 61221.77, 85855.83, 63515.9, 83270.08, 60919.23, 109536.03]
            },
            "家具": {
                name: ["书架", "桌子", "椅子", "用具"],
                sales: [3516038.89, 1201921.406, 3348251.1720000003, 1368942.757],
                profit: [189277.93, 23497.28, 183715.58, 104517.54]
            },
            "技术": {
                name: ["复印机", "电话", "设备", "配件"],
                sales: [2960340.775, 2840247.445, 1390319.931, 1555354.3],
                profit: [150309.96, 148648.45, 82243.83, 108311.85]
            }
        }
        var detailOption = {
            title: {
                text: category + '类别的销售额与利润额'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: dataMap[category]["name"]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '销售额',
                type: 'bar',
                data: dataMap[category].sales
            }, {
                name: '利润额',
                type: 'bar',
                data: dataMap[category].profit
            }],
        };
        myChart.setOption(detailOption);
    }
}

function chart4(jsonData) {
    var chart = echarts.init(document.getElementById("bar"));
    var option = {
        title: {
            text: '不同地区销售额与利润额',
            left: "15%",
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
        yAxis: {
            type: "value",
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
            },
            {
                name: "利润额",
                type: 'bar',
                data: jsonData['region']['profitByRegion'],
                itemStyle: {
                    color: "#62b62f",
                    barBorderRadius: 2
                },

            }
        ],
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        }
    };
    var dataLevel1 = {
        "东北": {
            name: ["吉林", "辽宁", "黑龙江"],
            sales: [1911958.293, 1288320.978, 2062715.949],
            profit: [112452.48, 76335.97, 113142.38]
        },
        "中南": {
            name: ["广东", "广西", "河南", "海南", "湖北", "湖南"],
            sales: [2409359.575, 1006016.746, 1891723.281, 182215.348, 1318439.668, 1504835.521],
            profit: [144913.13, 65263.78, 109980.85, 11291.03, 67202.96, 91282.36]
        },
        "华东": {
            name: ["上海", "安徽", "山东", "江苏", "江西", "浙江", "福建"],
            sales: [954849.056, 1079311.18, 1916560.604, 1659721.091, 525442.3859999999, 1292554.669, 664749.351],
            profit: [53272.0, 66404.66, 116141.0, 96168.41, 35463.43, 74335.5, 40128.61],
        },
        "华北": {
            name: ["内蒙古", "北京", "天津", "山西", "河北"],
            sales: [1023380.764, 1036246.687, 1202481.546, 849805.0329999999, 1371099.422],
            profit: [62028.99, 69562.63, 77869.75, 50571.35, 79826.41]
        },
        "西北": {
            name: ["宁夏", "新疆", "甘肃", "陕西", "青海"],
            sales: [258961.36, 120363.68400000001, 584255.861, 555069.025, 80404.23999999999],
            profit: [17481.3, 6841.02, 35551.98, 31978.46, 4719.46],
        },
        "西南": {
            name: ["云南", "四川", "西藏", "贵州", "重庆"],
            sales: [544322.632, 1412840.051, 296.8, 168288.078, 691472.082],
            profit: [33781.27, 75632.51, 44.480000000000004, 10875.57, 41427.7]
        },
    };
    var dataLevel2 = {
        "上海": {
            "name": [
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
            "sales": [
                107691.633,
                89579.455,
                79311.064,
                131180.294,
                110014.296,
                76961.164,
                116678.28199999999,
                163073.288,
                80359.58
            ],
            "profit": [
                7722.88,
                5515.77,
                5138.34,
                6763.46,
                5649.3099999999995,
                4475.59,
                6647.5199999999995,
                7065.29,
                4293.84
            ]
        },
        "云南": {
            "name": [
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
            "sales": [
                58783.144,
                30447.088,
                75612.404,
                70883.064,
                51289.336,
                54810.224,
                92286.54400000001,
                62723.164,
                47487.664
            ],
            "profit": [
                3874.9900000000002,
                2343.54,
                3750.67,
                3853.06,
                4512.19,
                3251.7400000000002,
                4757.6,
                3873.7799999999997,
                3563.7
            ]
        },
        "内蒙古": {
            "name": [
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
            "sales": [
                121027.956,
                69608.252,
                115834.348,
                94682.644,
                164442.348,
                135243.73799999998,
                104972.126,
                81129.048,
                136440.304
            ],
            "profit": [
                7213.71,
                6070.53,
                7833.09,
                6732.91,
                9462.130000000001,
                6776.38,
                6799.24,
                4950.78,
                6190.22
            ]
        },
        "北京": {
            "name": [
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
            "sales": [
                117018.664,
                105261.128,
                112092.81999999999,
                115572.702,
                98928.557,
                126111.05500000001,
                133599.949,
                125171.53600000001,
                102490.276
            ],
            "profit": [
                8389.63,
                7161.82,
                8305.73,
                8315.11,
                7360.02,
                7423.93,
                6959.66,
                8823.369999999999,
                6823.36
            ]
        },
        "吉林": {
            "name": [
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
            "sales": [
                226925.902,
                224888.503,
                204357.328,
                250780.943,
                245185.892,
                174759.277,
                155872.612,
                231914.816,
                197273.02
            ],
            "profit": [
                15067.81,
                13690.42,
                10033.35,
                13951.59,
                14403.76,
                10427.4,
                9241.19,
                14466.88,
                11170.08
            ]
        },
        "四川": {
            "name": [
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
            "sales": [
                143337.222,
                134236.893,
                168602.224,
                168561.659,
                184382.89800000002,
                132230.952,
                152733.665,
                160356.994,
                168397.544
            ],
            "profit": [
                8289.4,
                7338.66,
                8998.210000000001,
                8591.84,
                10341.38,
                6535.46,
                8903.06,
                7451.43,
                9183.07
            ]
        },
        "天津": {
            "name": [
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
            "sales": [
                100499.329,
                88264.17599999999,
                150975.062,
                122989.762,
                127793.036,
                123393.438,
                226509.304,
                136960.075,
                125097.364
            ],
            "profit": [
                7448.34,
                6094.01,
                10313.81,
                8188.17,
                9534.75,
                8771.78,
                10947.2,
                8616.61,
                7955.08
            ]
        },
        "宁夏": {
            "name": [
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
            "sales": [
                26595.827999999998,
                18377.94,
                29773.492,
                33010.88,
                17406.899999999998,
                33069.372,
                40661.908,
                34581.316,
                25483.724
            ],
            "profit": [
                1980.03,
                1559.44,
                2743.81,
                1999.0,
                809.2600000000001,
                1522.42,
                2438.0499999999997,
                2088.24,
                2341.05
            ]
        },
        "安徽": {
            "name": [
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
            "sales": [
                129774.638,
                135981.846,
                129097.283,
                77075.194,
                129642.968,
                85390.812,
                121464.735,
                144392.22,
                126491.48400000001
            ],
            "profit": [
                8619.92,
                8048.34,
                8264.4,
                6279.64,
                6947.26,
                6928.26,
                7549.25,
                7236.54,
                6531.05
            ]
        },
        "山东": {
            "name": [
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
            "sales": [
                250506.739,
                171838.891,
                233947.805,
                209549.06,
                234657.528,
                205852.227,
                233658.46,
                158762.548,
                217787.346
            ],
            "profit": [
                13967.65,
                11306.37,
                14079.21,
                12700.5,
                13833.4,
                14102.82,
                12800.85,
                10184.66,
                13165.539999999999
            ]
        },
        "山西": {
            "name": [
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
            "sales": [
                134684.088,
                94143.532,
                91637.504,
                93555.406,
                60344.844,
                131577.082,
                87546.77399999999,
                68662.02,
                87653.783
            ],
            "profit": [
                6414.56,
                6190.88,
                6015.7,
                4955.86,
                5040.88,
                8363.57,
                3732.4300000000003,
                4984.05,
                4873.42
            ]
        },
        "广东": {
            "name": [
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
            "sales": [
                310752.785,
                290103.576,
                303195.368,
                269908.268,
                223485.444,
                237954.024,
                295667.974,
                232550.976,
                245741.16
            ],
            "profit": [
                18797.26,
                15707.73,
                18360.4,
                19122.55,
                14094.75,
                15258.11,
                15221.65,
                13747.87,
                14602.81
            ]
        },
        "广西": {
            "name": [
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
            "sales": [
                117825.792,
                120883.728,
                167734.798,
                99831.529,
                92680.455,
                122210.473,
                108697.302,
                90741.02799999999,
                85411.641
            ],
            "profit": [
                6194.39,
                9998.66,
                9173.55,
                7789.74,
                6272.42,
                8282.12,
                6704.1,
                5400.18,
                5448.62
            ]
        },
        "新疆": {
            "name": [
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
            "sales": [
                40570.712,
                10586.8,
                2799.048,
                13903.568000000001,
                7745.724,
                15101.268,
                7197.848,
                9071.132000000001,
                13387.584
            ],
            "profit": [
                1324.43,
                529.95,
                322.38,
                572.01,
                948.61,
                940.49,
                579.83,
                619.34,
                1003.98
            ]
        },
        "江苏": {
            "name": [
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
            "sales": [
                186988.235,
                193558.806,
                200314.968,
                161428.428,
                191235.856,
                137886.056,
                205570.428,
                220423.658,
                162314.656
            ],
            "profit": [
                10554.42,
                11367.92,
                10598.78,
                9375.13,
                10474.65,
                9937.3,
                11248.04,
                12123.2,
                10488.97
            ]
        },
        "江西": {
            "name": [
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
            "sales": [
                57661.926,
                31593.338,
                95971.421,
                66847.221,
                42353.85,
                54343.38,
                77509.208,
                62897.422,
                36264.62
            ],
            "profit": [
                4699.55,
                1927.51,
                5769.42,
                5145.1,
                2591.69,
                3555.63,
                4413.99,
                4303.01,
                3057.53
            ]
        },
        "河北": {
            "name": [
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
            "sales": [
                132700.904,
                155099.182,
                202315.106,
                136757.796,
                173151.594,
                167662.621,
                112536.543,
                142881.564,
                147994.112
            ],
            "profit": [
                7522.08,
                10614.78,
                11886.57,
                8919.16,
                9360.75,
                7574.42,
                7175.9800000000005,
                7923.06,
                8849.61
            ]
        },
        "河南": {
            "name": [
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
            "sales": [
                232435.182,
                228174.156,
                219735.663,
                214013.548,
                196875.168,
                242779.418,
                217906.703,
                160493.97,
                179309.473
            ],
            "profit": [
                13078.460000000001,
                12131.8,
                12031.24,
                11262.77,
                13291.68,
                12752.1,
                13763.7,
                9342.01,
                12327.09
            ]
        },
        "浙江": {
            "name": [
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
            "sales": [
                166667.998,
                119487.256,
                181490.036,
                122579.66,
                119391.916,
                157723.08299999998,
                143664.15,
                144052.09,
                137498.48
            ],
            "profit": [
                9081.08,
                6863.34,
                11935.39,
                7594.34,
                7780.23,
                8107.23,
                7740.92,
                7836.42,
                7396.55
            ]
        },
        "海南": {
            "name": [
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
            "sales": [
                30240.070000000003,
                16056.684,
                24142.608,
                16001.496,
                22916.292,
                19969.012,
                25258.1,
                14421.12,
                13209.966
            ],
            "profit": [
                1360.73,
                1283.93,
                1366.3700000000001,
                631.1899999999999,
                1343.8600000000001,
                1287.28,
                1592.71,
                1089.53,
                1335.43
            ]
        },
        "湖北": {
            "name": [
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
            "sales": [
                168998.284,
                115141.41100000001,
                163602.901,
                167640.186,
                139801.172,
                106712.81599999999,
                122186.253,
                116000.388,
                218356.257
            ],
            "profit": [
                8444.73,
                8666.74,
                7574.79,
                7547.43,
                8104.11,
                6886.29,
                5745.68,
                7221.32,
                7011.87
            ]
        },
        "湖南": {
            "name": [
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
            "sales": [
                233837.086,
                154281.477,
                251518.337,
                105854.112,
                142044.749,
                153252.06399999998,
                175714.042,
                147583.212,
                140750.442
            ],
            "profit": [
                11992.1,
                8462.68,
                15298.53,
                9068.07,
                10396.7,
                9777.75,
                10723.26,
                7600.47,
                7962.8
            ]
        },
        "甘肃": {
            "name": [
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
            "sales": [
                104347.586,
                67810.232,
                75557.692,
                50051.554000000004,
                73745.812,
                37044.672,
                49966.063,
                58702.854,
                67029.396
            ],
            "profit": [
                5576.07,
                4626.14,
                4619.01,
                2975.6,
                3798.9300000000003,
                2897.54,
                2668.08,
                3062.7799999999997,
                5327.83
            ]
        },
        "福建": {
            "name": [
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
            "sales": [
                91930.524,
                58852.22,
                85480.472,
                59800.454,
                87482.822,
                66828.664,
                56547.344,
                87975.027,
                69851.824
            ],
            "profit": [
                3762.7200000000003,
                2700.5,
                5451.0,
                5377.39,
                5259.95,
                4077.39,
                3959.83,
                5069.75,
                4470.08
            ]
        },
        "西藏": {
            "name": [
                "临泉路",
                "燎原店"
            ],
            "sales": [
                96.04,
                200.76
            ],
            "profit": [
                10.91,
                33.57
            ]
        },
        "贵州": {
            "name": [
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
            "sales": [
                4001.7599999999998,
                30369.64,
                13916.28,
                35767.844,
                7642.53,
                6486.0599999999995,
                15514.66,
                33849.004,
                20740.300000000003
            ],
            "profit": [
                496.29999999999995,
                1807.32,
                1012.64,
                1474.36,
                1069.97,
                933.0,
                796.95,
                1701.23,
                1583.8
            ]
        },
        "辽宁": {
            "name": [
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
            "sales": [
                152240.242,
                161606.172,
                114371.88,
                134547.91,
                179581.808,
                148663.76,
                119476.588,
                125497.344,
                152335.274
            ],
            "profit": [
                9093.77,
                6955.51,
                6648.27,
                9784.09,
                10031.18,
                8880.75,
                7671.57,
                7865.61,
                9405.22
            ]
        },
        "重庆": {
            "name": [
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
            "sales": [
                76206.893,
                73623.704,
                51301.068,
                101141.915,
                57926.428,
                54040.126,
                123957.582,
                48553.596,
                104720.77
            ],
            "profit": [
                6599.96,
                3682.13,
                3723.65,
                6058.33,
                4348.57,
                2638.18,
                5330.13,
                4042.19,
                5004.5599999999995
            ]
        },
        "陕西": {
            "name": [
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
            "sales": [
                33607.616,
                48951.392,
                59665.648,
                66245.76699999999,
                40398.638,
                64795.990000000005,
                114309.132,
                42752.276,
                84342.566
            ],
            "profit": [
                2559.5299999999997,
                3760.15,
                3027.47,
                4776.31,
                1527.63,
                4468.66,
                4388.52,
                2869.31,
                4600.88
            ]
        },
        "青海": {
            "name": [
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
            "sales": [
                8311.548,
                347.928,
                2198.896,
                9873.92,
                3731.8399999999997,
                18615.548,
                11561.872,
                17470.068,
                8292.62
            ],
            "profit": [
                756.6,
                7.699999999999999,
                211.19,
                766.71,
                347.11,
                1043.82,
                637.59,
                447.91,
                500.83
            ]
        },
        "黑龙江": {
            "name": [
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
            "sales": [
                207959.626,
                290771.152,
                184713.641,
                245197.568,
                278731.852,
                252900.221,
                176380.141,
                190218.14,
                235843.608
            ],
            "profit": [
                10382.85,
                15573.33,
                11041.28,
                11631.52,
                15390.96,
                13752.61,
                11486.98,
                11601.0,
                12281.85
            ]
        }
    };
    chart.setOption(option);
    var currentLevel = 1;

    chart.on('click', function (params) {
        if (currentLevel === 1 && dataLevel1[params.name]) {
            currentCategory = params.name;
            var data = dataLevel1[params.name];
            var optionLevel1 = {
                title: {
                    text: params.name + '各省份的销售额与利润额'
                },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: data["name"]
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                    max: 3000000,
                    splitNumber: 3,
                },
                series: [
                    {
                        name: '销售额',
                        type: 'bar',
                        data: data.sales
                    },
                    {
                        name: '利润额',
                        type: "bar",
                        data: data.profit
                    }
                ],
            }
            chart.setOption(optionLevel1);
            currentLevel = 2;
        }
        else if (currentLevel === 2 && dataLevel2[params.name]) {
            var data = dataLevel2[params.name];
            var optionLevel2 = {
                title: {
                    text: params.name + '各个门店的销售额与利润额'
                },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: data.name
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                    max: 400000,
                    splitNumber: 3
                },
                series: [
                    {
                        name: "销售额",
                        type: 'bar',
                        data: data.sales
                    },
                    {
                        name: "利润额",
                        type: "bar",
                        data: data.profit
                    }
                ],
            };
            chart.setOption(optionLevel2);
            currentLevel = 3;
        }
    });
    chart.on('restore', function () {
        currentLevel = 1;
    });
}

function chart5(jsonData) {
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

function chart6(jsonData) {
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
chart1(jsonData)
chart2(jsonData)
chart3(jsonData)
chart4(jsonData)
chart5(jsonData)
chart6(jsonData)