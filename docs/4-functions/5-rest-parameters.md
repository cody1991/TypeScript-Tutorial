---
title: Rest 参数
---

## Rest 参数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-rest-parameters/)

在本教程中，你将学习 TypeScript 中的剩余参数，它允许你把不限数量的参数表示为一个数组参数。

Rest 参数允许函数接受零个或者多个指定类型的参数，在 TypeScript 中， Rest 参数遵守下面的规则：

- 一个函数只有一个 Rest 参数；
- Rest 参数出现在参数列表的最后面；
- Rest 参数的类型是 [数组类型](/2-basic-types/9-any-type/)。

要声明一个 Rest 参数，可以在参数名前加上三个点，并使用数组类型作为它的类型注释：

```ts
function fn(...rest: type[]) {
  //...
}
```

下面的例子演示了如何使用 Rest 参数：

```ts
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}
```

在这个例子中， `getTotal()` 函数计算传递给它的所有参数的总和。由于 `numbers` 参数是一个 Rest 参数，你可以传递一个或者多个数字，来计算它们的总和：

```ts
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
```
