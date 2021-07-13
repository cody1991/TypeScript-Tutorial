---
title: void 类型
---

## void 类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-void-type/)

在本教程中，你将学习 TypeScript 中的 void 类型，以及如何使用它来表示不返回任何值的函数的返回类型。

### TypeScript 中的 void 类型介绍

`void` 类型表示值没有任何类型，它有点像是 [any 类型](/2-basic-types/9-any-type/) 的反面。实际上你可以使用 `void` 类型表示不返回任何值的函数的返回类型，如下所示：

```ts
function log(message): void {
  console.log(messsage);
}
```

给一个不返回任何值的函数或者方法加上返回类型是 `void` 类型，是一个很好的实践方法，你可以获取到以下好处：

- 提高代码的清晰度：你不用完整的读完整个函数体来判断它是否返回了什么；
- 确保类型安全：你永远不会把一个返回类型为 `void` 类型的函数赋值给一个变量。

注意你如果使用一个类型为 `void` 的变量，你只能把它赋值为 `undefined`，这种情况下 `void` 类型的值是没有任何用处的，如下所示：

```ts
let useless: void = undefined;
useless = 1; // error
```

如果没有指定 `--strictNullChecks` 标志，你可以把 `null` 赋值给 `useless` 变量。

```ts
useless = null; // OK if --strictNullChecks is not specified
```
