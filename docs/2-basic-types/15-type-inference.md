---
title: 类型推断
---

## 类型推断

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-inference/)

在本教程中，你将学习 TypeScript 中的类型推断

类型推断描述的是当你没有为变量添加 [类型注释](/2-basic-types/1-type-annotations/) 的时候，TypeScript 是如何推断变量的类型的。

### 类型推断基础

当你声明一个变量的时候，你可以使用 [类型注释](/2-basic-types/1-type-annotations/) 为变量指定某种类型，如下所示：

```ts
let counter: number;
```

当你把 `counter` 变量初始化一个数字的时候，TypeScript 会推断 `counter` 的类型为 [数字类型](/2-basic-types/2-number/)，如下所示：

```ts
let counter = 0;
```

它和下面的语句是等价的：

```ts
let counter: number = 0;
```

同样的，当你给函数参数赋值的时候，TypeScript 将参数的类型推断为默认值的类型，比如：

```ts
function setCounter(max = 100) {
  // ...
}
```

在这个例子中，TypeScript 推断 `max` 参数的类型为 `number` 类型。类似地，TypeScript 推断下面 `increment()` 函数的返回值类型为 `number` 类型：

```ts
function increment(counter: number) {
  return counter++;
}
```

它和下面例子是等价的：

```ts
function increment(counter: number): number {
  return counter++;
}
```

### 最佳通用类型算法

思考下面的语句：

```ts
let items = [1, 2, 3, null];
```

为了推断出 `items` 变量的类型，TypeScript 需要考虑数组中的每个元素的类型。TypeScript 使用最佳通用类型算法来分析每个候选类型，最终选择与所有候选类型都兼容的类型作为变量的类型。

在这个例子中，TypeScript 选择数字 [数组类型](/2-basic-types/6-array-type/) (`number[]`) 作为最佳通用类型。如果你往 `items` 数组中添加一个字符串，TypeScript 会把 `items` 变量的类型推断为数字与字符串组合的数组类型，即 `(number | string)[]`。

```ts
let items = [0, 1, null, 'Hi'];
```

当 TypeScript 找不到最佳通用类型的时候，它会返回联合数组类型，如下所示：

```ts
let arr = [new Date(), new RegExp('d+')];
```

在这个例子中，TypeScript 推断 `arr` 变量的类型为 `(RegExp | Date)[]`。

### 上下文类型

TypeScript 可以使用位置上下文推断变量的类型，这种机制被称为上下文类型，如下所示：

```ts
document.addEventListener('click', function (event) {
  console.log(event.button); //
});
```

在这个例子中，由于 `event` 参数在 `click` 事件中，TypeScript 知道它是 `MouseEvent` 的一个实例。

然而，当你把 `click` 事件修改成 `scroll` 事件，TypeScript 会抛出一个错误提示：

```ts
document.addEventListener('scroll', function (event) {
  console.log(event.button); // compiler error
});
```

错误提示：

```sh
Property 'button' does not exist on type 'Event'.(2339)
```

TypeScript 知道在这种情况下 `event` 不再是 `MouseEvent` 的实例，而是 `UIEvent` 的实例。而由于 `UIEvent` 没有 `button` 属性，访问 `MouseEvent` 实例的 `button` 属性的时候 TypeScript 会抛出了一个错误提示。

很多情况中可以找到上下文类型的踪影，比如函数调用的参数，类型断言，对象和数组的成员，返回语句和右侧赋值。

### 类型推断 vs 类型注释

下面展示了类型推断和类型注释的区别：

| 类型推断                    | 类型注释                       |
| :-------------------------- | :----------------------------- |
| TypeScript 会猜测变量的类型 | 明确告诉 TypeScript 变量的类型 |

所以，应该在什么时候使用类型推断，什么时候使用类型注释？实际上，你应该尽可能的使用类型推断，只有在下面的几种情况中才去使用类型注释：

- 当声明一个变量但在后面才为它赋值的时候；
- 当你希望一个变量的类型不能被推断的时候；
- 当一个函数的返回类型是 [any](/2-basic-types/9-any-type/) 类型，而你需要明确知道它的类型的时候。

### 小结

- 类型推断发生在初始化变量的值，设置参数默认值和需要确定函数返回值类型的时候；
- TypeScript 使用最佳通用类型算法来选择与所有变量类型兼容的最佳候选类型；
- TypeScript 还根据变量的位置，使用上下文类型来推断变量的类型。
