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
> `response.cookie(key,value)`

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
> `response.clearCookie(key)`

```js
const express = require('express')
const app = express()

// 写一个请求，删除cookie
app.get('/removeCookie',(req,res)=>{
    // 删除cookie
    res.clearCookie('cookieA')
    
    //...... 其他的逻辑

    // 响应给浏览器端
    res.send('删除cookie成功')
})

app.listen(3000)
```

## 读取cookie

### 安装 cookie-parser 依赖
> `cookie-parser` 是一个解析cookie的依赖包

```cmd
$ npm install cookie-parser
```

### 读取 cookie
> 使用中间件后，直接在 request 对象中，就可以获取到cookie了

```js
const express = require('express')

// 导入读取cookie 的依赖包
const cookieParser = require('cookie-parser')

const app = express()

// 加载cookie解析的插件
app.use(cookieParser())


// 写一个请求，读取cookie
app.get('/readCookie',(req,res)=>{

    // 读取cookie
    let cookies = req.cookies
    console.log('请求中的cookie ： ',cookies)

    //...... 其他的逻辑

    // 响应给浏览器端
    res.send('读取cookie成功' + JSON.stringify(cookies))
})


app.listen(3000)
```

> 至此，在 express 框架中 对 cookie 的基本操作就完成了。