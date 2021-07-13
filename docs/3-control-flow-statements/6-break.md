---
title: break
---

## break

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-break/)

在本教程中，你将学习 TypeScript 中的 break 语句，它可以用来中断循环和中断 `switch` 语句。

### 使用 break 语句终止循环

`break` 语句允许你终止一个循环，把程序的控制流传递到循环后的语句，可以在 [for](/3-control-flow-statements/3-for/)，[while](/3-control-flow-statements/4-while/) 和 [do while](/3-control-flow-statements/5-do-while/) 语句中使用 `break` 语句。下面的例子展示了如何在 `for` 循环中使用 `break` 语句：

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

下面的例子返回了指定产品的折扣，它使用 `break` 语句中断 [switch](/3-control-flow-statements/2-switch-case/) 语句：

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
