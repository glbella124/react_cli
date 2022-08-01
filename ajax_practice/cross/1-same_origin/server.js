const express = require("express")

const app = express()
app.get("/home",(request, response)=>{
    // 响应一个页面
    // _dirname -- 绝对路径
    response.sendFile(__dirname + "/1_same_origin.html")
})

app.get("/data",(request, response)=>{
    response.send("用户数据")
})

app.listen(9000,()=>{
    console.log("服务已经启动,监听9000端口......");
})
