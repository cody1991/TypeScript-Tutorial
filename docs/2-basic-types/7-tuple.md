---
title: 元组类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 元组类型和它的使用
:::

# TypeScript 元组类型介绍

远足的工作方式类似于 [数组类型](/2-basic-types/6-array-type/) ，但是有一些额外的条件：

- 元组中元素的数量是固定的
- 元素的类型是已知的，并且它们不需要相同

比如，你可以用元组来表示一对 `string` 和 `number`：

```TypeScript
let skill: [string, number];
skill = ['Programming', 5];
```

元组中的值的顺序是很重要的，如果你把 `skill` 元组中值的顺序修改成 `[5, "Programming"]`，你将会得到一个错误提示：

```TypeScript
let skill: [string, number];
skill = [5, 'Programming'];
```

错误提示：

```sh
error TS2322: Type 'string' is not assignable to type 'number'.
```

出于这个原因，对于有特定顺序相互关联的数据使用元组是一个很好的实践

比如，你可以使用一个元组来定义一个 `RGB` 颜色值，它总是以三个数字的形式出现

```sh
(r,g,b)
```

比如：

```TypeScript
let color: [number, number, number] = [255, 0, 0];
```

`color[0]`, `color[1]` 和 `color[2]` 将在逻辑上映射到 `Red`, `Green` 和 `Blue` 颜色值

# 可选元组元素

从 TypeScript 3.0 开始，元组可以使用问号 (?) 后缀指定可选元素

比如，你可以用可选的 `alpha` 通道值定义一个 `RGBA` 元组

```TypeScript
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
```

:::tip
注意，`RGBA` 使用 `red`, `green`, `blue` 和 `alpha` 模型定义颜色，`alpha` 指定颜色的透明度
:::

# 总结

- 元组一个具有固定数量和已知类型元素的数组
