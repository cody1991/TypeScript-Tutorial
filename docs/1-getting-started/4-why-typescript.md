---
title: 使用原因
---

## 使用原因

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/why-typescript/)

在本教程中，你将学习如何使用 TypeScript 来避免一些由 JavaScript 中的动态类型引发的问题。

### 为什么使用 TypeScript

下面罗列了使用 TypeScript 的主要原因：

- TypeScript 增加类型系统来避免一些由 JavaScript 中的动态类型引发的问题；
- TypeScript 实现了很多 JavaScript 的未来特性，也就是 [ES Next](https://zh.javascript.info/) 中的新特性，使得我们现在就可以使用它们。

本教程将聚焦在第一个原因上。

### 理解 JavaScript 中的动态类型

JavaScript 是一门动态类型语言，与其他的比如 `Java` 或者 `C#` 这些静态语言不同，值具有类型而不是变量，比如：

```ts
'Hello';
```

对于这个值，你可以说它的类型是 `string`，又比如下面的值是一个数字：

```ts
2020;
```

看看下面的例子：

```ts
let box;
box = 'hello';
box = 100;
```

`box` 变量的类型随着赋值给它的值的类型改变而改变。

你可以使用 `typeof` 操作符来找出 `box` 变量的类型：

```ts
let box;
console.log(typeof box); // undefined

box = 'Hello';
console.log(typeof box); // string

box = 100;
console.log(typeof box); // number
```

在这个例子中，第一条语句定义了一个变量但是没有进行赋值，它的类型是 `undefined`。

接下来，我们将 `"Hello"` 赋值给 `box` 变量并打印出它的类型，这个时候 `box` 变量的类型变成了 `string` 类型。

最后，我们将 `100` 赋值给 `box` 变量，这个时候，`box` 变量的类型变成了 `number` 类型。

正如你所见的，每当给变量赋值的时候，它的类型可能会发生变化。你不需要显式地告诉 JavaScript 变量的类型是什么，JavaScript 会自动根据值来出推断它的类型是什么。

动态类型具有灵活性，但它也引发了一些问题。

#### 动态类型引发的问题

假设你有一个函数，它会根据 `id` 来返回一个 `product` 对象：

```ts
function getProduct(id) {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}
```

下面的例子调用 `getProduct()` 函数查找 `id` 为 `1` 的产品信息，并显示出来：

```ts
const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);
```

输出内容是：

```sh
The product undefined costs $99.5
```

这与我们期望的结果不一致，这段代码的问题是 `product` 对象没有 `Name` 属性，它只有首字母为小写 `n` 的 `name` 属性，然而你只有在运行这段脚本的时候才能发现这个问题。引用对象上不存在的属性是编写 JavaScript 代码工作中常见的问题。

下面的例子定义了一个新的函数，它会在命令行工具中输出产品的信息：

```ts
const showProduct = (name, price) => {
  console.log(`The product ${name} costs ${price}$.`);
};
```

下面例子调用了 `getProduct()` 和 `showProduct()` 函数：

```ts
const product = getProduct(1);
showProduct(product.price, product.name);
```

输出内容是：

```sh
The product 99.5 costs $Awesome Gadget 1
```

我们以错误的顺序传递参数给 `showProduct()` 函数，这是在编写 JavaScript 代码的时候常见的另外一个问题。

使用 TypeScript 来解决这些问题，是我们引入 TypeScript 的重要原因。

### Typescript 如何解决这些动态类型引发的问题

解决引用对象上不存在的属性的问题，你可以按照下面的步骤来进行：

第一，我们使用 [接口](/6-interfaces/1-interface/) 定义 `product` 对象的 “形状”，注意你会在后面的教程中 [学习接口的相关知识](/6-interfaces/1-interface/)

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}
```

第二，显式使用 `Product` 类型作为 `getProduct()` 函数的返回类型：

```ts
function getProduct(id): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}
```

当你引用了一个对象上不存在的属性的时候，代码编辑器会马上告知你这个信息，如下所示：

```ts
const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);
```

代码编辑器会在 `Name` 属性下高亮显式下面的错误提示：

![why-typescript-error](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/why-typescript-error.5wcnv14y4240.png)

当你把鼠标悬停在这个错误提示上的时候，可以看到解决这个错误的方法：

![why-typescript-hint](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/why-typescript-hint.60w42juytao0.png)

为了解决由于以错误的顺序传递参数引发的问题，你可以显式地给函数的参数指定类型：

```ts
const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs ${price}$.`);
};
```

当你传递错误类型的参数给 `showProduct()` 函数的时候，你会收到一个错误提示：

```ts
const product = getProduct(1);
showProduct(product.price, product.name);
```

![why-typescript-error-in-function-arguments](https://cdn.jsdelivr.net/gh/cody1991/images@master/typescript-tutorial/why-typescript-error-in-function-arguments.6rj9183357s0.png)

### 小结

- JavaScript 是一门动态类型语言，它具有灵活性，但是引发了不少问题；
- TypeScript 在 JavaScript 之上增加了可选类型系统解决这些问题。
