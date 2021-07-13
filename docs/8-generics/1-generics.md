---
title: 泛型
---

## 泛型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/)

在本教程中，你将学习 TypeScript 中的泛型，它允许你使用类型作为形式参数

### TypeScript 中的泛型介绍

TypeScript 中的泛型允许你编写可重用的泛型函数，泛型 [类](/8-generics/3-generic-classes/) 和 泛型 [接口](/8-generics/4-generic-interfaces/)，在这个教程中，你将专注于通用函数的开发

通过一个简单的例子可以更加容易地解释 TypeScript 中的泛型概念

假设你需要开发一个函数，它返回一个 [数字](/2-basic-types/2-number/) [数组](/2-basic-types/6-array-type/) 中的一个随即元素

下面的 `getRandomNumberElement()` 函数接受一个数字数组作为参数，并从数组中返回一个随机元素：

```ts
function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

为了获取数组中的随即元素，你需要：

- 先找到随机索引
- 根据随机索引获得随机元素

要找到数组的随机索引，我们使用 `Math.random()` 函数，它会返回 `0` 和 `1` 之间的随机数，将它和数组的长度进行相乘，再把它传递给 `Math.floor()` 函数得到随机索引

下面展示了如何使用 `getRandomNumberElement()` 函数

```ts
let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));
```

假设你需要从一个 [字符串](/2-basic-types/3-string/) 数组中获得随机元素，你可能想到开发一个新的函数：

```ts
function getRandomStringElement(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

`getRandomStringElement()` 函数的逻辑和 `getRandomNumberElement()` 函数的逻辑相同

下面展示了如何使用 `getRandomStringElement()` 函数

```ts
let colors = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colors));
```

稍后你可能需要获取对象数组中的随机元素，每次你想从新的类型数组中获得一个随机元素时，创建一个新的函数的方法不具有可扩展性

#### 使用 any 类型

这个问题的一个解决方案是把数组参数的类型设置为 `any[]`，通过这么处理，你只需要编写一个用于任何类型的数组的函数

```ts
function getRandomAnyElement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

`getRandomAnyElement()` 函数适用于 `any` 类型的数组，包括数字，字符串，对象等等

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let colors = ['red', 'green', 'blue'];

console.log(getRandomAnyElement(numbers));
console.log(getRandomAnyElement(colors));
```

这个解决方法是有效的，但是它有一个缺点：无法强制指定返回元素的类型，换句话说，它不是类型安全的

在保留类型的同时避免代码重复的更好的解决方法是使用泛型

#### TypeScript 泛型可以帮上忙

下面是一个泛型函数，它从类型为 `T` 的数组中返回随机元素：

```ts
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
```

这个函数使用类型变量 `T`，`T` 允许你补货调用函数时提供的类型，此外，该函数使用 `T` 类型变量作为返回类型

`getRandomElement()` 函数是通用的，因为它可以处理任何数据类型，包括字符串，数字和对象等等

按照惯例，我们使用 `T` 作为类型变量，然而你可以自由的使用其他字母，比如 `A`，`B` 和 `C` 等等

### 调用泛型函数

下面演示如何使用数字数组调用 `getRandomElement()` 函数：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers);
console.log(randomEle);
```

这个例子中显式地将 `number` 作为 `T` 类型传递给 `getRandomElement()` 函数

实践中，你可以使用 [类型推断](/2-basic-types/15-type-inference/) 来推断类型。这意味着你可以让 TypeScript 编译器根据你传递的参数自动设置 `T` 的值，就像这样：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement(numbers);
console.log(randomEle);
```

在这个例子中，我们没有显式地给 `getRandomElement()` 函数传递 [数字类型](/2-basic-types/2-number/)，编译器查看参数并把 `T` 设置为对应的类型

现在 `getRandomElement()` 函数也是类型安全的了，比如，如果你把返回值赋值给一个字符串变量，将会得到一个错误提示：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let returnElem: string;
returnElem = getRandomElement(numbers); // compiler error
```

### 具有多个类型变量的泛型函数

下面演示如何使用两个类型变量 `U` 和 `V` 开发泛型函数：

```ts
function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
```

`merge()` 函数合并两个类型为 `U` 和 `V` 的对象，它将两个对象的属性组合成一个新的对象

类型推断将 `merge()` 函数的返回类型推断为 `U` 和 `V` 的交集类型，即 `U & V`

下面演示了如何使用 `merge()` 函数来合并两个对象：

```ts
let result = merge({ name: 'John' }, { jobTitle: 'Frontend Developer' });

console.log(result);
```

输出：

```ts
{ name: 'John', jobTitle: 'Frontend Developer' }
```

### TypeScript 中泛型的好处

下面是 TypeScript 中泛型的好处：

- 编译时使用类型检查
- 消除 [类型转换](/7-advanced-types/3-casting/).
- 允许你实现泛型算法

### 小结

- 使用 TypeScript 泛型来开发可复用的，通用的和类型安全的函数，接口和类
