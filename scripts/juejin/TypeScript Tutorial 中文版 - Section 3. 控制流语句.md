---
theme: jzman
---

- [TypeScript Tutorial 中文版 - 项目介绍](https://juejin.cn/post/6984281217168310302)
- [TypeScript Tutorial 中文版 - Section 0. 前言](https://juejin.cn/post/6984281996449021966)
- [TypeScript Tutorial 中文版 - Section 1. 入门](https://juejin.cn/post/6984290303880478757)
- [TypeScript Tutorial 中文版 - Section 2. 基本类型](https://juejin.cn/post/6984309148553445406)
- [TypeScript Tutorial 中文版 - Section 3. 控制流语句](https://juejin.cn/post/6984313301530312734)
- [TypeScript Tutorial 中文版 - Section 4. 函数](https://juejin.cn/post/6984313766053675022)
- [TypeScript Tutorial 中文版 - Section 5. 类](https://juejin.cn/post/6984313923902111781)

# Section 3. 控制流语句

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


## switch case

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-switch-case/)

在本教程中，你将学习 TypeScript 中的 switch case 语句

### TypeScript 中的 switch case 语句

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

它是这样工作的：

- 首先，`switch case` 语句计算 `expression` 的值;
- 然后，它搜索第一个计算出来的值 (`value1`, `value2` 和 `valueN` 等等) 与 `expression` 计算出来的值相同的 `case` 从句。

`switch case` 语句会执行第一个匹配的 `case` 从句中的语句。如果没有发现匹配的 `case` 从句，`switch case` 语句会寻找可选的 `default` 从句，如果 `default` 从句可用，它会执行 `default` 从句中的语句。

与每个 `case` 从句相关联的 `break` 语句保证当 `case` 从句中的语句执行完毕的时候，从 `switch case` 语句中跳出。如果匹配的 `case` 从句没有 `break` 语句，程序会继续 `switch case` 语句后面的语句。

按照惯例， `default` 从句是 `switch case` 语句的最后一个从句，但这不是强制要求的。

### switch case 语句例子

让我们看几个 `switch case` 语句的例子

#### 1) 一个简单的 switch case 例子

下面展示了一个简单的 `switch case` 例子，它会基于 `targetId` 的值来展示不同的信息：

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

在这个例子中，`targetId` 赋值为 `btnDelete`。`switch case` 语句将 `targetId` 与一组值进行比较，因为 `targetId` 匹配了 `'btnDelete'`，对应的 `case` 从句中的语句会被执行。

#### 2) case 分组案例

如果你希望一段代码被多个 `case` 共享，你可以对它们进行分组，如下所示：

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

这个案例返回指定年份及月份下对应的天数：

- 如果月份是 `1` `3` `5` `7` `8` `10` 或者 `12`，返回的天数为 `31`；
- 如果月份是 `4` `6` `9` 或者 `11`，返回的天数为 `30` 天
- 如果月份是 `2` 并且是闰年的话，返回 `29` 天，否则返回 `28` 天。


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


## while

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-while/)

在本教程中，你将学习如何使用 TypeScript 中的 while 语句创建循环语句。

### TypeScript 中的 while 语句介绍

`while` 语句允许你创建一个循环，只要条件为 `true` 的时候就会执行给定的代码。下面是 TypeScript 中的 `while` 语句的语法：

```ts
while (condition) {
  // do something
}
```

`while` 语句会在每次循环迭代前计算 `condition` 的值：

- 如果 `condition` 的值为 `true` ，`while` 语句将执行其循环体中的代码；
- 如果 `condition` 计算结果为 `false` ，跳出循环，执行 `while` 循环语句后面的语句。

由于 `while` 语句是在执行循环体前计算 `condition` 的值，它也被称为预测循环。

可以使用 `if` 和 `break` 语句，在某些条件成立的时候，中断循环：

```ts
while (condition) {
  // do something
  // ...

  if (anotherCondition) break;
}
```

如果希望执行特定次数的循环，可以使用 TypeScript 中的 `for` 循环语句。

### while 语句例子

让我们看几个 TypeScript 中的 `while` 语句的案例。

#### 一个简单的 while 语句案例

下面的例子使用 `while` 语句来判断当 `counter` 小于 `5` 的时候，把它的值输出到控制台上：

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

它是这样工作的：

- 首先，声明 `counter` 变量，并把它的值初始化为 `0`；
- 然后，在进入循环之前检查一下 `counter` 的值是否小于 `5`，如果是的话输出 `counter` 的值，并把它的值加一；
- 最后，当 `counter` 小于 `5` 的时候，重复执行上面的步骤。

#### while 语句项目实战

假设 `HTML` 文档中有以下元素列表：

```HTML
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

下面的例子展示了如果使用 `while` 语句移除 `<ul>` 元素上所有的 `<li>` 元素：

```ts
let list = document.querySelector('#list');

while (list.firstChild) {
  list.removeChild(list.firstChild);
}
```

它是这样工作的：

- 首先，通过 `id` 变量和 `querySelector()` 方法查找出 `<ul>` 元素；
- 接下来，检查 `list` 元素的 `firstChild` 第一个子节点是否存在，如果存在则把它删除。当第一个子节点被删除的时候，下一个子节点将自动提升成第一个子节点。因此，使用这个 `while` 循环语句可以删除掉 `list` 元素上的所有子节点。

### 小结

- 使用 TypeScript 中的 `while` 语句来创建一个只要条件为 `true` 的时候就会一直执行的循环。


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


## break

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-break/)

在本教程中，你将学习 TypeScript 中的 break 语句，它可以用来中断循环和中断 `switch` 语句。

### 使用 break 语句终止循环

`break` 语句允许你终止一个循环，把程序的控制流传递到循环后的语句，可以在 [for](https://juejin.cn/post/6984313301530312734)，[while](https://juejin.cn/post/6984313301530312734) 和 [do while](https://juejin.cn/post/6984313301530312734) 语句中使用 `break` 语句。下面的例子展示了如何在 `for` 循环中使用 `break` 语句：

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

它是这样工作的：

- 首先初始化一个带有名字和价格属性的 `products` 变量列表；
- 然后，查找价格为 `900` 的产品，当找到该产品的时候，使用 `break` 语句中断循环；
- 最后，我们把符合要求的产品输出到控制台中。

### 使用 break 语句中断 switch 语句

下面的例子返回了指定产品的折扣，它使用 `break` 语句中断 [switch](https://juejin.cn/post/6984313301530312734) 语句：

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

> 注意，除了循环语句和 `switch` 语句外，`break` 语句也可以用于中断带有标签的语句，但是它很少在实践中使用，所以在本教程中不进行更多的讨论。


## continue

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-continue/)

在本教程中，你将学习 TypeScript 中的 continue 语句。

`continue` 语句用于辅助控制循环，比如 [for](https://juejin.cn/post/6984313301530312734) 循环，[while](https://juejin.cn/post/6984313301530312734) 循环，或者 [do while](https://juejin.cn/post/6984313301530312734) 循环。`continue` 语句会跳到当前循环的末尾，然后开始下一个循环迭代。

### 在 for 循环中使用 continue 语句

下面的例子演示了如何在 `for` 循环中使用 `continue` 语句：

```ts
for (let index = 0; index < 9; index++) {
  // if index is odd, skip it
  if (index % 2) continue;

  // the following code will be skipped for odd numbers
  console.log(index);
}
```

输出：

```sh
0
2
4
6
8
```

在这个例子中：

- 首先，循环 `0` 到 `9` 这几个数字；
- 然后，当数字是奇数的时候，使用 `continue` 语句跳过把数字输出到控制台的操作，而当数字是偶数的时候，把它输出到控制台中。

### 在 while 循环中使用 continue 语句

下面的例子展示如何在 `while` 循环中使用 `continue` 语句，它和上面的例子的返回结果是一样：

```ts
let index = -1;

while (index < 9) {
  index = index + 1;

  if (index % 2) continue;

  console.log(index);
}
```

输出：

```sh
0
2
4
6
8
```

### 在 do while 循环中使用 continue 语句

下面的例子展示如何在 `do while` 循环中使用 `continue` 语句，它返回 `9` 到 `99` 之间存在的偶数的数量：

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
