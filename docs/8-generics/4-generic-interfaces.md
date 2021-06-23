---
title: 泛型接口
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的泛型接口
:::

# TypeScript 中的泛型接口介绍

和类一样，接口也支持泛型的，泛型接口的语法如下，泛型类型参数列表在尖括号 `<>` 中，跟着接口名称后面：

```ts
interface interfaceName<T> {
  // ...
}
```

这使得类型参数 `T` 对接口的所有成员都可见

类型参数列表可以是一个或者多个类型，如下所示：

```ts
interface interfaceName<U, V> {
  // ...
}
```

# TypeScript 泛型接口例子：

看我们看几个声明泛型接口的列子：

## 1) 描述对象属性的泛型接口

下面展示了一个泛型接口，他包含两个键值对成员，类型分别是 `K` 和 `V`

```ts
interface Pair<K, V> {
  key: K;
  value: V;
}
```

现在，你可以使用 `Pair` 接口定义任意类型的键值对，比如：

```ts
let month: Pair<string, number> = {
  key: 'Jan',
  value: 1,
};

console.log(month);
```

在这个例子中，我们定义了一个 `key` 为字符串类型而 `value` 为数字类型的键值对

## 2) 描述方法的泛型接口

下面声明了一个泛型接口，它有两个方法：`add()` 方法和 `remove()` 方法：

```ts
interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}
```

`List<T>` 泛型类实现了 `Collection<T>` 泛型接口：

```ts
class List<T> implements Collection<T> {
  private items: T[] = [];

  add(o: T): void {
    this.items.push(o);
  }
  remove(o: T): void {
    let index = this.items.indexOf(o);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
```

对于 `List<T>` 类，你可以创建任意类型的值列表，如数字或者字符串

比如，下面展示了如何使用 `List<T>` 泛型类来创建一个数字列表：

```ts
let list = new List<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}
```

## 3) 描述索引类型的泛型接口

下面声明了一个描述索引类型的接口：

```ts
interface Options<T> {
  [name: string]: T;
}

let inputOptions: Options<boolean> = {
  disabled: false,
  visible: true,
};
```
