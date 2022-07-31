// 1. 引入express
const { response } = require("express")
const express = require("express")

// 2. 创建应用对象
const app =  express()

//3. 创建路由规则
// request -- 对请求报文的封装
// reponse -- 对响应报文的封装
// 路径是/server - 则会执行回调函数
app.get("/server", (request, response)=>{
    // 设置响应头
    response.setHeader("Access-Control-Allow-Origin","*")
    // 设置响应体
    response.send("HELLO AJAX")
})

// 4. 监听端口启动服务 端口 8000
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000端口监听中");
})
