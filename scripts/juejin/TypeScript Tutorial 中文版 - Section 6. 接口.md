---
theme: jzman
---

# Section 6. 接口

## 目录

- [TypeScript Tutorial 中文版 - 项目介绍](https://juejin.cn/post/6984281217168310302)
- [TypeScript Tutorial 中文版 - Section 0. 前言](https://juejin.cn/post/6984281996449021966)
- [TypeScript Tutorial 中文版 - Section 1. 入门](https://juejin.cn/post/6984290303880478757)
- [TypeScript Tutorial 中文版 - Section 2. 基本类型](https://juejin.cn/post/6984309148553445406)
- [TypeScript Tutorial 中文版 - Section 3. 控制流语句](https://juejin.cn/post/6984313301530312734)

## 接口

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-interface/)

在本教程中，你将学习 TypeScript 中的接口，以及如何使用它们来执行类型检查

### TypeScript 接口介绍

TypeScript 接口定义代码中的约定，它也为类型检查提供显式名称

让我们从一个简单的例子开始：

```ts
function getFullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(getFullName(person));
```

输出：

```sh
John Doe
```

在这个例子中，TypeScript 编译器检查传递给 `getFullName()` 函数的参数

如果参数有两个类型为字符串的 `firstName` 和 `lastName` 属性，TypeScript 会通过检查，否则的话它会抛出错误

从代码中可以清楚的发现，函数参数的 [类型注释](https://juejin.cn/post/6984309148553445406) 使得代码难以阅读

为了解决这个问题，TypeScript 引入了接口的概念

下面使用了一个 `Person` 的接口，它有两个字符串属性：

```ts
interface Person {
  firstName: string;
  lastName: string;
}
```

按照惯例，接口名字都使用驼峰式，即用一个大写字母来分隔名字中的单词，比如 `Person`, `UserProfile` 和 `FullName`

定义好 `Person` 接口之后你可以把它作为类型使用，你也可以用接口名称来注释函数参数

```ts
function getFullName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(getFullName(john));
```

现在的代码比之前容易阅读很多

`getFullName()` 函数会接受任何具有两个字符串属性 `firstName` 和 `lastName` 的参数，而它也不需要恰好有这两个字符串属性，参考以下例子：

下面的代码定义了一个有四个属性的对象：

```ts
let jane = {
  firstName: 'Jane',
  middleName: 'K.'
  lastName: 'Doe',
  age: 22
};
```

因为 `jane` 对象有两个字符串属性 `firstName` 和 `lastName`，你可以把它传入到 `getFullName()` 函数中，如下所示：

```ts
let fullName = getFullName(jane);
console.log(fullName); // Jane Doe
```

### 可选属性

接口可以有可选属性，要声明一个可选属性，你需要在属性名的末尾添加 (`?`)，就像这样：

```ts
interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
}
```

在这个例子中，`Person` 接口有两个必选属性和一个可选属性

下面的例子展示 `Person` 接口如何在 `getFullName()` 函数中使用：

```ts
function getFullName(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}
```

### 只读属性

如果属性只有在对象第一次创建的时候可以修改，我们可以在属性名前面加上 `readonly` 关键字：

```ts
interface Person {
  readonly ssn: string;
  firstName: string;
  lastName: string;
}

let person: Person;
person = {
  ssn: '171-28-0926',
  firstName: 'John',
  lastName: 'Doe',
};
```

在这个例子中，`ssn` 属性不能被修改：

```ts
person.ssn = '171-28-0000';
```

错误提示：

```sh
error TS2540: Cannot assign to 'ssn' because it is a read-only property.
```

### 函数类型

除了描述对象的属性外，接口也可以描述 [函数类型](https://juejin.cn/post/6984313766053675022)

要描述函数类型的话，你需要将接口赋值成以下形式的函数签名：

- 包含类型的参数列表
- 包含返回类型

如下所示：

```ts
interface StringFormat {
  (str: string, isUpper: boolean): string;
}
```

现在，你可以使用这个函数类型接口了

下面演示如何声明函数类型的变量，并为其赋值：

```ts
let format: StringFormat;

format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true));
```

输出：

```sh
HI
```

注意，参数名不需要匹配函数签名中的参数名字，下面的例子和上面的例子是等价的：

```ts
let format: StringFormat;

format = function (src: string, upper: boolean) {
  return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format('hi', true));
```

`StringFormat` 接口确保所有实现了它的函数调用方传入所需的参数：一个 [字符串类型](https://juejin.cn/post/6984309148553445406) 和一个 [布尔值类型](https://juejin.cn/post/6984309148553445406)

下面的代码也可以正常的工作，即使 `lowerCase` 函数被分配成一个没有第二个参数的函数：

```ts
let lowerCase: StringFormat;
lowerCase = function (str: string) {
  return str.toLowerCase();
};

console.log(lowerCase('Hi', false));
```

注意，第二个参数是在调用 `lowerCase()` 函数时传递的

### 类类型

如果你使用过 `Java` 或者 `C#`，你会发现接口的主要用途是定义不相关类之间的联系

比如，下面的 `Json` 接口可以由任何不相关的类实现：

```ts
interface Json {
  toJSON(): string;
}
```

下面声明了一个实现了 `Json` 接口的类：

The following declares a class that implements the `Json` interface:

```ts
class Person implements Json {
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}
```

在 `Person` 类中，我们实现了 `Json` 接口的 `toJson()` 方法

下面的例子展示了如何使用 `Person` 类

```ts
let person = new Person('John', 'Doe');
console.log(person.toJson());
```

输出：

```JSON
{"firstName":"John", "lastName":"Doe"}
```

### 小结

- TypeScript 接口在代码中定义约定，并为类型检查提供显式名称
- 接口可以有很多的可选属性或者只读属性
- 接口可以作为函数类型来使用
- 接口经常被用作类类型来建立不相关类之间的约定


## 扩展接口

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-extend-interface/)

在本教程中，你讲学习如何扩展接口，让你能够把一个接口的属性和方法复制到另外一个接口

### 扩展一个接口的接口

假设你有一个名为 `Mailable` 的 [接口](https://juejin.cn/post/6984313984061505567)，它包含两个方法：`send()` 和 `queue()`

```ts
interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}
```

然后你有很多 [类](https://juejin.cn/post/6984313923902111781) 已经实现了 `Mailable` 接口

现在，你想要在 `Mailable` 接口上添加一个新的方法， 表示它会延时发送邮件，如下所示：

```ts
later(email: string, after: number): void
```

然后，给 `Mailable` 接口直接添加 `later()` 方法会破坏当前的代码，造成前后不兼容的问题

为了避免这个问题，你可以创建一个新的接口来扩展 `Mailable` 接口：

```ts
interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}
```

你可以使用 `extends` 关键字按照下面的语法来扩展一个接口：

```ts
interface A {
  a(): void;
}

interface B extends A {
  b(): void;
}
```

接口 `B` 扩展了接口 `A`，它有两个方法 `a()` 和 `b()`

和类相似，`FutureMailable` 接口从 `Mailable` 接口继承了 `send()` 和 `queue()` 方法

下面的例子展示了如何实现 `FutureMailable` 接口：

```ts
class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    console.log(`Sent email to ${email} after ${after} ms. `);
    return true;
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`);
    return true;
  }
}
```

### 扩展多个接口的接口

一个接口可以扩展多个接口，创建所有接口的组合，比如：

```ts
interface C {
  c(): void;
}

interface D extends B, C {
  d(): void;
}
```

在这个例子中，接口 `D` 扩展了 `B` 和 `C` 接口，所以 `D` 接口有所有 `B` 和 `C` 接口的方法，它们是 `a()`, `b()` 和 `c()` 接口

### 扩展类的接口

TypeScript 允许接口扩展类，在这种情况下，接口会继承类的属性和方法，此外，接口可以继承累的私有成员和受保护成员，而不仅仅是公共成员

这意味着，当接口扩展具有私有成员和保护成员的类的时候，该接口只能有该接口所扩展的类或该类的子类实现

通过这么做，可以把接口的使用范围限制为接口所继承的类或该类的子类，如果试图从一个不是接口继承的类或该类的子类来实现接口，则会得到一个错误：

```ts
class Control {
  private state: boolean;
}

interface StatefulControl extends Control {
  enable(): void;
}

class Button extends Control implements StatefulControl {
  enable() {}
}
class TextBox extends Control implements StatefulControl {
  enable() {}
}
class Label extends Control {}

// Error: cannot implement
class Chart implements StatefulControl {
  enable() {}
}
```

### 小结

- 接口可以扩展一个或多个现有接口
- 接口也可以扩展类，如果类包含私有成员或受保护成员，则接口只能有该类或该类的子类实现
