---
title: never 类型
---

:::tip 前言
在本教程中，你将学习 TypeScript never 类型，它不包含任何值
:::

`never` 类型是不包含值的类型，因为你不能给 `never` 类型的变量赋值

通常，你可以使用 `never` 类型来表示总是抛出错误的函数的返回类型，比如：

```TypeScript
function raiseError(message: string): never {
  throw new Error(message);
}
```

下面函数的返回值会被推断为 `never` 类型

```TypeScript
function reject() {
  return raiseError('Rejected');
}
```

如果你有一个包含无限循环的函数表达式，那么它的返回类型也是 `never` 类型，比如：

```TypeScript
let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}
```

在这个例子中，`forever()` 函数返回的类似是 `never`

如果你看到一个函数返回的类型是 `never`，那么你要确保这不是你想要做的

当你通过 [类型保护](/7-advanced-types/2-type-guards/) 收缩变量的类型时，变量也可以得到 `never` 类型，当它不能为真的时候

比如，如果没有 `never` 类型，下面的函数将会导致错误，因为不是所有的代码路径都返回值

```TypeScript
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }
}
```

为了使代码有效，你可以返回一个返回类型为 `never` 类型的函数

```TypeScript
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }
  // make the function valid
  return neverOccur();
}

let neverOccur = () => {
  throw new Error('Never!');
}
```

# 总结

- `never` 类型不包含值
- `never` 类型表示总是抛出错误的函数或者包含无限循环的函数的返回类型
