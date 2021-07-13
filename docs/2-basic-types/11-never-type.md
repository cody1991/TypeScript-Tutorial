---
title: never 类型
---

## never 类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-never-type/)

在本教程中，你将学习 TypeScript 中的 never 类型，它不包含值。

`never` 类型是不包含值的类型，由于这个原因，你不能给 `never` 类型的变量赋任何的值。通常，你可以使用 `never` 类型来表示总是抛出错误的函数的返回类型，如下所示：

```ts
function raiseError(message: string): never {
  throw new Error(message);
}
```

下面的函数的返回值被推断为 `never` 类型：

```ts
function reject() {
  return raiseError('Rejected');
}
```

包含死循环的函数它的返回类型也是 `never` 类型，如下所示：

```ts
let loop = function forever() {
  while (true) {
    console.log('Hello');
  }
};
```

在这个例子中，`forever()` 函数的返回类型是 `never` 类型。

如果看到一个函数的返回类型是 `never` 类型，那么要确定下这是不是你想要的结果。

当你使用 [类型保护](/7-advanced-types/2-type-guards/) 来收缩变量的类型，导致有些条件判断再也不能为真的时候，也可以得到 `never` 类型。如下所示，不使用 `never` 类型的话，下面的函数会抛出错误，因为不是所有代码中的路径都有返回值：

```ts
function fn(a: string | number): boolean {
  if (typeof a === 'string') {
    return true;
  } else if (typeof a === 'number') {
    return false;
  }
}
```

为了使代码变得有效，你可以返回一个返回类型为 `never` 类型的函数：

```ts
function fn(a: string | number): boolean {
  if (typeof a === 'string') {
    return true;
  } else if (typeof a === 'number') {
    return false;
  }
  // make the function valid
  return neverOccur();
}

let neverOccur = () => {
  throw new Error('Never!');
};
```

#### 小结

- `never` 类型不包含值；
- `never` 类型表示总是抛出错误的或包含死循环的函数的返回类型。
