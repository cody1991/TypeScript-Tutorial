# Section 0. 前言

## TypeScript 教程

[原文地址](https://www.typescripttutorial.net/)

TypeScript 是带有类型系统的 JavaScript 语言，TypeScript 通过给 JavaScript 添加类型，可以在 JavaScript 代码运行前就捕获到不少的错误提示，从而提升开发效率。

TypeScript 是建立在 JavaScript 语言之上的开源编程语言。TypeScript 适用于任何浏览器，任何操作系统和任何环境，只要是 JavaScript 能够正常运行的地方。

在本 TypeScript 教程中，你将学习以下内容：

- 和原生 JavaScript 比较， TypeScript 有哪些优势；
- 知道 TypeScript 的真正含义，以及它背后的运行原理；
- 使用 TypeScript 丰富的语言特性，例如类型，类，接口，模块等等。

### 要求

为了更好的学习本教程，你需要具备以下条件：

- JavaScript 语言基础知识，如果你想学习 JavaScript 语言，前往查看 [现代 JavaScript 教程](https://zh.javascript.info/)；
- 具备 ECMAScript 2015 或者 ES6 的相关知识。

### 注意

教程中指向 JavaScript 相关知识的网站 [JavaScript Tutorial](https://www.javascripttutorial.net/) 发现无法打开，于是把它们调整指向 [现代 JavaScript 教程](https://zh.javascript.info/) 相似内容的地址。

另外推荐阮一峰的 [ES6 入门教程](https://es6.ruanyifeng.com/)。

### 译者留言

本教程的翻译并不都是直译的，有些翻译后感觉不太通顺的地方会进行微调。

由于水平有限，翻译不好的地方欢迎指出。

非常感谢您的阅读，您可以通过微信赞赏码，表示支持：

![微信赞赏码](https://cdn.jsdelivr.net/gh/cody1991/images@master/20210604/zsm.6t3ys61st900.jpeg)
# Section 1. 入门

## 简介

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/what-is-typescript/)

在本教程中，你将知道 TypeScript 是什么，以及 TypeScript 对比原生 JavaScript 具备哪些优势。

### TypeScript 介绍

TypeScript 是 JavaScript 的超集，它是建立在 JavaScript 之上的一门编程语言。

通过使用 TypeScript 编译器可以把你编写的 TypeScript 代码编译成原生 JavaScript 代码，一旦得到这些原生 JavaScript 代码，你可以把它们部署到任何 JavaScript 可以正常运行的环境中。

JavaScript 文件使用的扩展名是 `.js` ，而 TypeScript 文件使用的扩展名是 `.ts`。

![what-is-typescript-compiler](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/what-is-typescript-compiler.51en2uo6cgo0.png)

TypeScript 在 JavaScript 语法的基础上，增加了用来支持类型系统的新语法。如果你有一段没有任何语法错误的 JavaScript 程序，那它也是一段 TypeScript 程序，这意味着所有的 JavaScript 程序都是 TypeScript 程序。基于上述原因，把现有的基于 JavaScript 的代码库重构成基于 TypeScript 的代码库会是一件非常容易的事。

下图展示了 TypeScript 和 JavaScript 之间的关系：

![what-is-typescript-typescript-and-js](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/what-is-typescript-typescript-and-js.zaozekhm5bk.png)

### 为什么选择 TypeScript

TypeScript 主要的目标如下：

- 向 JavaScript 中注入可选类型；
- 实现了未来的 JavaScript 计划添加的特性（未来的 JavaScript 指的是 ECMAScript Next 或者 ES Next）。

#### 1) TypeScript 帮你避免一些 Bug，达到提升工作效率的目的

类型系统可以帮你避免很多的错误，达到提升工作效率的目的，原因在于使用类型系统的时候，你可以在编译阶段提前捕获到一些 Bug，而不是等到运行时才发现这些问题。

下面的函数将两个数字 x 和 y 进行相加：

```ts
function add(x, y) {
  return x + y;
}
```

如果你通过 HTML 的 Input 元素获取到 x 和 y 的值，把它们传递给上述函数，你可能会得到意料之外的结果：

```ts
let result = add(input1.value, input2.value);
console.log(result); // result of concatenating strings
```

假设用户输入了 `10` 和 `20`， `add()` 函数会返回 `1020`，而不是期望的 `30`。产生这种情况的原因是 `input1.value` 和 `input2.value` 的类型是字符串，而非数字。当你使用操作符 `+` 将两个字符串相加的时候，操作符 `+` 会把两个字符串连接成一个单独的字符串。

如下所示，当你使用 TypeScript 显式指定参数的类型的时候：

```ts
function add(x: number, y: number) {
  return x + y;
}
```

在这个函数中，我们给参数增加了数字类型，`add()` 函数只能接收数字类型的参数，无法接收其他任何类型的参数，当你调用它的时候：

```ts
let result = add(input1.value, input2.value);
```

当想通过 TypeScript 编译器把上面的代码编译成 JavaScript 的时候，TypeScript 编译器会抛出一个错误提示，需要你去进行修改。因此，你可以避免这个错误发生在运行阶段。

#### 2) TypeScript 把未来的 JavaScript 带到了今天

TypeScript 给如今的 JavaScript 引擎提供了 ES Next 即将推出的新特性的支持，这意味着你可以在 Web 浏览器（或者其他环境）完全支持这些新特性之前使用它们。

每一年，TC39 都会为 ECMAScript(JavaScript 标准) 发布几个新特性，功能提案一般经历下面五个阶段：

- 第 0 阶段：最初的想法；
- 第 1 阶段：提案；
- 第 2 阶段：草稿；
- 第 3 阶段：候选；
- 第 4 阶段：完成。

TypeScript 通常能支持还在第 3 阶段的特性。

> 关于功能提案可以参考下面这篇文章 [ECMAScript - Introducing All Stages of the TC39 Process](https://nitayneeman.com/posts/introducing-all-stages-of-the-tc39-process-in-ecmascript/)。


## 环境搭建

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/setup-typescript/)

在本教程中，你会学习 TypeScript 本地开发环境的搭建。

安装下面的工具来开始你的 TypeScript 语言编程之旅：

- Node.js – Node.js 是运行 TypeScript 编译器的环境，注意不一定要了解 Node.js；
- TypeScript 编译器 – 一个把 TypeScript 代码编译成 JavaScript 代码的 Node.js 模块。如果你是在 Node.js 环境中使用 JavaScript，你可以安装 `ts-node` 模块，它是 Node.js 下的 TypeScript 执行引擎与交互式解释器；
- Visual Studio Code – 它是一个支持 TypeScript 语言的代码编辑器，非常推荐使用它，当然你可以使用你自己喜欢的编辑器。

如果你是使用 Visual Studio Code 编辑器的话，可以安装下面的插件来提升你的开发效率：

- Live Server – 允许启动本地开发服务器进行开发，它带有热更新等特性。

### 安装 Node.js

按照下面的步骤来安装 Node.js

- 打开 [Node.js 下载页面](https://nodejs.org/en/download/)；
- 下载与你操作系统（例如 Windows, macOS 或者 Linux 系统）兼容的 Node.js 版本；
- 运行下载回来的 Node.js 包或者可执行文件，后续的安装过程非常简单；
- 在 macOS 或 Linux 中打开终端，或者在 Windows 上打开命令行工具，输入命令 `node -v` 验证安装是否成功，如果看到的版本号和你刚下载的一致，那么 Node.js 成功安装在你的电脑上了。

### 安装 TypeScript 编译器

安装 TypeScript 编译器，你需要在 macOS 或 Linux 上打开终端，或者在 Windows 上打开命令行工具，输入以下命令：

```sh
npm install -g typescript
```

安装完以后，你可以输入下面的命令查看当前 TypeScript 编译器的版本：

```sh
tsc --v
```

它会返回 TypeScript 编译器的版本号，如下所示：

```sh
Version 4.0.2
```

注意你可能看到比这里展示的更新的版本。

如果你在 Windows 系统上看到下面的错误提示：

```sh
'tsc' is not recognized as an internal or external command,
operable program or batch file.
```

你需要把下面这个路径 `C:\Users\<user>\AppData\Roaming\npm` 添加到 `PATH` 变量中，注意你需要把路径中的 `<user>` 换成你自己 Windows 系统上的用户名。

你可以在 macOS 或 Linux 的终端或者 Windows 的命令行工具中，运行下面的命令来全局安装 `ts-node` 模块：

```sh
npm install -g ts-node
```

### 安装 Visual Studio Code

你可以按照下面的步骤来安装 Visual Studio Code

- 打开 [Visual Studio Code 下载页面](https://code.visualstudio.com/download)；
- 选择最新的且和你操作系统（Windows, macOS, 或者 Linux）兼容的 Visual Studio Code 版本进行下载；
- 执行下载好的安装包或者安装程序文件来启动安装向导，安装过程非常简单；
- 启动 Visual Studio Code。

你会看到如下所示的 Visual Studio Code 代码编辑器：

![vs-code](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/vs-code.1glyyl4c1pxc.png)

按照下面的步骤来安装 Live Server 扩展插件：

![Live-Server](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/Live-Server.4m2ngu7cnii0.png)

- 点击扩展插件选项卡，将展示 Visual Studio Code 的扩展插件列表；
- 输入 Live Server 查找 Live Server 扩展插件；
- 点击 `Install` 进行安装。


## Hello World

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-hello-world/)

在本教程中，你会学习如何使用 TypeScript 开发一个 Hello World 程序。

### Node.js 环境下的 TypeScript Hello World 程序

第一，创建一个存放代码的文件夹，比如 `helloword` 文件夹。

第二，启动 Visual Studio Code ，打开上面创建的文件夹。

第三，创建一个名为 `app.ts` 的 TypeScript 文件，TypeScript 文件的扩展名是 `.ts`。

第四，在 `app.ts` 文件中输入以下代码：

```ts
let message: string = 'Hello, World!';
console.log(message);
```

第五，使用快捷键 `Ctrl+` 或者菜单 `Terminal > New Terminal`，在 Visual Studio Code 中启动命令行工具：

![TypeScript-Hello-World-Launch-Terminal](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Hello-World-Launch-Terminal.1lqe6wc1s140.png)

第六，在命令行工具中输入下面的命令来编译 `app.ts` 文件：

```sh
tsc app.ts
```

![TypeScript-Hello-World-compile-TS-file](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Hello-World-compile-TS-file.k21w3y1dri8.png)

如果一切正常，你会看到 TypeScript 编译器生成了一个名为 `app.js` 的新文件：

![TypeScript-Hello-World-Output-file](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Hello-World-Output-file.noimhwwiqa8.png)

你可以在命令行工具中输入下面的命令来运行 `app.js` 文件：

```sh
node app.js
```

如果你已经安装了在 [环境搭建](https://cody1991.github.io/TypeScript-Tutorial/1-getting-started/2-setup-typescript.html) 中提到的 `ts-node` 模块，你只需要一个命令便可以实现编译 TypeScript 文件后运行输出的文件的目的：

```sh
ts-node app.ts
```

### Web 浏览器下的 TypeScript Hello World 程序

跟着下面的步骤来创建一个显示 `Hello, World!` 信息的网页。

首先, 创建一个名为 `index.html` 的文件，文件中引入了 `app.js` ，如下所示：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TypeScript: Hello, World!</title>
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

第二，把 `app.js` 中的代码改成如下所示：

```ts
let message: string = 'Hello, World!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);
```

第三，编译 `app.ts` 文件：

```sh
tsc app.ts
```

第四，打开 Visual Studio Code 编辑器，鼠标右键 `index.html` 文件，选择 `Open with Live Server` 选项来打开 Live Server 服务：

![TypeScript-Hello-World-Live-Server](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Hello-World-Live-Server.4obe4i76xdo0.png)

Live Server 会打开 `index.html` 文件，显示下面的信息：

![TypeScript-Hello-World-Web-Browser](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Hello-World-Web-Browser.ptpo86xpvnk.png)

你可以编辑 `app.ts` 文件来做出一些改变，如下所示：

```ts
let message: string = 'Hello, TypeScript!';

let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);
```

然后编译 `app.ts` 文件：

```sh
tsc app.ts
```

TypeScript 编译器会生成新的 `app.js` 文件，Live Server 会通知 Web 浏览器重新加载新的 `app.js` 文件。

注意 `app.js` 文件是 `app.ts` 文件编译产生的文件，你不应该直接修改 `app.js` 里面的代码，否则在重新编译 `app.ts` 文件后，之前在 `app.js` 中修改的代码会被覆盖。


## 使用原因

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/why-typescript/)

在本教程中，你将学习如何使用 TypeScript 来避免一些由 JavaScript 中的动态类型引发的问题。

### 为什么使用 TypeScript

下面罗列了使用 TypeScript 的主要原因：

- TypeScript 增加类型系统来避免一些由 JavaScript 中的动态类型引发的问题；
- TypeScript 实现了很多 JavaScript 的未来特性，也就是 [ES Next](https://zh.javascript.info/) 中的新特性，使得我们现在就可以使用它们。

本教程将聚焦在第一个原因上。

### 理解 JavaScript 中的动态类型

JavaScript 是一门动态类型语言，与其他的比如 `Java` 或者 `C#` 这些静态语言不同，值具有类型而不是变量，比如：

```ts
'Hello';
```

对于这个值，你可以说它的类型是 `string`，又比如下面的值是一个数字：

```ts
2020;
```

看看下面的例子：

```ts
let box;
box = 'hello';
box = 100;
```

`box` 变量的类型随着赋值给它的值的类型改变而改变。

你可以使用 `typeof` 操作符来找出 `box` 变量的类型：

```ts
let box;
console.log(typeof box); // undefined

box = 'Hello';
console.log(typeof box); // string

box = 100;
console.log(typeof box); // number
```

在这个例子中，第一条语句定义了一个变量但是没有进行赋值，它的类型是 `undefined`。

接下来，我们将 `"Hello"` 赋值给 `box` 变量并打印出它的类型，这个时候 `box` 变量的类型变成了 `string` 类型。

最后，我们将 `100` 赋值给 `box` 变量，这个时候，`box` 变量的类型变成了 `number` 类型。

正如你所见的，每当给变量赋值的时候，它的类型可能会发生变化。你不需要显式地告诉 JavaScript 变量的类型是什么，JavaScript 会自动根据值来出推断它的类型是什么。

动态类型具有灵活性，但它也引发了一些问题。

#### 动态类型引发的问题

假设你有一个函数，它会根据 `id` 来返回一个 `product` 对象：

```ts
function getProduct(id) {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}
```

下面的例子调用 `getProduct()` 函数查找 `id` 为 `1` 的产品信息，并显示出来：

```ts
const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);
```

输出内容是：

```sh
The product undefined costs $99.5
```

这与我们期望的结果不一致，这段代码的问题是 `product` 对象没有 `Name` 属性，它只有首字母为小写 `n` 的 `name` 属性，然而你只有在运行这段脚本的时候才能发现这个问题。引用对象上不存在的属性是编写 JavaScript 代码工作中常见的问题。

下面的例子定义了一个新的函数，它会在命令行工具中输出产品的信息：

```ts
const showProduct = (name, price) => {
  console.log(`The product ${name} costs ${price}$.`);
};
```

下面例子调用了 `getProduct()` 和 `showProduct()` 函数：

```ts
const product = getProduct(1);
showProduct(product.price, product.name);
```

输出内容是：

```sh
The product 99.5 costs $Awesome Gadget 1
```

我们以错误的顺序传递参数给 `showProduct()` 函数，这是在编写 JavaScript 代码的时候常见的另外一个问题。

使用 TypeScript 来解决这些问题，是我们引入 TypeScript 的重要原因。

### Typescript 如何解决这些动态类型引发的问题

解决引用对象上不存在的属性的问题，你可以按照下面的步骤来进行：

第一，我们使用 [接口](https://cody1991.github.io/TypeScript-Tutorial/6-interfaces/1-interface.html) 定义 `product` 对象的 “形状”，注意你会在后面的教程中 [学习接口的相关知识](https://cody1991.github.io/TypeScript-Tutorial/6-interfaces/1-interface.html)

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}
```

第二，显式使用 `Product` 类型作为 `getProduct()` 函数的返回类型：

```ts
function getProduct(id): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}
```

当你引用了一个对象上不存在的属性的时候，代码编辑器会马上告知你这个信息，如下所示：

```ts
const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);
```

代码编辑器会在 `Name` 属性下高亮显式下面的错误提示：

![why-typescript-error](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/why-typescript-error.5wcnv14y4240.png)

当你把鼠标悬停在这个错误提示上的时候，可以看到解决这个错误的方法：

![why-typescript-hint](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/why-typescript-hint.60w42juytao0.png)

为了解决由于以错误的顺序传递参数引发的问题，你可以显式地给函数的参数指定类型：

```ts
const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs ${price}$.`);
};
```

当你传递错误类型的参数给 `showProduct()` 函数的时候，你会收到一个错误提示：

```ts
const product = getProduct(1);
showProduct(product.price, product.name);
```

![why-typescript-error-in-function-arguments](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/why-typescript-error-in-function-arguments.6rj9183357s0.png)

### 小结

- JavaScript 是一门动态类型语言，它具有灵活性，但是引发了不少问题；
- TypeScript 在 JavaScript 之上增加了可选类型系统解决这些问题。
# Section 2. 基本类型

## 类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-types/)

在本教程中，你将了解 TypeScript 中的类型和它的用途。

### TypeScript 中的类型是什么

在 TypeScript 中，类型可以方便地描述一个值拥有的属性和方法，值是任何可以赋值给变量的东西，比如数字，字符串，数组，对象或者函数。

看看下面的值：

```sh
'Hello'
```

当你看这个值的时候，你会说它是一个字符串，这个值拥有字符串所拥有的属性和方法。比如 `'Hello'` 值有一个名为 `length` 的属性，它返回字符串拥有的字符数量：

```ts
console.log('Hello'.length); // 5
```

它也有很多的方法，比如 `match()`， `indexOf()` 和 `toLocaleUpperCase()`，例如：

```ts
console.log('Hello'.toLocaleUpperCase()); // HELLO
```

观察 `'Hello'` 值的时候，通过罗列出它所有的属性和方法的方式来描述它是非常不便的，而通过类型来描述一个值将是一个更加简单有效的方式。

在这个例子中，指出 `'Hello'` 是一个字符串，从而也知道可以在 `'Hello'` 值上使用字符串所拥有的所有属性和方法。

总之，在 TypeScript 中：

- 类型是描述值所具有的属性和方法的标签；
- 每个值都有一种类型。

### TypeScript 中的类型

TypeScript 继承了 JavaScript 的内置类型，TypeScript 中的类型可分为：

- 原始类型
- 对象类型

#### 原始类型

下面列出了 TypeScript 中的原始类型：

| 名字                                | 描述                                          |
| ----------------------------------- | --------------------------------------------- |
| [字符串](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/3-string.html)  | 表示文本类型数据                              |
| [数字](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/2-number.html)    | 表示数值                                      |
| [布尔值](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/4-boolean.html) | 有 `true` 值和 `false` 值                     |
| null                                | 有一个值：null                                |
| undefined                           | 有一个值：undefined，它是未初始化变量的默认值 |
| symbol                              | 表示唯一常量值                                |

#### 对象类型

对象类型包括函数，数组和类等，稍后你将学习如何创建自定义对象类型。

### TypeScript 中类型的作用

TypeScript 中类型的主要作用如下：

- 首先，TypeScript 编译器使用类型来分析代码中错误；
- 其次，类型帮助你了解变量所关联的值是什么。

### TypeScript 中类型示例

下面的例子使用 [querySelector()](https://zh.javascript.info/searching-elements-dom#querySelector) 方法来选出 `<h1>` 元素：

```ts
const heading = document.querySelector('h1');
```

TypeScript 编译器知道 `heading` 的类型是 `HTMLHeadingElement`：

![TypeScript-types-example-1](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-types-example-1.4h001hujndw0.png)

下面列出了类型为 `HTMLHeadingElement` 的 `heading` 变量可以访问的属性和方法列表：

![TypeScript-types-properties-and-methods](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-types-properties-and-methods.2izwvt0qmfa0.png)

如果你试图访问值上不存在的属性和方法时，TypeScript 编译器会显示错误提示，如下所示：

![TypeScript-types-error](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-types-error.4c00bls39gw0.png)

### 小结

- TypeScript 中每个值都有一种类型；
- 类型是描述值所具有的属性和方法的标签；
- TypeScript 编译器使用类型分析你的代码，找出其中存在的 bug 或者错误。


## 类型注释

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/)

在本教程中，你将学习 TypeScript 中的类型注释。

### TypeScript 中的类型注释是什么

TypeScript 使用类型注释显式地为变量，函数和对象等标识符指定类型。TypeScript 中的类型注释语法是在标识符后面添加 `: type` 标识，其中 `type` 可以是任何有效的类型。一旦标识符被声明为某种类型，那它在使用的时候只能是那种类型，如果以其他类型来使用，TypeScript 编译器会抛出一个错误提示。

### 变量和常量中的类型注释

下面是给变量和常量指定类型注释的语法：

```ts
let variableName: type;
let variableName: type = value;
const constantName: type = value;
```

在这个语法中，类型注释跟在变量或者常量名之后，前面是一个冒号 (`:`)。

下面例子中的变量使用了 [数字](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/2-number.html) 类型注释：

```ts
let counter: number;
```

在这之后，你只能给 `counter` 变量赋值一个数字：

```ts
counter = 1;
```

如果你给变量 `counter` 赋值一个字符串，你会得到一个错误提示：

```ts
let counter: number;
counter = 'Hello'; // compile error
```

错误提示：

```sh
Type '"Hello"' is not assignable to type 'number'.
```

可以在一条语句中给变量添加类型注释的同时进行变量初始化操作，如下所示：

```ts
let counter: number = 1;
```

在这里例子中，我们给 `counter` 变量添加数字类型注释的时候把它初始化为 `1`。

下面是添加其他原始类型注释的例子：

```ts
let name: string = 'John';
let age: number = 25;
let active: boolean = true;
```

在这个例子中， 为 `name` 变量添加了 [字符串](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/3-string.html) 类型注释，为 `age` 变量添加了 [数字](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/2-number.html) 类型注释，为 `active` 变量添加了 [布尔值](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/4-boolean.html) 类型注释

### 类型注释例子

#### 数组

为 [数组类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/6-array-type.html) 的变量添加类型注释，需要使用一个特定的类型：它的后面跟着一个方括号 `: type[] ` 标识：

```ts
let arrayName: type[];
```

比如下面的例子声明了一个字符串数组：

```ts
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
```

#### 对象

为一个对象指定类型，使用对象类型注释，如下所示：

```ts
let person: {
  name: string;
  age: number;
};

person = {
  name: 'John',
  age: 25,
}; // 合法的
```

在这个例子中，`person` 对象只接受具有两个指定属性的对象：一个是类型为 `string` 名为 `name` 的属性，另外一个是类型为 `number` 名为 `age` 的属性。

### 函数参数和返回类型

下面展示了一个带有参数类型注释和返回类型注释的函数注释语法：

```ts
let greeting: (name: string) => string;
```

这个例子中你可以给 `greeting` 赋值一个函数，这个函数带有一个类型为字符串的参数，并且它的返回类型也是字符串：

```ts
greeting = function (name: string) {
  return `Hi ${name}`;
};
```

下面的例子由于分配给 `greeting` 变量的函数和它的 [函数](https://cody1991.github.io/TypeScript-Tutorial/4-functions/2-function-types.html) 类型注释不匹配，会抛出一个错误提示：

```ts
greeting = function () {
  console.log('Hello');
};
```

错误提示：

```sh
Type '() => void' is not assignable to type '(name: string) => string'. Type 'void' is not assignable to type 'string'.
```

### 小结

- 使用语法为 `: [type]` 的类型注释方式，显式地给一个变量，函数或者函数返回值指定类型。


## 类型推断

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-inference/)

在本教程中，你将学习 TypeScript 中的类型推断

类型推断描述的是当你没有为变量添加 [类型注释](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/1-type-annotations.html) 的时候，TypeScript 是如何推断变量的类型的。

### 类型推断基础

当你声明一个变量的时候，你可以使用 [类型注释](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/1-type-annotations.html) 为变量指定某种类型，如下所示：

```ts
let counter: number;
```

当你把 `counter` 变量初始化一个数字的时候，TypeScript 会推断 `counter` 的类型为 [数字类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/2-number.html)，如下所示：

```ts
let counter = 0;
```

它和下面的语句是等价的：

```ts
let counter: number = 0;
```

同样的，当你给函数参数赋值的时候，TypeScript 将参数的类型推断为默认值的类型，比如：

```ts
function setCounter(max = 100) {
  // ...
}
```

在这个例子中，TypeScript 推断 `max` 参数的类型为 `number` 类型。类似地，TypeScript 推断下面 `increment()` 函数的返回值类型为 `number` 类型：

```ts
function increment(counter: number) {
  return counter++;
}
```

它和下面例子是等价的：

```ts
function increment(counter: number): number {
  return counter++;
}
```

### 最佳通用类型算法

思考下面的语句：

```ts
let items = [1, 2, 3, null];
```

为了推断出 `items` 变量的类型，TypeScript 需要考虑数组中的每个元素的类型。TypeScript 使用最佳通用类型算法来分析每个候选类型，最终选择与所有候选类型都兼容的类型作为变量的类型。

在这个例子中，TypeScript 选择数字 [数组类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/6-array-type.html) (`number[]`) 作为最佳通用类型。如果你往 `items` 数组中添加一个字符串，TypeScript 会把 `items` 变量的类型推断为数字与字符串组合的数组类型，即 `(number | string)[]`。

```ts
let items = [0, 1, null, 'Hi'];
```

当 TypeScript 找不到最佳通用类型的时候，它会返回联合数组类型，如下所示：

```ts
let arr = [new Date(), new RegExp('d+')];
```

在这个例子中，TypeScript 推断 `arr` 变量的类型为 `(RegExp | Date)[]`。

### 上下文类型

TypeScript 可以使用位置上下文推断变量的类型，这种机制被称为上下文类型，如下所示：

```ts
document.addEventListener('click', function (event) {
  console.log(event.button); //
});
```

在这个例子中，由于 `event` 参数在 `click` 事件中，TypeScript 知道它是 `MouseEvent` 的一个实例。

然而，当你把 `click` 事件修改成 `scroll` 事件，TypeScript 会抛出一个错误提示：

```ts
document.addEventListener('scroll', function (event) {
  console.log(event.button); // compiler error
});
```

错误提示：

```sh
Property 'button' does not exist on type 'Event'.(2339)
```

TypeScript 知道在这种情况下 `event` 不再是 `MouseEvent` 的实例，而是 `UIEvent` 的实例。而由于 `UIEvent` 没有 `button` 属性，访问 `MouseEvent` 实例的 `button` 属性的时候 TypeScript 会抛出了一个错误提示。

很多情况中可以找到上下文类型的踪影，比如函数调用的参数，类型断言，对象和数组的成员，返回语句和右侧赋值。

### 类型推断 vs 类型注释

下面展示了类型推断和类型注释的区别：

| 类型推断                    | 类型注释                       |
| :-------------------------- | :----------------------------- |
| TypeScript 会猜测变量的类型 | 明确告诉 TypeScript 变量的类型 |

所以，应该在什么时候使用类型推断，什么时候使用类型注释？实际上，你应该尽可能的使用类型推断，只有在下面的几种情况中才去使用类型注释：

- 当声明一个变量但在后面才为它赋值的时候；
- 当你希望一个变量的类型不能被推断的时候；
- 当一个函数的返回类型是 [any](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/9-any-type.html) 类型，而你需要明确知道它的类型的时候。

### 小结

- 类型推断发生在初始化变量的值，设置参数默认值和需要确定函数返回值类型的时候；
- TypeScript 使用最佳通用类型算法来选择与所有变量类型兼容的最佳候选类型；
- TypeScript 还根据变量的位置，使用上下文类型来推断变量的类型。


## 数字类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-number/)

在本教程中，你将学习 TypeScript 中的数字数据类型。

TypeScript 中的所有数字，要么是浮点数，那么是大整数，浮点数的类型是 `number` 而大数字的类型是 `bigint`。

### 数字类型

下面的例子展示如果声明一个保存浮点数的变量：

```ts
let price: number;
```

或者你可以将 `price` 变量初始化为一个数字：

```ts
let price = 9.95;
```

和 JavaScript 一样，TypeScript 支持十进制，十六进制，二进制和八进制的数字字面量。

#### 十进制数字

下面展示了一些十进制数字：

```ts
let counter: number = 0;
let x: number = 100,
  y: number = 200;
```

#### 二进制数字

二进制数字的形式为：一个前导 `0`，后面跟着一个小写或大写的字母 `B` 的形式，比如 `0b` 或 `0B`：

```ts
let bin = 0b100;
let anotherBin: number = 0b010;
```

注意在 `0b` 或 `0B` 后面必须是数字 `0` 或数字 `1`。

#### 八进制数字

八进制数字的形式为：一个前导 `0`，后面跟着字母 `o`(自 ES2015 以来)，即 `0o` 的形式。在 `0o` 后面的数字的范围在数字 `0` 和数字 `7` 之间。

```ts
let octal: number = 0o10;
```

#### 十六进制数字

十六进制数字的形式为：一个前导 `0`，后面跟着一个小写或大写字母 `X` （`0x` 或 `0X`）的形式。在 `0x` 后面的数字的范围必须在 (`0123456789ABCDEF`) 之间，如下所示：

```ts
let hexadecimal: number = 0xa;
```

JavaScript 有一个 `Number` 类型（注意是大写字母 `N`），该类型表示的是非原始，封装的对象类型，在 TypeScript 中尽可能不使用 `Number` 类型。

### 大整数

大整数表示大于 `2^53 – 1` 的所有整数，一个大整数的末尾带有一个 `n` 字符，如下所示：

```ts
let big: bigint = 9007199254740991n;
```

### 小结

- TypeScript 中的所有数字，要么是 `number` 类型的浮点数，那么是 `bigint` 类型的大整数；
- 尽可能避免使用 `Number` 类型。


## 字符串类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-string/)

在本教程中，你将学习 TypeScript 字符串数据类型。

和 JavaScript 一样，在 TypeScript 中使用双引号 (`"`) 或者单引号 (`'`) 包裹字符串：

```ts
let firstName: string = 'John';
let title: string = 'Web Developer';
```

TypeScript 也支持使用反引号 (`) 包裹字符的模板字符串语法，模板字符串允许你创建多行字符串，也提供了字符串插值特性。

下面例子展示如何使用反引号 (`) 来创建多行字符串：

```ts
let description = `This TypeScript string can
span multiple
lines
`;
```

字符串插值特性允许你将变量嵌入到字符串中，如下所示：

```ts
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}.
I'm a ${title}`;

console.log(profile);
```

输出：

```sh
I'm John.
I'm a Web Developer.
```

### 小结

- 在 TypeScript 中，所有的字符串都是 `string` 类型；
- 和 JavaScript 一样，TypeScript 中使用双引号 (`"`)，单引号 (`'`) 或者反引号 (`) 包裹字符串。


## 布尔值类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-boolean/)

在本教程中，你将学习 TypeScript 中的布尔值数据类型。

TypeScript 中的 `boolean` 类型有两个值：`true` 和 `false`，它是 TypeScript 的原始类型之一，如下所示：

```ts
let pending: boolean;
pending = true;
// after a while
// ..
pending = false;
```

JavaScript 有表示非原始，封装的对象类型 `Boolean` 类型，`Boolean` 类型首字母为大写字符 `B`，和 `boolean` 类型是不一样的，我们尽可能不使用 `Boolean` 类型。


## 对象类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-object-type/)

在本教程中，你将学习 TypeScript 中的对象数据类型，以及如何更加准地编写对象类型声明。

### TypeScript 中的对象类型介绍

TypeScript 中的 `object` 类型代表所有不是原始类型的值，TypeScript 中原始类型有以下这些：

- `number`
- `bigint`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`

下面的例子展示了如何声明一个保存对象的变量：

```ts
let employee: object;

employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};

console.log(employee);
```

输出：

```sh
{
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
}
```

如果你给 `employee` 对象赋值一个原始类型的值，将得到一个错误提示：

```ts
employee = 'Jane';
```

错误提示：

```sh
error TS2322: Type '"Jane"' is not assignable to type 'object'.
```

`employee` 对象是一个具有固定属性列表的 `object` 类型，如果你尝试去访问 `employee` 对象中不存在的属性，将得到一个错误提示：

```ts
console.log(employee.hireDate);
```

错误提示：

```sh
error TS2339: Property 'hireDate' does not exist on type 'object'.
```

> 注意：上面的语句在 JavaScript 中能正常地运行，它会返回 `undefined` 。

要显式地指定 `employee` 对象的属性，首先使用下面的语法定义 `employee` 对象：

```ts
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};
```

然后你给 `employee` 对象赋值一个具有上面所有属性的对象：

```ts
employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};
```

也可以把两种语法组合在一个语句中，如下所示：

```ts
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};
```

### object vs Object

TypeScript 有另外一种类型，叫做 `Object` 类型，它的字符 `O` 是大写的，理解它们之间的区别是非常有必要的。`object` 类型代表所有的非原始类型的值，而 `Object` 类型描述的是所有对象具有的功能。例如，`Object` 类型具有可以被任何对象访问的 `toString()` 和 `valueOf()` 方法。

### 空类型 {}

TypeScript 有另外一个类型叫空类型，使用 `{}` 表示，它和 `object` 类型非常相似。空类型 `{}` 描述一个本身没有任何属性的对象，如果你尝试去访问这种类型的对象的某个属性，TypeScript 会发出一个编译时错误的提示：

```ts
let vacant: {};
vacant.firstName = 'John';
```

错误提示：

```sh
error TS2339: Property 'firstName' does not exist on type '{}'.
```

但可以通过 [原型链](https://zh.javascript.info/prototype-inheritance) 访问所有在 `Object` 类型上定义的属性和方法：

```ts
let vacant: {} = {};

