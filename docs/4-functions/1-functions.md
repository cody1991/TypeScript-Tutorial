---
title: 函数
---

## 函数

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-functions/)

在本教程中，你将学习 TypeScript 中的函数以及如何给函数添加类型注释。

### TypeScript 中的函数介绍

TypeScript 中的函数是一段可读，可维护和可复用的代码块，和 JavaScript 一样，可以使用 `function` 关键字来声明 TypeScript 中的函数：

```ts
function name(parameter: type, parameter: type, ...): returnType {
  // do something
}
```

和 JavaScript 不一样的是，TypeScript 允许为函数的参数和返回值添加 [类型注释](/2-basic-types/1-type-annotations/)，看看下面的 `add()` 函数：

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

在这个例子中，`add()` 函数接受两个 [数字类型](/2-basic-types/2-number/) 的参数。当你调用 `add()` 函数的时候，TypeScript 编译器会检查每个传递给函数的参数，保证它们都是数字类型的值。在 `add()` 函数的例子中，你只能传递数字类型的参数给它，不能是其他任何类型的值。下面的例子会抛出错误提示，因为它向 `add()` 函数传递了两个字符串类型的参数：

```ts
let sum = add('10', '20');
```

错误提示：

```sh
error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'
```

括号后面的 `: number` 表示返回值的类型，在本例中 `add()` 函数返回 `number` 类型的值。当函数有返回类型的时候，TypeScript 编译器会根据返回类型检查每个 `return` 语句，确保返回值都是兼容的。如果函数不返回值，使用 `void` 类型作为返回类型，`void` 关键字表示该函数不返回任何值，如下所示：

```ts
function echo(message: string): void {
  console.log(message.toUpperCase());
}
```

`void` 类型阻止函数内的代码返回值，也阻止调用函数的地方把函数的返回赋值给变量。

当没有注释返回值的类型的时候，TypeScript 会尝试推断它的类型，如下所示：

```ts
function add(a: number, b: number) {
  return a + b;
}
```

在这个例子中，TypeScript 编译器尝试把 `add()` 函数的返回值的类型推断为 `number` 类型，这是符合预期的。但是，如果函数有多个分支返回不同类型的值的时候，TypeScript 编译器可能推断出返回值的类型为 [联合类型](/2-basic-types/12-union-type/) 或者 [any 类型](/2-basic-types/9-any-type/)。因此，尽可能给函数添加类型注释。

### 小结

- 给函数的参数和返回值添加类型注释保证调用代码的内联性，以及在函数体中进行类型检查。
