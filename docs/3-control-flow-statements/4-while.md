---
title: while
---

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

# 总结

- 使用 TypeScript `while` 语句创建一个只要条件为 `true` 就会一直执行的循环
