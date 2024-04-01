---
title: NodeJS 的多版本控制
---

# NodeJS 的多版本控制
本文介绍一下在 `windows`/`MacOS` 上 如何 切换和使用多个版本的 NodeJS。

## Windows
本小节介绍一下在`windows`上管理不同版本的NodeJS。

### nvm-windows 工具
```
nvm-windows 是在 windows 上管理 NodeJS 版本的一个工具。
它可以很方便的 下载、移除、查看、切换 不同版本的 NodeJS。
```
> 下载地址 ： [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) <br>
> 下载 windwos 的 `exe` 安装程序即可。<br>
> 下载完成后，直接双击运行安装即可。


### 常用命令介绍
> `查看` 纳入管理的 Node

```shell
nvm list
```
> `安装` 指定版本的 Node
```shell
nvm install <版本号>

#例如
nvm install 20.12.0
```
> `卸载` 指定版本的 Node
```shell
nvm uninstall <版本号>

# 例如
nvm uninstall 20.12.0
```
> `切换` 到指定版本的 Node
```shell
nvm use <版本号>

# 例如
nvm use 20.12.0
```
> 查看 nvm 版本
```shell
nvm --version
```

## MacOS
本小节介绍一下在`MacOS`上管理不同版本的NodeJS。
