---
title: 泛型约束
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的通用约束
:::

# TypeScript 中的通用约束介绍

思考下以下例子：

```TypeScript
function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2
  };
}
```

`merge()` 是一个合并两个对象的泛型函数：

```TypeScript
let person = merge(
  { name: 'John' },
  { age: 25 }
);

console.log(result);
```

输出：

```TypeScript
{ name: 'John', age: 25 }
```

它工作地很好。`merge()` 函数接受两个对象，但它不阻止你传递一个非对象参数，就像这样：

```TypeScript
let person = merge(
    { name: 'John' },
    25
);

console.log(person);
```

输出：

```TypeScript
{ name: 'John' }
```

TypeScript 没有发出任何错误提示

你可能想给 `merge()` 函数添加一个约束，只能处理对象而不是处理所有的类型

要做到这一点，你需要列出要求，作为 `U` 和 `V` 类型的约束

为了表示约束，你可以使用 `extends` 关键字：

```TypeScript
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2
  };
}
```

因为 `merge()` 函数受到了约束，它将不再适合用于所有类型，它现在只适合用于 `object` 类型

下面将导致一个错误：

```TypeScript
let person = merge(
  { name: 'John' },
  25
);
```

错误提示：

```sh
Argument of type '25' is not assignable to parameter of type 'object'.
```

# 在泛型约束中使用类型参数

TypeScript 允许声明受另外一个类型参数约束的类型参数

下面的 `prop()` 函数接受一个对象和一个属性名，它会返回属性的值：

```TypeScript
function prop<T, K>(obj: T, key: K) {
  return obj[key];
}
```

编译器会发出下面的错误提示：

```sh
Type 'K' cannot be used to index type 'T'.
```

为了修正这个错误，你在 `K` 上添加一个约束来确保它是 `T` 的键，如下所示：

```TypeScript
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

如果你传递给 `prop()` 函数一个 `obj` 对象上存在的属性明，编译器不会报错，如下所示：

```TypeScript
let str = prop({ name: 'John' }, 'name');
console.log(str);
```

输出：

```sh
John
```

然后如果你传递一个在第一个参数上不存在的键名，编译器会发出一个错误提示：

```TypeScript
let str = prop({ name: 'John' }, 'age');
```

错误提示：

```sh
Argument of type '"age"' is not assignable to parameter of type '"name"'.
```

# 总结

- Use `extends` keyword to constrain the type parameter to a specific type.
- Use `extends keyof` to constrain a type that is the property of another object.