console.log(vacant.toString());
```

输出：

```sh
[object Object]
```

### 小结

- TypeScript 中的 `object` 类型代表所有的非原始类型的值；
- `Object` 类型描述所有对象具有的功能；
- 空类型 `{}` 描述一个自身没有任何属性的对象。


## 数组类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-array-type/)

在本教程中，你将学习 TypeScript 中的数组类型，以及它的一些基本操作。

### TypeScript 中的数组类型介绍

TypeScript 中的 `array` 是一个有序的数据列表，可以使用下面的语法来声明一个存储指定类型的值的数组：

```ts
let arrayName: type[];
```

如下所示，声明了一个 [字符串](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/3-string.html) 数组：

```ts
let skills: string[];
```

你可以通过下面的方式往数组中添加一个或多个字符串：

```ts
skills[0] = 'Problem Solving';
skills[1] = 'Programming';
```

也可以使用 `push()` 方法往数组中添加元素：

```ts
skills.push('Software Design');
```

下面的例子中，声明并把一个字符串数组赋值给了 `skills` 变量：

```ts
let skills = ['Problem Sovling', 'Software Design', 'Programming'];
```

在这个例子中，TypeScript [推断](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/15-type-inference.html) `skills` 数组是一个字符串数组，它相当于：

```ts
let skills: string[];
skills = ['Problem Sovling', 'Software Design', 'Programming'];
```

当给数组指定了类型，TypeScript 会阻止你向数组中添加不兼容的值，下面的例子会抛出一个错误提示：

```ts
skills.push(100);
```

因为我们尝试往字符串数组中添加一个数值。

错误提示：

```sh
Argument of type 'number' is not assignable to parameter of type 'string'.
```

当从一个数组中提取元素的时候，TypeScript 会执行 [类型推断](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/15-type-inference.html) 的操作，如下所示：

```ts
let skill = skills[0];
console.log(typeof skill);
```

输出：

```sh
string
```

这个例子中，提取了 `skills` 数组中的第一个元素，把它赋值给了 `skill` 变量，由于字符串数组中的元素都是字符串，TypeScript 把 `skill` 变量的类型推断为字符串类型。

### TypeScript 中的数组的属性和方法

TypeScript 中的数组和 JavaScript 一样，可以访问 JavaScript 数组中的所有属性和方法，比如下面使用 `length` 属性来获取数组中元素的数量：

```ts
let series = [1, 2, 3];
console.log(series.length); // 3
```

也可以使用 JavaScript 中的数组的所有方法，比如 `forEach()`, `map()`, `reduce()` 和 `filter()`，如下所示：

```ts
let series = [1, 2, 3];
let doubleIt = series.map((e) => e * 2);
console.log(doubleIt);
```

输出：

```sh
[ 2, 4, 6 ]
```

### 存储混合类型的值

下面演示了如何声明一个同时存储字符串和数字的数组：

```ts
let scores = ['Programming', 5, 'Software Design', 4];
```

在这个例子中，TypeScript 把 `scores` 数组推断为 `(string | number)[]` 类型，它和下面的例子是等价的：

```ts
let scores: (string | number)[];
scores = ['Programming', 5, 'Software Design', 4];
```

### 小结

- 在 TypeScript 中，数组是一个有序的数据列表，数组可以存储混合类型的值；
- 声明指定类型的数组，你可以使用 `let arr: type[]` 这个语法。


## 元组类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-tuple/)

在本教程中，你将学习 TypeScript 中的元组类型，以及它的使用方法。

### TypeScript 中的元组类型介绍

元组的工作机制和 [数组类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/6-array-type.html) 类似，但有一些额外的条件限制：

- 元组中元素的数量是固定的；
- 元素中元素的类型是已知的，并且它们不需要都相同。

例如，可以用元组来表示一个由 `string` 和 `number` 类型组成的值：

```ts
let skill: [string, number];
skill = ['Programming', 5];
```

元组中的值的顺序非常重要，如果把 `skill` 元组中值的顺序调整成 `[5, "Programming"]`，将会得到一个错误提示：

```ts
let skill: [string, number];
skill = [5, 'Programming'];
```

错误提示：

```sh
error TS2322: Type 'string' is not assignable to type 'number'.
```

综上所述，对于有特定顺序且相互关联的数据，使用元组来存储它们是一个很好的实践方法。例如，可以使用一个元组来定义一个 `RGB` 颜色值，它总是以三个数字的形式出现：

```sh
(r,g,b)
```

如下所示：

```ts
let color: [number, number, number] = [255, 0, 0];
```

`color[0]`, `color[1]` 和 `color[2]` 分别映射到 `Red`, `Green` 和 `Blue` 颜色值上。

### 可选元组元素

从 TypeScript 3.0 开始，元组可以通过使用问号 `(?)` 后缀来指定可选元素。例如，可以使用可选的 `alpha` 通道值来定义一个 `RGBA` 元组：

```ts
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
```

> 注意：`RGBA` 使用 `red`, `green`, `blue` 和 `alpha` 模型定义颜色，`alpha` 指定颜色的透明度。

### 小结

- 元组是一个具有固定数量和已知元素类型的数组。


## 枚举类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-enum/)

在本教程中，你将学习 TypeScript 中的枚举类型，以及如何更高效地使用它。

### 什么是枚举

枚举是一些命名常量值的组合，`Enum` 代表枚举类型，按照下面的步骤来定义枚举：

- 首先，把变量名写在 `enum` 关键字之后；
- 然后，定义枚举中的常量值。

下面展示定义枚举的语法：

```ts
enum name {constant1, constant2, ...};
```

在这个语法中，`constant1` 和 `constant2` 等等被称为枚举的成员。

### TypeScript 中的枚举类型例子

下面的例子创建一个表示一年中所有月份的枚举：

```ts
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
```

在这个例子中，枚举名为 `Month` ，它的常量值有 `Jan`, `Feb` 和 `Mar` 等等。

下面声明一个函数，它使用 `Month` 枚举类型作为参数 `month` 的类型：

```ts
function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}
```

可以这样调用这个函数：

```ts
console.log(isItSummer(Month.Jun)); // true
```

这个例子使用枚举中的常量值，比如 `Jan`, `Feb` 和 `Mar` 等等，而不是 `1`, `2` 和 `3` 等等这些值，使得代码更加清晰易懂。

### TypeScript 中的枚举是如何工作的

在代码中使用枚举常量值是一个很好的实践方法。不过下面的例子把一个数字而不是枚举值传递给 `isItSummer()` 函数，它也能正常工作：

```ts
console.log(isItSummer(6)); // true
```

这个例子使用了一个数字 (`6`) 代替了 `Month` 中的枚举常量值，它也能正常工作。

检查下 `Month` 枚举生成的 Javascript 代码：

```ts
var Month;
(function (Month) {
  Month[(Month['Jan'] = 0)] = 'Jan';
  Month[(Month['Feb'] = 1)] = 'Feb';
  Month[(Month['Mar'] = 2)] = 'Mar';
  Month[(Month['Apr'] = 3)] = 'Apr';
  Month[(Month['May'] = 4)] = 'May';
  Month[(Month['Jun'] = 5)] = 'Jun';
  Month[(Month['Jul'] = 6)] = 'Jul';
  Month[(Month['Aug'] = 7)] = 'Aug';
  Month[(Month['Sep'] = 8)] = 'Sep';
  Month[(Month['Oct'] = 9)] = 'Oct';
  Month[(Month['Nov'] = 10)] = 'Nov';
  Month[(Month['Dec'] = 11)] = 'Dec';
})(Month || (Month = {}));
```

可以在控制台打印 `Month` 变量：

```ts
{
  '0': 'Jan',
  '1': 'Feb',
  '2': 'Mar',
  '3': 'Apr',
  '4': 'May',
  '5': 'Jun',
  '6': 'Jul',
  '7': 'Aug',
  '8': 'Sep',
  '9': 'Oct',
  '10': 'Nov',
  '11': 'Dec',
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
}
```

从输出中可以清楚地看到，TypeScript 枚举本质上是 JavaScript 中的对象，该对象在枚举中声明了命名属性，比如 `Jan` 是 `0`，而 `Feb` 是 `1`，也有数字键和表示命名常量的字符串值。这就是为什么你可以向接受枚举的函数传递一个数字的原因，换句话说，枚举成员既是数字也是已定义的常量值。

### 指定枚举成员的数值

TypeScript 根据枚举定义中成员的出现顺序来定义枚举成员的数值，比如 `Jan` 是 `0` 而 `Feb` 是 `1` 等等。

可以显式地为枚举成员指定数值，如下所示：

```ts
enum Month {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
```

在这个例子中，`Jan` 常量的值为 `1` 而不是 `0`，`Feb` 的值为 `2`，`Mar` 的值为 `3` 等等。

### 什么时候使用枚举

在下面情况中可以使用枚举：

- 有一组紧密相关且数量不多的固定值集合；
- 这些值在编译时已知。

例如，你可以使用枚举来表示审批状态：

```ts
enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected,
}
```

然后，你可以像下面这样来使用 `ApprovalStatus` 枚举：

```ts
const request = {
  id: 1,
  status: ApprovalStatus.approved,
  description: 'Please approve this request',
};

