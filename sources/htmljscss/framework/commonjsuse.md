---
title: CommonJS 规范的模块化
---

# CommonJS 模块化的基本导入导出
> `CommonJS 中，一个文件就是一个模块。`<br>
> 模块的内部数据是私有的。<br>
> 模块可以暴露内部数据提供给其他模块使用。

## 暴露/导出 数据
> 暴露数据有两种方式 ：`module.exports` 和 `exports`

### 方式一 ：module.exports
> 语法1 ：`module.exports = 变量名` 【只适用于导出一个变量】<br> 
> 语法2 ：`module.exports = {key:value,key:value,xxx}` 【通用】<br>
> 语法2可以简写成 `module.exports = {value,value,xxx}` 【直接把变量放进来】

* 语法1案例
```js
// 声明一个变量
let abc = 100;

// 声明一个方法
const sayHello = () => {
    console.log('hello world 你好哈哈哈')
}

// 只能暴露一个，如果写多次，就会被覆盖 : 下面的两行只能留一行
 module.exports = abc
// module.exports = sayHello
```

* 语法2案例
```js
// 声明一个变量
let abc = 100;

// 声明一个方法
const sayHello = () => {
    console.log('hello world 你好哈哈哈')
}

// 通过对象的方式导出变量和方法
module.exports = {
    abc1:abc,
    sayHello1:sayHello
}

// 可以省略 key ，直接把要导出的内容写到对象里
// module.exports = {
//     abc,
//     sayHello
// }
```

### 方式二 ：exports
> 语法 ： `exports.key = value`<br>
> 如果要导出多个变量，就写多行。

```js
// 声明一个变量
let abc = 100;

// 声明一个方法
const sayHello = () => {
    console.log('hello world 你好哈哈哈')
}

// 导出变量和方法
exports.abc = abc
exports.sayHello = sayHello
```

## 导入数据
> CommonJS 中，一个文件是一个模块。因此导入的目标是文件。

> 语法 ： `const 接收的变量名 = require(文件的路径)`

### 使用案例
> 假如 有一个文件叫做 `a.js`，声明和导出的变量如 [方式二](#方式二-exports)，<br>
> 导出了 一个普通的变量 和 一个方法。

```js
// 导入模块
const aaa = require('./a.js')

// 使用模块中的方法
aaa.sayHello()

// 使用模块中的变量
console.log(aaa.abc)
```

### 注意事项（必看）
```tex
1、对于自己创建的模块，导入时路径建议写 `相对路径`，且不能省略 `./` 和`../`；
```

```tex
2、`js` 和 `json` 文件导入时，可以省略后缀，
c/c++ 编写的`node` 扩展文件也可以不写后缀，但是一般用不到；
```

```tex
3、如果导入其他类型的文件，会以`js`文件进行处理；
```

```tex
4、如果导入的路径是个【文件夹】，
则会首先检测该文件夹下的`package.json`文件中的`main`属性对应的文件，
如果 main 属性不存在 或者 package.json 文件不存在，
则会检测文件夹下的 `index.js` 和 `index.json`，
如果还是没有找到，就会报错；
```

```tex
5、导入 node.js 内置模块时，直接require 模块的名称即可，无需加 `./` 和 `../`。
例如 ： const fs = require('fs')
```
<br>

以上就是`CommonJS`中`导入`&`导出`的基本操作了。

