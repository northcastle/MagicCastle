---
title: branch 分支
---

# 分支操作
> 分支，是git中的核心操作。必会。

## 1.创建分支
```shell
# 以当前提交版本创建分支（常用）
git branch newBranchName
```
```shell
# 以指定版本创建分支（常用）
git branch newBranchName specialVersion
```
```shell
# 以指定分支的最后一次提交创建分支（少用）
# 这种情况，可以先切换到该分支下，然后执行创建分支的命令
git branch newBranchName specialBranchName
```
```shell
# 以指定的标签版本创建分支(和指定版本一个道理)
git checkout -b newBranchName spctialTagName
```
## 2.查看分支
```shell
# 查看本地分支列表(常用)
git branch
```
```shell
# 查看本地分支列表，带最新一次提交记录信息（常用）
git branch -v
```
```shell
# 查看远程仓库的分支列表(仅限于本地已经拉下来的远程分支)
git branch -v -r
```
```shell
# 查看所有的分支（本地分支 & 已经拉取下来的远程分支）
git branch -v -a
```
```shell
# 查看本地分支与远程分支的绑定情况
git branch -v -v
```
```shell
# 查看未合并的分支（默认查看未合并到当前分支的分支）
git branch --no-merged

## 查看未合并的分支（定向查询未合并到目标分支的分支）
git branch --no-merged targetBranchName
```
```shell
# 查看已合并的分支（默认查看已经合并到当前分支的分支）
git branch --merged

# 查看已合并的分支（定向查询已经合并到目标分支的分支）
git branch --merged targetBranchName
```
```shell
# 在提交记录中，查看分支的合并情况
git log --oneline --graph --decorate 
```
## 3.切换分支
> 切换分支，就是将工作状态切换到另一个分支上，继续工作。
```shell
# 切换到本地已经存在的分支上
git checkout targetBranchName
or
git switch targetBranchName
```
```shell
# 切换到本地不存在的分支上，会自动创建该分支，并切换到该分支上。
# 默认 以【最新一次的提交版本】 为起点创建分支。
git checkout -b newBranchName
or
git switch -c newBranchName
```
```shell
# 切换到本地不存在的分支上，会自动创建该分支，并切换到该分支上。
# 指定 以 【某一次提交版本】 为起点创建分支。
git checkout -b newBranchName targetCommitHash
or
git switch -c newBranchName targetCommitHash
```
```shell
# 切换到本地不存在的分支上，会自动创建该分支，并切换到该分支上。
# 指定 以 【某个标签版本】 为起点创建分支。
git checkout -b newBranchName targetTagName
or
git switch -b newBranchName targetTagName
```

```shell
# 切换到远程分支上
# 如果远程分支不存在本地分支，git会自动创建本地分支，并将其设置为远程跟踪分支。
git checkout remoteBranchName [origin/xxx]
or
git switch remoteBranchName [origin/xxx]
```

## 4.删除分支
> 删除分支，以删除`本地分支` 为主，也会涉及到对`远程分支` 的删除。
```shell
# 删除本地分支 [该分支上是已经commit的状态]
git branch -d branchName
```
```shell
# 强制删除本地分支 [不存分支状态如何，直接强制删除]
git branch -D branchName
```
```shell
# 删除远程分支 : remoteAlias 为远程仓库的别名
git push remoteAlias --delete remoteBranchName
or
git push remoteAlias :remoteBranchName
```
## 5.合并分支
> 分支合并，是git的核心功能，也是git最强大的功能。
```shell
# 最常用的合并分支命令 ： 直接合并目标分支
git merge targetBranchName
```
> 补充 ： `merge` 合并冲突的解决思路:<br>
> 1.解决文件冲突的内容，然后 `git add confilictedFile` 添加到暂存区；<br>
> 2.应用合并 ： `git commit -m "xxxxxx"`; <br>
> 3.如果想放弃本次合并 ： `git merge --abort`.

