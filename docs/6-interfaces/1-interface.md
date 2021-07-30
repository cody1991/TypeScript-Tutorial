---
title: 接口
---

## 接口

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-interface/)

在本教程中，你将学习 TypeScript 中的接口，以及如何使用它们执行类型检查。

### TypeScript 中的接口介绍

TypeScript 中的接口制定代码中的约束，也为类型检查提供显式的名称。让我们从一个简单的例子开始：

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

在这个例子中，TypeScript 编译器检查传递给 `getFullName()` 函数的参数，如果参数有 `firstName` 和 `lastName` 这两个字符串类型的属性，那么可以通过 TypeScript 的类型检查，否则会抛出错误提示。

通过代码可以清楚的发现，函数参数的 [类型注释](/2-basic-types/1-type-annotations/) 让我们的代码变得难以阅读。为了解决这个问题，TypeScript 引入了接口的概念。

下面定义了一个 `Person` 接口，它有两个类型为字符串的属性：

```ts
interface Person {
  firstName: string;
  lastName: string;
}
```

按照惯例，接口名字都使用驼峰式，即使用大写字母分隔命名中的单词，比如 `Person`, `UserProfile` 和 `FullName`。

定义好 `Person` 接口之后你可以把它作为类型使用，也可以使用它为函数参数添加注释：

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

现在的代码比之前容易阅读很多。

`getFullName()` 函数接受任何具有 `firstName` 和 `lastName` 两个字符串类型的属性的对象作为参数，而它也不需要恰好只有这两个属性，如下所示，定义了一个具有四个属性的对象：

```ts
let jane = {
  firstName: 'Jane',
  middleName: 'K.'
  lastName: 'Doe',
  age: 22
};
```

因为 `jane` 对象具有 `firstName` 和 `lastName` 两个字符串类型的属性，你可以把它传入到 `getFullName()` 函数中，如下所示：

```ts
let fullName = getFullName(jane);
console.log(fullName); // Jane Doe
```

### 可选属性

接口可以拥有可选属性，要声明一个可选属性，你需要在属性名后添加 (`?`) 符号，如下所示：

```ts
interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
}
```

在这个例子中，`Person` 接口有两个必选属性和一个可选属性。下面的例子演示了 `Person` 接口如何在 `getFullName()` 函数中使用：

```ts
function getFullName(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}
```

### 只读属性

如果属性只有在对象创建的时候可以被修改，可以在属性名前面加上 `readonly` 关键字：

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

除了描述对象的属性外，接口也可以描述 [函数类型](/4-functions/2-function-types/)。要描述函数类型的话，你需要将接口赋值成以下形式：

- 包含类型的参数列表
- 包含返回类型

如下所示：

```ts
interface StringFormat {
  (str: string, isUpper: boolean): string;
}
```

现在，你可以使用这个函数类型接口了。下面演示如何声明具有函数类型的变量，并为其赋值：

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

`StringFormat` 接口确保所有实现了它的函数调用方传入所需的参数：一个 [字符串类型](/2-basic-types/3-string/) 的参数和一个 [布尔值类型](/2-basic-types/4-boolean/) 的参数。

下面的代码也可以正常的工作，即使 `lowerCase` 函数没有第二个参数：

```ts
let lowerCase: StringFormat;
lowerCase = function (str: string) {
  return str.toLowerCase();
};

console.log(lowerCase('Hi', false));
```

注意，第二个参数是在调用 `lowerCase()` 函数的时候传递的。

### 类类型

如果你使用过 `Java` 或者 `C#` 语言，你会发现接口的主要用途是定义不相关类之间的约定。例如下面的 `Json` 接口可以由任何不相关的类实现：

```ts
interface Json {
  toJSON(): string;
}
```

下面声明了一个实现 `Json` 接口的类：

```ts
class Person implements Json {
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}
```

在 `Person` 类中我们实现了 `Json` 接口的 `toJson()` 方法。

下面的例子演示了如何使用 `Person` 类：

```ts
let person = new Person('John', 'Doe');
console.log(person.toJson());
```

输出：

```JSON
{"firstName":"John", "lastName":"Doe"}
```

### 小结

- 接口制定代码中的约束，也为类型检查提供显式的名称；
- 接口可以有很多的可选属性和只读属性；
- 接口可以作为函数类型来使用；
- 接口经常被用作类类型来建立不相关类之间的约定。
