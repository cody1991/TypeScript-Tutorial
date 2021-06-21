---
title: 布尔值类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 布尔值数据类型
:::

TypeScript 中的 `boolean` 类型允许两个值：`true` 和 `false`。他们是 TypeScript 中原始类型的一种。例如：

```TypeScript
let pending: boolean;
pending = true;
// after a while
// ..
pending = false;
```

JavaScript 有表示非原始封装对象的 `Boolean` 类型，`Boolean` 类型首字母为大写字符 `B`，这和 `boolean` 类型不一样

避免使用 `Boolean` 类型是一个好的实践
