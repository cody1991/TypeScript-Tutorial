---
title: continue
---

## continue

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-continue/)

在本教程中，你将学习 TypeScript 中的 continue 语句。

`continue` 语句用于辅助控制循环，比如 [for](/3-control-flow-statements/3-for/) 循环，[while](/3-control-flow-statements/4-while/) 循环，或者 [do while](/3-control-flow-statements/5-do-while/) 循环。`continue` 语句会跳到当前循环的末尾，然后开始下一个循环迭代。

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