if (request.status === ApprovalStatus.approved) {
  // 发送邮件
  console.log('Send email to the Applicant...');
}
```

### 小结

- TypeScript 中的枚举是一组常量值的集合；
- 本质上，枚举是一个在枚举定义中声明了命名属性的 JavaScript 对象；
- 如果你有一组紧密相关且数量不多的固定值集合，并且这些值在编译时已知，那么一定要使用枚举


## any 类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-any-type/)

在本教程中，你将学习 TypeScript 中的 any 类型，以及如何在代码中正确地使用它。

### TypeScript 中地 any 类型介绍

有时候你需要在变量中存储一个值，但在你编写代码的时候你并不知道它的类型，这种未知的值可能来自第三方的 `API` 或者用户的输入。在这种情况下，如果你希望不进行类型检查，允许它在编译时通过检查，你可以使用 `any` 类型， `any` 类型允许你给变量赋任何类型的值：

```ts
// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);
```

输出：

```sh
{ latitude: 10.11, longitude: 12.12 }
```

在这个例子中，`JSON.parse()` 函数返回的对象赋值给了 `currentLocation` 变量。当你访问 `currentLocation` 变量的属性的时候，TypeScript 不会做任何的类型检查：

```ts
console.log(currentLocation.x);
```

输出：

```ts
undefined;
```

上面的例子中，TypeScript 编译器不会抛出任何的错误提示。

TypeScript 的 `any` 类型提供了一个可以与当前基于 JavaScript 的代码库一起正常工作的方案，它允许你在编译期间是否使用类型检测。因此，你可以借助 `any` 类型把基于 JavaScript 的项目平滑地过渡成为基于 TypeScript 的项目。

### TypeScript 隐式具有 any 类型

如果你在声明一个变量的时候没有指定类型，TypeScript 会假定变量使用的是 `any` 类型。这个特性被叫做 [类型推断](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/15-type-inference.html)。TypeScript 基本上都会进行变量类型的推断，比如：

```ts
let result;
```

在这个例子中，TypeScript 会进行变量的类型推断，这种特性被称为隐式类型。

> 注意：要禁用 `any` 类型的隐式类型特性，你需要把 `tsconfig.json` 文件中的 `noImplicitAny` 选项的值调整为 `true`，你在后面的教程中会学习更多关于 `tsconfig.json` 配置文件的知识。

### TypeScript 中的 any 类型 vs 对象类型

```ts
let result: any;
result = 10.123;
console.log(result.toFixed());
result.willExist(); //
```

在这个例子中，`result` 变量的类型为 `any`类型，那么即使 `willExist()` 方法在编译时不存在，调用这个方法的时候 TypeScript 编译器也不会发出抛出任何的错误提示，因为 `willExist()` 函数可能在运行时是可用的。然而，如果把 `result` 变量的类型修改为 `object` 类型，TypeScript 编译器会抛出错误提示：

```ts
let result: object;
result = 10.123;
result.toFixed();
```

错误提示：

```sh
error TS2339: Property 'toFixed' does not exist on type 'object'.
```

### 小结

- TypeScript `any` 类型允许你存储任意类型的值，它告诉编译器不进行类型检查；
- 使用 `any` 类型来存储在编译时或者 JavaScript 项目迁移成 TypeScript 项目时不知道类型的值。


## void 类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-void-type/)

在本教程中，你将学习 TypeScript 中的 void 类型，以及如何使用它来表示不返回任何值的函数的返回类型。

### TypeScript 中的 void 类型介绍

`void` 类型表示值没有任何类型，它有点像是 [any 类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/9-any-type.html) 的反面。实际上你可以使用 `void` 类型表示不返回任何值的函数的返回类型，如下所示：

```ts
function log(message): void {
  console.log(messsage);
}
```

给一个不返回任何值的函数或者方法加上返回类型是 `void` 类型，是一个很好的实践方法，你可以获取到以下好处：

- 提高代码的清晰度：你不用完整的读完整个函数体来判断它是否返回了什么；
- 确保类型安全：你永远不会把一个返回类型为 `void` 类型的函数赋值给一个变量。

注意你如果使用一个类型为 `void` 的变量，你只能把它赋值为 `undefined`，这种情况下 `void` 类型的值是没有任何用处的，如下所示：

```ts
let useless: void = undefined;
useless = 1; // error
```

如果没有指定 `--strictNullChecks` 标志，你可以把 `null` 赋值给 `useless` 变量。

```ts
useless = null; // OK if --strictNullChecks is not specified
```


## never 类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-never-type/)

在本教程中，你将学习 TypeScript 中的 never 类型，它不包含值。

`never` 类型是不包含值的类型，由于这个原因，你不能给 `never` 类型的变量赋任何的值。通常，你可以使用 `never` 类型来表示总是抛出错误的函数的返回类型，如下所示：

```ts
function raiseError(message: string): never {
  throw new Error(message);
}
```

下面的函数的返回值被推断为 `never` 类型：

```ts
function reject() {
  return raiseError('Rejected');
}
```

包含死循环的函数它的返回类型也是 `never` 类型，如下所示：

```ts
let loop = function forever() {
  while (true) {
    console.log('Hello');
  }
};
```

在这个例子中，`forever()` 函数的返回类型是 `never` 类型。

如果看到一个函数的返回类型是 `never` 类型，那么要确定下这是不是你想要的结果。

当你使用 [类型保护](https://cody1991.github.io/TypeScript-Tutorial/7-advanced-types/2-type-guards.html) 来收缩变量的类型，导致有些条件判断再也不能为真的时候，也可以得到 `never` 类型。如下所示，不使用 `never` 类型的话，下面的函数会抛出错误，因为不是所有代码中的路径都有返回值：

```ts
function fn(a: string | number): boolean {
  if (typeof a === 'string') {
    return true;
  } else if (typeof a === 'number') {
    return false;
  }
}
```

为了使代码变得有效，你可以返回一个返回类型为 `never` 类型的函数：

```ts
function fn(a: string | number): boolean {
  if (typeof a === 'string') {
    return true;
  } else if (typeof a === 'number') {
    return false;
  }
  // make the function valid
  return neverOccur();
}

let neverOccur = () => {
  throw new Error('Never!');
};
```

#### 小结

- `never` 类型不包含值；
- `never` 类型表示总是抛出错误的或包含死循环的函数的返回类型。


## 联合类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-union-type/)

在本教程中，你将学习 TypeScript 中的联合类型，它允许你在变量中存储一个或多个不同类型的值。

### TypeScript 中的联合类型介绍

有时候你会遇到这样一个函数，它希望接受数字或字符串的值作为参数，如下所示：

```ts
function add(a: any, b: any) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
  throw new Error('Parameters must be numbers or strings');
}
```

在这个例子中，如果两个参数都是数字，`add` 函数会计算它们的和，而如果两个参数都是字符串，`add` 函数会把它们拼接成一个字符串，如果参数既不都是数字也都不是字符串，`add()` 函数会抛出一个错误提示。

`add()` 函数的问题是它的参数类型是 [any 类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/9-any-type.html)，这意味着可以使用既不都是数字也不都是字符串的参数来调用它，TypeScript 能接受这种情况。代码可以编译成功，但是在运行的时候会抛出错误：

```ts
add(true, false);
```

为了解决这个问题，你可以使用 TypeScript 中的联合类型，联合类型允许把多个类型组合成一个类型来使用。`result` 变量的类型是 `number` 类型或者 `string` 类型，如下所示：

```ts
let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
result = false; // a boolean value, not OK
```

联合类型描述的值可以是几种类型中的一种，但不仅仅只能是两种。比如 `number | string | boolean` 也是一个值的类型，它可以是数字，字符串或者布尔值。回到 `add()` 函数的例子，你可以把它的参数的类型从 `any` 类型修改为联合类型：

```ts
function add(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
  throw new Error('Parameters must be numbers or strings');
}
```

### 小结

- TypeScript 中的联合类型允许你在变量中存储一个或多个不同类型的值。


## 类型别名

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-aliases/)

在本教程中，你将学习如果使用类型别名为类型起新的名字。

### TypeScript 中的类型别名介绍

类型别名允许你为现有的类型指定新的名字，类型别名的语法如下所示：

```ts
type alias = existingType;
```

现有的类型可以是任何 TypeScript 中有效的类型。下面的例子使用类型别名，为 `string` 类型指定了新的名字 `chars`：

```ts
type chars = string;
let messsage: chars; // same as string type
```

给 [联合类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/13-type-aliases.html) 创建类型别名是非常有用的，如下所示：

```ts
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
input = false; // Compiler error
```


## 字符串字面量类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-string-literal-types/)

在本教程中，你将学习 TypeScript 中的字符串字面量类型，它指定了类型可接受的字符串字面量。

字符串字面量类型允许你定义一种类型，它只接受一个指定的字符串字面量。下面的例子定义了一个字符串字面量类型，它只接受 `'click'` 字符串字面量：

```ts
let click: 'click';
```

`click` 变量是一个只接受 `'click'` 字符串的字符串字面量类型，如果你把字符串 `click` 赋值给 `click` 变量，它是合法的：

```ts
click = 'click'; // valid
```

但如果把另外一个字符串赋值给 `click` 变量，TypeScript 编译器会抛出一个错误提示，如下所示：

```ts
click = 'dblclick'; // compiler error
```

错误提示：

```sh
Type '"dblclick"' is not assignable to type '"click"'.
```

使用字符串字面量类型来限制变量中可能出现的字符串字面量是非常有用的。

字符串字面量类型可以与 [联合类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/12-union-type.html) 结合起来使用，为变量定义一组有限的、可选的字符串字面量集合：

```ts
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error
```

在多个位置使用同一个字符串字面量类型显得非常冗余，你可以使用 [类型别名](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/13-type-aliases.html) 来避免这种情况的发生，如下所示：

```ts
type MouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: MouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error

let anotherEvent: MouseEvent;
```

### 小结

- TypeScript 中的字符串字面量类型指定了类型可接受的字符串字面量；
- 字符串字面量类型与联合类型和类型别名结合起来使用，可以指定接受一组有限的、可选的字符串字面量集合。
# Section 3. 控制流语句

## if else

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-if-else/)

在本教程中，你将学习 TypeScript 中的 if else 语句。

### TypeScript 中的 if 语句

`if` 语句根据条件的真假来决定是否执行语句，如果条件为真，那么 `if` 语句会执行语句体中的语句：

```ts
if (condition) {
  // if-statement
}
```

下面的例子演示了如果 `counter` 变量的值小于 `max` 变量的值，如何使用 `if` 语句来增加 `counter` 变量的值：

```ts
const max = 100;
let counter = 0;

