---
title: 字符串字面量类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 字符串字面量类型，它指定了可接受的字符串
:::

字符串字面量类型允许你定义一个值接受一个指定字符串的类型

下面的例子定义了一个字符串字面量类型，它只接受 `'click'` 字符串

```ts
let click: "click";
```

`click` 是一个只接受 `'click'` 字符串的字符串字面量类型，如果你把字符串 `click` 赋值给 `click` 变量，它是合法的：

```ts
click = "click"; // valid
```

但是你如果把另外一个字符串赋值给 `click` 变量，TypeScript 编译器会抛出错误，例如：

```ts
click = "dblclick"; // compiler error
```

错误提示：

```sh
Type '"dblclick"' is not assignable to type '"click"'.
```

字符串字面量类型用于限定变量中可能的字符串值

字符串字面量类型可以与 [联合类型](/2-basic-types/12-union-type/) 很好地结合起来，为变量定义一组有限的字符串值

```ts
let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
mouseEvent = "mouseover"; // compiler error
```

如果你在多个位置使用字符串字面量类型，这样会非常的冗长

为了避免这样，你可以使用类型别名，比如：

```ts
type MouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: MouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error

let anotherEvent: MouseEvent;
```

# 总结

- TypeScript 字符串字面量类型指定了可接受的字符串
- 将字符串字面量类型与联合类型和类型别名一起使用，来定义指定接受有限的字符串集合的类型
