---
title: if else
---

## if else

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-if-else/)

在本教程中，你将学习 TypeScript 中的 if else 语句。

### TypeScript 中的 if 语句

`if` 语句根据条件的真假来决定是否执行语句，如果条件为真，那么 `if` 语句会执行语句体中的语句：

```ts
if (condition) {
  // if-statement
}
```

下面的例子演示了如果 `counter` 变量的值小于 `max` 变量的值，如何使用 `if` 语句来增加 `counter` 变量的值：

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

在这个例子中，因为 `counter` 变量初始值为 `0`，它比 `max` 常量的值小，所以表达式 `counter < max` 的值为 `true`，因此 `if` 语句会执行 `counter++`。让我们把 `counter` 变量的值初始化为 `100`：

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

在这个例子中，表达式 `counter < max` 计算结果为 `false`，所以 `if` 语句不会执行 `counter++` ，因此输出结果为 `100`。

### TypeScript 中的 if else 语句

如果想在条件语句计算结果为 `false` 的时候执行另外一些语句，可以使用 `if else` 语句：

```ts
if (condition) {
  // if-statements
} else {
  // else statements;
}
```

下面演示了一个使用 `if else` 语句的例子：

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

在这个例子中，`counter < max` 表达式计算结果为 `false` ，所以 `else` 分支中的语句会执行，即把 `counter` 变量的值设置为 `1`。

#### 三元运算符 ?:

在实践中，如果只是一个简单的条件判断，你可以使用三元运算符 `?:` 代替 `if else` 语句，让代码看起来更加简短易懂，如下所示：

```ts
const max = 100;
let counter = 100;

counter < max ? counter++ : (counter = 1);

console.log(counter);
```

### if else if else 语句

想要执行多条件分支的语句，可以使用 `if` `else if` `else` 语句。`if` `else if` `else` 语句可以有一个或者多个的 `else if` 分支，但只会有一个 `else` 分支，如下所示：

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

这个例子根据 `items` 变量的值，使用 `if` `else if` `else` 语句来确定折扣：

- 如果 `items` 变量的值小于或者等于 `5` 的时候，那么折扣是 `5%`，`if` 分支的语句执行；
- 如果 `items` 变量的值小于等于 `10` 的时候，那么折扣是 `10%`，`else if` 分支的语句执行；
- 当 `items` 变量的值大于 `10` 的时候，那么折扣是 `15%`，`else` 分支的语句执行。

在本例中，假设了 `items` 变量的值总是大于 `0`，如果 `items` 变量的值小于 `0` 或者大于 `10` 的时候，折扣都是 `10%`。出于使代码更具有健壮性，可以在 `else` 分支前新增一个 `else if` 分支，如下所示：

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
  throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `);
```

在本例中，只有当 `items` 变量的值大于 `10` 的时候，折扣是 `10%`，第二个 `else if` 分支的语句执行。如果 `items` 变量的值小于 `0`，`else` 分支执行。

### 小结

- 使用 `if` 语句来根据条件的真假来决定是否执行语句；
- 使用 `else` 分支当你想在条件为 `false` 的时候执行某些代码，而使用三元运算符 `?:` 代替`if else` 语句是一个很好的实践方式；
- 使用 `if` `else if` `else` 语句执行多条件分支的语句。
