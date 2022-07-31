[TOC]



## 1. 简介

### AJAX

Asynchronous JavaScript And XML -- 异步的js 和xml

通过AJAX可以在浏览器中向服务器发送异步请求， - 无刷新获取数据

### XML

可扩展标记语言

被用来传输和存储数据

HTML用来呈现数据 - 都是预定义标签，而XML中没有预定义标签，为自定义标签

```xml
<student>
    <name>Bella</name>
    <age>26</age>
    <gender>female</gender>
</student>
```

```json
{

  "name":"Linda",

  "age":88,

  "gender":"female"

}
```

## 2. 优缺点

#### 优点

无需刷新页面与服务器端进行通信

允许根据用户事件来更新部分页面内容

#### 缺点

没有浏览历史，不能回退

存在跨域问题（同源）

SEO（搜索引擎优化 search engine optimisation）不友好 - 爬不到数据，得去请求

## 3. HTTP

http (hypertext transport protocol) 协议【超文本传输协议】，协议详细规定了**浏览器和万维网服务器之间互相通信的规则**

约定，规则

## 4. 请求报文

行		POST /s?ie=utf-8  HTTP/1.1

​			请求类型； url路径; 协议版本

头		Host: atguigu.com

​			Cookie: name=guigu

​			Content-type: application/x-www-form  --  请求体类型

​			User-Agent: chrome 83

空行

体s		username=admine&password=admin

​			(get请求，就是空的； post请求，不为空)







## 5. 响应报文

行		HTTP/1.1		200		ok

头		Content-type: text/html; charset=utf-8

​			Content-length -- 长度

​			Content-encoding: gzip -- 压缩方式

体  <html></html>

404 找不到

403 被禁止

401 未授权

500 内部错误

**Query** **String** **Parameters**

对 url里的参数进行了解析，格式化

Response -- 响应体

Preview -- 对响应体解析之后

## 6. express框架

```linux
npm init --yes
```

## 7. 自动重启服务 nodemon

```
npm i -g nodemon
```

## 8. IE缓存问题

IE浏览器会对AJAX请求结果做缓存 - 不能及时获取最新数据

## 9. bootcdn

https://www.bootcdn.cn/

jquery库

## 10. axios

前端热门AJAX工具库, vue，react推荐的AJAX请求工具包











