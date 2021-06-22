---
title: 类型注释
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的类型注释
:::

# TypeScript 中的类型注释是什么

TypeScript 使用类型注释来显式地为诸如变量，函数，对象等等标识符指定类型

TypeScript 在标识符后面使用 `: type` 语法作为类型注释，其中 `type` 可以是任何有效的类型

一旦标识符被声明为某种类型，那它只能使用那种类型。如果标识符使用了其他不同的类型，TypeScript 编译器会发出一个错误提示

# 变量和常量中的类型注释

下面的语法展示了如何为变量和常量指定类型注释：

```ts
let variableName: type;
let variableName: type = value;
const constantName: type = value;
```

这种语法中，类型注释位于变量或者常量名之后，它的前面是一个冒号 (`:`)

下面例子中的变量使用了 [数字类型](/2-basic-types/2-number/) 注释：

```ts
let counter: number;
```

在这之后，你只能给 `counter` 变量赋值数字：

```ts
counter = 1;
```

如果你给变量 `counter` 赋值一个字符串，你将会收到一个错误：

```ts
let counter: number;
counter = 'Hello'; // compile error
```

错误提示：

```sh
Type '"Hello"' is not assignable to type 'number'.
```

你可以在一条单独的语句中，既为一个变量添加类型注释，也将它初始化处理：

```ts
let counter: number = 1;
```

在这里例子中，我们为 `counter` 变量添加了数字类型注释，也把它初始化为 1

下面是其他基本类型注释的例子：

```ts
let name: string = 'John';
let age: number = 25;
let active: boolean = true;
```

在这个例子中， `name` 变量获得 [字符串类型](/2-basic-types/3-string/) 类型注释，`age` 变量获得 `number` 类型注释，`active` 变量获得 [布尔值类型](/2-basic-types/4-boolean/) 类型注释

# 类型注释例子

## 数组

[数组类型](/2-basic-types/6-array-type/) 的注释需要一个特定的类型，后面跟着一个方括号 `: type[]`：

```ts
let arrayName: type[];
```

比如下面的例子声明了一个字符串数组：

```ts
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
```

## 对象

给一个对象指定类型，使用对象类型注释，比如：

```ts
let person: {
  name: string;
  age: number;
};

person = {
  name: 'John',
  age: 25,
}; // 合法的
```

在这个例子中，`person` 对象只接受具有下面两个属性的对象：类型为 `string` 的 `name` 属性和类型为 `number` 的 `age` 属性

# 函数参数和返回类型

下面展示了一个带有参数类型注释和返回类型注释的函数注释：

```ts
let greeting: (name: string) => string;
```

在这个例子中，你可以指定任何函数，它接受一个字符串参数并返回一个字符串值给 `greeting` 变量

```ts
greeting = function (name: string) {
  return `Hi ${name}`;
};
```

下面将会导致一个错误，因为分配给 `greeting` 变量的函数与它的 [函数类型](/4-functions/2-function-types/) 不匹配

```ts
greeting = function () {
  console.log('Hello');
};
```

错误：

```sh
Type '() => void' is not assignable to type '(name: string) => string'. Type 'void' is not assignable to type 'string'.
```

# 总结

使用语法 `: [type]` 的类型注释来显式指定一个变量，函数和函数返回值等的类型
