---
title: Tag 标签
---

# 标签的使用
> 标签，就是对某一次提交的一个标注。

## 1.创建标签
> 创建标签，可以创建轻量级的普通标签，也可以创建带有备注的附注标签。

```shell
# 以当前提交版本为基础，创建标签
git tag newTagName
```

```shell
# 以指定提交版本为基础，创建标签
git tag newTagName targetCommitHash
```

```shell
# 以当前提交版本为基础，创建附注标签
git tag -a newTagName -m "标签备注"
```

```shell
# 以指定提交版本为基础，创建附注标签
git tag -a newTagName targetCommitHash -m "标签备注"
```

## 2.查看标签
```shell
# 列出本地仓库中的所有标签
git tag
```

```shell
# 查看远程仓库中的所有标签
git ls-remote --tags remoteAlias
```

```shell
# 根据标签名称，模糊查询标签列表 ： 可以使用通配符 [*]
git tag -l "标签名称"
or
git tag --list "标签名称"
```

```shell
# 查看指定标签的详细信息
git tag show targetTagName
```

```shell
# 在提交历史中查看标签记录
git log --oneline --graph 
```

## 3.推送标签到远程仓库
> 有两种方式，一种是推送单个标签，另一种是推送全部标签。

```shell
# 推送单个标签
git push origin tagName
```

```shell
# 推送全部标签
git push origin --tags
```

## 4.删除标签
> 两种情景，一种是删除本地标签，另一种是删除远程仓库的标签。

* 情景一 ： 删除本地标签
```shell
# 删除单个标签
git tag -d tagName_local

# 如果要删除多个，用空格隔开即可
git tag -d tagName_local tagName_local2   
```

* 情景二 ： 删除远程仓库的标签
```shell
# 删除单个标签
git push remoteAlias --delete targetTagName_remote
or
git push remoteAlias :refs/tags/targetTagName_remote
```

```shell
# 删除多个标签，用 空格 隔开即可
git push remoteAlias --delete targetTagName_remote targetTagName_remote2 ...
or 
git push remoteALias :refs/tags/targetTagName_remote :refs/tags/targetTagName_remote2 ...
```

## 5.检出标签
> 作用 ： 以标签的提交为基础，创建一个新的分支

```shell
git checkout -b newBranchName targetTagName
or
git switch -c newBranchName targetTagName
```
