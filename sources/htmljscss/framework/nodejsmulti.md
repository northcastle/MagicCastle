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

> 有一个叫做 `n` 的命令行工具，可以完成该功能

### 安装
> 直接使用 npm 的方式进行安装即可。
```shell
npm install -g n
```
### 常用命令介绍

> `查看` 纳入管理的 Node

```shell
n ls
```
> `安装` 指定版本的 Node <br>
> 注意 ： 此处有目录创建动作，因此需要 `sudo` 提权。
```shell
sudo n install <版本号>

#例如
sudo n install 20.12.0
```
> `卸载` 指定版本的 Node
```shell
sudo n rm <版本号>

# 例如
sudo n rm 20.12.0
```
> `切换` 到指定版本的 Node(***)
```shell
sudo n <回车>

选择目标版本即可
```
> 查看 nvm 版本
```shell
n --version
```