---
title: any 类型
---

## any 类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-any-type/)

在本教程中，你将学习 TypeScript 中的 any 类型，以及如何在代码中正确地使用它。

### TypeScript 中地 any 类型介绍

有时候你需要在变量中存储一个值，但在你编写代码的时候你并不知道它的类型，这种未知的值可能来自第三方的 `API` 或者用户的输入。在这种情况下，如果你希望不进行类型检查，允许它在编译时通过检查，你可以使用 `any` 类型， `any` 类型允许你给变量赋任何类型的值：

```ts
// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);
```

输出：

```sh
{ latitude: 10.11, longitude: 12.12 }
```

在这个例子中，`JSON.parse()` 函数返回的对象赋值给了 `currentLocation` 变量。当你访问 `currentLocation` 变量的属性的时候，TypeScript 不会做任何的类型检查：

```ts
console.log(currentLocation.x);
```

输出：

```ts
undefined;
```

上面的例子中，TypeScript 编译器不会抛出任何的错误提示。

TypeScript 的 `any` 类型提供了一个可以与当前基于 JavaScript 的代码库一起正常工作的方案，它允许你在编译期间是否使用类型检测。因此，你可以借助 `any` 类型把基于 JavaScript 的项目平滑地过渡成为基于 TypeScript 的项目。

### TypeScript 隐式具有 any 类型

如果你在声明一个变量的时候没有指定类型，TypeScript 会假定变量使用的是 `any` 类型。这个特性被叫做 [类型推断](/2-basic-types/15-type-inference/)。TypeScript 基本上都会进行变量类型的推断，比如：

```ts
let result;
```

在这个例子中，TypeScript 会进行变量的类型推断，这种特性被称为隐式类型。

> 注意：要禁用 `any` 类型的隐式类型特性，你需要把 `tsconfig.json` 文件中的 `noImplicitAny` 选项的值调整为 `true`，你在后面的教程中会学习更多关于 `tsconfig.json` 配置文件的知识。

### TypeScript 中的 any 类型 vs 对象类型

```ts
let result: any;
result = 10.123;
console.log(result.toFixed());
result.willExist(); //
```

在这个例子中，`result` 变量的类型为 `any`类型，那么即使 `willExist()` 方法在编译时不存在，调用这个方法的时候 TypeScript 编译器也不会发出抛出任何的错误提示，因为 `willExist()` 函数可能在运行时是可用的。然而，如果把 `result` 变量的类型修改为 `object` 类型，TypeScript 编译器会抛出错误提示：

```ts
let result: object;
result = 10.123;
result.toFixed();
```

错误提示：

```sh
error TS2339: Property 'toFixed' does not exist on type 'object'.
```

### 小结

- TypeScript `any` 类型允许你存储任意类型的值，它告诉编译器不进行类型检查；
- 使用 `any` 类型来存储在编译时或者 JavaScript 项目迁移成 TypeScript 项目时不知道类型的值。
