---
title: 可选参数
---

## 可选参数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-optional-parameters/)

在本教程中，你将学习如何使用 TypeScript 函数的可选参数

在 JavaScript 中，即使函数指定了参数，你也可以在调用它的时候不传入任何参数，因此 JavaScript 默认支持可选参数

而在 TypeScript 中，编译器会检查每个函数调用，并在以下情况中抛出错误：

- 实参的数量和函数中指定的形参的数量不同
- 或者实参的类型和函数形参的类型不兼容

因为编译器会彻查传递的参数，你可以通过注释可选参数，来指示编译器在忽略参数的情况下不发出错误提示

要使函数参数可选，你可以在函数名后面添加 `?`，比如：

```ts
function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
```

它是如何工作的：

- 首先，在 `c` 参数后面添加 `?`
- 然后，通过表达式 `typeof c !== 'undefined'` 检查 `c` 参数是否传递给了函数

> 注意如果你是用表达式 `if(c)` 来检查参数是否被初始化，你会发现空字符串和 `0` 也被视为 `undefined`

可选参数必须出现在参数列表中必选参数的后面

例如，如果你把 `b` 参数设置为可选的，`c` 参数是必须的，TypeScript 编译器会抛出一个错误提示：

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

- 使用 `parameter?: type` 语法使参数是可选的
- 使用 `typeof(parameter) !== 'undefined'` 表达式来检查可选参数是否被初始化了
