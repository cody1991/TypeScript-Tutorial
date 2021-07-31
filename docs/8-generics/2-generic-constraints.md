---
title: 泛型约束
---

## 泛型约束

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/)

在本教程中，你将学习 TypeScript 中的泛型约束。

### TypeScript 中的泛型约束介绍

思考以下例子：

```ts
function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
```

`merge()` 是一个可以合并两个对象的泛型函数：

```ts
let person = merge({ name: 'John' }, { age: 25 });

console.log(result);
```

输出：

```ts
{ name: 'John', age: 25 }
```

它工作地很好。`merge()` 函数接受两个对象，但它无法阻止你传递一个非对象的参数，如下所示：

```ts
let person = merge({ name: 'John' }, 25);

console.log(person);
```

输出：

```ts
{
  name: 'John';
}
```

TypeScript 没有发出任何的错误提示。你可能想给 `merge()` 函数添加一个约束，使得它只能处理对象而不处理其他的类型的参数。要做到这一点，你需要提出要求，作为 `U` 和 `V` 类型的约束。

为了表示约束，你可以使用 `extends` 关键字：

```ts
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
```

因为 `merge()` 函数的参数受到了约束，它将不再适合用于所有类型的参数调用，它现在只适合用于 `object` 类型的参数调用。

下面将抛出一个错误提示：

```ts
let person = merge({ name: 'John' }, 25);
```

错误提示：

```sh
Argument of type '25' is not assignable to parameter of type 'object'.
```

### 在泛型约束中使用行参

TypeScript 允许声明受另外一个类型参数约束的类型参数。

下面的 `prop()` 函数接受一个对象和一个属性名，它会返回属性的值：

```ts
function prop<T, K>(obj: T, key: K) {
  return obj[key];
}
```

编译器会抛出下面的错误提示：

```sh
Type 'K' cannot be used to index type 'T'.
```

为了修复这个错误，你在 `K` 上添加一个约束来确保它是 `T` 类型的键，如下所示：

```ts
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

如果你传递给 `prop()` 函数一个 `obj` 对象上存在的属性明，编译器不会抛出错误提示，如下所示：

```ts
let str = prop({ name: 'John' }, 'name');
console.log(str);
```

输出：

```sh
John
```

然而如果传递一个在第一个参数上不存在的属性名，编译器会抛出一个错误提示：

```ts
let str = prop({ name: 'John' }, 'age');
```

错误提示：

```sh
Argument of type '"age"' is not assignable to parameter of type '"name"'.
```

### 小结

- 使用 `extends` 关键字将类型参数约束为指定类型；
- 使用 `extends keyof` 约束类型为另外一个对象的属性集合。
