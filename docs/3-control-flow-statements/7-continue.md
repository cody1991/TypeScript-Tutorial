---
title: continue
---

:::tip 前言
在本教程中，你将学习 TypeScript continue 语句
:::

`continue` 语句用于控制循环，比如 [for](/3-control-flow-statements/3-for/) 循环，[while](/3-control-flow-statements/4-while/) 循环，或者 [do while](/3-control-flow-statements/5-do-while/) 循环中

`continue` 语句会跳到当前循环的末尾，并继续到下一个迭代

# 在 for 循环中使用 TypeScript continue 语句

下面的例子演示了如何在 `for` 循环中使用 `continue` 语句

```TypeScript
for (let index = 0; index < 9; index++) {
  // if index is odd, skip it
  if (index % 2)
    continue;

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

```TypeScript
let index = -1;

while (index < 9) {

  index = index + 1;

  if (index % 2)
    continue;

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

```TypeScript
let index = 9;
let count = 0;

do {
  index += 1;
  if (index % 2)
    continue;
  count += 1;

} while (index < 99);

console.log(count); // 45
```

# 总结

- 使用 TypeScript `continue` 语句跳到循环的末尾，并继续下一个循环迭代
