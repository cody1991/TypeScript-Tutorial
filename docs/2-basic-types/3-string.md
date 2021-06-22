---
title: 字符串类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 字符串数据类型
:::

和 JavaScript 一样，TypeScript 使用双引号 (`"`) 或者单引号 (`'`) 包裹字符串

```ts
let firstName: string = "John";
let title: string = "Web Developer";
```

TypeScript 也支持使用反引号 (`) 来包裹字符的模板字符串

模板字符串虚云你创建多行字符串，提供了字符串插值特性

下面的例子展示了如何使用反引号 (`) 创建多行字符串：

```ts
let description = `This TypeScript string can
span multiple
lines
`;
```

字符串插值允许你将变量嵌入到字符串中，就像这样：

```ts
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}.
I'm a ${title}`;

console.log(profile);
```

输出：

```sh
I'm John.
I'm a Web Developer.
```

# 总结

- 在 TypeScript 中，所有的字符串都是 `string` 类型
- 和 JavaScript 一样, TypeScript 使用双引号 (`"`)，单引号 (`'`) 和反引号 (`) 包裹字符串
