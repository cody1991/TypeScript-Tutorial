---
theme: geek-black
---

# Section 3. 控制流语句

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
  throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `);
```

在本例中，只有但 `items` 的数量大于 `10` 的时候折扣是 `10%`，第二个 `else if` 分支的语句将会被执行

如果 `items` 的数量小于 `0`，`else` 分支会被执行

# 小结

- 使用 `if` 语句来根据条件执行代码
- 如果你想在条件为 `false` 的时候执行代码，那么使用 `else` 分支。使用三元运算符 `?:` 是一个好的实践，而不是简单的使用 `if else` 语句
- 使用 `if` `else if` `else` 语句去执行基于多个条件的代码


:::tip 前言
在本教程中，你将学习 TypeScript 中的 switch case 语句
:::

# TypeScript 中的 switch case 语句

下面展示了 `switch case` 语句的语法：

```ts
switch (expression) {
  case value1:
    // statement 1
    break;
  case value2:
    // statement 2
    break;
  case valueN:
    // statement N
    break;
  default:
    //
    break;
}
```

它是如何工作的：

- 首先，`switch case` 语句计算 `expression` 的值
- 然后，它搜索第一个表达式计算出来的值 (`value1`, `value2`, `valueN` 等等) 与 `expression` 的值相同的 `case` 从句

`switch case` 语句会执行第一个匹配的 `case` 从句中的语句

如果没有发现匹配的 `case` 从句，`switch case` 语句会寻找可选的 `default` 从句。如果 `default` 从句可用，它会执行 `default` 从句中的语句

与每个 `case` 从句相关联的 `break` 语句保证控制流当 `case` 从句中的语句执行完毕的时候，从 `switch case` 语句中跳出

如果匹配的 `case` 从句没有 `break` 语句，程序会继续执行 `switch case` 语句中的下一个语句

按照惯例， `default` 从句是 `switch case` 语句 的最后一个从句，但是并不需要都是如此

# TypeScript switch case 语句例子

让我们看几个 `switch case` 语句的例子

## 1) 一个简单的 TypeScript switch case 例子

下面的例子展示了一个简单的 `switch case` 例子，它会基于 `targetId` 来展示信息

```ts
let targetId = 'btnDelete';

switch (targetId) {
  case 'btnUpdate':
    console.log('Update');
    break;
  case 'btnDelete':
    console.log('Delete');
    break;
  case 'btnNew':
    console.log('New');
    break;
}
```

输出:

```sh
Delete
```

在这个例子中，`targetId` 被赋值为 `btnDelete`

`switch case` 语句将 `targetId` 与一组值进行比较，因为 `targetId` 匹配了 `'btnDelete'` ，在对应的 `case` 从句中的语句被执行了

## 2) `case` 分组案例

如果你希望一段代码被多个 `case` 共享，你可以对它们进行分组，比如：

```ts
// change the month and year
let month = 2,
  year = 2020;

let day = 0;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    day = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    day = 30;
    break;
  case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) day = 29;
    else day = 28;
    break;
  default:
    throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);
```

输出：

```sh
The month 2 in 2020 has 29 days
```

这个案例返回特定年份和月份对应的天数

如果月份是 `1` `3` `5` `7` `8` `10` 或者 `12`，返回的天数为 `31`

如果月份是 `4` `6` `9` 或者 `11`，返回的天数为 `30` 天

如果月份是 `2` 并且是闰年的话，那么返回 `29` 天，否则返回 `28` 天


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


:::tip 前言
在本教程中，你将学习使用 TypeScript while 语句创建循环
:::

# TypeScript 中的 while 语句介绍

`while` 语句允许你创建一个循环，只要条件为 `true` 那么就执行一段代码

下面展示了 TypeScript `while` 语句的语法：

```ts
while (condition) {
  // do something
}
```

`while` 语句会在每次循环迭代前计算 `condition`

如果 `condition` 计算结果为 `true` ，`while` 语句将执行其主体中被花括号 (`{}`) 包裹的代码

当 `condition` 计算结果为 `false` ，继续执行 `while` 语句后面的语句

因为 `while` 语句在执行主体之前计算 `condition`，`while` 循环也被称为预测循环

你可以使用 `if` 和 `break` 语句，基于另外一个条件立刻中断循环

```ts
while (condition) {
  // do something
  // ...

  if (anotherCondition) break;
}
```

如果你想要循环运行某个循环 `number` 次的话，你可以使用 TypeScript `for` 语句

# TypeScript while 语句例子

让我们看几个使用 TypeScript `while` 语句的案例

## TypeScript while： 简单案例

下面的例子使用 `while` 语句，当 `counter` 小于 `5` 的时候输出它的值到控制台上

```ts
let counter = 0;

while (counter < 5) {
  console.log(counter);
  counter++;
}
```

输出：

```sh
0
1
2
3
4
```

它是如何工作的：

- 首先，声明了一个 `counter` 变量并初始化为 `0`
- 然后，在进入循环之前检查一下 `counter` 是否小于 `5`，如果是的话输出 `counter` 到控制台中，并且把它的值加一
- 最后，只要 `counter` 小于 `5`，重复执行上面的步骤

