---
title: 数字类型
---

## 数字类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-number/)

在本教程中，你将学习 TypeScript 中的数字数据类型。

TypeScript 中的所有数字，要么是浮点数，那么是大整数，浮点数的类型是 `number` 而大数字的类型是 `bigint`。

### 数字类型

下面的例子展示如果声明一个保存浮点数的变量：

```ts
let price: number;
```

或者你可以将 `price` 变量初始化为一个数字：

```ts
let price = 9.95;
```

和 JavaScript 一样，TypeScript 支持十进制，十六进制，二进制和八进制的数字字面量。

#### 十进制数字

下面展示了一些十进制数字：

```ts
let counter: number = 0;
let x: number = 100,
  y: number = 200;
```

#### 二进制数字

二进制数字的形式为：一个前导 `0`，后面跟着一个小写或大写的字母 `B` 的形式，比如 `0b` 或 `0B`：

```ts
let bin = 0b100;
let anotherBin: number = 0b010;
```

注意在 `0b` 或 `0B` 后面必须是数字 `0` 或数字 `1`。

#### 八进制数字

八进制数字的形式为：一个前导 `0`，后面跟着字母 `o`(自 ES2015 以来)，即 `0o` 的形式。在 `0o` 后面的数字的范围在数字 `0` 和数字 `7` 之间。

```ts
let octal: number = 0o10;
```

#### 十六进制数字

十六进制数字的形式为：一个前导 `0`，后面跟着一个小写或大写字母 `X` （`0x` 或 `0X`）的形式。在 `0x` 后面的数字的范围必须在 (`0123456789ABCDEF`) 之间，如下所示：

```ts
let hexadecimal: number = 0xa;
```

JavaScript 有一个 `Number` 类型（注意是大写字母 `N`），该类型表示的是非原始，封装的对象类型，在 TypeScript 中尽可能不使用 `Number` 类型。

### 大整数

大整数表示大于 `2^53 – 1` 的所有整数，一个大整数的末尾带有一个 `n` 字符，如下所示：

```ts
let big: bigint = 9007199254740991n;
```

### 小结

- TypeScript 中的所有数字，要么是 `number` 类型的浮点数，那么是 `bigint` 类型的大整数；
- 尽可能避免使用 `Number` 类型。
