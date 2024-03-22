---
title: Session 的基本操作
---

# Session 的基本操作

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



> 本文介绍一下 在 【SpringBoot】框架中进行 `Session` 操作的方式。

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
>  默认情况下，存放到cookie中的sessionId 的 key  为 ： "**JSESSIONID**"。 <br>
>  默认情况下，session 的数据是存放在 【**内存**】中的。

## 核心类介绍
> `javax.servlet.http.HttpSession` : session的对象 <br>
> `javax.servlet.http.HttpServletRequest` : http 请求对象类<br>
> `javax.servlet.http.HttpServletResponse`: http 响应对象类

## session对象的基本操作方法
> `HttpSession session = request.getSession();` : 获取session对象，如果不存在则创建；如果存在则直接使用<br>
> `session.setMaxInactiveInterval(num);` : 设置session的有效时长，单位是 [秒]<br>
> `session.getId()` : 获取session的ID<br>
> `session.setAttribute(key,value);` : 往session对象中添加属性<br>
> `session.getAttribute(key);` : 获取session中存的数据<br>
> `session.isNew();` : 判断一个session是否是新创建的<br>
> `session.invalidate();` : 销毁一个session<br>


## 获取session对象
> `HttpSession session = request.getSession();` : 获取session对象，如果不存在则创建；如果存在则直接使用<br>

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/session")
public class SessionController {

    /**
     * 创建session
     * @param request
     * @param response
     * @return
     */
    @GetMapping("/createSession")
    public String createSession(HttpServletRequest request, HttpServletResponse response) {

        System.out.println(" 创建 session begin  ");

        // 获取当前会话的session，如果session不存在，则创建session // [!code focus]
        HttpSession session = request.getSession(); // [!code focus]
        session.setAttribute("keya","valuea"); // [!code focus]

        // 设置session的有效期，单位是 ：【秒】// [!code focus]
        session.setMaxInactiveInterval(60 * 10); // [!code focus]

        // sessionId 是自动生成的可以获取查看 // [!code focus]
        String id = session.getId(); // [!code focus]
        System.out.println("sessionId = " + id); // [!code focus]

        // 默认的名称是 JSESSIONID

        // ...... 其他的业务逻辑

        return "session 创建成功！";
    }


}

```

## 移除session
> `session.invalidate();` : 销毁一个session<br>

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/session")
public class SessionController {

   /**
     * 移除session
     * @param request
     * @param response
     * @return
     */
    @GetMapping("/removeSession")
    public String removeSession(HttpServletRequest request, HttpServletResponse response) {

        System.out.println(" 移除session begin  ");

        // 获取当前会话的session，如果session不存在，则创建session // [!code focus]
        HttpSession session = request.getSession(); // [!code focus]

        // 移除session // [!code focus]
        session.invalidate(); // [!code focus]

        // ...... 其他的业务逻辑

        return "session 移除成功！";
    }

}
```

## 读取session对象
> `session.getAttribute(key);` : 获取session中存的数据<br>

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/session")
public class SessionController {

    /**
     * 读取session
     * @param request
     * @param response
     * @return
     */
    @GetMapping("/readSession")
    public String readSession(HttpServletRequest request, HttpServletResponse response) {

        System.out.println(" 读取 session begin  ");

        // 获取当前会话的session，如果session不存在，则创建session  // [!code focus]
        HttpSession session = request.getSession();  // [!code focus]

        // 判断session是否是一个新的session  // [!code focus]
        boolean aNew = session.isNew();  // [!code focus]
        System.out.println("当前session是否是一个新的session ： "+aNew);  // [!code focus]

        // 查看sessionID  // [!code focus]
        String id = session.getId();  // [!code focus]
        System.out.println("当前session 的 sessionId = " + id);  // [!code focus]

        // 从cookie中获取当前session的sessionID
        Cookie[] cookies = request.getCookies();
        Arrays.stream(cookies).forEach(cookie -> System.out.println(cookie.getName()+" : "+cookie.getValue()));

        // 读取session中的属性  // [!code focus]
        Object keya = session.getAttribute("keya");  // [!code focus]
        System.out.println("keya = " + keya);  // [!code focus]

        // 移除session中的属性  // [!code focus]
        session.removeAttribute("keya");  // [!code focus]


        // ...... 其他业务逻辑


        return "session 读取成功！";
    }

}
```

## cookie和session的区别
```
1、cookie 存在浏览器端；session 存在服务端；
2、由于session是存在服务端的，所以数据安全性方面相对较高；
3、session由于是在cookie中只存了一个ID，所以数据传输方面要比在cookie中存数据小。
```

> 至此，在 SpringBoot 框架中 对 session 的基本操作就完成了。