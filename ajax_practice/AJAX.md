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

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

## 11. fetch

用的少，axios居多



## 12. 跨域 - 同源策略

Same-Origin Policy

最早由Netscape公司提出，是浏览器的一种安全策略

#### 同源 

当前网页的url和AJAX请求的目标资源的url, 协议，域名，端口号必须相同

**AJAX 默认遵循同源策略**

#### 跨域

违背同源策略

项目经常出现， 单台服务器，服务有上限，性能有瓶颈

##### 解决方案

1. JSONP (JSON with Padding), 是一个非官方的跨域解决方案，只支持get请求

   网页中一些标签天生具有跨域能力，eg. img, link, iframe, script

   **JSONP利用script标签的跨域能力来发送请求**

2. CORS(**Cross-Origin Resource Sharing**), 跨域资源共享

   **官方的跨域解决方案**

   特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持get和post请求

   跨域资源共享标准新增了一组HTTP首部字段（响应头），允许服务器声明哪些源站通过浏览器有权访问哪些资源

   **流程**： 通过设置一个响应头告诉浏览器，该请求允许跨域，浏览器收到该响应后对响应放行

   **使用**：服务器端的设置

   https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS

   服务端返回的 `Access-Control-Allow-Origin: *` 表明，该资源可以被 **任意** 外域访问。

   ```
   Access-Control-Allow-Origin: *
   ```

   使用 [`Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin) 和 [`Access-Control-Allow-Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) 就能完成最简单的访问控制。如果服务端仅允许来自 `https://foo.example` 的访问，该首部字段的内容如下：

   ```
   Access-Control-Allow-Origin: https://foo.example
   ```

   ### [Access-Control-Allow-Methods](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#access-control-allow-methods)

   [`Access-Control-Allow-Methods`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) 首部字段用于预检请求的响应。其指明了实际请求所允许使用的 HTTP 方法。

   ```
   Access-Control-Allow-Methods: <method>[, <method>]*
   ```

   有关 [preflight request](https://developer.mozilla.org/zh-CN/docs/Glossary/Preflight_request) 的示例已在上方给出。

   ### [Access-Control-Allow-Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#access-control-allow-headers)

   [`Access-Control-Allow-Headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) 首部字段用于预检请求的响应。其指明了实际请求中允许携带的首部字段。

   ```
   Access-Control-Allow-Headers: <field-name>[, <field-name>]*
   ```



