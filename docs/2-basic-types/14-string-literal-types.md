---
title: 字符串字面量类型
---

## 字符串字面量类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-string-literal-types/)

在本教程中，你将学习 TypeScript 中的字符串字面量类型，它指定了类型可接受的字符串字面量。

字符串字面量类型允许你定义一种类型，它只接受一个指定的字符串字面量。下面的例子定义了一个字符串字面量类型，它只接受 `'click'` 字符串字面量：

```ts
let click: 'click';
```

`click` 变量是一个只接受 `'click'` 字符串的字符串字面量类型，如果你把字符串 `click` 赋值给 `click` 变量，它是合法的：

```ts
click = 'click'; // valid
```

但如果把另外一个字符串赋值给 `click` 变量，TypeScript 编译器会抛出一个错误提示，如下所示：

```ts
click = 'dblclick'; // compiler error
```

错误提示：

```sh
Type '"dblclick"' is not assignable to type '"click"'.
```

使用字符串字面量类型来限制变量中可能出现的字符串字面量是非常有用的。

字符串字面量类型可以与 [联合类型](/2-basic-types/12-union-type/) 结合起来使用，为变量定义一组有限的、可选的字符串字面量集合：

```ts
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error
```

在多个位置使用同一个字符串字面量类型显得非常冗余，你可以使用 [类型别名](/2-basic-types/13-type-aliases/) 来避免这种情况的发生，如下所示：

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

### 小结

- TypeScript 中的字符串字面量类型指定了类型可接受的字符串字面量；
- 字符串字面量类型与联合类型和类型别名结合起来使用，可以指定接受一组有限的、可选的字符串字面量集合。
