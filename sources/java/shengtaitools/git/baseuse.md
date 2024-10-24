---
title: Git的基础操作
---

# Git的基础操作

> 本文介绍一下 Git 中的基础操作命令。

## 查看状态
> 执行命令后，未被追溯的文件会显示为`红色` ，修改的文件会显示为`绿色`。

```shell
git status
```

## 添加文件到暂存区
```shell
# 添加指定的文件到暂存区
git add file1 file2 file3 ...
```

```shell
# 添加所有修改的文件到暂存区(用 . 来代表所有文件)
git add .
```

## 提交文件到本地仓库
```shell
git commit -m "提交信息-自己添加一下即可"
```

## 查看提交记录
> `--oneline` : 简要展示，每次提交一行；<br>
> `--graph` : 会展示提交记录的图形化表示，有连接线；<br>
> `--decorate` : 会展示提交记录的一些附加信息，方便分析；<br>
> `-n number` : 展示多少条历史记录。
```shell
git log [--oneline] [--graph] [--decorate] [-n number]
```