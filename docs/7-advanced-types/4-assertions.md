---
title: 类型断言
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的类型断言
:::

# TypeScript 中的类型断言介绍

类型断言让 TypeScript 编译器将某个值视为指定的类型，它使用 `as` 关键字来做到这点：

```ts
expression as targetType;
```

类型断言也被称为类型收缩，它允许你从 [联合类型](/2-basic-types/12-union-type/) 收缩类型范围。让我们看下下面简单的函数：

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

注意类型断言不做任何 [类型转换](/7-advanced-types/3-casting/) 的事情，它只是告诉编译器为了类型检查的目的，应该使用哪种类型应用于该值

# 可选的类型断言语法

你也可以使用尖括号语法 `<>` 来断言一个类型，比如：

```ts
<targetType>value;
```

例如：

```ts
let netPrice = <number>getNetPrice(100, 0.05, false);
```

注意你不能在 React 等库中使用尖括号语法 `<>`，出于这个原因，你应该进行类型断言的时候都是用 `as` 关键字

# 小结

- 类型断言告诉编译器把一个值视为指定的类型
- 类型断言不做任何转型转换的事情
- 类型断言使用 `as` 关键字或尖括号 `<>` 的语法
