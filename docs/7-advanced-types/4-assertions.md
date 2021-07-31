---
title: 类型断言
---

## 类型断言

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/type-assertions/)

在本教程中，你将学习 TypeScript 中的类型断言。

### TypeScript 中的类型断言介绍

类型断言可以让 TypeScript 编译器把某个值的类型视为特定的类型，使用 `as` 关键字来实现：

```ts
expression as targetType;
```

类型断言也被称为类型收缩，允许你收缩 [联合类型](/2-basic-types/12-union-type/) 的类型范围。看看下面一个简单的函数：

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

`getNetPrice()` 函数接受 `price`, `discount` 和 `format` 三个参数，返回一个联合类型为 `number | string` 的值。如果 `format` 的值为 `true`，`getNetPrice()` 函数以字符串形式返回格式化后的价格，否则以数字的形式返回价格。

下面使用 `as` 关键字告诉编译器，赋值给 `netPrice` 变量的值是一个字符串：

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

注意类型断言不做任何 [类型转换](/7-advanced-types/3-casting/) 的操作，它只是告诉编译器进行类型检查的时候应用哪种类型。

### 可选的类型断言语法

你也可以使用尖括号语法 `<>` 进行类型断言，如下所示：

```ts
<targetType>value;
```

例如：

```ts
let netPrice = <number>getNetPrice(100, 0.05, false);
```

注意你不能在 React 等库中使用尖括号语法 `<>`，出于这个原因，进行类型断言的时候保持使用 `as` 关键字是一种不错的选择。

### 小结

- 类型断言告诉编译器把某个值的类型视为特定的类型；
- 类型断言不做任何转型转换的操作；
- 类型断言的实现可以使用 `as` 关键字或者尖括号 `<>` 语法。
