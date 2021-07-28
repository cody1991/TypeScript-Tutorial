---
title: 访问修饰符
---

## 访问修饰符

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/)

在本教程中，你将学习 TypeScript 中的访问修饰符。

访问修饰符改变 [类](/5-classes/1-class/) 中属性和方法的可见性，TypeScript 提供了三个访问修饰符：

- `private`
- `protected`
- `public`

注意，TypeScript 在编译时而不是在运行时控制属性和方法的可见性。

### private 修饰符

`private` 修饰符限制了属性和方法只在当前类中可见，这意味着当给方法或属性添加了 `private` 修饰符后，只能在当前类中访问，在当前类外访问私有属性和方法都会在编译时抛出错误提示。

下面的例子演示如何给 `Person` 类中的 `snn`, `firstName` 和 `lastName` 属性增加 `private` 修饰符：

```ts
class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;
  // ...
}
```

添加了 `private` 修饰符以后，你可以在构造函数或者 `Person` 类的方法中访问 `ssn` 属性，比如：

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

下面尝试在 `Person` 类外访问 `ssn` 属性：

```ts
let person = new Person('153-07-3130', 'John', 'Doe');
console.log(person.ssn); // compile error
```

### public 修饰符

`public` 修饰符允许在任何位置访问类的属性和方法，如果没有给属性和方法指定任何的修饰符，默认是 `public` 修饰符。

下面显示地为 `Person` 类中的 `getFullName()` 方法添加 `public` 修饰符：

```ts
class Person {
  // ...
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  // ...
}
```

它的效果和省略 `public` 关键字是一样的。

### protected 修饰符

`protected` 修饰符允许一个类的属性和方法在当前类或者当前类的子类中被访问。当一个类（子类）从另外一个类（父类）继承时，它是父类的子类。如果你尝试从其他任何地方访问 `protected` 属性，TypeScript 编译器将抛出错误提示。

通过 `protected` 关键字给方法和属性添加 `protected` 修饰符，如下所示：

```ts
class Person {
  protected ssn: string;
  // other code
}
```

`ssn` 属性现在是受保护的，在 `Person` 类和任何继承 `Person` 类的子类中都可以访问它，可以从 [类继承](https://zh.javascript.info/class-inheritance) 中学到更多关于继承的知识。

`Person` 类声明了两个私有属性和一个受保护的属性，构造函数使用接受到的三个参数对它们进行初始化。

为了让代码看起来更加简单，TypeScript 允许你在构造函数中同时声明和初始化属性，如下所示：

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

当你考虑属性和方法的可见性，最好给它们添加最低可见性的访问修饰符，即 `private` 修饰符。

### 小结

- TypeScript 给属性和方法提供了三种访问修饰符：`private`, `protected` 和 `public` 修饰符；
- `private` 修饰符只有在当前类中可以访问；
- `protected` 修饰符允许在当前类和当前类的子类中可以访问；
- `public` 修饰符在任何地方都可以访问。
