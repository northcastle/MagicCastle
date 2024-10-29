---
title : 版本回退
---

# Git 中的版本回退
> 本文介绍一下版本回退的操作。

## 1.git reset 【常用】
> `git reset` 命令 可以将当前分支的HEAD指针移动到指定的提交，并根据不同的模式处理【工作目录】和【暂存区】。<br>
> * `--soft`  : 仅移动HEAD指针，不改变【工作目录】和【暂存区】。<br>
> * `--mixed` : （默认），移动HEAD指针，重置【暂存区】，但不改变【工作目录】。<br>
> * `--hard`  : （常用），移动HEAD指针，重置【暂存区】和【工作目录】。<br>

* 情景一 ： 回退到上一个版本
```shell
git reset --hard HEAD~1
or
git reset --hard HEAD^1
```

* 情景二 ： 回退到特定版本 [推荐使用]
```shell
git reset --hard coommitHash
```
> 补充 ： `git reflog` 命令可以查看所有HEAD的变动记录，包括已经被删除的提交。<br>
> 在找回 `reset --hard` 删除的提交时可以用到。

## 2.git checkout 
* 情景一 ： 切换到某个特定的提交
> 状态 ： 将 工作目录 和 暂存区 切换到指定的提交。处于 “分离HEAD” 状态。<br>
> “分离HEAD”状态 ： 不在任何分支上。这种状态下进行的提交不会被任何分支引用。<br>
> 作用 ： 主要是用于查看某个历史版本的状态。
```shell
git checkout target-commit-hash
```
> 补充 ： 从“分离HEAD”状态切换到某个分支上，可以使用 `git checkout branchName` 命令。

* 情景二 ： 根据某个特定的提交创建并切换新的分支
> 这个是比较常用的创建分支的一个命令。
```shell
git checkout -b newBranchName target-commit-hash
```

* 情景三 ： 恢复单个文件到某个提交的状态
> 作用 ： 适用于恢复某个文件到特定的版本。
```shell
git checkout target-commit-hash -- file-path
```

* 情景四 ： 恢复单个文件到最新的提交状态
> 作用 ： 将指定文件恢复到最新提交的状态，丢弃工作目录中的更改。
```shell
git checkout -- file-path
```

## 3.git revert
> `git revert` 命令可以【撤销提交】，但是不会删除提交记录。<br>
> 效果 ： 会【创建一个新的提交】来撤销指定的提交。

* 基本用法
> 指定提交版本的hash值来撤销版本。

```shell
# 撤销单个指定版本
git revert targetCommitHash
```

```shell
# 撤销多个指定的版本
git revert targetCommitHash1 targetCommitHash2 ......
```

```shell
# 撤销多个连续的版本
git revert targetCommitHashStart..targetCommitHashEnd
```

* 高级用法
> 撤销合并提交 or 强制撤销（忽略冲突）

```shell
# 撤销合并提交 
# 1、创建一个新的提交；
# 2、撤销 targetCommitHash 这一次的提交内容；
# 3、保留 第 parent-number 个父提交。
git revert -m parent-number targetCommitHash
```

```shell
# 取消自动提交步骤，需要手动commit
# 1、将指定提交的更改应用到 工作目录 和 暂存区；
# 2、不会立即创建新的提交记录；
# 3、此时如果有冲突，可以手动修改；
# 4、没有问题后，执行 add & commit 进行手动提交。
git revert -n targetCommitHash
```