---
title: 数组类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的数组类型，以及它的一些基本操作。
:::

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-array-type/)

## TypeScript 中的数组类型介绍

TypeScript 中的 `array` 是一个有序的数据列表，可以使用下面的语法来声明一个存储指定类型的值的数组：

```ts
let arrayName: type[];
```

如下所示，声明了一个 [字符串](/2-basic-types/3-string/) 数组：

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

在这个例子中，TypeScript [推断](/2-basic-types/15-type-inference/) `skills` 数组是一个字符串数组，它相当于：

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

当从一个数组中提取元素的时候，TypeScript 会执行 [类型推断](/2-basic-types/15-type-inference/) 的操作，如下所示：

```ts
let skill = skills[0];
console.log(typeof skill);
```

输出：

```sh
string
```

这个例子中，提取了 `skills` 数组中的第一个元素，把它赋值给了 `skill` 变量，由于字符串数组中的元素都是字符串，TypeScript 把 `skill` 变量的类型推断为字符串类型。

## TypeScript 中的数组的属性和方法

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

## 存储混合类型的值

下面演示了如何声明一个同时存储字符串和数字的数组：

```ts
let scores = ['Programming', 5, 'Software Design', 4];
```

在这个例子中，TypeScript 把 `scores` 数组推断为 `(string | number)[]` 类型，它和下面的例子是等价的：

```ts
let scores: (string | number)[];
scores = ['Programming', 5, 'Software Design', 4];
```

## 小结

- 在 TypeScript 中，数组是一个有序的数据列表，数组可以存储混合类型的值；
- 声明指定类型的数组，你可以使用 `let arr: type[]` 这个语法。
