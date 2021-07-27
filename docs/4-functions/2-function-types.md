---
title: 函数类型
---

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
- 返回值的类型是 [数字类型](/2-basic-types/2-number/) ，它跟在参数列表和返回类型之间的胖箭头 (`=>`) 后面。

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

当在等式的一边有类型的时候，TypeScript 编译器可以推断出函数的类型，这种形式的 [类型推断](/2-basic-types/15-type-inference/) 被称为上下文类型，如下所示：

![TypeScript-Function-Type-Example](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/TypeScript-Function-Type-Example.6rkmnr74nik0.png)

在这个例子中，`add` 函数被推断为 `(x: number, y:number) => number` 类型。

通过类型推断，可以免去一些类型注释的工作，显著减少代码数。
