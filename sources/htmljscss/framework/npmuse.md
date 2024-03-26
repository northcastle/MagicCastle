---
title: npm包管理工具
---

# NPM 包管理工具的使用
```tex
npm是一个Node.js平台的包管理工具。
npm的全称是Node Package Manager，它允许用户安装、卸载、更新、查看、搜索和发布Node.js的第三方包。
npm通过一个数据库来管理这些包的信息，包括作者、版本、依赖关系和授权信息等。
它使得开发者能够更加专注于功能的开发，而无需处理版本和依赖管理等问题。
```

## 初始化项目
> 初始化项目后，会在目录中生成 `package.json`文件，记录了项目名称、版本号、开发者等相关信息。`该文件也可以手动创建与修改。`
```shell
# 引导的方式，用户自己填写相关信息，生成 package.json 文件
npm init
```
```shell
# 使用默认值的方式，直接生成 package.json 文件
npm init -y
```
## 安装依赖
> 依赖分为两种 ：`生产依赖` 和 `开发依赖` <br>
>`生产依赖` : 发布到生产环境中仍然用到的依赖<br>
>`开发依赖` ：只在开发时用到的，发不到生产环境中就用不到了的依赖<br>

### 安装生产依赖
> 生产依赖会放在 `package.json` 文件的 `dependencies` 中
```shell
npm install --save 依赖的名称
例如 ：
npm install --save jquery
```
> `install` 可以简写为 `i` <br>
> `--save` 可以简写为 `-S`<br>
> 因此，下面的写法也是一样的 ：
```shell
npm install -S jquery
or
npm i -S jquery
```
### 安装开发依赖
> 开发依赖会放在 `package.json` 文件的 `devDependencies` 中
```shell
npm install --save-dev 依赖的名称
例如 ：
npm install --save-dev jquery
```
> `install` 可以简写为 `i` <br>
> `--save-dev` 可以简写为 `-D`<br>
> 因此，下面的写法也是一样的 ：
```shell
npm install -D jquery
or
npm i -D jquery
```

### 安装指定版本的依赖
> 语法 ： `npm install --save/--save-dev 依赖名称@版本号`
* 生产依赖
```shell
npm install --save jquery@1.11.2
npm install -S jquery@1.11.2
npm i -S jquery@1.11.2
```
* 开发依赖
```shell
npm install --save-dev jquery@1.11.2
npm install -D jquery@1.11.2
npm i -D jquery@1.11.2
```

### 安装全部依赖
> 当新clone一个项目时，会用到这个 ： 根据 `package.json`文件中的依赖项，全部下载一遍。
```shell
npm install
or 
npm i
```
### 安装全局依赖
> 全局依赖，就是全局都可以使用的依赖，不局限于项目。
* 查看全局依赖的安装位置
```shell
npm root -g
```
* 安装全局依赖
```shell
npm install -g 依赖名称
例如 ：
npm install -g jquery
```
## 删除依赖
> 语法 ：`npm remove 依赖名称`
> 简写 ：`npm r 依赖名称`
### 删除项目的依赖
```shell
npm remove jquery
or
npm r jquery
```
### 删除全局的依赖
> 添加参数 `-g`
```shell
npm remove jquery -g
or
npm r jquery -g
```

## 配置淘宝镜像(*)
### 查看 npm 的配置
> 可以查看到 registry 对应的地址等相关配置信息。
```shell
npm confit list
```
### 使用命令配置淘宝镜像
* 配置为淘宝的镜像
```shell
npm config set registry https://registry.npmmirror.com/
```
* 恢复原来的镜像
```shell
npm config set registry https://registry.npmjs.org/
```
### 使用 nrm 工具配置（推荐）
> `nrm` : npm 的注册地址的管理工具
* 安装 nrm
```shell
npm install -g nrm
```
* 查看可用的配置
```shell
nrm ls
```
```tex
* npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```
* 修改镜像地址
```shell
nrm use taobao
```
* 查看配置
```shell
npm config list
```
```tex
; "user" config from /Users/northcastle/.npmrc

//registry.npmjs.org/:_authToken = (protected) 
home = "https://www.npmjs.org" 
registry = "https://registry.npmmirror.com/"  【主要看这一行！！！】// [!code focus]
sass_binary_site = "https://npm.taobao.org/mirrors/node-sass" 

; node bin location = /usr/local/bin/node
; node version = v20.10.0
; npm local prefix = /Users/northcastle/workspace-my/workspace-ts/study-nodejs
; npm version = 10.2.3
; cwd = /Users/northcastle/workspace-my/workspace-ts/study-nodejs
; HOME = /Users/northcastle
; Run `npm config ls -l` to show all defaults.
```

### 使用cnpm
> 当有些依赖使用`npm`下载有问题时，我们也可以使用`cnpm`来安装。<br>
> npm是node官方的包管理器。cnpm是个中国版的npm，是淘宝定制的 `cnpm` (gzip 压缩支持) 命令行工具代替默认的 `npm`。<br>
> 当我们下载某些依赖，存在奇怪的异常的时候，就可以使用一下`cnpm`来安装依赖。
```shell
# 安装cnpm
npm install -g cnpm

# 使用cnpm 
cnpm install xxx
```

## 清除缓存
> 以下命令可以清除 npm 的所有缓存。
```shell
npm cache clean --force
```