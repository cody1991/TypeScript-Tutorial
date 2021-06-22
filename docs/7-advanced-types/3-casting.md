---
title: 类型转换
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的类型转换，它允许你将变量从一种类型转换到另外一种类型
:::

JavaScript 没有类型转换的概念，因为变量具有动态类型的特性，而 TypeScript 中的变量都有类型，类型转换允许你将变量从一种类型转换到另外一种类型

TypeScript 中你可以使用 `as` 关键字或者 `<>` 操作符进行类型转换

# 使用 as 关键字进行类型转换

下面使用 [querySelector()](https://zh.javascript.info/searching-elements-dom#querySelector) 方法选择第一个输入元素：

```ts
let input = document.querySelector('input["type="text"]');
```

因为 `document.querySelector()` 方法的返回类型是 `Element` 类型，下面的代码会导致编译错误：

```ts
console.log(input.value);
```

因为 `Element` 类型不存在 `value` 属性，这个属性只存在 `HTMLInputElement` 类型上

为了解决这个问题，你可以使用类型转换，即使用关键字 `as` 把 `Element` 类型转换为 `HTMLInputElement` 类型，如下所示：

```ts
let input = document.querySelector('input[type="text"]') as HTMLInputElement;
```

现在，`input` 变量的类型是 `HTMLInputElement`，所以访问它的 `value` 属性不会导致任何错误，下面的代码可以正常工作：

```ts
console.log(input.value);
```

另外一种把 `Element` 类型转换为 `HTMLInputElement` 类型来访问属性的方法如下所示：

```ts
let enteredText = (input as HTMLInputElement).value;
```

注意 `HTMLInputElement` 方法扩展了 `HTMLElement` 类型，而 `HTMLElement` 类型扩展了 `Element` 类型。把 `HTMLElement` 类型转换为 `HTMLInputElement` 类型被称为向下转换

也可以如下进行向下转换：

```ts
let el: HTMLElement;
el = new HTMLInputElement();
```

在这个例子中，`el` 变量的类型是 `HTMLElement` 类型，你可以给它指定一个 `HTMLInputElement` 类型的实例，因为 `HTMLInputElement` 类型是 `HTMLElement` 类型的子类

将类型从 `typeA` 转换为 `typeB` 的语法如下：

```ts
let a: typeA;
let b = a as typeB;
```

# 使用 <> 操作符进行类型转换

除了 `as` 关键词，你可以使用 `<>` 操作符进行类型转换，如下所示：

```ts
let input = <HTMLInputElement>document.querySelector('input[type="text"]');

console.log(input.value);
```

使用 `<>` 操作符进行类型转换的语法是：

```ts
let a: typeA;
let b = <typeB>a;
```

# 总结

- 类型转换允许你将变量从一种类型转换到另外一种类型
- 使用 `as` 关键字或者 `<>` 操作符进行类型转换
