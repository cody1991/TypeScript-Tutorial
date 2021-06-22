---
title: if else
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的 if else 语句
:::

# TypeScript 中的 if 语句

`if` 语句基于条件执行语句，如果条件为真，那么 `if` 语句会执行语句体中的语句

```ts
if (condition) {
  // if-statement
}
```

比如下面的语句演示了如果 `counter` 变量值小于 `max` 常量值，如何使用 `if` 语句来增加 `counter` 变量的值

```ts
const max = 100;
let counter = 0;

if (counter < max) {
  counter++;
}

console.log(counter); // 1
```

输出：

```sh
1
```

在这个例子中，因为 `counter` 变量初始值为 `0`，它小于 `max` 常量值，所以表达式 `counter < max` 的值为 `true`，因此 `if` 语句会执行 `counter++` 语句

让我们把 `counter` 变量初始化为 `100`

```ts
const max = 100;
let counter = 100;

if (counter < max) {
  counter++;
}

console.log(counter); // 100
```

输出：

```sh
100
```

在这个例子中，表达式 `counter < max` 计算结果为 `false`，所以 `if` 语句不会执行 `counter++` 语句，因此输出结果为 `100`

# TypeScript 中的 if else 语句

如果希望当条件语句计算结果为 `false` 的时候执行一些语句，你可以使用 `if else` 语句

```ts
if (condition) {
  // if-statements
} else {
  // else statements;
}
```

下面演示了一个使用 `if else` 语句的例子

```ts
const max = 100;
let counter = 100;

if (counter < max) {
  counter++;
} else {
  counter = 1;
}

console.log(counter);
```

输出：

```sh
1
```

在这个例子中，`counter < max` 表达式计算结果为 `false` ，所以 `else` 分支中的语句会被执行，即把 `counter` 变量的值设置为 `1`

## 三元运算符 ?:

在实践中，如果只是一个简单的条件判断，你可以使用三元运算符 `?:` 代替 `if else` 语句，这会让代码看起来更加短，比如：

```ts
const max = 100;
let counter = 100;

counter < max ? counter++ : (counter = 1);

console.log(counter);
```

# TypeScript 中的 `if` `else if` `else` 语句

当你想要执行多条件的语句的时候，你可以使用 `if` `else if` `else` 语句

`if` `else if` `else` 语句 可以有一个或者多个的 `else if` 分支，但是只会有一个 `else` 分支

例如：

```ts
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount
} else {
  discount = 15; // 15%
}

console.log(`You got ${discount}% discount. `);
```

输出：

```sh
0
```

这个例子根据 `items` 的数量，使用 `if` `else if` `else` 语句来确定折扣：

如果 `items` 的数量小于或者等于 `5`，折扣是 `5%`，`if` 分支的语句会被执行

如果 `items` 的数量小于等于 `10`，折扣是 `10%`， `else if` 分支的语句会被执行

当 `items` 的数量大于 `10`，折扣是 `15%`， `else` 分支的语句会被执行

在本例中，假设 `items` 的数量总是大于 `0`，但是如果 `items` 的数量小于 `0` 或者大于 `10`，折扣都是 `10%`

为了使代码更加健壮，你可以另外使用一个 `else if` 分支代替 `else` 分支，就像这样：

```ts
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount
} else if (discount > 10) {
  discount = 15; // 15%
} else {
  throw new Error("The number of items cannot be negative!");
}

console.log(`You got ${discount}% discount. `);
```

在本例中，只有但 `items` 的数量大于 `10` 的时候折扣是 `10%`，第二个 `else if` 分支的语句将会被执行

如果 `items` 的数量小于 `0`，`else` 分支会被执行

# 总结

- 使用 `if` 语句来根据条件执行代码
- 如果你想在条件为 `false` 的时候执行代码，那么使用 `else` 分支。使用三元运算符 `?:` 是一个好的实践，而不是简单的使用 `if else` 语句
- 使用 `if` `else if` `else` 语句去执行基于多个条件的代码
