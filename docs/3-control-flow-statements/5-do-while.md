---
title: do while
---

## do while

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-do-while/)

在本教程中，你将学习如何使用 TypeScript 中的 do while 语句创建一个只有当条件为 `false` 的时候才会停止的循环语句。

### TypeScript 中的 do while 语句介绍

下面是 `do while` 语句的语法：

```ts
do {
  // do something
} while (condition);
```

`do while` 语句会一直执行循环体中的代码，直到 `condition` 计算值为 `false` 的时候。`do while` 语句至少执行一次它的循环体，和 `while` 语句不同，`do while` 语句会在每次循环迭代结束后才计算 `condition` 是否符合要求，因此它也被称为后测循环。

### TypeScript 中的 do while 语句案例

下面的例子使用 `do while` 语句把 `0` 到 `9` 之间的数字输出到控制台中：

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

它是这样工作的：

- 首先，声明变量 `i`，在进入循环值前把它的值初始化为 `0`；
- 接下来，把 `i` 输出到控制台并且加一。然后检查它的值是否小于 `10`，如果是的话，继续执行循环直到 `i` 的值大于或者等于 `10`。
