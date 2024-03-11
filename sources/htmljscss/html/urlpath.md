---
title: URL中的相对路径与绝对路径
---

# URL中的绝对路径与相对路径
本文来介绍一下URL中的`绝对路径`与`相对路径`。
## 绝对路径
> 绝对路径就是一个完整的路径。目标明确，可靠性强。<br>

【有如下三种形式】:<br>
假如当前页面是 ：`http://www.abc.com/a/index.html`为例，下面的写法都是在这个html中的`<a>`标签

* 形式一 ： 完全完整的
```html
<a href="https://www.baidu.com">点我到百度</a>
```

* 形式二 ：省略协议，根据当前页面的协议自动补全
```html
<a href="//www.baidu.com">点我到百度</a>
```
> 会自动补全为 ：`http://www.baidu.com`

* 形式三 ：只有资源地址，需要根据当前页面的协议、域名地址、端口号 自动补全
```html
<a href="/b/index.css">只有资源地址</a>
```
> 会自动补全为 ：`http://www.abc.com/b/index.css` <br>
> 可以把 第一个`/`理解为项目的根目录，然后往后拼接资源目录。


## 相对路径
相对路径在发送请求时，需要与当前页面的URL路径进行计算，得到完整的URL后再发送请求。<br>
相对于绝对路径来说，相对路径不是很可靠，但是在开发环境中用的还较多。<br>


【有如下三种形式】:<br>
假如当前页面是 ：`http://www.abc.com/a/index.html`为例，下面的写法都是在这个html中的`<a>`标签


* 形式一 ： 当前目录的资源 ：`./xxx`
```html
<a href="./css/abc.css">加载css资源</a>
```
> 目标地址为 ：`http://www.abc.com/a/css/abc.css`

* 形式二 ：当前目录的资源，省略写法 ：`xxx`
```html
<a href="css/abc.css">加载css资源</a>
```
> 目标地址为 ：`http://www.abc.com/a/css/abc.css`

* 形式三 ：寻找上一级的资源 ：`../xxx`
```html
<a href="../css/abc.css">加载css资源</a>
```
> 目标地址为 ：`http://www.abc.com/css/abc.css` <br>
> **注意** ： 寻找上一级的时候，最多也就到项目的根目录下。<br>
> `../../../../css/abc.css` 也是会到 `http://www.abc.com/css/abc.css` 这个位置。

<br>
以上就是关于URL的`绝对路径`与`相对路径`的介绍。