---
title: 只读属性
---

## 只读属性

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-readonly/)

在本教程中，你将学习如何使用 TypeScript 中的只读访问修饰符将类属性标记为不可变属性

TypeScript 提供了只读访问修饰符允许你将类属性标记为不可变属性，为属性添加只读属性只能出现在下面两个位置中：

- 属性定义的地方
- 当前类的构造函数中

要将属性标记为不可变，你需要使用 `readonly` 关键字，下面演示了如何在 `Person` 类中声明只读属性：

```ts
class Person {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}
```

在这个例子中，`birthdate` 是一个只读属性，它在 `Person` 类的构造函数中初始化

下面尝试重新给 `birthDate` 属性赋值，抛出错误提示：

```ts
let person = new Person(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // Compile error
```

和其他 [访问修饰符](/5-classes/2-access-modifiers/) 一样，你可以在构造函数中合并只读属性的声明和初始化，如下所示：

```ts
class Person {
  constructor(readonly birthDate: Date) {
    this.birthDate = birthDate;
  }
}
```

### Readonly vs const

下面展示了`readonly` 和 `const` 之间不同的地点：

|            | readonly                           | const      |
| ---------- | ---------------------------------- | ---------- |
| 用于       | 类属性                             | 变量       |
| 初始化时机 | 在声明的时候或者在当前类构造函数中 | 声明的时候 |

### 小结

- 使用只读访问修饰符将类属性标记为不可变属性
- 只读访问修饰必须在声明的时候或在当前类的构造函数中进行初始化
