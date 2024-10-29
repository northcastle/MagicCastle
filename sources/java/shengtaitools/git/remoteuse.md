---
title: 远程仓库的操作 
---

# 远程仓库
> 一个项目可以关联多个远程仓库。<br>
> 本文介绍一下远程仓库的相关操作。

## 1.克隆远程仓库
* 情景一 ： 克隆整个仓库
```shell
# 使用默认的远程别名，默认为 origin（常用）
git clone remote_address
```

```shell
# 指定 远程别名 
git clone -o remote_alias remote_address
or 
git clone --origin remote_alias remote_address
```

* 情景二 ： 克隆指定的某个分支
```shell
git clone -b branch_name remote_address
or
git clone --branch branch_name remote_address
```
## 2.查看远程仓库
```shell
# 查看远程的仓库的列表 以及 远程仓库的地址 【常用】
git remote -v
```

```shell
# 查看指定远程仓库的详细信息 【常用】
git remote show remote_alias
```

```shell
# 获取远程引用的所有列表 ： 包含分支的上游分支
git ls-remote [remote_alias]
```

## 3.添加远程仓库
```shell
git remote add remote_alias remote_address
```

## 4.删除远程仓库
```shell
git remote remove remote_alias
```

## 5.修改远程仓库地址
```shell
git remote set-url remote_alias new_remote_address
```

## 6.获取远程仓库中的更新
> 这个操作挺常用。可以同步远程仓库中的更新下来。
```shell
git fetch remote_alias [branch_name]
```