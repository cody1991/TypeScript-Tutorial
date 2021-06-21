---
title: 函数
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的函数，以及如何使用类型注释来强制对函数进行类型检查
:::

# TypeScript 中的函数介绍

TypeScript 中的函数是可读的，可维护的和可复用的代码块

和 JavaScript 一样，你可以使用关键字 `function` 来声明 TypeScript 中的函数

```TypeScript
function name(parameter: type, parameter: type, ...): returnType {
  // do something
}
```

和 JavaScript 不一样的是，TypeScript 允许你在函数的参数和返回值中使用 [类型注释](/2-basic-types/1-type-annotations/)

让我们看下 `add()` 函数：

```TypeScript
function add(a: number, b: number): number {
  return a + b;
}
```

在这个例子中，`add()` 函数接受两个 [数字类型](/2-basic-types/2-number/) 的参数

当你调用 `add` 函数的时候，TypeScript 编译器会检查每个传给函数的参数，保证他们都是数字类型

在 `add()` 函数的例子中，你只能传递数字参数给它，不能是其他任何类型的值

下面的例子会导致错误，因为它向 `add()` 函数传递了两个字符串而不是两个数字参数

```TypeScript
let sum = add('10', '20');
```

错误提示：

```sh
error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'

函数参数的类型也可以在函数体中进行类型检查
```

括号后面的 `: number` 表示返回的类型，在本例中的 `add()` 函数返回 `number` 类型的值

当函数有返回类型的时候，TypeScript 编译器会根据返回类型检查每个 `return` 语句，确保返回值与它是兼容的

如果函数不返回值，你可以使用 `void` 类型作为返回类型，`void` 关键字表示该函数不返回任何值，例如：

```TypeScript
function echo(message: string): void {
  console.log(message.toUpperCase());
}
```

`void` 阻止函数内部的代码返回值，也阻止调用函数的地方将函数的结果赋值给变量

当你没有注释返回类型时，TypeScript 会尝试推断适当的类型，比如：

```TypeScript
function add(a: number, b: number) {
    return a + b;
}
```

在这个例子中，TypeScript 编译器尝试把 `add()` 函数的返回类型推断为 `number` 类型，这是符合预期的

但是，如果函数有返回不同类型的不同分支，那么 TypeScript 编译器可能推断出 [联合类型](/2-basic-types/12-union-type/) 或者 [any 类型](/2-basic-types/9-any-type/)

因此，将类型注释尽可能地添加到函数中是非常重要的

# 总结

- 为函数参数和返回类型使用类型注释保持调用代码的内联，确保在函数体中进行类型检查
