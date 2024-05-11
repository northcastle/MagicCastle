---
title: 忽略文件的版本管理
---

# 忽略文件的版本管理

本文介绍一下 Git 中忽略文件的版本管理的处理方式。

:::tip 核心
 对 `.gitignore` 文件进行配置。
:::



## 忽略未被管理的新文件
> 未被管理的文件，例如，是一个新增的文件 HelloWorld.java。<br>
> 此时，只需要在 `.gitignore` 文件中添加该文件名，就不会被 git 管理了。

> 下面是 .gitignore 的文件内容：

```
...... 其他的被忽略文件

HelloWorld.java
```

## 忽略已被管理的文件
> 已经被纳入版本管理的文件，例如，文件 HelloWorld.java。<br>
> 直接配置 `.gitignore` 文件已经不会生效了。<br>
> 此时，需要先将文件`剔除`，然后再配置`.gitignore`文件。<br>


> 执行以下三个步骤即可 ：

* 1、从git中剔除
```shell
git rm --cached HelloWorld.java
```

* 2、配置 `.gitignore` 文件
```
...... 其他的被忽略文件

HelloWorld.java
```

* 3、提交版本
```shell
git commit -m "剔除HelloWorld.java文件"
```