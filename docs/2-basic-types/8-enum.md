---
title: 枚举类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的枚举类型，以及如何更高效地使用它。
:::

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-enum/)

## 什么是枚举

枚举是一些命名常量值的组合，`Enum` 代表枚举类型，按照下面的步骤来定义枚举：

- 首先，把变量名写在 `enum` 关键字之后；
- 然后，定义枚举中的常量值。

下面展示定义枚举的语法：

```ts
enum name {constant1, constant2, ...};
```

在这个语法中，`constant1` 和 `constant2` 等等被称为枚举的成员。

## TypeScript 中的枚举类型例子

下面的例子创建一个表示一年中所有月份的枚举：

```ts
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
```

在这个例子中，枚举名为 `Month` ，它的常量值有 `Jan`, `Feb` 和 `Mar` 等等。

下面声明一个函数，它使用 `Month` 枚举类型作为参数 `month` 的类型：

```ts
function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}
```

可以这样调用这个函数：

```ts
console.log(isItSummer(Month.Jun)); // true
```

这个例子使用枚举中的常量值，比如 `Jan`, `Feb` 和 `Mar` 等等，而不是 `1`, `2` 和 `3` 等等这些值，使得代码更加清晰易懂。

## TypeScript 中的枚举是如何工作的

在代码中使用枚举常量值是一个很好的实践方法。不过下面的例子把一个数字而不是枚举值传递给 `isItSummer()` 函数，它也能正常工作：

```ts
console.log(isItSummer(6)); // true
```

这个例子使用了一个数字 (`6`) 代替了 `Month` 中的枚举常量值，它也能正常工作。

检查下 `Month` 枚举生成的 Javascript 代码：

```ts
var Month;
(function (Month) {
  Month[(Month['Jan'] = 0)] = 'Jan';
  Month[(Month['Feb'] = 1)] = 'Feb';
  Month[(Month['Mar'] = 2)] = 'Mar';
  Month[(Month['Apr'] = 3)] = 'Apr';
  Month[(Month['May'] = 4)] = 'May';
  Month[(Month['Jun'] = 5)] = 'Jun';
  Month[(Month['Jul'] = 6)] = 'Jul';
  Month[(Month['Aug'] = 7)] = 'Aug';
  Month[(Month['Sep'] = 8)] = 'Sep';
  Month[(Month['Oct'] = 9)] = 'Oct';
  Month[(Month['Nov'] = 10)] = 'Nov';
  Month[(Month['Dec'] = 11)] = 'Dec';
})(Month || (Month = {}));
```

可以在控制台打印 `Month` 变量：

```ts
{
  '0': 'Jan',
  '1': 'Feb',
  '2': 'Mar',
  '3': 'Apr',
  '4': 'May',
  '5': 'Jun',
  '6': 'Jul',
  '7': 'Aug',
  '8': 'Sep',
  '9': 'Oct',
  '10': 'Nov',
  '11': 'Dec',
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
}
```

从输出中可以清楚地看到，TypeScript 枚举本质上是 JavaScript 中的对象，该对象在枚举中声明了命名属性，比如 `Jan` 是 `0`，而 `Feb` 是 `1`，也有数字键和表示命名常量的字符串值。这就是为什么你可以向接受枚举的函数传递一个数字的原因，换句话说，枚举成员既是数字也是已定义的常量值。

## 指定枚举成员的数值

TypeScript 根据枚举定义中成员的出现顺序来定义枚举成员的数值，比如 `Jan` 是 `0` 而 `Feb` 是 `1` 等等。

可以显式地为枚举成员指定数值，如下所示：

```ts
enum Month {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
```

在这个例子中，`Jan` 常量的值为 `1` 而不是 `0`，`Feb` 的值为 `2`，`Mar` 的值为 `3` 等等。

## 什么时候使用枚举

在下面情况中可以使用枚举：

- 有一组紧密相关且数量不多的固定值集合；
- 这些值在编译时已知。

例如，你可以使用枚举来表示审批状态：

```ts
enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected,
}
```

然后，你可以像下面这样来使用 `ApprovalStatus` 枚举：

```ts
const request = {
  id: 1,
  status: ApprovalStatus.approved,
  description: 'Please approve this request',
};

if (request.status === ApprovalStatus.approved) {
  // 发送邮件
  console.log('Send email to the Applicant...');
}
```

## 小结

- TypeScript 中的枚举是一组常量值的集合；
- 本质上，枚举是一个在枚举定义中声明了命名属性的 JavaScript 对象；
- 如果你有一组紧密相关且数量不多的固定值集合，并且这些值在编译时已知，那么一定要使用枚举
