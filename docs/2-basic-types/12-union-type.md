---
title: 联合类型
---

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

`add()` 函数的问题是它的参数类型是 [any 类型](/2-basic-types/9-any-type/)，这意味着可以使用既不都是数字也不都是字符串的参数来调用它，TypeScript 能接受这种情况。代码可以编译成功，但是在运行的时候会抛出错误：

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
