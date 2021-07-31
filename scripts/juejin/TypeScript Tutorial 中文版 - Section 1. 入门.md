---
theme: jzman
---

- [TypeScript Tutorial 中文版 - 项目介绍](https://juejin.cn/post/6984281217168310302)
- [TypeScript Tutorial 中文版 - Section 0. 前言](https://juejin.cn/post/6984281996449021966)
- [TypeScript Tutorial 中文版 - Section 1. 入门](https://juejin.cn/post/6984290303880478757)
- [TypeScript Tutorial 中文版 - Section 2. 基本类型](https://juejin.cn/post/6984309148553445406)
- [TypeScript Tutorial 中文版 - Section 3. 控制流语句](https://juejin.cn/post/6984313301530312734)
- [TypeScript Tutorial 中文版 - Section 4. 函数](https://juejin.cn/post/6984313766053675022)
- [TypeScript Tutorial 中文版 - Section 5. 类](https://juejin.cn/post/6984313923902111781)
- [TypeScript Tutorial 中文版 - Section 6. 接口](https://juejin.cn/post/6984313984061505567)
- [TypeScript Tutorial 中文版 - Section 7. 高级类型](https://juejin.cn/post/6984314053757763592)
- [TypeScript Tutorial 中文版 - Section 8. 泛型](https://juejin.cn/post/6984314162402820133)
- [TypeScript Tutorial 中文版 - Section 9. 模块](https://juejin.cn/post/6984314312739258398)
- [TypeScript Tutorial 中文版 - Section 10. Node.js](https://juejin.cn/post/6984314534802489352)

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
