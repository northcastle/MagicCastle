---
title: express 框架中操作 Session
---

# express 框架中操作 Session

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



> 本文介绍一下 在 【express】框架中进行 `Session` 操作的方式。

## session简介
:::tip
* session 是保存在【服务端的一块儿数据】，主要用来保存当前访问用户的相关信息。
* 因此，session可以用来识别用户的身份以及快速获取用户的相关信息，实现会话控制。
:::

## session流程（*）
```
1、客户端浏览器携带身份信息（用户名&密码） 请求 服务端；
2、服务端进行 身份信息 校验；
3、校验通过，创建session对象，保存身份相关的数据，并生成一个sessionId 用来标识当前数据；
4、服务端 将sessionId 放入 cookie 中，返回给 客户端浏览器；
5、当客户端浏览器 下次再进行访问 服务端时，会自动携带cookie到服务端；
6、此时服务端可以根据cookie中的sessionId 获取对应的session，进而获取到用户的身份信息。

```
> 【注意】：<br>
>  默认情况下，session 的数据是存放在 【**内存**】中的,express框架提供了对戒持久化的接口，本文并不涉及。<br>
>  如果想了解更多关于 express-session 的操作，请参考官方文档 [express-session官网](https://www.npmjs.com/package/express-session)

## 安装express依赖
> 在项目中执行如下命令，安装express 的依赖
```cmd
$ npm install express-session
```

## 加载 express-session 插件
> 本小节是对核心操作的单独摘出来的部分。在下面的代码中也会呈现。
```js

// 导入操作 session 的依赖包
var session = require('express-session')

// 加载session的插件
app.use(session({
    name:'mysession', // 自定义cookie中的key
    secret:'a@#flwengFD', // 签名密钥，加密用的
    saveUninitialized:false, // 是否为每次请求都设置一个cookie来存储session ID
    resave:true, // 是否在每次请求时重新保存session，看自己的情况吧
    cookie:{
        maxAge:1000 * 60, // 超时时间 ，单位 毫秒
        httpOnly:true, // true 表示 前端无法通过JS操作
    }

}))
```

## 创建session
```js
const express = require('express')

// 导入操作 session 的依赖包
var session = require('express-session')

const app = express()

// 加载session的插件
app.use(session({
    name:'mysession', // 自定义cookie中的key
    secret:'a@#flwengFD', // 签名密钥，加密用的
    saveUninitialized:false, // 是否为每次请求都设置一个cookie来存储session ID
    resave:true, // 是否在每次请求时重新保存session，看自己的情况吧
    cookie:{
        maxAge:1000 * 60, // 超时时间 ，单位 毫秒
        httpOnly:true, // true 表示 前端无法通过JS操作
    }

}))

// 写一个请求，创建session
app.get('/setSession', (req, res) => {

    console.log('请求来到了setSession中。。。')

    // 设置一个session 
    req.session.myname = 'aaa',
    req.session.myinfo = '这是session中的内容'

    // 获取session的ID
    console.log('新增session ID ： ',req.sessionID)

    // ...... 其他的逻辑
    
    // 响应给浏览器端
    res.send('hello')
})

app.listen(3000)
```

## 移除session


```js
 const express = require('express')

// 导入操作 session 的依赖包
var session = require('express-session')

const app = express()

// 加载session的插件
app.use(session({
    name:'mysession', // 自定义cookie中的key
    secret:'a@#flwengFD', // 签名密钥，加密用的
    saveUninitialized:false, // 是否为每次请求都设置一个cookie来存储session ID
    resave:true, // 是否在每次请求时重新保存session，看自己的情况吧
    cookie:{
        maxAge:1000 * 60, // 超时时间 ，单位 毫秒
        httpOnly:true, // true 表示 前端无法通过JS操作
    }

}))

// 写一个请求，删除session
app.get('/removeSession',(req,res)=>{
    
    //获取session的ID
    console.log('删除session ID ： ',req.session.id)
    // 删除session
    req.session.destroy(()=>{
        console.log(' session 销毁成功！')
    })

    //...... 其他的逻辑

    // 响应给浏览器端
    res.send('删除session成功')
})



app.listen(3000)
```

## 读取session对象

```js
const express = require('express')

// 导入操作 session 的依赖包
var session = require('express-session')

const app = express()

// 加载session的插件
app.use(session({
    name:'mysession', // 自定义cookie中的key
    secret:'a@#flwengFD', // 签名密钥，加密用的
    saveUninitialized:false, // 是否为每次请求都设置一个cookie来存储session ID
    resave:true, // 是否在每次请求时重新保存session，看自己的情况吧
    cookie:{
        maxAge:1000 * 60, // 超时时间 ，单位 毫秒
        httpOnly:true, // true 表示 前端无法通过JS操作
    }

}))

// 写一个请求，读取session中的内容
app.get('/readSession',(req,res)=>{

    console.log('读取session ID ： ',req.session.id)

    // 读取Session
    let myname = req.session.myname
    let myinfo = req.session.myinfo
    console.log('myname = ',myname)
    console.log('myinfo = ',myinfo)


    //...... 其他的逻辑

    // 响应给浏览器端
    res.send('读取session成功 : ' + myname + ' - '+myinfo)
})


app.listen(3000)
```

## cookie和session的区别
```
1、cookie 存在浏览器端；session 存在服务端；
2、由于session是存在服务端的，所以数据安全性方面相对较高；
3、session由于是在cookie中只存了一个ID，所以数据传输方面要比在cookie中存数据小。
```

> 至此，在 express 框架中 对 session 的基本操作就完成了。