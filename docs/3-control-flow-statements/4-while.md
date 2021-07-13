---
title: while
---

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
