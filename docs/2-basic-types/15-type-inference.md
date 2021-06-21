---
title: 类型推断
---

:::tip 前言
在本教程中，你将学习 TypeScript 类型推断
:::

类型推断指的是当你没有明确 [注释](/2-basic-types/1-type-annotations/) 变量类型的时候，TypeScript 是如何推断它的类型的

# 类型推断基础

当你声明一个变量的时候，你可以使用 [类型注释](/2-basic-types/1-type-annotations/) 给它明确指定某种类型，比如：

```TypeScript
let counter: number;
```

然而，当你把 `counter` 变量初始化一个数字的时候，TypeScript 会推断 `counter` 的类型为 [数字类型](/2-basic-types/2-number/)，比如：

```TypeScript
let counter = 0;
```

它和下面的语句是等价的：

```TypeScript
let counter: number = 0;
```

同样，当你给函数参数赋值的时候，TypeScript 将参数的类型推断为默认值的类型，比如：

```TypeScript
function setCounter(max = 100) {
    // ...
}
```

在这个例子中，TypeScript 推断 `max` 参数的类型为 `number`

类似地，TypeScript 推断下面 `increment()` 函数的返回值类型为 `number`

```TypeScript
function increment(counter: number) {
    return counter++;
}
```

它和下面是等价的：

```TypeScript
function increment(counter: number) : number {
    return counter++;
}
```

# 最佳通用类型算法

思考下下面的语句：

```TypeScript
let items = [1, 2, 3, null];
```

为了推断 `items` 变量的类型，TypeScript 需要考虑数组中的每个元素的类型

它使用最佳通用类型算法区分析每个候选类型，最终选择与所有其他候选类型兼容的类型

在这个例子中，TypeScript 选择数组 [数组类型](/2-basic-types/6-array-type/) (`number[]`) 作为最佳通用类型

如果你往 `items` 数组中添加一个字符串，TypeScript 会把 `items` 的类型推断为数组与字符串数组：`(number | string)[]`

```TypeScript
let items = [0, 1, null, 'Hi'];
```

当 TypeScript 找不到最佳通用类型的时候，它会返回联合数组类型，比如：

```TypeScript
let arr = [new Date(), new RegExp('\d+')];
```

在这个例子中，TypeScript 推断 `arr` 的类型为 `(RegExp | Date)[]`

# 上下文类型

TypeScript 会使用变量的位置上下文来推断它的类型，这种机制被称为上下文类型，比如：

```TypeScript
document.addEventListener('click', function (event) {
    console.log(event.button); //
});
```

在这个例子中，TypeScript 知道 `event` 参数是 `MouseEvent` 的一个实例，因为它在 `click` 事件中

然后，当你把 `click` 事件修改成 `scroll` 事件的时候，TypeScript 会抛出一个错误：

```TypeScript
document.addEventListener('scroll', function (event) {
    console.log(event.button); // compiler error
});
```

错误提示：

```sh
Property 'button' does not exist on type 'Event'.(2339)
```

TypeScript 知道这种情况下的 `event` 是 `UIEvent` 的实例，而不是 `MouseEvent` 的实例，而 `UIEvent` 没有 `button` 属性，所以 TypeScript 抛出了一个错误

你会在一些情况下发现上下文类型的踪影，比如函数调用的参数，类型断言，对象的成员和数组成员，返回语句，以及右侧赋值

# 类型推断 vs. 类型注释

下面的例子展示了类型推断和类型注释的区别：

| 类型推断                  | 类型注释                         |
| :------------------------ | :------------------------------- |
| TypeScript 猜测变量的类型 | 你明确告诉 TypeScript 变量的类型 |

所以，你什么时候使用类型推断，什么时候使用类型注释？

实际上，你应该尽可能的使用类型推断，只有在下面的情况下使用类型注释：

- 当你声明了一个对象并且在后面才会给它进行赋值的时候
- 当你希望一个变量不被推断类型的时候
- 当一个函数返回 [any 类型](/2-basic-types/9-any-type/) 但你需要澄清它的值的时候

# 总结

- 类型推断发生在你初始化变量，设置参数默认值和可确定的函数返回类型的时候
- TypeScript 使用最佳通用类型算法来选择与所有变量兼容的最佳候选类型
- TypeScript 还使用上下文类型来推根据变量的位置推断变量的类型
