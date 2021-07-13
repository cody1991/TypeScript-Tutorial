---
theme: geek-black
---

# Section 5. 类

## 目录

- [TypeScript Tutorial 中文版 - 项目介绍](https://juejin.cn/post/6984281217168310302)
- [TypeScript Tutorial 中文版 - Section 0. 前言](https://juejin.cn/post/6984281996449021966)
- [TypeScript Tutorial 中文版 - Section 1. 入门](https://juejin.cn/post/6984290303880478757)
- [TypeScript Tutorial 中文版 - Section 2. 基本类型](https://juejin.cn/post/6984309148553445406)

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
let person = new Person('171-28-0926', 'John', 'Doe');
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
let person = new Person('171-28-0926', 'John', 'Doe');
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
let person = new Person(171280926, 'John', 'Doe');
```

# 小结

- 在 TypeScript 中使用 `class` 关键字定义类
- TypeScript 利用 ES6 类语法，并添加类型注释，让类更具健壮性


:::tip 前言
在本教程中，你将学习 TypeScript 中的访问修饰符
:::

访问修饰符改变 [类](/5-classes/1-class/) 中属性和方法的可见性，TypeScript 提供三个访问修饰符：

- `private`
- `protected`
- `public`

注意，TypeScript 在编译时而不是在运行时从逻辑上控制属性和方法的可见性

# private 修饰符

`private` 修饰符限制了属性和方法只在当前类中可见，当你给方法或属性添加了 `private` 修饰符，你只有在当前类中可以访问。任何在当前类外部访问私有属性和方法的尝试都会在编译时导致错误

下面的例子展示如何给 `Person` 类中的 `snn`, `firstName` 和 `lastName` 属性增加 `private` 修饰符：

```ts
class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;
  // ...
}
```

一旦 `private` 添加完毕，你可以在构造函数或者 `Person` 类的方法中访问 `ssn` 属性，比如：

```ts
class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;

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

下面尝试在 `Person` 类外部访问 `ssn` 属性：

```ts
let person = new Person('153-07-3130', 'John', 'Doe');
console.log(person.ssn); // compile error
```

# public 修饰符

The public modifier allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.

`public` 修饰符允许从任何位置访问类属性和方法，如果你没有给属性和方法指定任何的修饰符，它们默认带有 `public` 修饰符

比如，`Person` 类中的 `getFullName()` 方法有 `public` 修饰符，下面显示地为 `getFullName()` 方法添加 `public` 修饰符：

```ts
class Person {
  // ...
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  // ...
}
```

它的效果和省略关键字 `public` 是一样的

# protected 修饰符

`protected` 修饰符允许一个类的属性和方法在当前类或者当前类的子类中被访问

当一个类（子类）从另外一个类（父类）继承时，它是父类的子类

如果你尝试从其他任何地方访问 `protected` 属性，TypeScript 编译器将会抛出错误

通过使用 `protected` 关键字给方法和属性添加 `protected` 修饰符，如下所示：

```ts
class Person {
  protected ssn: string;
  // other code
}
```

`ssn` 属性现在是受保护的，在 `Person` 类和任何继承 `Person` 类的子类中都可以访问它，你可以从 [类继承](https://zh.javascript.info/class-inheritance) 中学到更多关于继承的知识

`Person` 声明了两个私有属性和一个受保护的属性，构造函数使用接受的三个参数把它们进行初始化

为了让代码更加简单，TypeScript 允许你在构造函数中同时声明属性和初始化属性，如下所示：

```ts
class Person {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string,
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

当你考虑属性和方法的可见性，最好给它们添加最低可见性的访问修饰符，即 `private` 修饰符

# 小结

- TypeScript 给属性和方法提供了三种访问修饰符：`private`, `protected` 和 `public`
- `private` 修饰符只有在当前类中可以访问
- `protected` 修饰符允许在当前类和当前类的子类中访问
- `public` 修饰符在任何地方都可以访问


:::tip 前言
在本教程中，你将学习如何使用 TypeScript 中的只读访问修饰符将类属性标记为不可变属性
:::

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

# Readonly vs const

下面展示了`readonly` 和 `const` 之间不同的地点：

|            | readonly                           | const      |
| ---------- | ---------------------------------- | ---------- |
| 用于       | 类属性                             | 变量       |
| 初始化时机 | 在声明的时候或者在当前类构造函数中 | 声明的时候 |

# 小结

- 使用只读访问修饰符将类属性标记为不可变属性
- 只读访问修饰必须在声明的时候或在当前类的构造函数中进行初始化


:::tip 前言
在本教程中，你将学习如何使用 TypeScript 中的 getter 方法和 getter 方法
:::

# TypeScript 中的 getter 方法 and setter 方法介绍

下面展示了一个简单的 `Person` 类，只有三个属性：`age`, `firstName` 和 `lastName`

```ts
class Person {
  public age: number;
  public firstName: string;
  public lastName: string;
}
```

要访问 `Person` 类的属性，你可以这样做：

```ts
let person = new Person();
person.age = 26;
```

假设你将一个来自用户输入的值赋值给 `age` 属性：

```ts
person.age = inputAge;
```

`inputAge` 可以是任意数字，为了确保年龄的有效性，你可以在赋值前进行检查：

```ts
if (inputAge > 0 && inputAge < 200) {
  person.age = inputAge;
}
```

到处使用这个检查是冗余乏味的，为了避免重复检查，你可以使用 `setter` 方法和 `getter` 方法，`setter` 方法 和 `getter` 方法允许你控制类属性的访问

对于每个属性来说：

- `getter` 方法返回属性值的值，`getter` 方法也被称为 `accessor` 方法
- `setter` 方法更新属性值的值， `setter` 方法也被称为 `mutator` 方法

`getter` 方法以 `get` 关键字开头，而 `setter` 方法以 `set` 关键字开头：

```ts
class Person {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  // 译者注：原教程没有写 constructor 构造函数，TypeScript 会报错，这里补充上
  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid');
    }
    this._age = theAge;
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}
```

它是如何工作的？

- 首先，把 `age`, `firstName` 和 `lastName` 属性的访问修饰符从 `public` 修改为 `private`
- 接下来，把 `age` 属性调整为 `_age`
- 第三，为 `_age` 属性创建 `getter` 方法和 `setter` 方法，在 `setter` 方法中，在把用户输入的年龄赋值给 `_age` 属性前，检查其是否有效

现在，你可以通过下面的方式访问 `age` 的 `setter` 方法：

```ts
let person = new Person();
person.age = 10;
```

注意，对 `setter` 方法的调用不像常规方法那样，它没有加上括号，当你调用 `person.age` 的时候，`age` 的 `setter` 方法被调用，如果你设置了一个无效的 `age` 值，`setter` 方法会抛出错误提示：

```ts
person.age = 0;
```

错误提示：

```sh
Error: The age is invalid
```

当你访问 `person.age` 的时候，`age` 的 `getter` 方法会被调用：

```ts
console.log(person.age);
```

下面的代码给 `firstName` 和 `lastName` 属性增加了 `getter` 方法和 `setter` 方法

```ts
class Person {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  // 译者注：原教程没有写 constructor 构造函数，TypeScript 会报错，这里补充上
  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid');
    }
    this._age = theAge;
  }

  public get firstName() {
    return this._firstName;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error('Invalid first name.');
    }
    this._firstName = theFirstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) {
      throw new Error('Invalid last name.');
    }
    this._lastName = theLastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

# 更多 TypeScript 的 `getter` 方法 / `setter` 方法 例子

正如你从代码中所看到的，当你想在赋值数据给属性之前，使用 `setter` 方法进行数据验证是非常有用的，此外你还可以进行其他复杂的逻辑处理

下面的例子展示了如何创建 `fullName` 的 `getter` 和 `setter` 方法：

```ts
class Person {
  // ... other code
  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public set fullName(name: string) {
    let parts = name.split(' ');
    if (parts.length != 2) {
      throw new Error('Invalid name format: first last');
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}
```

它是如何工作的：

- `getter` 方法返回 `firstName` 和 `lastName` 的拼接字符串
- `setter` 方法接受一个字符串作为 `fullName`，它的格式如下：第一个部分赋值给 `firstName` 属性，第二个部分赋值给 `lastName` 属性

现在，你可以像普通的类属性一样访问 `fullName` 的 `setter` 和 `getter` 属性：

```ts
let person = new Person();
person.fullname = 'John Doe';

console.log(person.fullName);
```

# 小结

- 使用 TypeScript 的 `getter` 方法 / `setter` 方法来控制类属性的访问
- `getter` 方法 / `setter` 方法 也被叫做 `accessor` 方法 / `mutator` 方法.


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


:::tip 前言
在本教程中，你将了解 TypeScript 静态属性和方法
:::

# 静态属性

与实例属性不同，静态属性是类所有实例之间共享的

要声明静态属性，可以使用 `static` 关键字，要访问静态属性，可以使用 `className.propertyName` 语法，比如：

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

在本例中，`headcount` 是一个初始化为 `0` 的静态属性，每创建一个新的对象，它的值就会加一

下面的例子创建了两个 `Employee` 对象，然后打印 `headcount` 属性的值，它和预期一样返回 `2`

```ts
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); // 2
```

# 静态方法

与静态属性一样，静态方法也是类所有实例之间共享的，要声明一个静态属性，在方法名之前添加 `static` 关键字，如下所示：

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

- 首先，将 `headcount` 静态属性的访问修饰符从 `public` 改为 `private`，这样在该类之外就不能修改它的值，除非创建一个新的 `Employee` 对象
- 然后，添加 `getHeadcount()` 静态方法，该方法返回 `headcount` 静态属性的值

你可以使用 `className.staticMethod()` 的语法来调用静态方法，如下所示：

```ts
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.getHeadcount); // 2
```

实际上，你会发现比如像 `Math` 对象，它有很多的静态属性和方法，比如 `PI`, `E` 等等的静态属性，和 `abs()`, `round()` 等等的静态方法

# 小结

- 静态属性和静态方法被类的所有实例共享
- 在一个属性或者方法前面添加 `static` 关键字，可以使其静态化


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

# 小结

- 抽象类不能被实例化
- 一个抽象类至少有一个抽象方法
- 要使用抽象类你需要继承它并实现其中的抽象方法
