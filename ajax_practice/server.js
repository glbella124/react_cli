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

app.all("/server", (request, response)=>{
    // 设置响应头
    response.setHeader("Access-Control-Allow-Origin","*")
    // 允许自定义的响应头
    response.setHeader("Access-Control-Allow-Headers","*")
    // 设置响应体
    response.send("HELLO AJAX POST")
})

app.all("/json-server", (request, response)=>{
    // 设置响应头
    response.setHeader("Access-Control-Allow-Origin","*")
    // 允许自定义的响应头
    response.setHeader("Access-Control-Allow-Headers","*")
    // 响应数据
    const data = {
        name:"University of Edinburgh",
        type:"University"
    }
    // 对象不能直接给send，send方法只能接收字符串和buffer
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    // 设置响应体
    response.send(str)
})

// 针对IE缓存
app.get("/ie",(request, response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*")
    // 设置响应体
    response.send("HEllO IE")
})

// 延时响应
app.get("/delay",(request, response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*"),
    response.setHeader("Access-Control-Allow-Headers","*")
    // 设置响应体
    setTimeout(()=>{
        response.send("延时响应超时")
    }, 3000)
})

// jquery
app.all("/jquery-server",(request, response)=>{
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*")
    response.setHeader("Access-Control-Allow-Headers","*")
    const data = {name:"Express"}
    response.send(JSON.stringify(data))
})



// 4. 监听端口启动服务 端口 8000
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000端口监听中");
})
