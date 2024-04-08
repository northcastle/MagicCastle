---
title: ES6模块化
---

# ES6模块化的导入导出操作
本文介绍一下 ES6 中的 模块化 `导入` `导出`操作。

## 核心语法
```js
导出 ： export xxx
导入 ： import {xxx} from 'xxx.js'
```

```html
<!-- html 文件中直接将js文件作为模块进行导入,type="module" -->
<script src="xxx.js" type="module"></script>
```

## 导出
> `导出` 动作主要有两种方式 ：`先定义后导出` 和 `定义时导出`。<br>
> 本小节从 变量、函数、类 三种数据类型进行展示导出的操作。

### 先定义后导出
```js
// 声明变量
let numa = 100;
// 声明函数
function sayHello(){
    console.log('Hello World')
}
// 声明类
class School{
    name;
    sayHello(){
        console.log('Hello in School');
    }
}

// 导出
export {numa,sayHello,School} 


```
### 定义时导出
```js
// 声明变量 并直接导出 
export let numa = 100;
```

```js
// 声明函数 并直接导出
export function sayHello(){
    console.log('Hello World')
}
```

```js
// 声明类 并直接导出
export class School{
    name;
    sayHello(){
        console.log('Hello in School');
    }
}
```


## 导入
导入有以下两种格式 ：
> 格式1 ： `import {xxx} from 'xxx';` <br>
```
用到哪个了导入哪个。
```

> 格式2 ： `import * as aaa from 'xxx';` <br>
```
 一次性全部导入进来;
 使用的时候，通过 aaa.属性名 的方式进行调用。
```

下面是使用案例 :
* 格式一
```js
// 导入
import {numa,sayHello,School} from '../xxx.js'

// 使用
console.log(numa)

sayHello()

let xiaoxue = new School()
xiaoxue.sayHello()

```

* 格式二
```js
// 导入
import * as aaa from '../xxx.js'

// 使用
console.log(aaa.numa)

aaa.sayHello()
```

## 默认导出与导入
::: warning 说明
在某些情况下，一个模块中包含某个功能，我们并不希望给这个功能命名，而且可以让导入者自己来进行命名。<br>

此时就可以使用 【export default】进行默认导出；<br>
并且，一个模块中只能由一个 【export default】 <br>

导入时，可以随便起名字。
:::

* 导出默认
```js
// 定义一个变量
const baseNumber = 10000
// 下面就是把这个baseNumber给导出默认
export default baseNumber
```

* 导入默认，自定义名称
```js
// 导入默认的操作，自定义名称
import bignumber from '../xxx.js';
console.log(bignumber);
```

以上就是 ES6 中模块化`导入` `导出`的基本操作。
