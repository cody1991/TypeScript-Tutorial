---
title: any 类型
---

:::tip 前言
在本教程中，你将学习 TypeScript any 类型以及如何在代码中正确使用它
:::

# TypeScript any 类型介绍

有时候你需要在变量中存储一个值，但在你编写程序的时候你不知道它的类型，这种未知的值可能来自第三方的 `API` 或者用户的输入

在这种情况下，你希望不使用类型检查，允许它在编译时通过检查，你可以使用 `any` 类型， `any` 类型允许你给变量赋任何类型的值

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

在这个例子中，`JSON.parse()` 函数返回的对象 赋值给了 `currentLocation` 变量

然后，当你访问呢 `currentLocation` 变量的属性的时候，TypeScript 不会做任何的类型检查

```ts
console.log(currentLocation.x);
```

输出：

```ts
undefined;
```

上面的例子中，TypeScript 编译器不会有编译时报错，也不会发出任何的错误提示

TypeScript 的 `any` 类型为你提供了一个可以与当前 JavaScript 代码库一起正常工作的方法，它允许你在编译期间逐步选择是使用类型检测，还是不使用类型检测。因此，你可以借助 `any` 类型将基于 JavaScript 语言的项目平滑地过渡成基于 TypeScript 语言的项目

# TypeScript any：隐式类型

如果你声明一个变量的时候没有指定类型，TypeScript 假定你使用的是 `any` 类型，这个特性叫做 [类型推断](/2-basic-types/15-type-inference/)。基本上 TypeScript 都会进行变量类型的推断，比如：

```ts
let result;
```

在这个例子中，TypeScript 会进行变量的类型的推断，这种做法叫做隐式类型

::: tip
注意要禁用 `any` 类型的隐式类型特性，你需要将 `tsconfig.json` 文件中的 `noImplicitAny` 选项的值修改为 `true`。你在后面的教程中会学习更多关于 `tsconfig.json` 配置文件的知识
:::

# TypeScript any vs. object

如果你使用 [对象类型](/2-basic-types/5-object-type/) 来声明一个对象，你也可以把它指定为 `any` 类型的值

然后，即使某个方法确实存在，你不能在它上面调用这个方法，比如：

```ts
let result: any;
result = 10.123;
console.log(result.toFixed());
result.willExist(); //
```

在这个例子中，即使 `willExist()` 方法在编译时不存在，TypeScript 编译器也不会发出任何的警告提示，因为 `willExist()` 函数可能在运行时是可用的

然后，你如果把 `result` 变量的类型改为 `object` 的话，TypeScript 编译器会发出一个错误提示：

```ts
let result: object;
result = 10.123;
result.toFixed();
```

错误提示：

```sh
error TS2339: Property 'toFixed' does not exist on type 'object'.
```

# 总结

- TypeScript `any` 类型允许你存储一个任意类型的值。 它指示编译器跳过类型检查
- 使用 `any` 类型存储在编译时或者 JavaScript 项目迁移成 TypeScript 项目时不知道类型的值
