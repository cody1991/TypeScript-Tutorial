---
title: do while
---

:::tip 前言
在本教程中，你将学习如何使用 TypeScript do while 语句去创建一个只有当条件为 `false` 的时候才停止的循环
:::

# TypeScript 中的 do while 语句介绍

下面展示了 `do while` 语句的语法：

```ts
do {
  // do something
} while (condition);
```

`do while` 语句将执行其主体中被花括号 (`{}`) 包裹的代码，直到 `condition` 计算结果为 `false`

`do while` 语句至少会执行一次它的循环体

和 `while` 语句不同，`do while` 语句会在每次循环迭代以后才计算 `condition` 是否符合，所以，它被称为后测试循环

# TypeScript do while 语句案例

下面的例子使用 `do while` 语句来把 `0` 到 `9` 的数字输出到控制台：

```ts
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
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

它是怎么工作的：

- 首先，声明了一个变量 `i`，在进入循环前把它初始化为 `0`
- 接下来，把 `i` 输出到控制台并且加一，检查它是否小于 `10`。如果是的话，继续循环直到 `i` 大于或者等于 `10`

# 小结

- 使用 `do while` 语句 创建一个循环，这个循环会一直运行，直到 `condition` 计算结果为 `false`
