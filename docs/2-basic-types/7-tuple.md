---
title: 元组类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的元组类型，以及它的使用方法。
:::

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-tuple/)

## TypeScript 中的元组类型介绍

元组的工作机制和 [数组类型](/2-basic-types/6-array-type/) 类似，但有一些额外的条件限制：

- 元组中元素的数量是固定的；
- 元素中元素的类型是已知的，并且它们不需要都相同。

例如，可以用元组来表示一个由 `string` 和 `number` 类型组成的值：

```ts
let skill: [string, number];
skill = ['Programming', 5];
```

元组中的值的顺序非常重要，如果把 `skill` 元组中值的顺序调整成 `[5, "Programming"]`，将会得到一个错误提示：

```ts
let skill: [string, number];
skill = [5, 'Programming'];
```

错误提示：

```sh
error TS2322: Type 'string' is not assignable to type 'number'.
```

综上所述，对于有特定顺序且相互关联的数据，使用元组来存储它们是一个很好的实践方法。例如，可以使用一个元组来定义一个 `RGB` 颜色值，它总是以三个数字的形式出现：

```sh
(r,g,b)
```

如下所示：

```ts
let color: [number, number, number] = [255, 0, 0];
```

`color[0]`, `color[1]` 和 `color[2]` 分别映射到 `Red`, `Green` 和 `Blue` 颜色值上。

## 可选元组元素

从 TypeScript 3.0 开始，元组可以通过使用问号 `(?)` 后缀来指定可选元素。例如，可以使用可选的 `alpha` 通道值来定义一个 `RGBA` 元组：

```ts
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
```

:::tip
注意，`RGBA` 使用 `red`, `green`, `blue` 和 `alpha` 模型定义颜色，`alpha` 指定颜色的透明度。
:::

## 总结

- 元组是一个具有固定数量和已知元素类型的数组。
