---
title: 数字类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 数字数据类型
:::

TypeScript 中的所有数字，要么是浮点值，那么是大整数，浮点数字的类型是 `number` 而大数字的类型是 `bigint`

# 数字类型

下面的例子展示了如果声明一个保存浮点值的变量：

```TypeScript
let price: number;
```

或者你可以将 `price` 变量初始化为一个数字：

```TypeScript
let price = 9.95;
```

和 JavaScript 一样，TypeScript 支持十进制，十六进制，二进制和八进制的数字字面量

# 十进制数字

下面例子展示了一些十进制的数字：

```TypeScript
let counter: number = 0;
let x: number = 100,
    y: number = 200;
```

# 二进制数字

二进制数字使用一个前导零，后面跟着一个小写或者大写字母 `B`的形式，比如 `0b` 或者 `0B`

```TypeScript
let bin = 0b100;
let anotherBin: number = 0B010;
```

注意跟在 `0b` 或者 `0B` 后面的数字必须是 `0` 或者 `1`

# 八进制数字

八进制数字使用一个前导零，后面跟着字母 `o`(自 ES2015 以来)，即 `0o` 的形式，跟在 `0o` 后面的数字范围在 `0` 和 `7` 之间

```TypeScript
let octal: number = 0o10;
```

# 十六进制数字

十六进制数字使用一个前导零，后面跟着一个小写或者大写字母 `X` （`0x` 或者 `0X`）的形式。跟在 `0x` 后面的数字范围必须在 (`0123456789ABCDEF`) 之间，比如：

```TypeScript
let hexadecimal: number = 0XA;
```

JavaScript 具有 `Number` 类型（大写字母 `N`），该类型表示非原始封装对象。你在 TypeScript 中应该尽可能的不使用 `Number` 类型

# 大整数

大整数表示大于 `2^53 – 1` 的整数，一个大整数的末尾有一个 `n` 字符，就像这样：

```TypeScript
let big: bigint = 9007199254740991n;
```

# 总结

- TypeScript 中的所有数字，要么是类型为 `number` 的浮点值，那么是类型为 `bigint`的
- 尽可能避免使用 `Number` 类型
