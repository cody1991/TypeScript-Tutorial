---
title: 类继承
---

:::tip 前言
在本教程中，你将了解 TypeScript 继承的概念，以及如何使用它来复用其他类的功能
:::

# TypeScript 中的继承介绍

[类](/5-classes/1-class/) 可以让其他的类复用它的属性和方法，这在 TypeScript 中被称为继承

继承其他类属性和方法的类被称为子类，被继承的被称为父类，这些名字来自自然中孩子继承父母基因的说法

继承使得你可以复用现有类的功能，而不需要重写

JavaScript 使用 [原型继承](/5-classes/1-class/)的方式实现类，而非 `Java` 和 `C#` 那样的类继承。而 `ES6` 引入的 [类](/5-classes/1-class/) 语法是 JavaScript 原型继承的语法糖，TypeScript 也支持这种语法

假设你有下面的 `Person` 类：

```ts
class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}
```

使用 `extends` 关键字来继承一个类，比如下面 `Employee` 类继承了 `Person` 类：

```ts
class Employee extends Person {
  //..
}
```

在这个例子中，`Employee` 是子类，而 `Person`是父类

# 构造函数

因为 `Person` 类有一个初始化 `firstName` 和 `lastName` 属性的构造函数，你需要在 `Employee` 类的构造函数中调用父类的构造函数来初始化这些属性

要在子类的构造函数调用父类的构造函数，可以使用 `super()` 语法：

```ts
class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }
}
```

下面创建了一个 `Employee` 类的实例：

```ts
let employee = new Employee('John', 'Doe', 'Front-end Developer');
```

因为 `Employee` 类继承了 `Person` 类的方法和属性，你可以在 `employee` 对象上调用 `getFullName()` 和 `describe()` 方法，如下所示：

```ts
let employee = new Employee('John', 'Doe', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe());
```

输出：

```sh
John Doe
This is John Doe.
```

# 方法重载

当你调用 `employee` 对象上的 `employee.describe()` 方法，`Person` 类的 `describe()` 方法会被执行，显示 `This is John Doe` 信息

如果你想要 `Employee` 类有自己版本的 `describe()` 方法，你可以在 `Employee` 类中定义它，如下所示：

```ts
class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }

  describe(): string {
    return super.describe() + `I'm a ${this.jobTitle}.`;
  }
}
```

在 `describe()` 方法中，我们使用 `super.methodInParentClass()` 的语法调用父类的 `describe()` 方法

如果你在 `employee` 对象上调用 `describe()` 方法，`Employee` 类的 `describe()` 方法会被调用

```ts
let employee = new Employee('John', 'Doe', 'Web Developer');
console.log(employee.describe());
```

输出：

```sh
This is John Doe.I'm a Web Developer.
```

# 小结

- 使用 `extends` 关键字允许一个类继承另外一个类
- 在子类的构造函数中使用 `super` 方法调用父类的构造函数，同时，可以使用 `super.methodInParentClass()` 语法在子类中调用 `methodInParentClass()` ，即父类中的方法
