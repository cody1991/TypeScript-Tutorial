---
title: getter 方法和 getter 方法
---

:::tip 前言
在本教程中，你将学习如何使用 TypeScript 中的 getter 方法和 getter 方法
:::

# TypeScript 中的 getter 方法 and setter 方法介绍

下面展示了一个简单的 `Person` 类，只有三个属性：`age`, `firstName` 和 `lastName`

```TypeScript
class Person {
  public age: number;
  public firstName: string;
  public lastName: string;
}
```

要访问 `Person` 类的属性，你可以这样做：

```TypeScript
let person = new Person();
person.age = 26;
```

假设你将一个来自用户输入的值赋值给 `age` 属性：

```TypeScript
person.age = inputAge;
```

`inputAge` 可以是任意数字，为了确保年龄的有效性，你可以在赋值前进行检查：

```TypeScript
if(inputAge > 0 && inputAge < 200) {
  person.age = inputAge;
}
```

到处使用这个检查是冗余乏味的，为了避免重复检查，你可以使用 `setter` 方法和 `getter` 方法，`setter` 方法 和 `getter` 方法允许你控制类属性的访问

对于每个属性来说：

- `getter` 方法返回属性值的值，`getter` 方法也被称为 `accessor` 方法
- `setter` 方法更新属性值的值， `setter` 方法也被称为 `mutator` 方法

`getter` 方法以 `get` 关键字开头，而 `setter` 方法以 `set` 关键字开头：

```TypeScript
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

```TypeScript
let person = new Person();
person.age = 10;
```

注意，对 `setter` 方法的调用不像常规方法那样，它没有加上括号，当你调用 `person.age` 的时候，`age` 的 `setter` 方法被调用，如果你设置了一个无效的 `age` 值，`setter` 方法会抛出错误提示：

```TypeScript
person.age = 0;
```

错误提示：

```sh
Error: The age is invalid
```

当你访问 `person.age` 的时候，`age` 的 `getter` 方法会被调用：

```TypeScript
console.log(person.age);
```

下面的代码给 `firstName` 和 `lastName` 属性增加了 `getter` 方法和 `setter` 方法

```TypeScript
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

```TypeScript
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

```TypeScript
 let person = new Person();
 person.fullname = 'John Doe';

 console.log(person.fullName);
```

# 总结

- 使用 TypeScript 的 `getter` 方法 / `setter` 方法来控制类属性的访问
- `getter` 方法 / `setter` 方法 也被叫做 `accessor` 方法 / `mutator` 方法.