if (counter < max) {
  counter++;
}

console.log(counter); // 1
```

输出：

```sh
1
```

在这个例子中，因为 `counter` 变量初始值为 `0`，它比 `max` 常量的值小，所以表达式 `counter < max` 的值为 `true`，因此 `if` 语句会执行 `counter++`。让我们把 `counter` 变量的值初始化为 `100`：

```ts
const max = 100;
let counter = 100;

if (counter < max) {
  counter++;
}

console.log(counter); // 100
```

输出：

```sh
100
```

在这个例子中，表达式 `counter < max` 计算结果为 `false`，所以 `if` 语句不会执行 `counter++` ，因此输出结果为 `100`。

### TypeScript 中的 if else 语句

如果想在条件语句计算结果为 `false` 的时候执行另外一些语句，可以使用 `if else` 语句：

```ts
if (condition) {
  // if-statements
} else {
  // else statements;
}
```

下面演示了一个使用 `if else` 语句的例子：

```ts
const max = 100;
let counter = 100;

if (counter < max) {
  counter++;
} else {
  counter = 1;
}

console.log(counter);
```

输出：

```sh
1
```

在这个例子中，`counter < max` 表达式计算结果为 `false` ，所以 `else` 分支中的语句会执行，即把 `counter` 变量的值设置为 `1`。

#### 三元运算符 ?:

在实践中，如果只是一个简单的条件判断，你可以使用三元运算符 `?:` 代替 `if else` 语句，让代码看起来更加简短易懂，如下所示：

```ts
const max = 100;
let counter = 100;

counter < max ? counter++ : (counter = 1);

console.log(counter);
```

### if else if else 语句

想要执行多条件分支的语句，可以使用 `if` `else if` `else` 语句。`if` `else if` `else` 语句可以有一个或者多个的 `else if` 分支，但只会有一个 `else` 分支，如下所示：

```ts
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount
} else {
  discount = 15; // 15%
}

console.log(`You got ${discount}% discount. `);
```

输出：

```sh
0
```

这个例子根据 `items` 变量的值，使用 `if` `else if` `else` 语句来确定折扣：

- 如果 `items` 变量的值小于或者等于 `5` 的时候，那么折扣是 `5%`，`if` 分支的语句执行；
- 如果 `items` 变量的值小于等于 `10` 的时候，那么折扣是 `10%`，`else if` 分支的语句执行；
- 当 `items` 变量的值大于 `10` 的时候，那么折扣是 `15%`，`else` 分支的语句执行。

在本例中，假设了 `items` 变量的值总是大于 `0`，如果 `items` 变量的值小于 `0` 或者大于 `10` 的时候，折扣都是 `10%`。出于使代码更具有健壮性，可以在 `else` 分支前新增一个 `else if` 分支，如下所示：

```ts
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount
} else if (discount > 10) {
  discount = 15; // 15%
} else {
  throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `);
```

在本例中，只有当 `items` 变量的值大于 `10` 的时候，折扣是 `10%`，第二个 `else if` 分支的语句执行。如果 `items` 变量的值小于 `0`，`else` 分支执行。

### 小结

- 使用 `if` 语句来根据条件的真假来决定是否执行语句；
- 使用 `else` 分支当你想在条件为 `false` 的时候执行某些代码，而使用三元运算符 `?:` 代替`if else` 语句是一个很好的实践方式；
- 使用 `if` `else if` `else` 语句执行多条件分支的语句。


## switch case

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-switch-case/)

在本教程中，你将学习 TypeScript 中的 switch case 语句

### TypeScript 中的 switch case 语句

下面展示了 `switch case` 语句的语法：

```ts
switch (expression) {
  case value1:
    // statement 1
    break;
  case value2:
    // statement 2
    break;
  case valueN:
    // statement N
    break;
  default:
    //
    break;
}
```

它是这样工作的：

- 首先，`switch case` 语句计算 `expression` 的值;
- 然后，它搜索第一个计算出来的值 (`value1`, `value2` 和 `valueN` 等等) 与 `expression` 计算出来的值相同的 `case` 从句。

`switch case` 语句会执行第一个匹配的 `case` 从句中的语句。如果没有发现匹配的 `case` 从句，`switch case` 语句会寻找可选的 `default` 从句，如果 `default` 从句可用，它会执行 `default` 从句中的语句。

与每个 `case` 从句相关联的 `break` 语句保证当 `case` 从句中的语句执行完毕的时候，从 `switch case` 语句中跳出。如果匹配的 `case` 从句没有 `break` 语句，程序会继续 `switch case` 语句后面的语句。

按照惯例， `default` 从句是 `switch case` 语句的最后一个从句，但这不是强制要求的。

### switch case 语句例子

让我们看几个 `switch case` 语句的例子

#### 1) 一个简单的 switch case 例子

下面展示了一个简单的 `switch case` 例子，它会基于 `targetId` 的值来展示不同的信息：

```ts
let targetId = 'btnDelete';

switch (targetId) {
  case 'btnUpdate':
    console.log('Update');
    break;
  case 'btnDelete':
    console.log('Delete');
    break;
  case 'btnNew':
    console.log('New');
    break;
}
```

输出:

```sh
Delete
```

在这个例子中，`targetId` 赋值为 `btnDelete`。`switch case` 语句将 `targetId` 与一组值进行比较，因为 `targetId` 匹配了 `'btnDelete'`，对应的 `case` 从句中的语句会被执行。

#### 2) case 分组案例

如果你希望一段代码被多个 `case` 共享，你可以对它们进行分组，如下所示：

```ts
// change the month and year
let month = 2,
  year = 2020;

let day = 0;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    day = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    day = 30;
    break;
  case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) day = 29;
    else day = 28;
    break;
  default:
    throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);
```

输出：

```sh
The month 2 in 2020 has 29 days
```

这个案例返回指定年份及月份下对应的天数：

- 如果月份是 `1` `3` `5` `7` `8` `10` 或者 `12`，返回的天数为 `31`；
- 如果月份是 `4` `6` `9` 或者 `11`，返回的天数为 `30` 天
- 如果月份是 `2` 并且是闰年的话，返回 `29` 天，否则返回 `28` 天。


## for

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-for/)

在本教程中，你将学习 TypeScript 中的 for 语句，它可以重复执行一段代码。

### TypeScript 中的 for 语句介绍

下面是 TypeScript 中 `for` 循环语句的语法：

```ts
for (initialization; condition; expression) {
  // statement
}
```

`for` 循环语句被圆括号包裹起来，由分号 (`;`) 分隔的三个可选表达式组成：

- `initialization` - 在循环前执行的表达式，通常会在 `initialization` 中初始循环计数器的值；
- `condition` – 在每次循环迭代结束的时候执行的表达式，如果 `condition` 计算结果为 `true`，`for` 循环语句会继续执行循环体中的语句；
- `expression` – 在执行 `condition` 语句前执行的表达式，通常会在 `expression` 中更新循环计算器的值。

`for` 循环语句中的三个表达式都是可选的，这意味着可以这样使用它，如下所示：

```ts
for (;;) {
  // do something
}
```

在实践中，如果你知道循环执行多少次，你应该使用 `for` 循环，如果你需要根据循环次数以外的条件判断是否停止循环的时候，使用 `while` 循环语句。

TypeScript 允许你完全省略 `for` 循环语句的循环体，如下所示：

```ts
for (initialization; condition; expression);
```

但在实践中很少这样来使用它，它使得代码难以阅读和维护。

### 循环语句例子

让我们看几个使用 TypeScript 中的 `for` 循环语句的例子：

#### 1) 简单的 for 循环语句例子

下面的例子使用 `for` 循环语句输出从 `0` 到 `9` 之间的 `10` 个数字：

```ts
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

Output:

```sh
0
1
2
3
4
5
6
7
8
9
```

它是这样工作的：

- 首先，声明了 `i` 变量，把它的值初始化为 `0`；
- 检查 `i` 的值是否比 `10` 小，如果是的话把它的值输出到控制台，并给 `i` 变量加一；
- 最后，循环第二步直到 `i` 的值等于 `10`，结束循环。

#### 2) for 循环语句例子：可选表达式

下面的例子和上面的例子有着相同的输出结果，但是下面的 `for` 循环语句没有 `initialization` 表达式：

```ts
let i = 0;
for (; i < 10; i++) {
  console.log(i);
}
```

和 `initialization` 表达式一样，你也可以省略 `condition` 表达式。但是必须使用 `if` 或者 `break` 语句，在满足一些条件的时候终止循环，否则你将创建一个死循环语句，导致程序重复执行直至崩溃：

```ts
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 9) break;
}
```

下面的例子演示了一个省略了三个表达式的 `for` 循环语句：

```ts
let i = 0;
for (;;) {
  console.log(i);
  i++;
  if (i > 9) break;
}
```

输出：

```sh
0
1
2
3
4
5
6
7
8
9
```

它是这样工作的：

- 首先，在进入 `for` 循环语句前声明了一个 `i` 循环计数器，并把它的值初始化为 `0`；
- 然后，在每次循环迭代中，把 `i` 输出到控制台中并将它的值加一，判断如果 `i` 的值大于 `9` 的话，跳出循环语句。

### 小结

- 使用 TypeScript 中的 `for` 循环语句来重复执行一段代码。


## while

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-while/)

在本教程中，你将学习如何使用 TypeScript 中的 while 语句创建循环语句。

### TypeScript 中的 while 语句介绍

`while` 语句允许你创建一个循环，只要条件为 `true` 的时候就会执行给定的代码。下面是 TypeScript 中的 `while` 语句的语法：

```ts
while (condition) {
  // do something
}
```

`while` 语句会在每次循环迭代前计算 `condition` 的值：

- 如果 `condition` 的值为 `true` ，`while` 语句将执行其循环体中的代码；
- 如果 `condition` 计算结果为 `false` ，跳出循环，执行 `while` 循环语句后面的语句。

由于 `while` 语句是在执行循环体前计算 `condition` 的值，它也被称为预测循环。

可以使用 `if` 和 `break` 语句，在某些条件成立的时候，中断循环：

```ts
while (condition) {
  // do something
  // ...

  if (anotherCondition) break;
}
```

如果希望执行特定次数的循环，可以使用 TypeScript 中的 `for` 循环语句。

### while 语句例子

让我们看几个 TypeScript 中的 `while` 语句的案例。

#### 一个简单的 while 语句案例

下面的例子使用 `while` 语句来判断当 `counter` 小于 `5` 的时候，把它的值输出到控制台上：

```ts
let counter = 0;

while (counter < 5) {
  console.log(counter);
  counter++;
}
```

输出：

```sh
0
1
2
3
4
```

它是这样工作的：

- 首先，声明 `counter` 变量，并把它的值初始化为 `0`；
- 然后，在进入循环之前检查一下 `counter` 的值是否小于 `5`，如果是的话输出 `counter` 的值，并把它的值加一；
- 最后，当 `counter` 小于 `5` 的时候，重复执行上面的步骤。

#### while 语句项目实战

假设 `HTML` 文档中有以下元素列表：

```HTML
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

下面的例子展示了如果使用 `while` 语句移除 `<ul>` 元素上所有的 `<li>` 元素：

```ts
let list = document.querySelector('#list');

while (list.firstChild) {
  list.removeChild(list.firstChild);
}
```

它是这样工作的：

- 首先，通过 `id` 变量和 `querySelector()` 方法查找出 `<ul>` 元素；
- 接下来，检查 `list` 元素的 `firstChild` 第一个子节点是否存在，如果存在则把它删除。当第一个子节点被删除的时候，下一个子节点将自动提升成第一个子节点。因此，使用这个 `while` 循环语句可以删除掉 `list` 元素上的所有子节点。

### 小结

- 使用 TypeScript 中的 `while` 语句来创建一个只要条件为 `true` 的时候就会一直执行的循环。


## do while

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-do-while/)

在本教程中，你将学习如何使用 TypeScript 中的 do while 语句创建一个只有当条件为 `false` 的时候才会停止的循环语句。

### TypeScript 中的 do while 语句介绍

下面是 `do while` 语句的语法：

```ts
do {
  // do something
} while (condition);
```

`do while` 语句会一直执行循环体中的代码，直到 `condition` 计算值为 `false` 的时候。`do while` 语句至少执行一次它的循环体，和 `while` 语句不同，`do while` 语句会在每次循环迭代结束后才计算 `condition` 是否符合要求，因此它也被称为后测循环。

### TypeScript 中的 do while 语句案例

下面的例子使用 `do while` 语句把 `0` 到 `9` 之间的数字输出到控制台中：

```ts
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
```

输出：

```sh
0
1
2
3
4
5
6
7
8
9
```

它是这样工作的：

- 首先，声明变量 `i`，在进入循环值前把它的值初始化为 `0`；
- 接下来，把 `i` 输出到控制台并且加一。然后检查它的值是否小于 `10`，如果是的话，继续执行循环直到 `i` 的值大于或者等于 `10`。


## break

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-break/)

在本教程中，你将学习 TypeScript 中的 break 语句，它可以用来中断循环和中断 `switch` 语句。

### 使用 break 语句终止循环

