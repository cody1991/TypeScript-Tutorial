---
title: switch case
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的 switch case 语句
:::

# TypeScript 中的 switch case 语句

下面展示了 `switch case` 语句的语法：

```TypeScript
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

```TypeScript
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

```TypeScript
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
    if (((year % 4 == 0) &&
        !(year % 100 == 0))
        || (year % 400 == 0))
        day = 29;
    else
        day = 28;
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
