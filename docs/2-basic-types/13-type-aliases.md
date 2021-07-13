---
title: 类型别名
---

## 类型别名

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-type-aliases/)

在本教程中，你将学习如果使用类型别名为类型起新的名字。

### TypeScript 中的类型别名介绍

类型别名允许你为现有的类型指定新的名字，类型别名的语法如下所示：

```ts
type alias = existingType;
```

现有的类型可以是任何 TypeScript 中有效的类型。下面的例子使用类型别名，为 `string` 类型指定了新的名字 `chars`：

```ts
type chars = string;
let messsage: chars; // same as string type
```

给 [联合类型](/2-basic-types/13-type-aliases/) 创建类型别名是非常有用的，如下所示：

```ts
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
input = false; // Compiler error
```
