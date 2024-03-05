---
title: 引入外部js文件的写法
---

# html 中引入外部js文件的写法
本文介绍一下在 html 文件中引入外部 js 文件的语法。
## 核心语法
> 在 html文件 的 `<head>` 标签 或 `<body>` 标签中添加 `<script>` 标签引入 外部js文件。<br>
> `src` 属性中添加 外部js文件 的路径即可。
```html
<script src="xxxxxx" type="text/javascript"></script>
```
## 案例
> **目标** ：在 `index.html`文件中 导入 `js/index.js` 文件。

### 项目结构
```tex
projectName
    | -- index.html
    | -- js
        | -- index.js
```

### html 文件内容（*）
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    ... 
    其他的html的内容

    <!-- 导入外部的js文件 --> // [!code focus]
    <script src="./js/index.js" type="text/javascript"></script> // [!code focus]
    
</body>
</html>
```



