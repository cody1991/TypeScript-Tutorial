---
title: 简介
---

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