`break` 语句允许你终止一个循环，把程序的控制流传递到循环后的语句，可以在 [for](https://cody1991.github.io/TypeScript-Tutorial/3-control-flow-statements/3-for.html)，[while](https://cody1991.github.io/TypeScript-Tutorial/3-control-flow-statements/4-while.html) 和 [do while](https://cody1991.github.io/TypeScript-Tutorial/3-control-flow-statements/5-do-while.html) 语句中使用 `break` 语句。下面的例子展示了如何在 `for` 循环中使用 `break` 语句：

```ts
let products = [
  { name: 'phone', price: 700 },
  { name: 'tablet', price: 900 },
  { name: 'laptop', price: 1200 },
];

for (var i = 0; i < products.length; i++) {
  if (products[i].price == 900) break;
}

// show the products
console.log(products[i]);
```

输出：

```sh
{ name: 'tablet', price: 900 }
```

它是这样工作的：

- 首先初始化一个带有名字和价格属性的 `products` 变量列表；
- 然后，查找价格为 `900` 的产品，当找到该产品的时候，使用 `break` 语句中断循环；
- 最后，我们把符合要求的产品输出到控制台中。

### 使用 break 语句中断 switch 语句

下面的例子返回了指定产品的折扣，它使用 `break` 语句中断 [switch](https://cody1991.github.io/TypeScript-Tutorial/3-control-flow-statements/2-switch-case.html) 语句：

```ts
let products = [
  { name: 'phone', price: 700 },
  { name: 'tablet', price: 900 },
  { name: 'laptop', price: 1200 },
];

let discount = 0;
let product = products[1];

switch (product.name) {
  case 'phone':
    discount = 5;
    break;
  case 'tablet':
    discount = 10;
    break;
  case 'laptop':
    discount = 15;
    break;
}

console.log(`There is a ${discount}% on ${product.name}.`);
```

> 注意，除了循环语句和 `switch` 语句外，`break` 语句也可以用于中断带有标签的语句，但是它很少在实践中使用，所以在本教程中不进行更多的讨论。


## continue

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-continue/)

在本教程中，你将学习 TypeScript 中的 continue 语句。

`continue` 语句用于辅助控制循环，比如 [for](https://cody1991.github.io/TypeScript-Tutorial/3-control-flow-statements/3-for.html) 循环，[while](https://cody1991.github.io/TypeScript-Tutorial/3-control-flow-statements/4-while.html) 循环，或者 [do while](https://cody1991.github.io/TypeScript-Tutorial/3-control-flow-statements/5-do-while.html) 循环。`continue` 语句会跳到当前循环的末尾，然后开始下一个循环迭代。

### 在 for 循环中使用 continue 语句

下面的例子演示了如何在 `for` 循环中使用 `continue` 语句：

```ts
for (let index = 0; index < 9; index++) {
  // if index is odd, skip it
  if (index % 2) continue;

  // the following code will be skipped for odd numbers
  console.log(index);
}
```

输出：

```sh
0
2
4
6
8
```

在这个例子中：

- 首先，循环 `0` 到 `9` 这几个数字；
- 然后，当数字是奇数的时候，使用 `continue` 语句跳过把数字输出到控制台的操作，而当数字是偶数的时候，把它输出到控制台中。

### 在 while 循环中使用 continue 语句

下面的例子展示如何在 `while` 循环中使用 `continue` 语句，它和上面的例子的返回结果是一样：

```ts
let index = -1;

while (index < 9) {
  index = index + 1;

  if (index % 2) continue;

  console.log(index);
}
```

输出：

```sh
0
2
4
6
8
```

### 在 do while 循环中使用 continue 语句

下面的例子展示如何在 `do while` 循环中使用 `continue` 语句，它返回 `9` 到 `99` 之间存在的偶数的数量：

```ts
let index = 9;
let count = 0;

do {
  index += 1;
  if (index % 2) continue;
  count += 1;
} while (index < 99);

console.log(count); // 45
```
# Section 4. 函数

## 函数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-functions/)

在本教程中，你将学习 TypeScript 中的函数以及如何给函数添加类型注释。

### TypeScript 中的函数介绍

TypeScript 中的函数是一段可读，可维护和可复用的代码块，和 JavaScript 一样，可以使用 `function` 关键字来声明 TypeScript 中的函数：

```ts
function name(parameter: type, parameter: type, ...): returnType {
  // do something
}
```

和 JavaScript 不一样的是，TypeScript 允许为函数的参数和返回值添加 [类型注释](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/1-type-annotations.html)，看看下面的 `add()` 函数：

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

在这个例子中，`add()` 函数接受两个 [数字类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/2-number.html) 的参数。当你调用 `add()` 函数的时候，TypeScript 编译器会检查每个传递给函数的参数，保证它们都是数字类型的值。在 `add()` 函数的例子中，你只能传递数字类型的参数给它，不能是其他任何类型的值。下面的例子会抛出错误提示，因为它向 `add()` 函数传递了两个字符串类型的参数：

```ts
let sum = add('10', '20');
```

错误提示：

```sh
error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'
```

括号后面的 `: number` 表示返回值的类型，在本例中 `add()` 函数返回 `number` 类型的值。当函数有返回类型的时候，TypeScript 编译器会根据返回类型检查每个 `return` 语句，确保返回值都是兼容的。如果函数不返回值，使用 `void` 类型作为返回类型，`void` 关键字表示该函数不返回任何值，如下所示：

```ts
function echo(message: string): void {
  console.log(message.toUpperCase());
}
```

`void` 类型阻止函数内的代码返回值，也阻止调用函数的地方把函数的返回赋值给变量。

当没有注释返回值的类型的时候，TypeScript 会尝试推断它的类型，如下所示：

```ts
function add(a: number, b: number) {
  return a + b;
}
```

在这个例子中，TypeScript 编译器尝试把 `add()` 函数的返回值的类型推断为 `number` 类型，这是符合预期的。但是，如果函数有多个分支返回不同类型的值的时候，TypeScript 编译器可能推断出返回值的类型为 [联合类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/12-union-type.html) 或者 [any 类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/9-any-type.html)。因此，尽可能给函数添加类型注释。

### 小结

- 给函数的参数和返回值添加类型注释保证调用代码的内联性，以及在函数体中进行类型检查。


## 函数类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-function-types/)

在本教程中，你将学习 TypeScript 中的函数类型，使用它为函数定义类型。

### TypeScript 中的函数类型介绍

一个函数类型由两个部分组成：参数类型和返回类型。声明一个函数类型的时候，使用下面的语法来指定这两个部分：

```ts
(parameter: type, parameter: type, ...) => type
```

下面的例子声明了一个函数类型，它接受两个数字类型的参数以及返回一个数字类型的值：

```ts
let add: (x: number, y: number) => number;
```

在这个例子中：

- 函数类型接受两个参数：`x` 和 `y`，它们都是 `number` 类型的值；
- 返回值的类型是 [数字类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/2-number.html) ，它跟在参数列表和返回类型之间的胖箭头 (`=>`) 后面。

> 注意，参数的名字 (`x` 和 `y`) 只是方便阅读，可以使用其他参数名字。

为一个变量添加函数类型注释后，可以把有相同类型的函数赋值给这个变量。TypeScript 编译器会检查参数的数量和类型以及返回类型是否匹配。下面的例子展示如何把一个函数赋值给 `add` 变量：

```ts
add = function (x: number, y: number) {
  return x + y;
};
```

同样的，可以像下面这样声明一个变量，同时把函数赋值给它：

```ts
let add: (a: number, b: number) => number = function (x: number, y: number) {
  return x + y;
};
```

如果赋值了另外一个类型与 `add` 函数类型不匹配的函数，TypeScript 会抛出错误提示，如下所示，把一个类型不匹配的函数重新赋值给了 `add` 函数变量：

```ts
add = function (x: string, y: string): number {
  return x.concat(y).length;
};
```

### 函数类型推断

当在等式的一边有类型的时候，TypeScript 编译器可以推断出函数的类型，这种形式的 [类型推断](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/15-type-inference.html) 被称为上下文类型，如下所示：

![TypeScript-Function-Type-Example](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Function-Type-Example.6rkmnr74nik0.png)

在这个例子中，`add` 函数被推断为 `(x: number, y:number) => number` 类型。

通过类型推断，可以免去一些类型注释的工作，显著减少代码数。


## 可选参数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-optional-parameters/)

在本教程中，你将学习如何使用 TypeScript 中的函数的可选参数。

在 JavaScript 中，即使函数指定了参数，也可以在调用它的时候不传入任何参数，因为 JavaScript 默认支持可选参数。而在 TypeScript 中，编译器会检查每个函数的调用情况，并在以下情况中抛出错误提示：

- 实参的数量和函数中指定的形参的数量不同；
- 或者实参的类型和函数形参的类型不兼容。

因为编译器会彻查传递给函数的参数，我们可以使用可选参数告诉编译器参数是可选的，在不存在的情况下不发出错误提示。

要使函数的参数是可选的，可以在参数名后面添加 `?` 符号，如下所示：

```ts
function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
```

它是这样工作的：

- 首先，在 `c` 参数后面添加 `?` 符号；
- 然后，通过表达式 `typeof c !== 'undefined'` 检查 `c` 参数是否传递给了函数。

> 注意：如果你用表达式 `if(c)` 来检查参数是否被初始化，你会发现空字符串和 `0` 也被视为 `undefined`，这种判断是有问题的。

可选参数必须出现在参数列表中必选参数的后面。例如，如果你把 `b` 设置为可选参数，而 `c` 是必须参数，TypeScript 编译器会抛出一个错误提示：

```ts
function multiply(a: number, b?: number, c: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
```

错误提示：

```sh
error TS1016: A required parameter cannot follow an optional parameter.
```

### 小结

- 使用 `parameter?: type` 语法把参数设置为可选的；
- 使用 `typeof(parameter) !== 'undefined'` 表达式来检查可选参数是否初始化了。


## 默认参数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-default-parameters/)

在本教程中，你将学习 TypeScript 中的默认参数

### TypeScript 中的默认参数介绍

JavaScript 自 ES2015 (或者称 ES6) 以来，开始支持 [默认参数](https://zh.javascript.info/function-basics#mo-ren-zhi)，它的语法如下：

```ts
function name(parameter1 = defaultValue1, ...) {
  // do something
}
```

在上述语法中，如果调用函数的时候不传递实参或者传递的实参值为 `undefined` ，函数会把默认的初始值赋值给缺省的形参，如下所示：

```ts
function applyDiscount(price, discount = 0.05) {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
```

在这个例子中，`applyDiscount()` 函数有一个默认参数 `discount`。如果在调用 `applyDiscount()` 函数的时候没有传递值给 `discount` 行参，函数会把默认值 `0.05` 赋值给它。与 JavaScript 类似，可以在 TypeScript 中使用相同的语法来指定默认参数：

```ts

function name(parameter1 :type = defaultvalue1, parameter2 :type = defaultvalue2, ...) {
  //
}
```

下面的例子使用了 `applyDiscount()` 函数的默认参数：

```ts
function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
```

注意不能在函数类型定义中包含默认参数，下面的代码讲会抛出错误提示：

```ts
let promotion: (price: number, discount: number = 0.05) => number;
```

错误提示：

```sh
error TS2371: A parameter initializer is only allowed in a function or constructor implementation.
```

### 默认参数和可选参数

和 [可选参数](https://cody1991.github.io/TypeScript-Tutorial/4-functions/3-optional-parameters.html) 类似，默认参数也是可选的。这意味着在调用函数的时候可以省略默认参数。另外，默认参数和可选参数可能有相同的类型，比如下面两个函数：

```ts
function applyDiscount(price: number, discount: number = 0.05): number {
  // ...
}
```

和

```ts
function applyDiscount(price: number, discount?: number): number {
  // ...
}
```

它们有着如下所示相同的类型：

```ts
(price: number, discount?: number) => number;
```

可选参数必须在必选参数后面，但是默认参数不需要出现在必选参数后面。当默认参数出现在必选参数之前，需要显示的传递 `undefined` 来获取默认初始值的赋值。

下面的函数返回指定月份和年份中的天数：

```ts
function getDay(
  year: number = new Date().getFullYear(),
  month: number,
): number {
  let day = 0;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    case 2:
      // leap year
      if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) day = 29;
      else day = 28;
      break;
    default:
      throw Error('Invalid month');
  }
  return day;
}
```

在这个例子中，如果没有给 `year` 传递实参或者 `undefined` 值，`year` 默认值是当前年份。下面的例子使用 `getDay()` 函数来获取 2019 年 2 月的天数：

```ts
let day = getDay(2019, 2);
console.log(day); // 28
```

为了获取今年 2 月份的天数，需要如下所示把 `undefined` 值传递给 `year` 参数：

```ts
let day = getDay(undefined, 2);
console.log(day);
```

### 小结

- 如果你想要设置参数的默认初始值，使用默认参数的语法 `parameter:=defaultValue`；
- 默认参数是可选的；
- 要使用形参的默认初始值，在调用函数的时候忽略实参或者把 `undefined` 值传递给对应的参数。


## Rest 参数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-rest-parameters/)

在本教程中，你将学习 TypeScript 中的剩余参数，它允许你把不限数量的参数表示为一个数组参数。

Rest 参数允许函数接受零个或者多个指定类型的参数，在 TypeScript 中， Rest 参数遵守下面的规则：

- 一个函数只有一个 Rest 参数；
- Rest 参数出现在参数列表的最后面；
- Rest 参数的类型是 [数组类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/9-any-type.html)。

要声明一个 Rest 参数，可以在参数名前加上三个点，并使用数组类型作为它的类型注释：

```ts
function fn(...rest: type[]) {
  //...
}
```

下面的例子演示了如何使用 Rest 参数：

```ts
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}
```

在这个例子中， `getTotal()` 函数计算传递给它的所有参数的总和。由于 `numbers` 参数是一个 Rest 参数，你可以传递一个或者多个数字，来计算它们的总和：

```ts
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
```


## 函数重载

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-function-overloadings/)

在本教程中，你将学习 TypeScript 中的函数重载

### TypeScript 中的函数重载介绍

在 TypeScript 中，函数重载允许你建立某个函数参数类型和返回类型之间的关系。

> 注意 TypeScript 的函数重载不同于其他静态类型语言，如 `C#` 和 `Java` 支持的函数重载。

让我们看几个简单的例子：

```ts
function addNumbers(a: number, b: number): number {
  return a + b;
}

function addStrings(a: string, b: string): string {
  return a + b;
}
```

在这个例子中：

- `addNumbers()` 函数返回两数之和；
- `addStrings()` 函数返回两个字符串连接后的结果。

可以使用 [联合类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/12-union-type.html) 来定义一个函数参数和返回值的类型范围：

```ts
function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
}
```

然后，联合类型不能精确地表示参数类型和返回值类型之间的关系。`add()` 函数告诉编译器它将接受数字或者字符串参数，返回一个数字或者字符串。但是它无法描述在参数都为数字的时候返回数字，当参数都是字符串的时候返回字符串。为了更好地描述函数使用的类型之间的关系，TypeScript 支持函数重载，如下所示：

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
```

在这个例子中，我们为 `add()` 函数添加了两个函数重载，第一个函数重载告诉编译器参数都是数字的时候，`add()` 函数应该返回一个数字。第二个函数重载有着类似的行为，不过换成了针对字符串类型的参数。

每个函数重载定义了 `add()` 函数支持的类型组合，描述了参数类型和它返回值类型之间的映射关系。现在当你调用 `add()` 函数的时候，代码编辑器会提示有一个可用的重载函数，如下所示：

![typescript-function-overloadings](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/typescript-function-overloadings.36nbxumle820.png)

### 数函数重载中使用可选参数

当你使用函数重载的时候，函数的参数数量必须相同，如果有一个函数重载的参数比另外一个函数重载的参数多的话，你必须把多出来的参数设置为可选参数，如下所示：

```ts
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
  if (c) return a + b + c;
  return a + b;
}
```

`sum()` 函数接受两个或者三个类型为数字的参数，第三个参数是可选的，如果没有把它设置为可选参数，编译器将抛出错误提示。

### 方法重载

当一个函数是一个类的属性的时候，它被称为方法，TypeScript 也支持方法重载，如下所示：

```ts
class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}
```

`count()` 函数可以返回一个数字或者一个数组，这取决于传递给它的参数的数量。

```ts
let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array
```

输出：

```sh
1
[
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20
]
```

### 小结

- TypeScript 中的函数重载允许你描述函数的参数类型和返回类型之间的关系。
# Section 5. 类

## 类

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-class/)

在本教程中，你将学习 TypeScript 中的类。

### TypeScript 中的类介绍

JavaScript 不像其他编程语言，如 `Java` 和 `C#` ，有类的概念，在 ES5 中，你可以通过构造函数和 [原型继承](https://zh.javascript.info/prototype-inheritance) 来创建一个“类”。比如要创建一个有 `ssn`，`firstName` 和 `lastName` 三个属性的 `Person` 类，你可以使用如下所示的构造函数：

```ts
function Person(ssn, firstName, lastName) {
  this.ssn = ssn;
  this.firstName = firstName;
  this.lastName = lastName;
}
```

接下来，定义一个原型方法，通过连接 `firstName` 和 `lastName` 属性值的方式来获得人名全称：

```ts
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
```

然后可以通过 `Person` “类”创建一个新的对象：

```ts
let person = new Person('171-28-0926', 'John', 'Doe');
console.log(person.getFullName());
```

它会在控制台上打印出下面的信息：

```sh
John Doe
```

[ES6 允许你定义一个类](https://zh.javascript.info/class)，它是创建对应的构造函数和原型继承的语法糖：

```ts
class Person {
  ssn;
  firstName;
  lastName;

  constructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

在上面类的语法中，构造函数已经被明确定义在类中。接下来增加 `getFullName()` 方法：

```ts
class Person {
  ssn;
  firstName;
  lastName;

  constructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

使用 `Person` 类和使用 `Person` 构造函数创建的对象是一样的：

```ts
let person = new Person('171-28-0926', 'John', 'Doe');
console.log(person.getFullName());
```

TypeScript 中的类给它的属性和方法增加了 [类型注释](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/1-type-annotations.html)。下面演示了 TypeScript 中的 `Person` 类的使用方法：

```ts
class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

当你给类的属性，构造函数和方法增加类型注释，TypeScript 编译器会进行对应的类型检查。例如，你不能把 `ssn` 初始化为一个 `number` 类型的值，下面的代码会抛出错误提示：

```ts
let person = new Person(171280926, 'John', 'Doe');
```

### 小结

- 在 TypeScript 中使用 `class` 关键字定义类；
- TypeScript 给 ES6 类的语法添加类型注释，让类的使用更具有健壮性。


## 访问修饰符

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/)

在本教程中，你将学习 TypeScript 中的访问修饰符。

访问修饰符改变 [类](https://cody1991.github.io/TypeScript-Tutorial/5-classes/1-class.html) 中属性和方法的可见性，TypeScript 提供了三个访问修饰符：

- `private`
- `protected`
- `public`

注意，TypeScript 在编译时而不是在运行时控制属性和方法的可见性。

### private 修饰符

`private` 修饰符限制了属性和方法只在当前类中可见，这意味着当给方法或属性添加了 `private` 修饰符后，只能在当前类中访问，在当前类外访问私有属性和方法都会在编译时抛出错误提示。

下面的例子演示如何给 `Person` 类中的 `snn`, `firstName` 和 `lastName` 属性增加 `private` 修饰符：

```ts
class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;
  // ...
}
```

添加了 `private` 修饰符以后，你可以在构造函数或者 `Person` 类的方法中访问 `ssn` 属性，比如：

```ts
class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

下面尝试在 `Person` 类外访问 `ssn` 属性：

```ts
let person = new Person('153-07-3130', 'John', 'Doe');
console.log(person.ssn); // compile error
```

### public 修饰符

`public` 修饰符允许在任何位置访问类的属性和方法，如果没有给属性和方法指定任何的修饰符，默认是 `public` 修饰符。

下面显示地为 `Person` 类中的 `getFullName()` 方法添加 `public` 修饰符：

```ts
class Person {
  // ...
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  // ...
}
```

它的效果和省略 `public` 关键字是一样的。

### protected 修饰符

`protected` 修饰符允许一个类的属性和方法在当前类或者当前类的子类中被访问。当一个类（子类）从另外一个类（父类）继承时，它是父类的子类。如果你尝试从其他任何地方访问 `protected` 属性，TypeScript 编译器将抛出错误提示。

通过 `protected` 关键字给方法和属性添加 `protected` 修饰符，如下所示：

```ts
class Person {
  protected ssn: string;
  // other code
}
```

`ssn` 属性现在是受保护的，在 `Person` 类和任何继承 `Person` 类的子类中都可以访问它，可以从 [类继承](https://zh.javascript.info/class-inheritance) 中学到更多关于继承的知识。

`Person` 类声明了两个私有属性和一个受保护的属性，构造函数使用接受到的三个参数对它们进行初始化。

为了让代码看起来更加简单，TypeScript 允许你在构造函数中同时声明和初始化属性，如下所示：

```ts
class Person {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string,
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

当你考虑属性和方法的可见性，最好给它们添加最低可见性的访问修饰符，即 `private` 修饰符。

### 小结

- TypeScript 给属性和方法提供了三种访问修饰符：`private`, `protected` 和 `public` 修饰符；
- `private` 修饰符只有在当前类中可以访问；
- `protected` 修饰符允许在当前类和当前类的子类中可以访问；
- `public` 修饰符在任何地方都可以访问。


## 只读属性

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-readonly/)

在本教程中，你将学习如何使用 TypeScript 中的只读访问修饰符，它可以把类的属性标记为不可变属性。

TypeScript 提供了只读访问修饰符允许你把类的属性标记为不可变属性。只能在下面两个位置中给属性添加只读属性：

- 属性定义的地方；
- 当前类的构造函数中。

要将属性标记为不可变属性，你需要使用 `readonly` 关键字，下面演示了如何在 `Person` 类中声明只读属性：

```ts
class Person {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}
```

在这个例子中，`birthdate` 是一个只读属性，它在 `Person` 类的构造函数中进行初始化。下面尝试给 `birthDate` 属性重新赋值，抛出如下所示的错误提示：

```ts
let person = new Person(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // Compile error
```

和其他 [访问修饰符](https://cody1991.github.io/TypeScript-Tutorial/5-classes/2-access-modifiers.html) 一样，你可以在构造函数中同时声明和初始化只读属性，如下所示：

```ts
class Person {
  constructor(readonly birthDate: Date) {
    this.birthDate = birthDate;
  }
}
```

### Readonly vs const

下面列出了 `readonly` 和 `const` 之间不同点：

|        | `readonly`                           | `const`        |
| ------ | ------------------------------------ | -------------- |
| 用于   | 类的属性                             | 变量           |
| 初始化 | 声明属性的时候或者在当前类构造函数中 | 声明变量的时候 |

### 小结

- 使用只读访问修饰符把类的属性标记为不可变属性；
- 只读访问修饰必须在声明属性的时候或者在当前类构造函数中进行初始化。


## Getter / Setter

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/)

在本教程中，你将学习如何使用 TypeScript 中的 getter 方法和 setter 方法。

### TypeScript 中的 getter 和 setter 方法介绍

下面展示了一个简单的 `Person` 类，它只有三个属性：`age`, `firstName` 和 `lastName`。

```ts
class Person {
  public age: number;
  public firstName: string;
  public lastName: string;
}
```

要访问 `Person` 类的属性，可以这么做：

```ts
let person = new Person();
person.age = 26;
```

假设你将一个来自用户输入的值赋值给 `age` 属性：

```ts
person.age = inputAge;
```

`inputAge` 变量可以是任意数字，为了保证年龄的有效性，可以在赋值前进行检查：

```ts
if (inputAge > 0 && inputAge < 200) {
  person.age = inputAge;
}
```

但是到处使用这个检查语句的话是冗余乏味的，为了避免重复检查，可以使用 `getter` 和 `setter` 方法，`getter` 和 `setter` 方法可以控制类属性的访问方式。对于每个属性来说：

- `getter` 方法返回属性的值，`getter` 方法也被称为 `accessor` 方法；
- `setter` 方法更新属性的值，`setter` 方法也被称为 `mutator` 方法。

`getter` 方法以 `get` 关键字开头，而 `setter` 方法以 `set` 关键字开头：

```ts
class Person {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  // 译者注：原教程没有写 constructor 构造函数，TypeScript 会报错，这里补充上
  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid');
    }
    this._age = theAge;
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}
```

它是这样工作的：

- 首先，把 `age`, `firstName` 和 `lastName` 属性的访问修饰符从 `public` 更改为 `private`；
- 接下来，把 `age` 属性更改为 `_age`；
- 第三，为 `_age` 属性添加 `getter` 和 `setter` 方法，在 `setter` 方法中，在用户输入的年龄变量值赋值给 `_age` 属性之前，检查变量值是否有效的。

现在，你可以通过下面的方式访问 `age` 的 `setter` 方法：

```ts
let person = new Person();
person.age = 10;
```

注意，调用 `setter` 方法不像常规的方法调用一样，方法名没有加上括号。当你调用 `person.age` 的时候，`age` 的 `setter` 方法会被调用，如果你设置了一个无效的 `age` 值，`setter` 方法会抛出错误提示：

```ts
person.age = 0;
```

错误提示：

```sh
Error: The age is invalid
```

当你访问 `person.age` 的时候，`age` 的 `getter` 方法会被调用：

```ts
console.log(person.age);
```

下面给 `firstName` 和 `lastName` 属性添加了 `getter` 和 `setter` 方法：

```ts
class Person {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  // 译者注：原教程没有写 constructor 构造函数，TypeScript 会报错，这里补充上
  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid');
    }
    this._age = theAge;
  }

  public get firstName() {
    return this._firstName;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error('Invalid first name.');
    }
    this._firstName = theFirstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) {
      throw new Error('Invalid last name.');
    }
    this._lastName = theLastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### 更多的 getter / setter 方法案例

正如从代码中所看到的，在给属性赋值之前使用 `setter` 方法进行数据验证是非常有用的，此外你还可以进行其他复杂的逻辑处理。

下面演示了如何创建 `fullName` 的 `getter` 和 `setter` 方法：

```ts
class Person {
  // ... other code
  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public set fullName(name: string) {
    let parts = name.split(' ');
    if (parts.length != 2) {
      throw new Error('Invalid name format: first last');
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}
```

它是这样工作的：

- `getter` 方法返回 `firstName` 和 `lastName` 拼接后的字符串；
- `setter` 方法接受一个字符串作为 `fullName` 变量，它的格式如下：第一个部分的字符串赋值给 `firstName` 属性，第二个部分的字符串赋值给 `lastName` 属性。

现在，你可以像普通的类属性一样访问 `fullName` 的 `setter` 和 `getter` 属性：

```ts
let person = new Person();
person.fullname = 'John Doe';

console.log(person.fullName);
```

### 小结

- 使用 TypeScript 中的 `getter` / `setter` 方法来控制类属性的访问方式；
- `getter` / `setter` 方法也被称为 `accessor` / `mutator` 方法。


## 类继承

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-inheritance/)

