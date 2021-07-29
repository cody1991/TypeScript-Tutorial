---
title: 静态属性和方法
---

## 静态属性和方法

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-static-methods-and-properties/)

在本教程中，你将了解 TypeScript 中的静态属性和方法。

### 静态属性

与实例属性不同，静态属性是类所有实例之间共享的属性。要声明静态属性，可以使用 `static` 关键字，要访问静态属性，可以使用 `className.propertyName` 语法，如下所示：

```ts
class Employee {
  static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string,
  ) {
    Employee.headcount++;
  }
}
```

在本例中，`headcount` 是一个初始值为 `0` 的静态属性，每创建一个新的实例，它的值就会加一。下面的例子创建了两个 `Employee` 实例，打印 `headcount` 属性的值，返回了预期中的 `2`：

```ts
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); // 2
```

### 静态方法

与静态属性一样，静态方法也是类所有实例之间共享的方法，要声明一个静态方法，需要在方法名前添加 `static` 关键字，如下所示：

```ts
class Employee {
  private static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string,
  ) {
    Employee.headcount++;
  }

  public static getHeadcount() {
    return Employee.headcount;
  }
}
```

在这个例子中：

- 首先，将 `headcount` 静态属性的访问修饰符从 `public` 更改为 `private`，这样在该类之外就不能修改它的值，除非创建一个新的 `Employee` 实例；
- 然后，添加 `getHeadcount()` 静态方法，该方法返回 `headcount` 静态属性的值。

你可以使用 `className.staticMethod()` 的语法来调用静态方法，如下所示：

```ts
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.getHeadcount); // 2
```

实际上，你会发现比如 `Math` 对象有很多的静态属性和方法，比如 `PI` 和 `E` 等等的静态属性， `abs()` 和 `round()` 等等的静态方法。

### 小结

- 静态属性和静态方法是类所有实例之间共享的；
- 在一个属性或者方法名前面添加 `static` 关键字，可以使其成为静态属性或者静态方法。
