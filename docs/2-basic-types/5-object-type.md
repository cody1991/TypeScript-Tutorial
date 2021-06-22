---
title: 对象类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 对象数据类型，以及如何编写更加准确的对象类型声明
:::

# TypeScript 对象类型介绍

TypeScript `object` 类型代表所有不属于原始类型的值

TypeScript 中原始类型有下面这些：

- `number`
- `bigint`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`

下面的例子展示了如何声明一个保存对象的变量：

```ts
let employee: object;

employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(employee);
```

输出：

```sh
{
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
}
```

如果你重新给 `employee` 对象赋值一个原始值，你将得到一个错误提示：

```ts
employee = "Jane";
```

错误提示：

```sh
error TS2322: Type '"Jane"' is not assignable to type 'object'.
```

`employee` 对象是一个具有固定属性列表的 `object` 类型。如果你尝试去访问 `employee` 对象中不存在的属性，你将得到一个错误提示：

```ts
console.log(employee.hireDate);
```

错误提示：

```sh
error TS2339: Property 'hireDate' does not exist on type 'object'.
```

::: tip
注意上面的语句在 JavaScript 中能正常地工作，它会返回 `undefined`
:::

要显式地指定 `employee` 对象的属性，首先使用下面的语法来定义 `employee` 对象

```ts
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};
```

然后你给 `employee` 对象赋值具有上述描述属性的对象字面量

```ts
employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};
```

或者你可以把两种语法组合在同一个语句中，就像这样：

```ts
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};
```

# object vs. Object

TypeScript 有另外一种类型叫做 `Object`，字符 `O` 是大写的。理解它们之间的区别是非常重要的

`object` 类型代表所有的非原始值，而 `Object` 类型描述所有对象的功能

比如，`Object` 类型具有可以被任何对象访问的 `toString()` 和 `valueOf()` 方法，

# 空类型 {}

TypeScript 有另外一种类似叫做空类型，使用 `{}` 表示，它和 `object` 类型非常类似

空类型 `{}` 描述一个本身没有属性的对象，如果你尝试去访问这种类型对象的某个属性，TypeScript 会发出一个编译时错误提示：

```ts
let vacant: {};
vacant.firstName = "John";
```

错误提示：

```sh
error TS2339: Property 'firstName' does not exist on type '{}'.
```

但是你可以通过 [原型链](https://zh.javascript.info/prototype-inheritance) 访问所有在 `Object` 类型上定义的属性和方法

```ts
let vacant: {} = {};

console.log(vacant.toString());
```

输出：

```sh
[object Object]
```

# 总结

- TypeScript `object` 类型代表所有的非原始类型的值
- 而 `Object` 类型描述所有对象上可用的功能
- 空类型 `{}` 描述一个自身没有属性的对象