在本教程中，你将了解 TypeScript 中继承的概念，以及如何使用它来复用其他类的功能。

### TypeScript 中的继承介绍

[类](https://cody1991.github.io/TypeScript-Tutorial/5-classes/1-class.html) 可以让其他的类复用它的属性和方法，这在 TypeScript 中被称为继承。继承其他类的属性和方法的类被称为子类，被继承的类被称为父类，这些名字来自自然中孩子继承父母基因的说法。继承让你可以复用现有类的功能，而不需要重写一遍。

JavaScript 使用 [原型继承](https://cody1991.github.io/TypeScript-Tutorial/5-classes/1-class.html) 的方式实现类，而非 `Java` 和 `C#` 语言的类继承方式。 `ES6` 引入的 [类](https://cody1991.github.io/TypeScript-Tutorial/5-classes/1-class.html) 语法是 JavaScript 原型继承的语法糖，TypeScript 也支持这种语法。

假设有下面一个 `Person` 类：

```ts
class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}
```

使用 `extends` 关键字继承其它类，比如下面的 `Employee` 类继承了 `Person` 类：

```ts
class Employee extends Person {
  //..
}
```

在这个例子中，`Employee` 是子类，而 `Person`是父类。

### 构造函数

因为 `Person` 类中有一个初始化 `firstName` 和 `lastName` 属性的构造函数，你需要在 `Employee` 类的构造函数中调用父类的构造函数来初始化这些属性。要在子类的构造函数中调用父类的构造函数，可以使用 `super()` 语法：

```ts
class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }
}
```

下面创建了一个 `Employee` 类的实例：

```ts
let employee = new Employee('John', 'Doe', 'Front-end Developer');
```

因为 `Employee` 类继承了 `Person` 类的方法和属性，你可以在 `employee` 对象上调用 `getFullName()` 和 `describe()` 方法，如下所示：

```ts
let employee = new Employee('John', 'Doe', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe());
```

输出：

```sh
John Doe
This is John Doe.
```

### 方法重载

当你调用 `employee` 对象上的 `employee.describe()` 方法的时候，`Person` 类的 `describe()` 方法会被执行，显示 `This is John Doe` 信息。如果 `Employee` 类想要有属于自己的 `describe()` 方法，可以在 `Employee` 类中定义 `describe()` 方法，如下所示：

```ts
class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }

  describe(): string {
    return super.describe() + `I'm a ${this.jobTitle}.`;
  }
}
```

在 `describe()` 方法中，我们使用 `super.methodInParentClass()` 的语法调用父类的 `describe()` 方法。如果你在 `employee` 对象上调用 `describe()` 方法，`Employee` 类的 `describe()` 方法会被调用：

```ts
let employee = new Employee('John', 'Doe', 'Web Developer');
console.log(employee.describe());
```

输出：

```sh
This is John Doe.I'm a Web Developer.
```

### 小结

- 使用 `extends` 关键字允许一个类继承另外一个类；
- 在子类的构造函数中使用 `super` 方法调用父类的构造函数，在子类的方法中使用 `super.methodInParentClass()` 语法调用父类的 `methodInParentClass()` 方法。


## 静态属性和方法

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-static-methods-and-properties/)

在本教程中，你将了解 TypeScript 中的静态属性和方法。

### 静态属性

与实例属性不同，静态属性是类所有实例之间共享的属性。要声明静态属性，可以使用 `static` 关键字，要访问静态属性，可以使用 `className.propertyName` 语法，如下所示：

```ts
class Employee {
  static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string,
  ) {
    Employee.headcount++;
  }
}
```

在本例中，`headcount` 是一个初始值为 `0` 的静态属性，每创建一个新的实例，它的值就会加一。下面的例子创建了两个 `Employee` 实例，打印 `headcount` 属性的值，返回了预期中的 `2`：

```ts
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); // 2
```

### 静态方法

与静态属性一样，静态方法也是类所有实例之间共享的方法，要声明一个静态方法，需要在方法名前添加 `static` 关键字，如下所示：

```ts
class Employee {
  private static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string,
  ) {
    Employee.headcount++;
  }

  public static getHeadcount() {
    return Employee.headcount;
  }
}
```

在这个例子中：

- 首先，将 `headcount` 静态属性的访问修饰符从 `public` 更改为 `private`，这样在该类之外就不能修改它的值，除非创建一个新的 `Employee` 实例；
- 然后，添加 `getHeadcount()` 静态方法，该方法返回 `headcount` 静态属性的值。

你可以使用 `className.staticMethod()` 的语法来调用静态方法，如下所示：

```ts
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.getHeadcount); // 2
```

实际上，你会发现比如 `Math` 对象有很多的静态属性和方法，比如 `PI` 和 `E` 等等的静态属性， `abs()` 和 `round()` 等等的静态方法。

### 小结

- 静态属性和静态方法是类所有实例之间共享的；
- 在一个属性或者方法名前面添加 `static` 关键字，可以使其成为静态属性或者静态方法。


## 抽象方法

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-abstract-classes/)

在本教程中，你将了解 TypeScript 中的抽象类。

### TypeScript 中的抽象类介绍

抽象类通常用于定义要扩展的派生类的共同行为，和常规的 [类](https://cody1991.github.io/TypeScript-Tutorial/5-classes/1-class.html) 不同的是，抽象类不能直接实例化。要声明一个抽象类，可以使用 `abstract` 关键字：

```ts
abstract class Employee {
  //...
}
```

通常，一个抽象类包含一个或者多个的抽象方法。抽象方法不包含具体的实现，它只定义方法的签名，不包括方法体，而抽象方法必须在派生类中实现。

下面是一个拥有 `getSalary()` 抽象方法的 `Employee` 抽象类：

```ts
abstract class Employee {
  constructor(private firstName: string, private lastName: string) {}
  abstract getSalary(): number;
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}
```

在 `Employee` 类中：

- 构造函数声明了 `firstName` 和 `lastName` 属性；
- `getSalary()` 方法是一个抽象方法，派生类将根据雇员的类型来实现具体的逻辑；
- `getFullName()` 和 `compensationStatement()` 方法有具体的实现，注意 `compensationStatement()` 方法会调用 `getSalary()` 方法。

因为 `Employee` 是抽象类，不能使用它创建实例，下面的语句会抛出错误提示：

```ts
let employee = new Employee('John', 'Doe');
```

错误提示：

```sh
error TS2511: Cannot create an instance of an abstract class.
```

下面的 `FullTimeEmployee` 类继承了 `Employee` 抽象类：

```ts
class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.salary;
  }
}
```

在这个 `FullTimeEmployee` 类中，构造函数定义了 `salary` 属性。因为 `getSalary()` 是 `Employee` 类的抽象方法，`FullTimeEmployee` 类需要去实现这个方法。在这个例子中，这个方法没有做任何处理，直接返回 `salary` 变量的值来表示报酬的值。

下面的 `Contractor` 类继承了 `Employee` 抽象类：

```ts
class Contractor extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number,
  ) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}
```

在 `Contractor` 类中，构造函数定义了了 `rate` 和 `hours` 属性，`getSalary()` 方法把 `rate` 和 `hours` 相乘的结果来表示报酬的值。

下面的例子创建了一个 `FullTimeEmployee` 类的实例和一个 `Contractor` 类的实例，然后在控制台上分别展示了它们的报酬信息：

```ts
let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());
```

输出:

```sh
John Doe makes 12000 a month.
Jane Doe makes 16000 a month.
```

当想在一些有相互关系的类之间共享代码，使用抽象类是一个很好的方式。

### 小结

- 抽象类不能被实例化；
- 一个抽象类至少有一个抽象方法；
- 使用抽象类的时候，需要继承它的同时实现类中所有的抽象方法。
# Section 6. 接口

## 接口

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-interface/)

在本教程中，你将学习 TypeScript 中的接口，以及如何使用它们执行类型检查。

### TypeScript 中的接口介绍

TypeScript 中的接口制定代码中的约束，也为类型检查提供显式的名称。让我们从一个简单的例子开始：

```ts
function getFullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(getFullName(person));
```

输出：

```sh
John Doe
```

在这个例子中，TypeScript 编译器检查传递给 `getFullName()` 函数的参数，如果参数有 `firstName` 和 `lastName` 这两个字符串类型的属性，那么可以通过 TypeScript 的类型检查，否则会抛出错误提示。

通过代码可以清楚的发现，函数参数的 [类型注释](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/1-type-annotations.html) 让我们的代码变得难以阅读。为了解决这个问题，TypeScript 引入了接口的概念。

下面定义了一个 `Person` 接口，它有两个类型为字符串的属性：

```ts
interface Person {
  firstName: string;
  lastName: string;
}
```

按照惯例，接口名字都使用驼峰式，即使用大写字母分隔命名中的单词，比如 `Person`, `UserProfile` 和 `FullName`。

定义好 `Person` 接口之后你可以把它作为类型使用，也可以使用它为函数参数添加注释：

```ts
function getFullName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(getFullName(john));
```

现在的代码比之前容易阅读很多。

`getFullName()` 函数接受任何具有 `firstName` 和 `lastName` 两个字符串类型的属性的对象作为参数，而它也不需要恰好只有这两个属性，如下所示，定义了一个具有四个属性的对象：

```ts
let jane = {
  firstName: 'Jane',
  middleName: 'K.'
  lastName: 'Doe',
  age: 22
};
```

因为 `jane` 对象具有 `firstName` 和 `lastName` 两个字符串类型的属性，你可以把它传入到 `getFullName()` 函数中，如下所示：

```ts
let fullName = getFullName(jane);
console.log(fullName); // Jane Doe
```

### 可选属性

接口可以拥有可选属性，要声明一个可选属性，你需要在属性名后添加 (`?`) 符号，如下所示：

```ts
interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
}
```

在这个例子中，`Person` 接口有两个必选属性和一个可选属性。下面的例子演示了 `Person` 接口如何在 `getFullName()` 函数中使用：

```ts
function getFullName(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}
```

### 只读属性

如果属性只有在对象创建的时候可以被修改，可以在属性名前面加上 `readonly` 关键字：

```ts
interface Person {
  readonly ssn: string;
  firstName: string;
  lastName: string;
}

let person: Person;
person = {
  ssn: '171-28-0926',
  firstName: 'John',
  lastName: 'Doe',
};
```

在这个例子中，`ssn` 属性不能被修改：

```ts
person.ssn = '171-28-0000';
```

错误提示：

```sh
error TS2540: Cannot assign to 'ssn' because it is a read-only property.
```

### 函数类型

除了描述对象的属性外，接口也可以描述 [函数类型](https://cody1991.github.io/TypeScript-Tutorial/4-functions/2-function-types.html)。要描述函数类型的话，你需要将接口赋值成以下形式：

- 包含类型的参数列表
- 包含返回类型

如下所示：

```ts
interface StringFormat {
  (str: string, isUpper: boolean): string;
}
```

现在，你可以使用这个函数类型接口了。下面演示如何声明具有函数类型的变量，并为其赋值：

```ts
let format: StringFormat;

format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true));
```

输出：

```sh
HI
```

注意，参数名不需要匹配函数签名中的参数名字，下面的例子和上面的例子是等价的：

```ts
let format: StringFormat;

format = function (src: string, upper: boolean) {
  return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format('hi', true));
```

`StringFormat` 接口确保所有实现了它的函数调用方传入所需的参数：一个 [字符串类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/3-string.html) 的参数和一个 [布尔值类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/4-boolean.html) 的参数。

下面的代码也可以正常的工作，即使 `lowerCase` 函数没有第二个参数：

```ts
let lowerCase: StringFormat;
lowerCase = function (str: string) {
  return str.toLowerCase();
};

console.log(lowerCase('Hi', false));
```

注意，第二个参数是在调用 `lowerCase()` 函数的时候传递的。

### 类类型

如果你使用过 `Java` 或者 `C#` 语言，你会发现接口的主要用途是定义不相关类之间的约定。例如下面的 `Json` 接口可以由任何不相关的类实现：

```ts
interface Json {
  toJSON(): string;
}
```

下面声明了一个实现 `Json` 接口的类：

```ts
class Person implements Json {
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}
```

在 `Person` 类中我们实现了 `Json` 接口的 `toJson()` 方法。

下面的例子演示了如何使用 `Person` 类：

```ts
let person = new Person('John', 'Doe');
console.log(person.toJson());
```

输出：

```JSON
{"firstName":"John", "lastName":"Doe"}
```

### 小结

- 接口制定代码中的约束，也为类型检查提供显式的名称；
- 接口可以有很多的可选属性和只读属性；
- 接口可以作为函数类型来使用；
- 接口经常被用作类类型来建立不相关类之间的约定。


## 扩展接口

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-extend-interface/)

在本教程中，你讲学习如何扩展接口，这样可以把一个接口的属性和方法复制到另外一个接口中。

### 扩展一个接口的接口

