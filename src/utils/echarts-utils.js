// 柱状图
function bar(a, b, c, d, e, f, h) {
    b = void 0 === b ? ["a", "b", "c"] : b;
    e = {
        top: "15px",
        left: "0",
        right: "0",
        bottom: "0",
        containLabel: !0
    };
    for (var g in e) for (var k in d) g == k && (e[g] = d[k]);
    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            backgroundColor: '#87d9ff',
            borderColor: '#87d9ff'
        },
        color: a,
        legend: {
            show: !1,
            data: b
        },
        grid: e,
        xAxis: [{
            type: "category",
            data: c,
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            interval: 1,
            axisTick: {
                show: !1,
                inside: !0,
                length: 1,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            axisLabel: {
                show: !0,
                inside: !1,
                rotate: 0,
                margin: 5
            }
        }],
        yAxis: [{
            min: 0,
            splitNumber: f,
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#022a54"],
                    width: 1,
                    type: "solid"
                }
            }
        }],
        series: h
    }
}
// 多组柱状图
function MoreBar(a, b, c, d, e, f, h, g) {
    b = void 0 === b ? ["a", "b", "c"] : b;
    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            backgroundColor: '#87d9ff',
            borderColor: '#87d9ff'
        },
        color: a,
        legend: {
            show: !1,
            data: b
        },
        grid: {
            top: "15px",
            left: "0",
            right: "0",
            bottom: "0",
            containLabel: !0
        },
        xAxis: [{
            type: "category",
            data: d,
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            interval: 1,
            axisTick: {
                show: !1,
                inside: !0,
                length: 1,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            axisLabel: {
                show: !0,
                inside: !1,
                rotate: 0,
                margin: 5
            }
        }],
        yAxis: [{
            min: 0,
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#022a54"],
                    width: 1,
                    type: "solid"
                }
            }
        },
        {
            min: 0,
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#022a54"],
                    width: 1,
                    type: "solid"
                }
            }
        }],
        series: g
    }
}
// 单例柱状图
function Singlebar(a, b, c, d, e, f, h) {
    b = void 0 === b ? ["a", "b", "c"] : b;
    e = {
        top: "15px",
        left: "0",
        right: "0",
        bottom: "0",
        containLabel: !0
    };
    for (var g in e) for (var k in d) g == k && (e[g] = d[k]);
    // console.log(a, b, c, d, e, f, h)
    return {
        // 提示框组件
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            backgroundColor: '#87d9ff',
            borderColor: '#87d9ff'
        },
        // 图例组件
        legend: {
            show: false,
            data: b
        },
        grid: e,
        xAxis: [{
            type: "category",
            data: c,
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            interval: 1,
            axisTick: {
                show: !1,
                inside: !0,
                length: 1,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            axisLabel: {
                show: !0,
                inside: !1,
                rotate: 0,
                margin: 5
            }
        }],
        yAxis: [{
            min: 0,
            splitNumber: f,
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ["#022a54"],
                    width: 1,
                    type: "solid"
                }
            }
        }],
        series: [{
            data: h,
            type: "bar",
            smooth: !0,
            symbolSize: 10,
            barWidth: 40,
            barCategoryGap: "10%",
            // 图形样式
            itemStyle: {
                normal: {
                    color: function (b) {
                        return a[b.dataIndex]
                    }
                }
            },
            // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
            label: {
                show: true,
                position: "top",
                distance: 2,
                formatter: "{c}",
                fontSize: 12,
                fontWeight: "normal",
                // color:'red'
                color: 'inherit'
            },
        }]
    }
}
// 
function PercSinglebar(a, b, c, d, e) {
    b = void 0 === b ? ["a", "b", "c"] : b;
    var f = {
        top: "10px",
        left: "0",
        right: "0",
        bottom: "0",
        containLabel: !0
    },
        h;
    for (h in f) for (var g in d) h == g && (f[h] = d[g]);
    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            backgroundColor: '#87d9ff',
            borderColor: '#87d9ff'
        },
        legend: {
            show: !1,
            data: b
        },
        grid: f,
        xAxis: [{
            type: "category",
            data: c,
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            interval: 1,
            axisTick: {
                show: !1,
                inside: !0,
                length: 1,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            axisLabel: {
                show: !0,
                inside: !1,
                rotate: 0,
                margin: 5
            }
        }],
        yAxis: [{
            min: 0,
            max: 100,
            splitNumber: 5,
            type: "value",
            axisLabel: {
                formatter: function (a) {
                    var b = [];
                    0 == a ? b.push("0%") : 20 == a ? b.push("20%") : 40 == a ? b.push("40%") : 60 == a ? b.push("60%") : 80 == a ? b.push("80%") : 100 == a && b.push("100%");
                    return b
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#022a54"],
                    width: 1,
                    type: "solid"
                }
            }
        }],
        series: [{
            data: e,
            type: "bar",
            smooth: !0,
            symbolSize: 10,
            barWidth: 20,
            barCategoryGap: "10%",
            itemStyle: {
                normal: {
                    color: function (b) {
                        return a[b.dataIndex]
                    },
                    label: {
                        show: !0,
                        position: "right",
                        formatter: "{c}%",
                        color: 'inherit'
                    }
                }
            }
        }]
    }
}
// 折线图
function line(a, b, c, d, e, f, h) {
    a = {
        top: "10px",
        left: "0",
        right: "0",
        bottom: "0",
        containLabel: !0
    };
    for (var g in a) for (var k in d) g == k && (a[g] = d[k]);
    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            backgroundColor: '#87d9ff',
            borderColor: '#87d9ff'
        },
        grid: a,
        xAxis: {
            type: "category",
            data: c,
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            axisLabel: {
                show: !0,
                interval: 0
            },
            splitLine: {
                show: !1,
                interval: 0
            }
        },
        yAxis: {
            min: 0,
            splitNumber: f,
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#022a54"],
                    width: 3,
                    type: "solid"
                }
            },
            axisTick: {
                show: !1
            }
        },
        series: [{
            data: h,
            type: "line",
            smooth: !0,
            symbolSize: 10,
            barWidth: 10,
            barCategoryGap: "10%",
            areaStyle: {
                color: "#0a3d6a"
            },
            itemStyle: {
                normal: {
                    color: "#fff",
                    fontSize: 14,
                    lineStyle: {
                        width: 2,
                        color: "#00c6ff"
                    }
                },
                emphasis: {
                    show: !1,
                    borderColor: "rgba(0,196,132,0.2)",
                    borderWidth: 10
                }
            }
        }]
    }
}
function Moreline(a, b, c, d, e, f, h, g, k) {
    a = {
        top: "10px",
        left: "0",
        right: "0",
        bottom: "0",
        containLabel: !0
    };
    for (var l in a) for (var m in d) l == m && (a[l] = d[m]);
    d = {};
    d = "" != g ? g : {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    };
    g = {};
    g = (void 0 === k ? 0 : k) ? {
        min: 0,
        splitNumber: f,
        type: "value",
        axisLabel: {
            formatter: function (a, b) {
                b = "";
                switch (a) {
                    case 0:
                        b = "0%";
                        break;
                    case 20:
                        b = "20%";
                        break;
                    case 40:
                        b = "40%";
                        break;
                    case 60:
                        b = "60%";
                        break;
                    case 80:
                        b = "80%";
                        break;
                    case 100:
                        b = "100%"
                }
                return b
            }
        },
        axisLine: {
            lineStyle: {
                color: "#87d9ff"
            }
        },
        splitLine: {
            show: !0,
            lineStyle: {
                color: ["#022a54"],
                width: 3,
                type: "solid"
            }
        },
        axisTick: {
            show: !1
        }
    } : {
        min: 0,
        splitNumber: f,
        type: "value",
        axisLine: {
            lineStyle: {
                color: "#87d9ff"
            }
        },
        splitLine: {
            show: !0,
            lineStyle: {
                color: ["#022a54"],
                width: 3,
                type: "solid"
            }
        },
        axisTick: {
            show: !1
        }
    };
    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            backgroundColor: '#87d9ff',
            borderColor: '#87d9ff'
        },
        grid: a,
        xAxis: {
            type: "category",
            data: c,
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            axisLabel: {
                show: !0,
                interval: 0
            },
            splitLine: {
                show: !1,
                interval: 0
            }
        },
        yAxis: g,
        series: h
    }
}
// 双Y轴折线图
function DoubleYaxisline(a, b, c, d, e, f, h, g) {
    b = void 0 === b ? ["a", "b", "c"] : b;
    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            backgroundColor: '#87d9ff',
            borderColor: '#87d9ff'
        },
        color: a,
        legend: {
            show: !1,
            data: b
        },
        grid: {
            top: "20px",
            left: "0",
            right: "0",
            bottom: "0",
            containLabel: !0
        },
        xAxis: [{
            type: "category",
            data: d,
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            interval: 1,
            axisTick: {
                show: !1,
                inside: !0,
                length: 1,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            axisLabel: {
                show: !0,
                inside: !1,
                rotate: 0,
                margin: 5
            }
        }],
        yAxis: [{
            min: 0,
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#022a54"],
                    width: 1,
                    type: "solid"
                }
            }
        },
        {
            min: 0,
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#022a54"],
                    width: 1,
                    type: "solid"
                }
            }
        }],
        series: g
    }
}
// 双Y轴柱状图
function DoubleYaxiosBar(a, b, c, d, e, f, h) {
    b = void 0 === b ? ["a", "b", "c"] : b;
    var g = {
        top: "10px",
        left: "0",
        right: "0",
        bottom: "0",
        containLabel: !0
    },
        k;
    for (k in g) for (var l in d) k == l && (g[k] = d[l]);
    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            backgroundColor: '#87d9ff',
            borderColor: '#87d9ff'
        },
        color: a,
        legend: {
            show: !1,
            data: b
        },
        grid: g,
        xAxis: [{
            type: "category",
            data: c,
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            interval: 1,
            axisTick: {
                show: !1,
                inside: !0,
                length: 1,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            axisLabel: {
                show: !0,
                inside: !1,
                rotate: 0,
                margin: 5
            }
        }],
        yAxis: [{
            name: f[0].name,
            min: 0,
            splitNumber: e,
            type: "value",
            postion: "left",
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#022a54"],
                    width: 1,
                    type: "solid"
                }
            }
        },
        {
            name: f[1].name,
            min: 0,
            max: f[1].max,
            splitNumber: e,
            type: "value",
            postion: "right",
            axisLine: {
                lineStyle: {
                    color: "#87d9ff"
                }
            },
            axisLabel: {
                formatter: function (a, b) {
                    b = "";
                    switch (a) {
                        case 0:
                            b = "0%";
                            break;
                        case 20:
                            b = "20%";
                            break;
                        case 40:
                            b = "40%";
                            break;
                        case 60:
                            b = "60%";
                            break;
                        case 80:
                            b = "80%";
                            break;
                        case 100:
                            b = "100%"
                    }
                    return b
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#022a54"],
                    width: 1,
                    type: "solid"
                }
            }
        }],
        series: h
    }
}
function cake(a, b, c, d, e) {
    b = {
        top: "10px",
        left: "0",
        right: "0",
        bottom: "0",
        containLabel: !0
    };
    for (var f in b) for (var h in c) f == h && (b[f] = c[h]);
    return {
        color: a,
        grid: b,
        tooltip: {
            show: !1,
            color: 'therit',
            backgroundColor: '#87d9ff',
            borderColor: '#87d9ff'
        },
        legend: {
            selectedMode: !1,
            orient: "vertical",
            left: 10,
            data: []
        },
        graphic: [{
            type: "text",
            left: "center",
            top: "40%",
            css: {
                text: "",
                textAlign: "center",
                fill: "#FEB045",
                fontSize: 24
            }
        }],
        series: [{
            name: d,
            type: "pie",
            radius: ["20%", "50%"],
            hoverAnimation: !1,
            label: {
                normal: {
                    hoverAnimation: !1,
                    formatter: "{d}%",
                    textStyle: {
                        fontWeight: "normal",
                        fontSize: 12
                    },
                    color: 'inherit'
                }
            },
            data: e,
            itemStyle: {
                normal: {
                    label: {
                        show: !0,
                        position: "outside",
                        textStyle: {
                            fontWeight: 70,
                            fontSize: 10
                        },
                        formatter: function (a) {
                            return a.data
                        }
                    },
                    labelLine: {
                        show: !0,
                        smooth: .2,
                        length: 0.5,
                        color: 'inherit'
                    }
                }
            }
        }]
    }
}
function circle(a, b) {
    return {
        title: {},
        tooltip: {
            show: true,
            color: 'therit',
            backgroundColor: '#87d9ff',
            borderColor: '#87d9ff'
        },
        grid: {
            position: "center"
        },
        legend: {
            show: !1,
            data: ["", ""]
        },
        radar: {
            splitNumber: 0,
            name: {
                textStyle: {
                    color: "#6cb0d4",
                    backgroundColor: "#020c29",
                    borderRadius: 1,
                    padding: [0, 0]
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#102153"
                }
            },
            splitArea: {
                show: !0,
                areaStyle: {
                    color: "#102153"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    width: 1,
                    color: "#102153"
                }
            },
            indicator: a
        },
        series: [{
            type: "radar",
            tooltip: {
                trigger: "item"
            },
            symbol: "none",
            symbolSize: 8,
            data: b,
        }]
    }
}
function Dashboard(a, b, c) {
    var d = {
        top: "10px",
        left: "0",
        right: "0",
        bottom: "0",
        containLabel: !0
    },
        e;
    for (e in d) for (var f in b) e == f && (d[e] = b[f]);
    return {
        backgroundColor: a,
        grid: b,
        legend: {
            selectedMode: !1,
            orient: "vertical",
            left: 10,
            data: []
        },
        tooltip: {
            show: !1,
            formatter: "{b}\uff1a{c}%",
            backgroundColor: "",
            borderColor: "#333",
            borderWidth: 0,
            padding: 5,
            textStyle: {}
        },
        series: [{
            name: "\u5355\u4eea\u8868\u76d8\u793a\u4f8b",
            type: "gauge",
            radius: "100%",
            center: ["50%", "55%"],
            startAngle: 225,
            endAngle: -45,
            clockwise: !0,
            min: 0,
            max: 100,
            splitNumber: 10,
            axisLine: {
                show: !0,
                lineStyle: {
                    color: [[.2, "red"], [.8, "yellow"], [1, "green"]],
                    width: 2
                }
            },
            splitLine: {
                show: !1,
                length: 30,
                lineStyle: {
                    color: "auto",
                    opacity: 1,
                    width: 2,
                    type: "solid",
                    shadowBlur: 10,
                    shadowColor: "#fff"
                }
            },
            axisTick: {
                show: !0,
                splitNumber: 5,
                length: 8,
                lineStyle: {
                    color: "auto",
                    opacity: 1,
                    width: 1,
                    type: "solid",
                    shadowBlur: 10,
                    shadowColor: "#fff"
                }
            },
            axisLabel: {
                show: !1,
                distance: 5,
                color: "#fff",
                fontSize: 5,
                formatter: "{value}"
            },
            pointer: {
                show: !0,
                length: "30",
                width: 2
            },
            itemStyle: {
                color: "#00ff00",
                opacity: 1,
                borderWidth: 0,
                borderType: "solid",
                borderColor: "none",
                shadowBlur: 0,
                shadowColor: "#fff"
            },
            title: {
                show: !1,
                offsetCenter: [0, "20%"],
                color: "#fff",
                fontSize: 20
            },
            detail: {
                show: !0,
                offsetCenter: [0, "60%"],
                color: "#00ff00",
                fontSize: 14,
                formatter: "{value}%"
            },
            data: [{
                value: c
            }]
        }]
    }
}
export  {Dashboard,circle,cake,DoubleYaxiosBar,DoubleYaxisline,Moreline,line,PercSinglebar,Singlebar,MoreBar,bar}