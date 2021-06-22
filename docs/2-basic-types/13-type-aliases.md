---
title: 类型别名
---

:::tip 前言
在本教程中，你将学习如果使用类型别名定义类型新的名称
:::

# TypeScript 类型别名介绍

类型别名允许你为现有的类型创建新的名称，类型别名的语法如下：

```ts
type alias = existingType;
```

现有的类型可以是任何 TypeScript 有效地类型

下面的例子使用类型别名，给 `string` 类型创建了新的名称 `chars`

```ts
type chars = string;
let messsage: chars; // same as string type
```

给 [联合类型](/2-basic-types/13-type-aliases/) 创建类型别名是非常有用的，比如：

```ts
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
input = false; // Compiler error
```

# 总结

- 使用类型别名给现有的类型创建新的名称
