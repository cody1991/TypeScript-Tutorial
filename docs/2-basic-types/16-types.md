---
title: 类型
---

:::tip 前言
在本教程中，你将了解 TypeScript 中的类型和它的用途。
:::

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-types/)

## TypeScript 中的类型是什么

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

## TypeScript 中的类型

TypeScript 继承了 JavaScript 的内置类型，TypeScript 中的类型可分为：

- 原始类型
- 对象类型

### 原始类型

下面列出了 TypeScript 中的原始类型：

| 名字                                | 描述                                          |
| ----------------------------------- | --------------------------------------------- |
| [字符串](/2-basic-types/3-string/)  | 表示文本类型数据                              |
| [数字](/2-basic-types/2-number/)    | 表示数值                                      |
| [布尔值](/2-basic-types/4-boolean/) | 有 `true` 值和 `false` 值                     |
| null                                | 有一个值：null                                |
| undefined                           | 有一个值：undefined，它是未初始化变量的默认值 |
| symbol                              | 表示唯一常量值                                |

### 对象类型

对象类型包括函数，数组和类等，稍后你将学习如何创建自定义对象类型。

## TypeScript 中类型的作用

TypeScript 中类型的主要作用如下：

- 首先，TypeScript 编译器使用类型来分析代码中错误；
- 其次，类型帮助你了解变量所关联的值是什么。

## TypeScript 中类型示例

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

## 小结

- TypeScript 中每个值都有一种类型；
- 类型是描述值所具有的属性和方法的标签；
- TypeScript 编译器使用类型分析你的代码，找出其中存在的 bug 或者错误。
