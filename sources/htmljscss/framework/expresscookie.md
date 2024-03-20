---
title: express 框架中操作cookie
---

# express 框架操作cookie

## 会话控制是什么

```
会话控制，就是 【对会话进行控制】。

```
:::tip 提示
HTTP 是一种无状态的协议，它无法区分多次的请求是否来自于同一个客户端，即 ：【无法区分用户】。<br>
【会话控制】 就是在请求的过程中，对请求添加一些特殊的标记信息，从而实现对请求者身份的记录和验证。<br>

【常见的会话控制技术有三种】：
* cookie
* session
* token
:::



> 本文介绍一下 在 【express】框架中进行 `cookie` 操作的方式。

## 安装express依赖
> 在项目中执行如下命令，安装express 的依赖
```cmd
$ npm install express
```

## 设置cookie
```js
const express = require('express')
const app = express()

// 写一个请求，设置cookie
app.get('/setCookie', (req, res) => {

    // 设置一个cookie : 关闭浏览器就会销毁
    res.cookie('cookieA',"cookieA valueA")
    // 设置一个cookie : 指定有效的时长 : 单位是 毫秒
    res.cookie('cookieB','cookieBValueB',{maxAge:1000*60})

    // ...... 其他的逻辑
    
    // 响应给浏览器端
    res.send('hello 设置两个cookieA、cookieB')
})

app.listen(3000)
```
## 删除cookie
## 读取cookie
