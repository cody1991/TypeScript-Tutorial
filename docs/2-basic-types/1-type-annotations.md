---
title: 类型注释
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的类型注释。
:::

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/)

## TypeScript 中的类型注释是什么

TypeScript 使用类型注释显式地为变量，函数和对象等标识符指定类型。TypeScript 中的类型注释语法是在标识符后面添加 `: type` 标识，其中 `type` 可以是任何有效的类型。一旦标识符被声明为某种类型，那它在使用的时候只能是那种类型，如果以其他类型来使用，TypeScript 编译器会抛出一个错误提示。

## 变量和常量中的类型注释

下面是给变量和常量指定类型注释的语法：

```ts
let variableName: type;
let variableName: type = value;
const constantName: type = value;
```

在这个语法中，类型注释跟在变量或者常量名之后，前面是一个冒号 (`:`)。

下面例子中的变量使用了 [数字](/2-basic-types/2-number/) 类型注释：

```ts
let counter: number;
```

在这之后，你只能给 `counter` 变量赋值一个数字：

```ts
counter = 1;
```

如果你给变量 `counter` 赋值一个字符串，你会得到一个错误提示：

```ts
let counter: number;
counter = 'Hello'; // compile error
```

错误提示：

```sh
Type '"Hello"' is not assignable to type 'number'.
```

可以在一条语句中给变量添加类型注释的同时进行变量初始化操作，如下所示：

```ts
let counter: number = 1;
```

在这里例子中，我们给 `counter` 变量添加数字类型注释的时候把它初始化为 `1`。

下面是添加其他原始类型注释的例子：

```ts
let name: string = 'John';
let age: number = 25;
let active: boolean = true;
```

在这个例子中， 为 `name` 变量添加了 [字符串](/2-basic-types/3-string/) 类型注释，为 `age` 变量添加了 [数字](/2-basic-types/2-number/) 类型注释，为 `active` 变量添加了 [布尔值](/2-basic-types/4-boolean/) 类型注释

## 类型注释例子

### 数组

为 [数组类型](/2-basic-types/6-array-type/) 的变量添加类型注释，需要使用一个特定的类型：它的后面跟着一个方括号 `: type[] ` 标识：

```ts
let arrayName: type[];
```

比如下面的例子声明了一个字符串数组：

```ts
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
```

### 对象

为一个对象指定类型，使用对象类型注释，如下所示：

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

在这个例子中，`person` 对象只接受具有两个指定属性的对象：一个是类型为 `string` 名为 `name` 的属性，另外一个是类型为 `number` 名为 `age` 的属性。

## 函数参数和返回类型

下面展示了一个带有参数类型注释和返回类型注释的函数注释语法：

```ts
let greeting: (name: string) => string;
```

这个例子中你可以给 `greeting` 赋值一个函数，这个函数带有一个类型为字符串的参数，并且它的返回类型也是字符串：

```ts
greeting = function (name: string) {
  return `Hi ${name}`;
};
```

下面的例子由于分配给 `greeting` 变量的函数和它的 [函数](/4-functions/2-function-types/) 类型注释不匹配，会抛出一个错误提示：

```ts
greeting = function () {
  console.log('Hello');
};
```

错误提示：

```sh
Type '() => void' is not assignable to type '(name: string) => string'. Type 'void' is not assignable to type 'string'.
```

## 总结

- 使用语法为 `: [type]` 的类型注释方式，显式地给一个变量，函数或者函数返回值指定类型。
