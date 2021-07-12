---
title: void 类型
---

:::tip 前言
在本教程中，你将学习 TypeScript void 类型，以及如何使用它作为不返回任何值的函数的返回类型
:::

# TypeScript void 类型介绍

`void` 类型表示没有任何类型，它有点像 [any 类型](/2-basic-types/9-any-type/) 的反面

实际上你可以使用 `void` 类型 作为不返回任何值的函数的返回类型，比如：

```ts
function log(message): void {
  console.log(messsage);
}
```

给一个不返回任何值的函数或者方法添加返回类型为 `void` 类型是一个很好的实践，这么做的话你可以获取到下面的好处：

- 提高代码的可读性：你不用完整的读完整个函数体来判断它是否返回了什么
- 提高类型安全：你永远不会把一个返回类型为 `void` 类型的函数赋值给一个变量

注意你如果使用一个类型为 `void` 的变量，你只能给它赋值为 `undefined`，这种情况下 `void` 类型是没有任何用处的，例如：

```ts
let useless: void = undefined;
useless = 1; // error
```

如果没有指定 `--strictNullChecks`标志，你可以把 `useless` 赋值给 `null`

If the `--strictNullChecks` flag is not specified, you can assign the `useless` to `null`.

```ts
useless = null; // OK if --strictNullChecks is not specified
```

# 小结

- 使用 `void` 类型 作为不返回任何值的函数的返回类型
