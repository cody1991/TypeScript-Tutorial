---
title: 联合类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 联合类型，该类型允许你在变量中存储一个或多个类型的值
:::

# TypeScript union 类型介绍

有时候你会遇到一个函数，它希望接受一个数字或者字符串作为参数，比如：

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

在这个例子中，如果参数都是数字，`add` 函数会计算参数之和

如果参数都是字符串，`add` 函数会把它们连接成一个字符串

如果参数既不都是数字也不是字符串，`add()` 函数会返回一个错误

`add()` 函数的问题是它的参数类型是 [any 类型](/2-basic-types/9-any-type/)，这意味着你可以使用既不都是数字也不都是字符串的方式来调用这个函数，TypeScript 能接受这种情况

代码可以编译成功但是在运行的时候会抛出错误：

```ts
add(true, false);
```

为了解决这个问题，你可以使用 TypeScript 联合类型，联合类型允许你把多个类型组合成一个类型

比如，下面的变量类型是 `number` 或者 `string`：

```ts
let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
result = false; // a boolean value, not OK
```

联合类型描述的值可以是几种类型中的一种，但不仅仅是两种，比如 `number | string | boolean` 是一个值的类型，它可以是数字，字符串或者布尔值

回到 `add()` 函数的例子，你可以把它的参数类型从 `any` 类型改为联合类型

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

# 总结

- TypeScript 联合类型允许你在变量中存储一个或者多个类型的值
