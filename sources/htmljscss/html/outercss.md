---
title: 引入外部css文件的写法
---

# html 中引入外部css文件的写法
本文介绍一下在 html 文件中引入外部 css 文件的语法。
## 核心语法
> 在 html文件 的 `<head>` 标签中添加 `<link>` 标签引入 外部css文件。<br>
> `href` 属性中添加 外部css文件 的路径即可。
```html
<link rel="stylesheet" type="text/css" href="xxxxxx">
```
## 案例
> **目标** ：在 `index.html`文件中 导入 `css/index.css` 文件。

### 项目结构
```tex
projectName
    | -- index.html
    | -- css
        | -- index.css
```

### html 文件内容（*）
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!--重点 ：引入外部的css文件 : 此处使用相对路径引入 --> // [!code focus]
    <link rel="stylesheet" type="text/css" href="./css/index.css"> // [!code focus]


    <!--重点 ：引入外部的css文件 : 绝对路径 ： 自动拼接 【协议:域名:端口号】 --> // [!code focus]
    <link rel="stylesheet" type="text/css" href="/css/index.css"> // [!code focus]
</head>
<body>

    ......
    其他的html 内容。。。
    
</body>
</html>
```