假设有一个名为 `Mailable` 的 [接口](https://cody1991.github.io/TypeScript-Tutorial/6-interfaces/1-interface.html)，它包含 `send()` 和 `queue()` 两个方法：

```ts
interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}
```

然后你有很多 [类](https://cody1991.github.io/TypeScript-Tutorial/5-classes/1-class.html) 已经实现了 `Mailable` 接口。现在，你想要在 `Mailable` 接口上添加一个新的方法， 表示它会延时发送邮件，如下所示：

```ts
later(email: string, after: number): void
```

给 `Mailable` 接口直接添加 `later()` 方法会破坏当前的代码，造成前后不兼容的问题。为了避免这个问题，你可以创建一个新的接口来扩展 `Mailable` 接口：

```ts
interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}
```

使用 `extends` 关键字按照下面的语法来扩展一个接口：

```ts
interface A {
  a(): void;
}

interface B extends A {
  b(): void;
}
```

接口 `B` 扩展了接口 `A`，它有两个方法 `a()` 和 `b()`。与类相似，`FutureMailable` 接口从 `Mailable` 接口继承了 `send()` 和 `queue()` 方法。

下面的例子演示如何实现 `FutureMailable` 接口：

```ts
class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    console.log(`Sent email to ${email} after ${after} ms. `);
    return true;
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`);
    return true;
  }
}
```

### 扩展多个接口的接口

一个接口可以扩展多个接口，创建所有接口的组合，如下所示：

```ts
interface C {
  c(): void;
}

interface D extends B, C {
  d(): void;
}
```

在这个例子中，接口 `D` 扩展了 `B` 和 `C` 接口，所以 `D` 接口有 `B` 和 `C` 接口的所有方法： `a()`, `b()` 和 `c()` 方法。

### 扩展类的接口

TypeScript 中允许接口扩展类，在这种情况下，接口会继承类的属性和方法，此外，接口可以继承类的私有成员和受保护成员，而不仅仅是公共成员。这意味着，当接口扩展具有私有成员和保护成员的类的时候，该接口只能有该接口所扩展的类或该类的子类中实现。

通过这种做法，可以把接口的使用范围限制为接口所继承的类或该类的子类，如果试图从一个不是接口继承的类或该类的子类来实现接口，则会抛出错误提示：

```ts
class Control {
  private state: boolean;
}

interface StatefulControl extends Control {
  enable(): void;
}

class Button extends Control implements StatefulControl {
  enable() {}
}
class TextBox extends Control implements StatefulControl {
  enable() {}
}
class Label extends Control {}

// Error: cannot implement
class Chart implements StatefulControl {
  enable() {}
}
```

### 小结

- 接口可以扩展一个或多个现有的接口；
- 接口也可以扩展类，如果类包含私有成员或者受保护成员，则接口只能由该类或该类的子类实现。
# Section 7. 高级类型

## 交叉类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/)

在本教程中，你将学习 TypeScript 中的交叉类型

### TypeScript 中的交叉类型介绍

交叉类型通过组合多有现有类型来创建新的类型，新的类型具有现有类型的所有属性

使用 `&` 操作符来组合类型，如下所示：

```ts
type typeAB = typeA & typeB;
```

`typeAB` 会有 `typeA` 和 `typeB` 的所有属性

注意，联合类型使用 `|` 操作符，定义一个可以保存 `typeA` 或者 `typeB` 类型的值

```ts
let varName = typeA | typeB; // union type
```

假设你有三个接口：`BusinessPartner`, `Identity` 和 `Contact`

```ts
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}
```

下面定义了两种交叉类型：

```ts
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
```

`Employee` 类包含 `Identity` 和 `Contact` 类型中的所有属性：

```ts
type Employee = Identity & Contact;

let e: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684',
};
```

`Customer` 类型包含 `BusinessPartner` 和 `Contact` 类型中的所有属性：

```ts
type Customer = BusinessPartner & Contact;

let c: Customer = {
  name: 'ABC Inc.',
  credit: 1000000,
  email: 'sales@abcinc.com',
  phone: '(408)-897-5735',
};
```

之后，如果你想实现销售员工，你可以创建一个新的交叉类型包含 `Identity`, `Contact` 和 `BusinessPartner` 三个类型中的所有属性：

```ts
type Employee = Identity & BusinessPartner & Contact;

let e: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684',
  credit: 1000,
};
```

注意 `BusinessPartner` 和 `Identity` 有相同类型的 `name` 属性，如果它们类型不同，你将会得到一个错误提示

### 类型顺序

当你进行类型交叉的时候，类型的顺序并不重要，比如：

```ts
type typeAB = typeA & typeB;
type typeBA = typeB & typeA;
```

在这个例子中，`typeAB` 和 `typeBA` 有相同的属性

### 小结

- 交叉类型可以结合了两个或者更多的类型，创建具有现有类型的所有属性的新类型
- 在组合类型的时候，类型的顺序并不重要


## 类型保护

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-guards/)

在本教程中，你将学习 TypeScript 中的类型保护

类型保护允许你使用 [条件代码块](https://cody1991.github.io/TypeScript-Tutorial/3-control-flow-statements/1-if-else.html) 来限定变量的类型范围

### typeof

让我们看看下面的例子：

```ts
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }

  throw new Error(
    'Invalid arguments. Both arguments must be either numbers or strings.',
  );
}
```

它是如何工作的：

- 属性，定义了 `alphanumeric` 类型，它可以保存 [字符串类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/3-string.html) 或者 [数字类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/2-number.html) 值
- 接下来，定义了 `add()` 函数，它把类型为 `alphanumeric` 的 `a` 变量与 `b` 变量进行相加
- 然后使用 `typeof` 操作符检查两个参数的类型是否都为 `number` 类型，如果是的话，使用 `+` 操作符计算参数之和
- 再然后使用 `typeof` 操作符检查两个参数的类型是否都为 `string` 类型，如果是的话，把两个字符串参数拼接起来
- 最后，如果两个参数不都全是数字或者字符串的话，抛出错误提示

在这个例子中，TypeScript 直到如何在条件代码块中使用 `typeof` 操作符，在下面的 [if](https://cody1991.github.io/TypeScript-Tutorial/3-control-flow-statements/1-if-else.html) 块中，TypeScript 认为 `a` 和 `b` 都是数字类型

```ts
if (typeof a === 'number' && typeof b === 'number') {
  return a + b;
}
```

类似地，在下面的 `if` 代码块中，TypeScript 将 `a` 和 `b` 作为字符串处理，因此，你可以把它们拼接成一个字符串：

```ts
if (typeof a === 'string' && typeof b === 'string') {
  return a.concat(b);
}
```

### instanceof

与 `typeof` 操作符类型，TypeScript 也知道 `instanceof` 操作符的使用，例如：

```ts
class Customer {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string;
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  }

  if (partner instanceof Supplier) {
    message = partner.isInShortList()
      ? 'Sign a new contract the supplier'
      : 'Need to evaluate further';
  }

  return message;
}
```

它是如何工作的：

- 首先，声明了 `Customer` 和 `Supplier` 两个类
- 第二， 创建一个类型别名 `BusinessPartner`，它是`Customer` 和 `Supplier` 的联合类型
- 第三，定义一个函数 `signContract()`，它接受一个类型为 `BusinessPartner` 的参数
- 最后，检查 `partner` 是否是 `Customer` 或者 `Supplier` 类的实例，然后进行对应的逻辑处理

在下面的 `if` 代码块中，TypeScript 通过 `instanceof` 操作符知道 `partner` 是 `Customer` 类型的一个实例：

```ts
if (partner instanceof Customer) {
  message = partner.isCreditAllowed()
    ? 'Sign a new contract with the customer'
    : 'Credit issue';
}
```

同样的方式，在下面的 `if` 代码块中，TypeScript 知道 `partner` 是 `Supplier` 类型的一个实例：

```ts
if (partner instanceof Supplier) {
  message = partner.isInShortList()
    ? 'Sign a new contract with the supplier'
    : 'Need to evaluate further';
}
```

当 `if` 代码块限定了一种类型，TypeScript 知道在 `else` 里面会是另外一种类型，例如：

```ts
function signContract(partner: BusinessPartner): string {
  let message: string;
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  } else {
    // must be Supplier
    message = partner.isInShortList()
      ? 'Sign a new contract with the supplier'
      : 'Need to evaluate further';
  }
  return message;
}
```

### in

`in` 操作符判断对象上是否存在某个属性来进行安全检查，你也可以将它用作类型保护，例如：

```ts
function signContract(partner: BusinessPartner): string {
  let message: string;
  if ('isCreditAllowed' in partner) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  } else {
    // must be Supplier
    message = partner.isInShortList()
      ? 'Sign a new contract the supplier '
      : 'Need to evaluate further';
  }
  return message;
}
```

### 用户定义的类型保护

用户定义的类型保护允许你使用函数的时候定义类型保护或者帮助 TypeScript 推断类型

用户定义的类型保护函数是一个简单返回 `arg is aType` 判断的函数，比如：

```ts
function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer;
}
```

在这个例子中，`isCustomer()` 是一个用户定义的类型保护函数，现在你可以按照下面的例子来使用它：

```ts
function signContract(partner: BusinessPartner): string {
  let message: string;
  if (isCustomer(partner)) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  } else {
    message = partner.isInShortList()
      ? 'Sign a new contract with the supplier'
      : 'Need to evaluate further';
  }

  return message;
}
```

### 小结

- 类型保护限定了条件代码块中变量的类型
- 使用 `typeof` 和 `instanceof` 操作符在条件代码块中的实现类型保护


## 类型转换

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/type-casting/)

在本教程中，你将学习 TypeScript 中的类型转换，它允许你将变量从一种类型转换到另外一种类型

JavaScript 没有类型转换的概念，因为变量具有动态类型的特性，而 TypeScript 中的变量都有类型，类型转换允许你将变量从一种类型转换到另外一种类型

TypeScript 中你可以使用 `as` 关键字或者 `<>` 操作符进行类型转换

### 使用 as 关键字进行类型转换

下面使用 [querySelector()](https://zh.javascript.info/searching-elements-dom#querySelector) 方法选择第一个输入元素：

```ts
let input = document.querySelector('input["type="text"]');
```

因为 `document.querySelector()` 方法的返回类型是 `Element` 类型，下面的代码会导致编译错误：

```ts
console.log(input.value);
```

因为 `Element` 类型不存在 `value` 属性，这个属性只存在 `HTMLInputElement` 类型上

为了解决这个问题，你可以使用类型转换，即使用关键字 `as` 把 `Element` 类型转换为 `HTMLInputElement` 类型，如下所示：

```ts
let input = document.querySelector('input[type="text"]') as HTMLInputElement;
```

现在，`input` 变量的类型是 `HTMLInputElement`，所以访问它的 `value` 属性不会导致任何错误，下面的代码可以正常工作：

```ts
console.log(input.value);
```

另外一种把 `Element` 类型转换为 `HTMLInputElement` 类型来访问属性的方法如下所示：

```ts
let enteredText = (input as HTMLInputElement).value;
```

注意 `HTMLInputElement` 方法扩展了 `HTMLElement` 类型，而 `HTMLElement` 类型扩展了 `Element` 类型。把 `HTMLElement` 类型转换为 `HTMLInputElement` 类型被称为向下转换

也可以如下进行向下转换：

```ts
let el: HTMLElement;
el = new HTMLInputElement();
```

在这个例子中，`el` 变量的类型是 `HTMLElement` 类型，你可以给它指定一个 `HTMLInputElement` 类型的实例，因为 `HTMLInputElement` 类型是 `HTMLElement` 类型的子类

将类型从 `typeA` 转换为 `typeB` 的语法如下：

```ts
let a: typeA;
let b = a as typeB;
```

### 使用 <> 操作符进行类型转换

除了 `as` 关键词，你可以使用 `<>` 操作符进行类型转换，如下所示：

```ts
let input = <HTMLInputElement>document.querySelector('input[type="text"]');

console.log(input.value);
```

使用 `<>` 操作符进行类型转换的语法是：

```ts
let a: typeA;
let b = <typeB>a;
```

### 小结

- 类型转换允许你将变量从一种类型转换到另外一种类型
- 使用 `as` 关键字或者 `<>` 操作符进行类型转换


## 类型断言

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/type-assertions/)

在本教程中，你将学习 TypeScript 中的类型断言

### TypeScript 中的类型断言介绍

类型断言让 TypeScript 编译器将某个值视为指定的类型，它使用 `as` 关键字来做到这点：

```ts
expression as targetType;
```

类型断言也被称为类型收缩，它允许你从 [联合类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/12-union-type.html) 收缩类型范围。让我们看下下面简单的函数：

```ts
function getNetPrice(
  price: number,
  discount: number,
  format: boolean,
): number | string {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}
```

`getNetPrice()` 函数接受 `price`, `discount` 和 `format` 三个参数，返回一个联合类型为 `number | string` 的值

如果 `format` 的值为 `true`，`getNetPrice()` 函数以字符串形式返回格式化后的净价格，否则以数字的形式返回净价格

下面使用 `as` 关键字告诉编译器，赋值给 `netPrice` 的值是一个字符串：

```ts
let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice);
```

输出：

```sh
$95
```

同样的，下面的例子使用 `as` 关键字告诉编译器，赋值给 `netPrice` 的值是一个数字：

```ts
let netPrice = getNetPrice(100, 0.05, false) as number;
console.log(netPrice);
```

输出:

```sh
95
```

注意类型断言不做任何 [类型转换](https://cody1991.github.io/TypeScript-Tutorial/7-advanced-types/3-casting.html) 的事情，它只是告诉编译器为了类型检查的目的，应该使用哪种类型应用于该值

### 可选的类型断言语法

你也可以使用尖括号语法 `<>` 来断言一个类型，比如：

```ts
<targetType>value;
```

例如：

```ts
let netPrice = <number>getNetPrice(100, 0.05, false);
```

注意你不能在 React 等库中使用尖括号语法 `<>`，出于这个原因，你应该进行类型断言的时候都是用 `as` 关键字

### 小结

- 类型断言告诉编译器把一个值视为指定的类型
- 类型断言不做任何转型转换的事情
- 类型断言使用 `as` 关键字或尖括号 `<>` 的语法
# Section 8. 泛型

## 泛型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/)

在本教程中，你将学习 TypeScript 中的泛型，它允许你使用类型作为形式参数

### TypeScript 中的泛型介绍

TypeScript 中的泛型允许你编写可重用的泛型函数，泛型 [类](https://cody1991.github.io/TypeScript-Tutorial/8-generics/3-generic-classes.html) 和 泛型 [接口](https://cody1991.github.io/TypeScript-Tutorial/8-generics/4-generic-interfaces.html)，在这个教程中，你将专注于通用函数的开发

通过一个简单的例子可以更加容易地解释 TypeScript 中的泛型概念

假设你需要开发一个函数，它返回一个 [数字](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/2-number.html) [数组](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/6-array-type.html) 中的一个随即元素

下面的 `getRandomNumberElement()` 函数接受一个数字数组作为参数，并从数组中返回一个随机元素：

```ts
function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

为了获取数组中的随即元素，你需要：

- 先找到随机索引
- 根据随机索引获得随机元素

要找到数组的随机索引，我们使用 `Math.random()` 函数，它会返回 `0` 和 `1` 之间的随机数，将它和数组的长度进行相乘，再把它传递给 `Math.floor()` 函数得到随机索引

下面展示了如何使用 `getRandomNumberElement()` 函数

```ts
let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));
```

假设你需要从一个 [字符串](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/3-string.html) 数组中获得随机元素，你可能想到开发一个新的函数：

```ts
function getRandomStringElement(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

`getRandomStringElement()` 函数的逻辑和 `getRandomNumberElement()` 函数的逻辑相同

下面展示了如何使用 `getRandomStringElement()` 函数

```ts
let colors = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colors));
```

稍后你可能需要获取对象数组中的随机元素，每次你想从新的类型数组中获得一个随机元素时，创建一个新的函数的方法不具有可扩展性

#### 使用 any 类型

这个问题的一个解决方案是把数组参数的类型设置为 `any[]`，通过这么处理，你只需要编写一个用于任何类型的数组的函数

```ts
function getRandomAnyElement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

`getRandomAnyElement()` 函数适用于 `any` 类型的数组，包括数字，字符串，对象等等

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let colors = ['red', 'green', 'blue'];

console.log(getRandomAnyElement(numbers));
console.log(getRandomAnyElement(colors));
```

这个解决方法是有效的，但是它有一个缺点：无法强制指定返回元素的类型，换句话说，它不是类型安全的

在保留类型的同时避免代码重复的更好的解决方法是使用泛型

#### TypeScript 泛型可以帮上忙

下面是一个泛型函数，它从类型为 `T` 的数组中返回随机元素：

```ts
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

这个函数使用类型变量 `T`，`T` 允许你补货调用函数时提供的类型，此外，该函数使用 `T` 类型变量作为返回类型

`getRandomElement()` 函数是通用的，因为它可以处理任何数据类型，包括字符串，数字和对象等等

按照惯例，我们使用 `T` 作为类型变量，然而你可以自由的使用其他字母，比如 `A`，`B` 和 `C` 等等

### 调用泛型函数

下面演示如何使用数字数组调用 `getRandomElement()` 函数：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers);
console.log(randomEle);
```

这个例子中显式地将 `number` 作为 `T` 类型传递给 `getRandomElement()` 函数

实践中，你可以使用 [类型推断](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/15-type-inference.html) 来推断类型。这意味着你可以让 TypeScript 编译器根据你传递的参数自动设置 `T` 的值，就像这样：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement(numbers);
console.log(randomEle);
```

