# 商品订单大屏可视化展示

## 数据描述

1. `商品订单表.xlsx`行数为$19490$，列数为$25$
2. 字段描述

|字段|类型|
|:---:|:---:|
订单编号|String
订单日期|date
门店名称|String
支付方式|String
发货日期|date
实际配送天数|int
计划配送天数|int
客户编号|String
客户姓名|String
客户类型|String
城市|String
省市|String
地区|String
产品编号|String
产品名称|String
商品类别|String
子类别|String
销售额|Float
数量|int
折扣|Float
利润额|Float
销售经理|String
是否退回|int
是否满意|int
年份|int

## 处理数据

详情请见[process.ipynb](./process.ipynb)

## 数据可视化

详情请见[index.html](./index.html)

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