## TypeScript while 实践项目

假设你在 `HTML` 文档中有一下子列表元素：

```HTML
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

下面的例子展示了如果使用 `while` 语句去移除 `<ul>` 元素上所有的 `<li>` 元素：

```ts
let list = document.querySelector('#list');

while (list.firstChild) {
  list.removeChild(list.firstChild);
}
```

它是如何工作的：

- 首先，通过元素的 `id` 和 `querySelector()` 方法查找出 `<ul>` 元素
- 接下来，检查 `list` 变量的 `firstChild` 是否可用，如果是的话删除它。当第一个子节点被删除的时候，下一个子节点自动提升为第一个子节点。因此，`while` 语句可以删除 `list` 元素伤的所有子节点

# 小结

- 使用 TypeScript `while` 语句创建一个只要条件为 `true` 就会一直执行的循环


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


:::tip 前言
在本教程中，你将学习 TypeScript 中的 break 语句，它可以用来终止循环和 `switch` 语句
:::

# 使用 TypeScript break 语句终止循环

break 语句允许你终止一个循环，把程序控制流传递给循环后的下一条语句

你可以在 [for](/3-control-flow-statements/3-for/)，[while](/3-control-flow-statements/4-while/) 和 [do while](/3-control-flow-statements/5-do-while/) 语句内使用 `break` 语句

下面的例子展示了在 `for` 循环里面如何使用 `break` 语句

```ts
let products = [
  { name: 'phone', price: 700 },
  { name: 'tablet', price: 900 },
  { name: 'laptop', price: 1200 },
];

for (var i = 0; i < products.length; i++) {
  if (products[i].price == 900) break;
}

// show the products
console.log(products[i]);
```

输出：

```sh
{ name: 'tablet', price: 900 }
```

它是如何工作的：

- 首先初始化了一个带有名字和价格属性的 `products` 列表
- 然后，查找价格为 `900` 的产品，当产品被找到的时候，使用 `break` 语句中断循环
- 最后，我们把符合要求的产品输出到控制台

# 使用 break 语句中断 switch 语句

下面的例子返回指定产品的折扣，它使用 `break` 语句中断 [switch](/3-control-flow-statements/2-switch-case/) 语句

```ts
let products = [
  { name: 'phone', price: 700 },
  { name: 'tablet', price: 900 },
  { name: 'laptop', price: 1200 },
];

let discount = 0;
let product = products[1];

switch (product.name) {
  case 'phone':
    discount = 5;
    break;
  case 'tablet':
    discount = 10;
    break;
  case 'laptop':
    discount = 15;
    break;
}

console.log(`There is a ${discount}% on ${product.name}.`);
```

:::tip
注意，除了循环和 `switch` 语句外，`break` 语句还可以用于中断带有标签的语句。但是，它很少在实践中使用，所以在本教程中不进行讨论
:::

# 小结

- 使用 `break` 语句来中断循环或者 `switch` 语句


:::tip 前言
在本教程中，你将学习 TypeScript continue 语句
:::

`continue` 语句用于控制循环，比如 [for](/3-control-flow-statements/3-for/) 循环，[while](/3-control-flow-statements/4-while/) 循环，或者 [do while](/3-control-flow-statements/5-do-while/) 循环中

`continue` 语句会跳到当前循环的末尾，并继续到下一个迭代

# 在 for 循环中使用 TypeScript continue 语句

下面的例子演示了如何在 `for` 循环中使用 `continue` 语句

```ts
for (let index = 0; index < 9; index++) {
  // if index is odd, skip it
  if (index % 2) continue;

  // the following code will be skipped for odd numbers
  console.log(index);
}
```

Output:

```sh
0
2
4
6
8
```

在这个例子中：

- 首先，循环从 `0` 到 `9` 这几个数字
- 然后，如果当前的数字是奇数，使用 `continue` 语句跳过输出数字到控制台到操作。如果当前的数字是偶数，则将其输出到控制台

# 在 while 循环中使用 TypeScript continue 语句

The following example shows how to use the continue statement in a while loop. It returns the same result as the above example.

下面的例子展示了如何在 `while` 循环中使用 `continue` 语句，它返回的结果和上面的例子一样：

```ts
let index = -1;

while (index < 9) {
  index = index + 1;

  if (index % 2) continue;

  console.log(index);
}
```

Output:

```sh
0
2
4
6
8
```

# 在 do while 循环中使用 TypeScript continue 语句

The following example demonstrates how to use the continue statement in a do...while loop. It returns the number of even numbers from 9 to 99:

下面的例子展示了如何在 `do while` 循环中使用 `continue` 语句，它返回 `9` 到 `99` 之间偶数的数量

```ts
let index = 9;
let count = 0;

do {
  index += 1;
  if (index % 2) continue;
  count += 1;
} while (index < 99);

console.log(count); // 45
```

# 小结

- 使用 TypeScript `continue` 语句跳到循环的末尾，并继续下一个循环迭代
