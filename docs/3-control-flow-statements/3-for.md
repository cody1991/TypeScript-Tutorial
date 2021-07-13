---
title: for
---

## for

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-for/)

在本教程中，你将学习 TypeScript 中的 for 语句，它可以重复执行一段代码。

### TypeScript 中的 for 语句介绍

下面是 TypeScript 中 `for` 循环语句的语法：

```ts
for (initialization; condition; expression) {
  // statement
}
```

`for` 循环语句被圆括号包裹起来，由分号 (`;`) 分隔的三个可选表达式组成：

- `initialization` - 在循环前执行的表达式，通常会在 `initialization` 中初始循环计数器的值；
- `condition` – 在每次循环迭代结束的时候执行的表达式，如果 `condition` 计算结果为 `true`，`for` 循环语句会继续执行循环体中的语句；
- `expression` – 在执行 `condition` 语句前执行的表达式，通常会在 `expression` 中更新循环计算器的值。

`for` 循环语句中的三个表达式都是可选的，这意味着可以这样使用它，如下所示：

```ts
for (;;) {
  // do something
}
```

在实践中，如果你知道循环执行多少次，你应该使用 `for` 循环，如果你需要根据循环次数以外的条件判断是否停止循环的时候，使用 `while` 循环语句。

TypeScript 允许你完全省略 `for` 循环语句的循环体，如下所示：

```ts
for (initialization; condition; expression);
```

但在实践中很少这样来使用它，它使得代码难以阅读和维护。

### 循环语句例子

让我们看几个使用 TypeScript 中的 `for` 循环语句的例子：

#### 1) 简单的 for 循环语句例子

下面的例子使用 `for` 循环语句输出从 `0` 到 `9` 之间的 `10` 个数字：

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

它是这样工作的：

- 首先，声明了 `i` 变量，把它的值初始化为 `0`；
- 检查 `i` 的值是否比 `10` 小，如果是的话把它的值输出到控制台，并给 `i` 变量加一；
- 最后，循环第二步直到 `i` 的值等于 `10`，结束循环。

#### 2) for 循环语句例子：可选表达式

下面的例子和上面的例子有着相同的输出结果，但是下面的 `for` 循环语句没有 `initialization` 表达式：

```ts
let i = 0;
for (; i < 10; i++) {
  console.log(i);
}
```

和 `initialization` 表达式一样，你也可以省略 `condition` 表达式。但是必须使用 `if` 或者 `break` 语句，在满足一些条件的时候终止循环，否则你将创建一个死循环语句，导致程序重复执行直至崩溃：

```ts
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 9) break;
}
```

下面的例子演示了一个省略了三个表达式的 `for` 循环语句：

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

它是这样工作的：

- 首先，在进入 `for` 循环语句前声明了一个 `i` 循环计数器，并把它的值初始化为 `0`；
- 然后，在每次循环迭代中，把 `i` 输出到控制台中并将它的值加一，判断如果 `i` 的值大于 `9` 的话，跳出循环语句。

### 小结

- 使用 TypeScript 中的 `for` 循环语句来重复执行一段代码。
