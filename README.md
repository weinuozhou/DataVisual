# 商品订单大屏可视化展示

* 数据可视化-Echarts 大屏数据可视化展示
* 展示地址: [https://weinuozhou.github.io/DataVisual](https://weinuozhou.github.io/DataVisual)

## 数据描述

1. [商品订单表.xlsx](./data/商品订单表.xlsx)行数为19490，列数为25
2. 字段描述

|     字段     |  类型  |
| :----------: | :----: |
|   订单编号   | String |
|   订单日期   |  date  |
|   门店名称   | String |
|   支付方式   | String |
|   发货日期   |  date  |
| 实际配送天数 |  int   |
| 计划配送天数 |  int   |
|   客户编号   | String |
|   客户姓名   | String |
|   客户类型   | String |
|     城市     | String |
|     省市     | String |
|     地区     | String |
|   产品编号   | String |
|   产品名称   | String |
|   商品类别   | String |
|    子类别    | String |
|    销售额    | Float  |
|     数量     |  int   |
|     折扣     | Float  |
|    利润额    | Float  |
|   销售经理   | String |
|   是否退回   |  int   |
|   是否满意   |  int   |
|     年份     |  int   |

## 处理数据

数据较为简单, 数据处理部分不展示，可直接查看处理过的数据:[data.json](./data/data.json)

## Echarts介绍

* JS 插件
* 性能好可流畅运行PC与移动设备
* 兼容主流浏览器
* 提供很多常用图表，且可定制
  * [折线图](https://echarts.apache.org/examples/zh/index.html#chart-type-line)
  * [柱状图](https://echarts.apache.org/examples/zh/index.html#chart-type-bar)
  * [散点图](https://echarts.apache.org/examples/zh/index.html#chart-type-scatter)
  * [饼图](https://echarts.apache.org/examples/zh/index.html#chart-type-pie)
  * ...
* 官网地址: [https://echarts.apache.org/zh/index.html](https://echarts.apache.org/zh/index.html)

## 使用技术

* flex布局
* 原生js + jquery 使用
* **echarts基础**
* rem适配

## 项目展示

* 展示地址: [https://weinuozhou.github.io/DataVisual](https://weinuozhou.github.io/DataVisual)

<div style="text-align: center;"><img alt='202406112141534' src='https://cdn.jsdelivr.net/gh/weno861/image@main/img/202406112141534.png' width=500px> </div>

## 参考资料及工具

1. [echarts配置项设置](https://echarts.apache.org/zh/option.html#title)
2. [各类大屏数据可视化模板](https://github.com/blindperson/DaShuJuZhiDaPingZhanShi)
3. [JavaScript实现雪花效果](https://blog.csdn.net/qq_43390928/article/details/106387862)
4. [JavaScript实现鼠标点击效果](https://blog.csdn.net/qq_34241004/article/details/109038700)
5. [ChatGPT](https://chat.openai.com)
6. [屏幕颜色提取](https://www.snipaste.com/)
7. [渐变色推荐](https://uigradients.com/#Dull)
8. [大屏可视化有用的CSS技巧](https://juejin.cn/post/7047012645416730654)
9. [前端开发者文档](https://developer.mozilla.org/zh-CN/)
10. [JavaScript实现烟花效果](https://xie.infoq.cn/article/1928c13a01353e62fcee005b3)
11. [颜色值转换器](https://sunpma.com/other/rgb/)