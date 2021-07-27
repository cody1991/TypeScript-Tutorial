---
title: 可选参数
---

## 可选参数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-optional-parameters/)

在本教程中，你将学习如何使用 TypeScript 中的函数的可选参数。

在 JavaScript 中，即使函数指定了参数，也可以在调用它的时候不传入任何参数，因为 JavaScript 默认支持可选参数。而在 TypeScript 中，编译器会检查每个函数的调用情况，并在以下情况中抛出错误提示：

- 实参的数量和函数中指定的形参的数量不同；
- 或者实参的类型和函数形参的类型不兼容。

因为编译器会彻查传递给函数的参数，我们可以使用可选参数告诉编译器参数是可选的，在不存在的情况下不发出错误提示。

要使函数的参数是可选的，可以在参数名后面添加 `?` 符号，如下所示：

```ts
function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
```

它是这样工作的：

- 首先，在 `c` 参数后面添加 `?` 符号；
- 然后，通过表达式 `typeof c !== 'undefined'` 检查 `c` 参数是否传递给了函数。

> 注意：如果你用表达式 `if(c)` 来检查参数是否被初始化，你会发现空字符串和 `0` 也被视为 `undefined`，这种判断是有问题的。

可选参数必须出现在参数列表中必选参数的后面。例如，如果你把 `b` 设置为可选参数，而 `c` 是必须参数，TypeScript 编译器会抛出一个错误提示：

```ts
function multiply(a: number, b?: number, c: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
```

错误提示：

```sh
error TS1016: A required parameter cannot follow an optional parameter.
```

### 小结

- 使用 `parameter?: type` 语法把参数设置为可选的；
- 使用 `typeof(parameter) !== 'undefined'` 表达式来检查可选参数是否初始化了。
