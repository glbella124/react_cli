[TOC]



## 脚手架

npm run eject 

暴露所有webpack核心配置文件

## 目录

#### public ---- 静态资源文件夹

favicon.icon ------ 网站页签图标

index.html ------- 主页面

logo192.png ------- logo图

logo512.png ------- logo图

manifest.json ----- 应用加壳的配置文件

robots.txt -------- 爬虫协议规则文件

#### src ---- 源码文件夹

​		App.css -------- App组件的样式

​		App.js---------App组件

​		App.test.js ---- 用于给App做测试，很少用

​		index.css ------ 样式

​		index.js------**入口文件**

​		logo.svg ------- logo图

​		reportWebVitals.js

​			--- 页面性能分析文件(需要web-vitals库的支持)

​		setupTests.js

​			---- 组件单元测试的文件(需要jest-dom库的支持)



%PUBLIC_URL%/ 

代表public文件夹路径



## 模块化的语法

```import React, {Component} from "react"```

## 组件化的编码流程

1. 拆分组件： 拆分界面，抽取组件

2. 实现静态组件：使用组件实现静态页面效果

3. 实现动态组件

   动态实现初始化数据

   数据类型，数据名称，保存在哪个组件，交互（从绑定事件监听开始）

## 子组件向父组件传递数据

解决方法：

使用props的方法

父组件向子组件传递一个函数
