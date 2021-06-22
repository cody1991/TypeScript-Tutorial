---
title: 数组类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 数组类型，以及它的一些基本操作
:::

# TypeScript 数组类型介绍

TypeScript `array` 是一个有序的数据列表。要声明一个保存特定类型的数组你可以使用以下语法：

```ts
let arrayName: type[];
```

例如下面的语句声明了一个 [字符串类型](/2-basic-types/3-string/) 的数组：

```ts
let skills: string[];
```

你可以往这个数组中添加一个或多个字符串：

```ts
skills[0] = "Problem Solving";
skills[1] = "Programming";
```

或者使用 `push()` 方法

```ts
skills.push("Software Design");
```

下面的语句声明了一个变量，并将一个字符串数组赋值给它：

```ts
let skills = ["Problem Sovling", "Software Design", "Programming"];
```

在这个例子中，TypeScript [推断](/2-basic-types/15-type-inference/) `skills` 数组为一个字符串数组，它相当于：

```ts
let skills: string[];
skills = ["Problem Sovling", "Software Design", "Programming"];
```

当你给一个数组定义了特定类型，TypeScript 将阻止你向数组中添加不兼容的值

下面的语句会引发一个错误：

```ts
skills.push(100);
```

因为我们尝试往字符串数组中添加一个数字

错误提示：

```sh
Argument of type 'number' is not assignable to parameter of type 'string'.
```

当你从一个数组中提取元素的时候，TypeScript 可以进行 [类型推断](/2-basic-types/15-type-inference/)，比如：

```ts
let skill = skills[0];
console.log(typeof skill);
```

输出：

```sh
string
```

这个例子中我们提取了 `skills` 数组中第一个元素，并将它赋值给了 `skill` 变量。

由于字符串数组中的元素是一个字符串，TypeScript 把 `skill` 变量的类型推断为字符串类型，如输出所示

# TypeScript 数组属性和方法

TypeScript 数组可以和 JavaScript 一样访问属性和方法。比如下面使用 `length` 属性来获取数组中元素的个数：

```ts
let series = [1, 2, 3];
console.log(series.length); // 3
```

而且你也可以用使用所有有用的数组方法，比如 `forEach()`, `map()`, `reduce()`, 和 `filter()`。如下所示：

```ts
let series = [1, 2, 3];
let doubleIt = series.map((e) => e * 2);
console.log(doubleIt);
```

输出：

```sh
[ 2, 4, 6 ]
```

# 存储混合类型值

下面演示了如何声明一个同时好汉字符串和数字的数组：

```ts
let scores = ["Programming", 5, "Software Design", 4];
```

在这个例子中，TypeScript 将 `scores` 数组推断为 `string | number` 数组

它和下面的例子是等价的：

```ts
let scores: (string | number)[];
scores = ["Programming", 5, "Software Design", 4];
```

# 总结

- 在 TypeScript 中，数组是一个有序的数据列表，数组可以存储混合类型值
- 声明特定类型的数组，你可以使用 `let arr: type[]` 语法
