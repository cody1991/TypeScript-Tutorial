---
title: 泛型接口
---

## 泛型接口

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-interfaces/)

在本教程中，你将学习 TypeScript 中的泛型接口。

### TypeScript 中的泛型接口介绍

和类一样，接口也支持泛型，泛型接口的语法如下：泛型类型参数列表在尖括号 `<>` 中，接口名称之后：

```ts
interface interfaceName<T> {
  // ...
}
```

这使得类型参数 `T` 对接口的所有成员都是可见。

类型参数列表可以是一个或者多个类型，如下所示：

```ts
interface interfaceName<U, V> {
  // ...
}
```

### 泛型接口例子：

看几个泛型接口声明的例子：

#### 1) 描述对象属性的泛型接口

下面演示了一个泛型接口，他包含 `key` 和 `value` 两个属性，类型分别是 `K` 和 `V` 类型：

```ts
interface Pair<K, V> {
  key: K;
  value: V;
}
```

现在，你可以使用 `Pair` 接口定义任意指定类型的键值对对象，比如：

```ts
let month: Pair<string, number> = {
  key: 'Jan',
  value: 1,
};

console.log(month);
```

在这个例子中，我们定义了一个 `key` 为字符串类型而 `value` 为数字类型的键值对对象。

#### 2) 描述方法的泛型接口

下面声明了一个泛型接口，它有两个方法：`add()` 和 `remove()` 方法：

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

对于 `List<T>` 类，你可以创建任意类型的值列表，如数字或者字符串类型。比如，下面演示如何使用 `List<T>` 泛型类来创建一个数字列表对象：

```ts
let list = new List<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}
```

#### 3) 描述索引类型的泛型接口

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