```shell
# 合并目标分支上的某一次提交 : [常用]
git cherry-pick targetCommitHash
```
```shell
# 合并目标分支上的多次提交 ： 指定多个提交的hash值即可
git cherry-pick targetCommitHash1 targetCommitHash2 ... targetCommitHashN
```
```shell
# 合并目标分支上的多次提交 ： 某个范围内的提交都应用 : 直接用[..]连接起始和结束的hash值
git cherry-pick startCommitHash..endCommitHash
```
> 补充 ： `cherry-pick` 合并冲突的解决思路:<br>
> 1.解决文件冲突的内容，然后 `git add confilictedFile` 添加到暂存区；<br>
> 2.应用合并 ： `git cherry-pick --continue`; <br>
> 3.如果想放弃本次合并 ： `git cherry-pick --abort`.

## 6.推送本地分支到远程仓库
```shell
# 推送本地分支到远程仓库 ： 若远程分支不存在，会自动创建
git push remoteAlias branchName_local:branchName_remote
```
```shell
# 推送本地分支到远程仓库 ： 本地分支和远程分支名称相同【推荐使用】
git push remoteAlias branchName_local
```
```shell
# 推送本地分支到远程仓库 : 同时设置为上游分支【推荐使用】
# 设置为上游分支后，可以直接使用 `git push` 命令执行推送
git push -u remoteAlias branchName_local
or
git push --set-upstream remoteAlias branchName_local
```
## 7.拉取远程分支到本地仓库
> `git clone` 命令，默认情况下，只会将主分支master在本地进行创建。<br>
> 当有其他的分支的时候，就需要拉取远程的分支到本地仓库。

```shell
# 拉取所有远程仓库的所有状态 ： 分支、标签。但不会自动合并。【最强命令】
git fetch --all
```

```shell
# 拉取指定远程仓库的所有状态 ： 分支、标签。但不会自动合并。【强命令】
git fetch remoteAlias
```

```shell
# 拉取指定远程仓库的指定分支的最新状态
git fetch remoteAlias branchName_remote
```

* 情景一 ： 拉取远程分支到本地的某个已经存在的分支上(fetch+merge)
```shell
# 1.拉取远程分支
git fetch remoteAlias branchName_remote
# 2.切换到本地分支上
git checkout branchName_local
# 3.合并远程分支
git merge branchName_remote
```
* 情景二 ： 拉取远程分支到本地的一个新的分支上 (pull)
```shell
# 1.创建并切换分支
git checkout -b newBranch_local
# 2.拉取远程分支到新的分支上
git pull remoteAlias branchName_remote
【会自动合并】、【但是不会设置追踪分支】
```

* 情景三 ： 拉取远程分支到本地分支（*）
> 常用的是这个操作。
```shell
# 1.拉取远程分支
git fetch remoteAlias branchName_remote
# 2.以拉取下来的远程分支为基础，创建并切换到新的本地分支上
git checkout -b newBranch_local remoteAlias/branchName_remote
【不会自动创建追踪分支】
or
git checkout --track remoteAlias/branchName_remote
【会自动创建追踪分支，且本地分支名称与远程分支名称保持一致 - 推荐使用！】
or
git checkout -b newBranch_local --track remoteAlias/branchName_remote
【会自动创建追踪分支，且可以自定义新的本地分支的名称】

```

## 8.设置追踪分支
> 使用 `git branch -v -v` 命令，查看分支的追踪状态。
* 推送时设置追踪分支
```shell
git push -u remoteAlias branchName_remote
or
git push --set-upstream remoteAlias branchName_remote
```
* 单独指定-给当前分支设置追踪分支
```shell
git branch -u remoteAlias/branchName_remote
or
git branch --set-upstream-to remoteAlias/branchName_remote
```
* 单独指定-给特定分支设置追踪分支
```shell
git branch -u remoteAlias/branchName_remote branchName_local
or
git branch --set-upstream-to remoteAlias/branchName_remote branchName_local
```
* 取消追踪分支
```shell
# 取消当前分支的追踪分支
git branch --unset-upstream

# 取消特定分支的追踪分支
git branch --unset-upstream branchName_local
```
