---
title: .gitignore 忽略文件
---

# .gitignore 文件中配置忽略文件
> 本文展示一下 .gitignore 文件中配置忽略文件的方法

## 1.忽略具体的某个文件
> 直接指定具体的文件名即可。
```tex
HelloWorld.class
```

## 2.忽略某一类文件
> 使用通配符 [*]
```tex
*.log
```

## 3.忽略指定目录下的某个文件
```tex
# 从根目录开始匹配 ： 绝对路径
/com/example/HelloWorld.class
```

```tex
# 任意子目录匹配 ： 相对路径
com/example/HelloWorld.class
```

## 4.忽略指定目录下的某类文件
> 使用通配符 [*]

```tex
# 从根目录开始匹配 ： 绝对路径
/com/example/*.class
```

```tex
# 任意子目录匹配 ： 相对路径
com/example/*.class
```

## 5.忽略某个目录 ： 所有包含的都会被忽略
> 相对路径的匹配，只要包含就可以
```tex
com/example/
```

## 6.忽略某个目录 ： 从根目录开始匹配
> 绝对路径的匹配
```tex
/com/example/
```

## 7.忽略某个目录，但剔除某个文件
> [!] 符号，可以反向选择，即剔除某些文件
```tex
# 1.忽略 com/example/ 目录下的所有 class 文件
/com/example/*.class

# 2.但不忽略 HelloWorld.class
!/com/example/HelloWorld.class
```