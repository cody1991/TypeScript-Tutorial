---
title: 抽象类
---

## 抽象方法

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-abstract-classes/)

在本教程中，你将了解 TypeScript 中的抽象类。

### TypeScript 中的抽象类介绍

抽象类通常用于定义要扩展的派生类的共同行为，和常规的 [类](/5-classes/1-class/) 不同的是，抽象类不能直接实例化。要声明一个抽象类，可以使用 `abstract` 关键字：

```ts
abstract class Employee {
  //...
}
```

通常，一个抽象类包含一个或者多个的抽象方法。抽象方法不包含具体的实现，它只定义方法的签名，不包括方法体，而抽象方法必须在派生类中实现。

下面是一个拥有 `getSalary()` 抽象方法的 `Employee` 抽象类：

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

- 构造函数声明了 `firstName` 和 `lastName` 属性；
- `getSalary()` 方法是一个抽象方法，派生类将根据雇员的类型来实现具体的逻辑；
- `getFullName()` 和 `compensationStatement()` 方法有具体的实现，注意 `compensationStatement()` 方法会调用 `getSalary()` 方法。

因为 `Employee` 是抽象类，不能使用它创建实例，下面的语句会抛出错误提示：

```ts
let employee = new Employee('John', 'Doe');
```

错误提示：

```sh
error TS2511: Cannot create an instance of an abstract class.
```

下面的 `FullTimeEmployee` 类继承了 `Employee` 抽象类：

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

在这个 `FullTimeEmployee` 类中，构造函数定义了 `salary` 属性。因为 `getSalary()` 是 `Employee` 类的抽象方法，`FullTimeEmployee` 类需要去实现这个方法。在这个例子中，这个方法没有做任何处理，直接返回 `salary` 变量的值来表示报酬的值。

下面的 `Contractor` 类继承了 `Employee` 抽象类：

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

在 `Contractor` 类中，构造函数定义了了 `rate` 和 `hours` 属性，`getSalary()` 方法把 `rate` 和 `hours` 相乘的结果来表示报酬的值。

下面的例子创建了一个 `FullTimeEmployee` 类的实例和一个 `Contractor` 类的实例，然后在控制台上分别展示了它们的报酬信息：

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

当想在一些有相互关系的类之间共享代码，使用抽象类是一个很好的方式。

### 小结

- 抽象类不能被实例化；
- 一个抽象类至少有一个抽象方法；
- 使用抽象类的时候，需要继承它的同时实现类中所有的抽象方法。