在这个例子中，我们没有显式地给 `getRandomElement()` 函数传递 [数字类型](https://cody1991.github.io/TypeScript-Tutorial/2-basic-types/2-number.html)，编译器查看参数并把 `T` 设置为对应的类型

现在 `getRandomElement()` 函数也是类型安全的了，比如，如果你把返回值赋值给一个字符串变量，将会得到一个错误提示：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let returnElem: string;
returnElem = getRandomElement(numbers); // compiler error
```

### 具有多个类型变量的泛型函数

下面演示如何使用两个类型变量 `U` 和 `V` 开发泛型函数：

```ts
function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
```

`merge()` 函数合并两个类型为 `U` 和 `V` 的对象，它将两个对象的属性组合成一个新的对象

类型推断将 `merge()` 函数的返回类型推断为 `U` 和 `V` 的交集类型，即 `U & V`

下面演示了如何使用 `merge()` 函数来合并两个对象：

```ts
let result = merge({ name: 'John' }, { jobTitle: 'Frontend Developer' });

console.log(result);
```

输出：

```ts
{ name: 'John', jobTitle: 'Frontend Developer' }
```

### TypeScript 中泛型的好处

下面是 TypeScript 中泛型的好处：

- 编译时使用类型检查
- 消除 [类型转换](https://cody1991.github.io/TypeScript-Tutorial/7-advanced-types/3-casting.html).
- 允许你实现泛型算法

### 小结

- 使用 TypeScript 泛型来开发可复用的，通用的和类型安全的函数，接口和类


## 泛型约束

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/)

在本教程中，你将学习 TypeScript 中的通用约束

### TypeScript 中的通用约束介绍

思考下以下例子：

```ts
function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
```

`merge()` 是一个合并两个对象的泛型函数：

```ts
let person = merge({ name: 'John' }, { age: 25 });

console.log(result);
```

输出：

```ts
{ name: 'John', age: 25 }
```

它工作地很好。`merge()` 函数接受两个对象，但它不阻止你传递一个非对象参数，就像这样：

```ts
let person = merge({ name: 'John' }, 25);

console.log(person);
```

输出：

```ts
{
  name: 'John';
}
```

TypeScript 没有发出任何错误提示

你可能想给 `merge()` 函数添加一个约束，只能处理对象而不是处理所有的类型

要做到这一点，你需要列出要求，作为 `U` 和 `V` 类型的约束

为了表示约束，你可以使用 `extends` 关键字：

```ts
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
```

因为 `merge()` 函数受到了约束，它将不再适合用于所有类型，它现在只适合用于 `object` 类型

下面将导致一个错误：

```ts
let person = merge({ name: 'John' }, 25);
```

错误提示：

```sh
Argument of type '25' is not assignable to parameter of type 'object'.
```

### 在泛型约束中使用类型参数

TypeScript 允许声明受另外一个类型参数约束的类型参数

下面的 `prop()` 函数接受一个对象和一个属性名，它会返回属性的值：

```ts
function prop<T, K>(obj: T, key: K) {
  return obj[key];
}
```

编译器会发出下面的错误提示：

```sh
Type 'K' cannot be used to index type 'T'.
```

为了修正这个错误，你在 `K` 上添加一个约束来确保它是 `T` 的键，如下所示：

```ts
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

如果你传递给 `prop()` 函数一个 `obj` 对象上存在的属性明，编译器不会报错，如下所示：

```ts
let str = prop({ name: 'John' }, 'name');
console.log(str);
```

输出：

```sh
John
```

然后如果你传递一个在第一个参数上不存在的键名，编译器会发出一个错误提示：

```ts
let str = prop({ name: 'John' }, 'age');
```

错误提示：

```sh
Argument of type '"age"' is not assignable to parameter of type '"name"'.
```

### 小结

- 使用 `extends` 关键字将类型参数约束为特定类型
- 使用 `extends keyof` 来约束类型为另外一个对象属性集合的类型


## 泛型类

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-classes/)

在本教程中，你将学习 如何开发 TypeScript 中的泛型类

### TypeScript 中的泛型类介绍

[泛型](https://cody1991.github.io/TypeScript-Tutorial/8-generics/1-generics.html) 类的语法如下，泛型类型参数列表在尖括号 `<>` 中，跟着名称后面：

```ts
class className<T> {
  //...
}
```

TypeScript 允许你在类型参数列表中有多个泛型类型类型，如下所示：

```ts
class className<K, T> {
  //...
}
```

[泛型约束](https://cody1991.github.io/TypeScript-Tutorial/8-generics/2-generic-constraints.html) 也可以应用于类中的泛型类型：

```ts
class className<T extends TypeA> {
  //...
}
```

在类上放置类型参数允许你开发相同类型的方法和属性

### TypeScript 泛型类例子

在这个例子中，我们将开发一个 `Stack` 泛型类

栈是一个基于后进先出(LIFO)原则的数据结构，这就意味着你第一个放入到栈中的元素会是你从栈中最后一个获取到的元素

通常栈有大小限制，默认为空，栈有两个主要的操作：

- Push: 将一个元素推入到栈中
- Pop: 从栈中弹出一个元素

下面展示一个完整的栈泛型类，名为 `Stack<T>`：

```ts
class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error('The stack is overflow!');
    }
    this.elements.push(element);
  }
  pop(): T {
    if (this.elements.length == 0) {
      throw new Error('The stack is empty!');
    }
    return this.elements.pop();
  }
}
```

下面创建了一个新的数字栈：

```ts
let numbers = new Stack<number>(5);
```

下面的函数返回两个数字 `low` 和 `high` 之间的随机数：

```ts
function randBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
```

现在你可以使用 `randBetween()` 函数生成随机数，然后推入到 `numbers` 栈中：

```ts
let numbers = new Stack<number>(5);

while (!numbers.isFull()) {
  let n = randBetween(1, 10);
  console.log(`Push ${n} into the stack.`);
  numbers.push(n);
}
```

输出：

```sh
Push 3 into the stack.
Push 2 into the stack.
Push 1 into the stack.
Push 8 into the stack.
Push 9 into the stack.
```

下面演示如何从栈中弹出元素，直到栈为空：

```ts
while (!numbers.isEmpty()) {
  let n = numbers.pop();
  console.log(`Pop ${n} from the stack.`);
}
```

输出：

```sh
Pop 9 from the stack.
Pop 8 from the stack.
Pop 1 from the stack.
Pop 2 from the stack.
Pop 3 from the stack.
```

类似的，你可以创建一个字符串栈，例如：

```ts
let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach((word) => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
  console.log(wordStack.pop());
}
```

它是如何工作的：

- 首先，把橘子拆成单词
- 然后，创建一个栈，大小等于单词数组的单词数
- 第三，将单词数组中的单词推入栈中
- 最后，将栈中的单词弹出，直到栈为空


## 泛型接口

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-interfaces/)

在本教程中，你将学习 TypeScript 中的泛型接口

### TypeScript 中的泛型接口介绍

和类一样，接口也支持泛型的，泛型接口的语法如下，泛型类型参数列表在尖括号 `<>` 中，跟着接口名称后面：

```ts
interface interfaceName<T> {
  // ...
}
```

这使得类型参数 `T` 对接口的所有成员都可见

类型参数列表可以是一个或者多个类型，如下所示：

```ts
interface interfaceName<U, V> {
  // ...
}
```

### TypeScript 泛型接口例子：

看我们看几个声明泛型接口的列子：

#### 1) 描述对象属性的泛型接口

下面展示了一个泛型接口，他包含两个键值对成员，类型分别是 `K` 和 `V`

```ts
interface Pair<K, V> {
  key: K;
  value: V;
}
```

现在，你可以使用 `Pair` 接口定义任意类型的键值对，比如：

```ts
let month: Pair<string, number> = {
  key: 'Jan',
  value: 1,
};

console.log(month);
```

在这个例子中，我们定义了一个 `key` 为字符串类型而 `value` 为数字类型的键值对

#### 2) 描述方法的泛型接口

下面声明了一个泛型接口，它有两个方法：`add()` 方法和 `remove()` 方法：

```ts
interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}
```

`List<T>` 泛型类实现了 `Collection<T>` 泛型接口：

```ts
class List<T> implements Collection<T> {
  private items: T[] = [];

  add(o: T): void {
    this.items.push(o);
  }
  remove(o: T): void {
    let index = this.items.indexOf(o);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
```

对于 `List<T>` 类，你可以创建任意类型的值列表，如数字或者字符串

比如，下面展示了如何使用 `List<T>` 泛型类来创建一个数字列表：

```ts
let list = new List<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}
```

#### 3) 描述索引类型的泛型接口

下面声明了一个描述索引类型的接口：

```ts
interface Options<T> {
  [name: string]: T;
}

let inputOptions: Options<boolean> = {
  disabled: false,
  visible: true,
};
```
# Section 9. 模块

## 模块

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-modules/)

在本教程中，你将学习 TypeScript 中的模块，以及如何使用它来重构你的代码

### TypeScript 中的模块介绍

[自从 ES6 以来，JavaScript 开始支持模块](https://zh.javascript.info/modules-intro) ，作为语言的原生功能，TypeScript 与 JavaScript 的模块概念一致

TypeScript 模块可以同时包含声明和代码，模块在它自己的作用域中执行，而不是在全局作用域中。这意味着当你在一个模块中声明变量，[函数](https://cody1991.github.io/TypeScript-Tutorial/4-functions/1-functions.html)， [类](https://cody1991.github.io/TypeScript-Tutorial/5-classes/1-class.html) 和 [接口](https://cody1991.github.io/TypeScript-Tutorial/6-interfaces/1-interface.html) 等等的时候，它们在模块外部是不可见的，除非你使用 `export` 语句显式地导出它们

另一方面，如果你想从一个模块中访问变量，函数和类等，你需要使用 `import` 语句导入它们

和 ES6 一样，当 TypeScript 文件包含顶级 `import` 或者 `export` 的时候，它被视为一个模块

### 创建一个新的模块

下面创建了一个名为 `Validator.ts` 的新模块，声明了一个名为 `Validator` 的接口：

```ts
export interface Validator {
  isValid(s: string): boolean;
}
```

在这个模块中，我们将 `export` 关键字放在 `interface` 关键字前，以便将它公开给其他模块使用

换句话说，如果你不是用 `export` 关键字，`Validator` 接口在 `Validator.ts` 模块中是私有的，因此，它不能被其他模块使用

### 导出语句

从模块中到处声明的另外一种方法是使用 `export` 语句，比如：

```ts
interface Validator {
  isValid(s: string): boolean;
}

export { Validator };
```

TypeScript 也允许模块使用者重命名声明，就像这样：

```ts
interface Validator {
  isValid(s: string): boolean;
}

export { Validator as StringValidator };
```

在这个例子中，其他模块将使用 `Validator` 接口作为 `StringValidator` 接口

### 导入新模块

要使用一个模块，使用 `import` 语句，下面创建了一个使用 `Validator.ts` 模块的新模块 `EmailValidator.ts`

```ts
import { Validator } from './Validator';

class EmailValidator implements Validator {
  isValid(s: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(s);
  }
}

export { EmailValidator };
```

当你倒入一个模块的时候，你可以像这样重命名它：

```ts
import { Validator as StringValidator } from './Validator';
```

在 `EmailValidator` 模块中，你是用 `Validator` 接口作为 `StringValidator` 接口

```ts
import { Validator as StringValidator } from './Validator';

class EmailValidator implements StringValidator {
  isValid(s: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(s);
  }
}

export { EmailValidator };
```

下面演示如何在 `App.ts` 文件中使用 `EmailValidator` 模块：

```ts
import { EmailValidator } from './EmailValidator';

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result);
```

输出：

```sh
true
```

#### 导入类型

下面在 `Types.ts` 模块中声明了一个类型：

```ts
export type alphanumeric = string | number;
```

要从 `Types.ts` 模块中导入 `alphanumeric` 类型，你可以使用 `import type` 语句：

```ts
import type { alphanumeric } from './Types';
```

注意，TypeScript 从 3.8 版本开始支持 `import type` 语句，在 TypeScript 3.8 版本之前你需要使用 `import` 语句来代替：

```ts
import { alphanumeric } from './Types';
```

#### 从模块中导入所有内容

要从模块中导入所有内容，可以使用下面的语法：

```ts
import * from 'module_name';
```

### 重新导出

下面创建了一个使用 `Validator.ts` 模块，名为 `ZipCodeValidator.ts` 的新模块：

```ts
import { Validator } from './Validator';

class ZipCodeValidator implements Validator {
  isValid(s: string): boolean {
    const numberRegexp = /^[0-9]+$/;
    return s.length === 5 && numberRegexp.test(s);
  }
}

export { ZipCodeValidator };
```

你可以将 `EmailValidator` 和 `ZipCodeValidator` 模块打包到一个新的模块中，方法是使用以下语法组合导出它们所有的内容：

```ts
export * from 'module_name';
```

下面的示例演示了如何在 `FormValidator.ts` 模块中包装 `EmailValidator.ts` 和 `ZipCodeValidator.ts` 模块

```ts
export * from './EmailValidator';
export * from './ZipCodeValidator';
```

### 默认导出

TypeScript 允许每个模块都有一个默认导出，要将导出标记为 `default` 导出，你可以使用 `default` 关键字

下面展示了如何将 `ZipCodeValidator` 作为默认导出：

```ts
import { Validator } from './Validator';

export default class ZipCodeValidator implements Validator {
  isValid(s: string): boolean {
    const numberRegexp = /^[0-9]+$/;
    return s.length === 5 && numberRegexp.test(s);
  }
}
```

要导入一个默认导出，你可以使用一个不同的 `import` 语法，如下所示：

```ts
import default_export from 'module_name';
```

下面展示了如何在 `App.ts` 文件中使用 `ZipCodeValidator` 的默认导出：

```ts
import ZipCodeValidator from './ZipCodeValidator';

let validator = new ZipCodeValidator();
let result = validator.isValid('95134');

console.log(result);
```

输出：

```sh
true
```

### 小结

- TypeScript 与 ES6 module 的模块概念一致，一个模块可以同时包含声明和代码
- 在一个模块中，变量，函数，类和接口等等都在它自己的作用域上执行，而不是全局作用域下
- 使用 `export` 语句从模块中导出变量，函数，类，接口和类型等等
- 使用 `import` 语句访问来自另外一个模块的导出
# Section 10. Node.js

## Node.js

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/nodejs-typescript/)

在本教程中，你将学习如何搭建 Node.js 项目中的 TypeScript 自动化开发工作流

> 本教程假设你在你的系统上已经安装 Node.js 和 tsc 模块

### 创建项目结构

首先我们创建一个新的目录 `nodets`.

接下来，在 `nodets` 目录下面创建两个子目录，分别是 `build` 和 `src`，如下所示：

![nodejs-typescript-directory-structure](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/nodejs-typescript-directory-structure.4buzjj0j3lc0.png)

你的 TypeScript 代码存储在 `src` 目录下

当 TypeScript 编译器编译了 TypeScript 源文件的时候，它会把输出文件存储在 `build` 目录中

### 配置 TypeScript 编译器

在 macOS 和 Linux 的终端或者 Windows 上的命令提示符中，在 `nodets` 目录下运行下面的命令来创建 `tsconfig.json` 文件

```sh
tsc --init
```

你会看到 `nodets` 目录下 `tsconfig.json` 被创建了

![nodejs-typescript-tsconfig.json](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/nodejs-typescript-tsconfig.json_.jn33hl2u37k.png)

`tsconfig.json` 文件指定目录 (`nodets`) 是 TypeScript 项目的根目录

当你编译 TypeScript 文件的时候，TypeScript 编译器会使用 `tsconfig.json` 中的选项来编译项目

现在，你可以打开 `tsconfig.json` 文件，里面有非常多的选项，在本教程中，主要关注两个选项：

- `rootdir` – 指定 TypeScript 输入文件的根目录
- `outdir` - 存储 JavaScript 输出文件的目录

这些选项在默认情况下是被注释掉的，你需要取消它们的注释（删除行首的 `//`），并改成下面这样：

对于 `outDir` 选项：

```ts
"outDir": "./build"
```

而对于 `rootDir` 选项：

```ts
"rootDir": "./src"
```

为了验证新的配置是否正确，你可以在 `./src` 目录下创建一个名为 `app.ts` 的新文件，并敲入以下代码：

```ts
console.log('Node.js TypeScript');
```

![nodejs-typescript-app](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/nodejs-typescript-app.ts_.6j9le5sytxs0.png)

接下来运行下面的命令来执行 TypeScript 编译器，它会编译所有存储在 `src` 目录下的文件：

```sh
tsc
```

如果配置是正确的，你将会看到 `./build` 目录下生成了 `app.js` 文件

![nodejs-typescript-app](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/nodejs-typescript-app.js.4okqve6avca0.png)

导航到 `build` 目录并执行下面的命令来运行 `app.js` 文件：

```sh
node app.js
```

你会看到下面的输出：

```sh
Node.js TypeScript
```

每当你修改了 TypeScript 代码的时候，你需要：

- 构建项目
- 运行 JavaScript 输出文件

这样很浪费时间

幸运的是，你可以使用一些 Node.js 模块使整个流程自动化

### 安装 Node.js 模块

`nodemon` 模块允许你在更改了 JavaScript 源代码的时候，自动重新启动应用程序

`concurrently` 模块允许并发运行多个命令

首先在根目录下执行 `npm init` 命令：

```sh
npm init --yes
```

接下来，安装 `nodemon` 和 `concurrently` 模块：

```sh
npm install --g nodemon concurrently
```

它需要话费一定的时间去安装，当安装完成我们可以继续下面的步骤

注意 `--g` 标识指示 npm 全局安装这两个模块，它允许你在其他项目中使用它们

接下来，打开 `package.json` 文件，你在 `scripts` 选项中会看到下面的代码：

```json
...
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
...
```

接下来，把 `scripts` 修改成下面这样：

```json
...
"scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/app.js",
    "start": "concurrently npm:start:*"
},
...
```

`"start:build": "tsc -w"` 会监听 `./src` 下的文件变化，发生变化的时候自动重新编译它们

`"start:run": "nodemon build/app.js"` 每当新文件产生的时候，自动运行 `./build` 目录下的 `app.js` 文件

`"start": "concurrently npm:start:*"` 运行所有 `npm:start:*` 开头的命令，它会执行上面的 `start:build` 和 `start:run` 命令

因为 `app.js` 会是 Node.js 程序的入口点，你还需要把 `package.json` 文件中下面的选项修改成 `app.js`

从：

```ts
"main": "index.js"
```

修改成：

```ts
 "main": "app.js"
```

最后，运行下面的命令：

```sh
npm start
```

为了验证配置的正确性，你可以修改一些 `app.ts` 中的代码，然后你将会在控制台看到一些输出
