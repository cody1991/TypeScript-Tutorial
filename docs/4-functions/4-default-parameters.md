---
title: 默认参数
---

## 默认参数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-default-parameters/)

在本教程中，你将学习 TypeScript 中的默认参数

### TypeScript 中的默认参数介绍

JavaScript 自 ES2015 (或者称 ES6) 以来，开始支持 [默认参数](https://zh.javascript.info/function-basics#mo-ren-zhi)，它的语法如下：

```ts
function name(parameter1 = defaultValue1, ...) {
  // do something
}
```

在上述语法中，如果调用函数的时候不传递实参或者传递的实参值为 `undefined` ，函数会把默认的初始值赋值给缺省的形参，如下所示：

```ts
function applyDiscount(price, discount = 0.05) {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
```

在这个例子中，`applyDiscount()` 函数有一个默认参数 `discount`。如果在调用 `applyDiscount()` 函数的时候没有传递值给 `discount` 行参，函数会把默认值 `0.05` 赋值给它。与 JavaScript 类似，可以在 TypeScript 中使用相同的语法来指定默认参数：

```ts

function name(parameter1 :type = defaultvalue1, parameter2 :type = defaultvalue2, ...) {
  //
}
```

下面的例子使用了 `applyDiscount()` 函数的默认参数：

```ts
function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
```

注意不能在函数类型定义中包含默认参数，下面的代码讲会抛出错误提示：

```ts
let promotion: (price: number, discount: number = 0.05) => number;
```

错误提示：

```sh
error TS2371: A parameter initializer is only allowed in a function or constructor implementation.
```

### 默认参数和可选参数

和 [可选参数](/4-functions/3-optional-parameters/) 类似，默认参数也是可选的。这意味着在调用函数的时候可以省略默认参数。另外，默认参数和可选参数可能有相同的类型，比如下面两个函数：

```ts
function applyDiscount(price: number, discount: number = 0.05): number {
  // ...
}
```

和

```ts
function applyDiscount(price: number, discount?: number): number {
  // ...
}
```

它们有着如下所示相同的类型：

```ts
(price: number, discount?: number) => number;
```

可选参数必须在必选参数后面，但是默认参数不需要出现在必选参数后面。当默认参数出现在必选参数之前，需要显示的传递 `undefined` 来获取默认初始值的赋值。

下面的函数返回指定月份和年份中的天数：

```ts
function getDay(
  year: number = new Date().getFullYear(),
  month: number,
): number {
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
  return day;
}
```

在这个例子中，如果没有给 `year` 传递实参或者 `undefined` 值，`year` 默认值是当前年份。下面的例子使用 `getDay()` 函数来获取 2019 年 2 月的天数：

```ts
let day = getDay(2019, 2);
console.log(day); // 28
```

为了获取今年 2 月份的天数，需要如下所示把 `undefined` 值传递给 `year` 参数：

```ts
let day = getDay(undefined, 2);
console.log(day);
```

### 小结

- 如果你想要设置参数的默认初始值，使用默认参数的语法 `parameter:=defaultValue`；
- 默认参数是可选的；
- 要使用形参的默认初始值，在调用函数的时候忽略实参或者把 `undefined` 值传递给对应的参数。
