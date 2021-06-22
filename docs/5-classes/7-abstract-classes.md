---
title: 抽象方法
---

:::tip 前言
在本教程中，你将了解 TypeScript 中的抽象类
:::

# TypeScript 抽象类介绍

抽象类通常用于定义要扩展的派生类的公共行为，不像常规的 [类](/5-classes/1-class/)，抽象类不能直接实例化

要声明一个抽象类，可以使用 `abstract` 关键字：

```ts
abstract class Employee {
  //...
}
```

通常，一个抽象类包含一个或者多个抽象方法

抽象方法不包含实现，它只定义方法的签名，而不包括方法体，抽象方法并序在派生类中实现

下面展示一个拥有 `getSalary()` 抽象方法 的 `Employee` 抽象类：

```ts
abstract class Employee {
  constructor(private firstName: string, private lastName: string) {}
  abstract getSalary(): number;
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}
```

在 `Employee` 类中：

- 构造函数声明了 `firstName` 和 `lastName` 属性
- `getSalary()` 函数是一个抽象方法，派生类将基于雇员的类型实现具体逻辑
- `getFullName()` 和 `compensationStatement()` 方法有具体的实现，注意一下 `compensationStatement()` 会调用 `getSalary()` 方法

因为 `Employee` 是抽象类，你不能用它来创建一个新的对象，下面的语句会抛出错误：

```ts
let employee = new Employee('John', 'Doe');
```

错误提示：

```sh
error TS2511: Cannot create an instance of an abstract class.
```

下面的 `FullTimeEmployee` 类继承自 `Employee` 类

```ts
class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.salary;
  }
}
```

在这个 `FullTimeEmployee` 类中，`salary` 在构造函数中设置。因为 `getSalary()` 是 `Employee` 类的抽象方法，`FullTimeEmployee` 类需要去实现这个方法。在这个例子中，这个方法没有做任何计算，直接返回 `salary`

下面的 `Contractor` 类继承自 `Employee` 类：

```ts
class Contractor extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number,
  ) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}
```

在 `Contractor` 类中，构造函数初始化了 `rate` 和 `hours` 属性，`getSalary()`方法通过把 `rate` 和 `hours` 相乘计算 `salary`

下面的例子首先创建了一个 `FullTimeEmployee` 对象和 `Contractor` 对象，然后在控制台上展示了报酬信息

```ts
let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());
```

输出:

```sh
John Doe makes 12000 a month.
Jane Doe makes 16000 a month.
```

当你想要在一些相关的类之间共享代码的时候，使用抽象类是一个很好的方法

# 总结

- 抽象类不能被实例化
- 一个抽象类至少有一个抽象方法
- 要使用抽象类你需要继承它并实现其中的抽象方法
