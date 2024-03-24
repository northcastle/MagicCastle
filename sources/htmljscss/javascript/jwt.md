---
title : JWT 的使用
---

# JS 中使用 JWT

> 本文介绍一下js中使用JWT生成/校验token的操作。<br>


## token简介
```
1、token是服务端生成并返回给客户端的一串加密字符串，可以保存一些信息；
2、token拥有有效期属性，可以实现会话控制；
3、token中可以携带用户信息，用于识别用户的身份；
4、token需要客户端手动添加在请求报文中（一般是在请求头中），发送到服务端。
```

## JWT 简单认识
> `JWT (JsonWebToken)` : 是一种标准，用于各方之间以json对象的形式进行信息的传输。<br>

> JWT 由三部分组成 ：`Header.Payload.Signature` : `[标头].[载荷].[签名]`<br>
> 三部分之间用 `.` 隔开。


> `Header` : 主要包含两部分 ： 签名的算法(alg)、令牌的类型(typ)
```json
{
    "alg":"HS256"，
    "typ":"JWT"
}
```
> `Payload` : 信息/数据内容(手动添加进来) + 到期时间(设置后自己添加进来)
```json
{
    "key1" : "value1",
    "key2" : "value2"
    ......
}
```
> `Signature` : 签名，使用Header中指定的加密方式，对 Header + Payload 进行编码与签名。
```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

下面，对在JS中使用JWT的操作进行演示。

## 安装依赖
```cmd
npm install jsonwebtoken
```

## 生成token
```js
// 导入依赖
const jwt = require('jsonwebtoken')

// 生成token
// 格式 ： let token = jwt.sign(数据部分，加密字符串，配置对象)
let token = jwt.sign(
    {name:'aa',key2:['a','b','c'], key3:100},
    "a$SDfweg123&",
    {algorithm:'HS256',expiresIn:1}
    )

// expiresIn : 数字的时候，单位是 秒；字符串的时候，可以携带单位 : 7d 表示7天

console.log(token)
```

```
输出的token ： 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWEiLCJrZXkyIjpbImEiLCJiIiwiYyJdLCJrZXkzIjoxMDAsImlhdCI6MTcxMTI4MjI0OCwiZXhwIjoxNzExMjgyMjQ5fQ.7MuZffz1JD2cr11HGqEbR5HOIrMp2XmsrJY1en-IXyE
```
## 校验token
```js

// 导入依赖
const jwt = require('jsonwebtoken')

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWEiLCJrZXkyIjpbImEiLCJiIiwiYyJdLCJrZXkzIjoxMDAsImlhdCI6MTcxMTI4MjI0OCwiZXhwIjoxNzExMjgyMjQ5fQ.7MuZffz1JD2cr11HGqEbR5HOIrMp2XmsrJY1en-IXyE"

// 验证token
jwt.verify(token,'a$SDfweg123&',(err,data)=>{
    if(err){
        console.log('token 验证失败')
        console.log(err.message)
        return
    }

    console.log('token 验证成功')
    console.log('解析之后的数据 ： ',data)
})
```

```
token 验证成功
解析之后的数据 ：  {
  name: 'aa',
  key2: [ 'a', 'b', 'c' ],
  key3: 100,
  iat: 1711282095,
  exp: 1711282096
}
```