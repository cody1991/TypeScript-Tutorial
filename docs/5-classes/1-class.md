---
title: 类
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的类
:::

# TypeScript 中的类介绍

JavaScript 不想其他编程语言，比如 `Java` 和 `C#` 有类的概念，在 ES5 中，你可以通过构造函数和 [原型继承](https://zh.javascript.info/prototype-inheritance) 来创建一个 “类”

比如要创建一个有 `ssn`，`firstName` 和 `lastName` 三个属性的 `Person` 类，你可以使用下面的构造函数：

```ts
function Person(ssn, firstName, lastName) {
  this.ssn = ssn;
  this.firstName = firstName;
  this.lastName = lastName;
}
```

接下来，你可以定义一个原型方法，通过下面连接 `firstName` 和 `lastName` 的方式来获得人名全称

```ts
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
```

然后你可以通过 `Person` “类” 来创建一个新对象：

```ts
let person = new Person("171-28-0926", "John", "Doe");
console.log(person.getFullName());
```

它会在控制台上打印出下面的信息：

```sh
John Doe
```

[ES6 允许你定义一个类](https://zh.javascript.info/class)，这是创建对应的构造函数和原型继承的语法糖

```ts
class Person {
  ssn;
  firstName;
  lastName;

  constructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

在上面使用类的语法中，构造函数已经被明确定义并放置在类中，下面增加 `getFullName()` 方法：

```ts
class Person {
  ssn;
  firstName;
  lastName;

  constructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

使用 `Person` 类和使用 `Person` 构造函数创建对象是一样的：

```ts
let person = new Person("171-28-0926", "John", "Doe");
console.log(person.getFullName());
```

TypeScript 中的类给它的属性和方法增加了 [类型注释](/2-basic-types/1-type-annotations/)。下面展示 TypeScript 中的 `Person` 类：

```ts
class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

当你给属性，构造函数和方法增加类型注释，TypeScript 编译器会进行对应的类型检查

例如，你你不能把 `ssn` 初始化为一个 `number` ，下面的代码会抛出一个错误：

```ts
let person = new Person(171280926, "John", "Doe");
```

# 总结

- 在 TypeScript 中使用 `class` 关键字定义类
- TypeScript 利用 ES6 类语法，并添加类型注释，让类更具健壮性
