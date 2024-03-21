---
title: Cookie的基本操作
---

# Cookie 的基本操作

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



> 本文介绍一下 在 【SpringBoot】框架中进行 `cookie` 操作的方式。

## 核心类介绍
> `javax.servlet.http.Cookie` : cookie的对象 <br>
> `javax.servlet.http.HttpServletRequest` : http 请求对象类<br>
> `javax.servlet.http.HttpServletResponse`: http 响应对象类

## 设置cookie
> `Cookie cookieA = new Cookie(key,value);` : 声明一个cookie的对象<br>
> `cookie.setMaxAge(num)` : 设置cookie的有效时长，单位是 [秒]<br>


> `response.addCookie(Cookie对象)` ： 设置cookie<br>
> **可以调用多次，设置多个cookie**

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@RestController
@RequestMapping("/cookie")
public class CookieController {

    @GetMapping("/setCookie")
    public String setCookie(HttpServletRequest request, HttpServletResponse response) {


        // 创建一个普通的cookie // [!code focus]
        Cookie cookieA = new Cookie("cookieA","CookieA"); // [!code focus]
        // 设置有效时长，单位 秒// [!code focus]
        cookieA.setMaxAge(60*1000);// [!code focus]
        response.addCookie(cookieA);// [!code focus]

        // 设置有中文的cookie ： 进行一下转码 // [!code focus]
        String cookieBValue = URLEncoder.encode("这是cookieB的值", "utf-8");// [!code focus]
        Cookie cookieB = new Cookie("cookieB",cookieBValue);// [!code focus]
        // 设置有效时长，单位 秒// [!code focus]
        cookieB.setMaxAge(60*1000);// [!code focus]
        response.addCookie(cookieB);// [!code focus]

        // .... 其他的业务逻辑 

        return "cookie 设置成功！";
    }
    
}

```

## 删除cookie
> `cookie.setMaxAge(0)` : 设置cookie的有效时长为【0】，表示立即失效，即删除。

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@RestController
@RequestMapping("/cookie")
public class CookieController {

    @GetMapping("/removeCookie")
    public String removeCookie(HttpServletRequest request, HttpServletResponse response){

        // 创建一个普通的cookie // [!code focus]
        Cookie cookieA = new Cookie("cookieA","CookieA"); // [!code focus]
        // 设置有效时长 为0， 即表示删除cookie // [!code focus]
        cookieA.setMaxAge(0); // [!code focus]

        response.addCookie(cookieA); // [!code focus]

        return "cookie 删除成功！";
    }
}
```

## 读取cookie
> `读取cookie要在请求对象中获取，因为是从浏览器携带cookie请求到服务端`<br>
> `request.getCookies()` : 获取请求中的所有cookie的数组<br>

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@RestController
@RequestMapping("/cookie")
public class CookieController {

    @GetMapping("/readCookie")
    public String readCookie(HttpServletRequest request, HttpServletResponse response){

        // 获取请求中所有的cookie数组 // [!code focus]
        Cookie[] cookies = request.getCookies(); // [!code focus]
        // 循环遍历，读取每一个cookie对象的值 // [!code focus]
        for (Cookie cookie : cookies) { // [!code focus]
            System.out.println(cookie.getName() + " : " + cookie.getValue()); // [!code focus]
        } // [!code focus]

        return "cookie 读取成功！";
    }
}
```

> 至此，在 SpringBoot 框架中 对 cookie 的基本操作就完成了。