---
title: for
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的 for 语句，它可以重复执行一段代码
:::

# TypeScript 中的 for 语句介绍

下面展示了 TypeScript 中 `for` 循环语句的语法：

```ts
for (initialization; condition; expression) {
  // statement
}
```

`for` 循环语句被圆括号包裹起来，由三个分号 (`;`) 分隔的可选表达式组成

- `initialization` - 是在循环之前执行一次的表达式，通常你可以使用 `initialization` 初始化一个循环计数器
- `condition` – 是每次循环迭代结束时求值的表达式，如果 `condition` 值为 `true`，继续执行循环体中的语句
- `expression` – 是每次循环迭代结束，在对 `condition` 求值之前求值的表达式，通常，你可以使用 `expression` 来更新循环计算器

`for` 循环语句中的三个表达式都是可选的，这意味着你可以像下面这样使用它：

```ts
for (;;) {
  // do something
}
```

在实践中，如果你知道循环执行多少次，你应该使用 `for` 循环，如果你想根据循环次数以外的条件停止循环，你应该使用 `while` 循环

TypeScript 允许你完全忽略循环体，如下所示：

```ts
for (initialization; condition; expression);
```

但是在实践中很少使用它，因为它使得代码更难阅读和维护

# TypeScript for 例子

让我们看几个使用 TypeScript `for` 循环语句的例子：

## 1) 简单的 TypeScript for 例子

The following example uses the `for` loop statement to output 10 numbers from 0 to 9 to the console:

下面的例子使用 `for` 循环语句输出从 `0` 到 `9` 的 `10` 个数字到控制台

```ts
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

Output:

```sh
0
1
2
3
4
5
6
7
8
9
```

它是如何工作的：

- 首先，声明了 `i` 变量，初始化为 `0`
- 检查 `i` 是否比 `10` 小，如果是的话把它输出到控制台，并且给 `i` 变量加一
- 最后，循环第二步直到 `i` 的值为 `10`

## 2) TypeScript for 例子：可选块

下面的例子和上面的例子由相同的输出，但是，`for` 循环语句没有 `initialization` 块：

```ts
let i = 0;
for (; i < 10; i++) {
  console.log(i);
}
```

和 `initialization` 块一样，你也可以忽略 `condition` 块

但是，你必须使用 `if` 和 `break` 语句来满足一些条件来终止循环，否则的话你将创建一个无限循环语句导致程序重复执行直至崩溃

```ts
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 9) break;
}
```

下面的例子演示了一个省略三个块的 `for` 循环

```ts
let i = 0;
for (;;) {
  console.log(i);
  i++;
  if (i > 9) break;
}
```

输出：

```sh
0
1
2
3
4
5
6
7
8
9
```

它是如何工作的：

- 首先，在进入 `for` 语句前声明了一个 `i` 循环计数器，初始化为 `0`
- 然后，在每次循环迭代中，把 `i` 输出到控制台，并将它进行加一，如果 `i` 的值比 `9` 大则跳出循环

# 小结

- 使用 TypeScript `for` 语句当你想要重复执行一段代码的时候
