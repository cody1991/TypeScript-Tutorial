---
title: Getter / Setter 方法
---

## Getter / Setter

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/)

在本教程中，你将学习如何使用 TypeScript 中的 getter 方法和 setter 方法。

### TypeScript 中的 getter 和 setter 方法介绍

下面展示了一个简单的 `Person` 类，它只有三个属性：`age`, `firstName` 和 `lastName`。

```ts
class Person {
  public age: number;
  public firstName: string;
  public lastName: string;
}
```

要访问 `Person` 类的属性，可以这么做：

```ts
let person = new Person();
person.age = 26;
```

假设你将一个来自用户输入的值赋值给 `age` 属性：

```ts
person.age = inputAge;
```

`inputAge` 变量可以是任意数字，为了保证年龄的有效性，可以在赋值前进行检查：

```ts
if (inputAge > 0 && inputAge < 200) {
  person.age = inputAge;
}
```

但是到处使用这个检查语句的话是冗余乏味的，为了避免重复检查，可以使用 `getter` 和 `setter` 方法，`getter` 和 `setter` 方法可以控制类属性的访问方式。对于每个属性来说：

- `getter` 方法返回属性的值，`getter` 方法也被称为 `accessor` 方法；
- `setter` 方法更新属性的值，`setter` 方法也被称为 `mutator` 方法。

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

它是这样工作的：

- 首先，把 `age`, `firstName` 和 `lastName` 属性的访问修饰符从 `public` 更改为 `private`；
- 接下来，把 `age` 属性更改为 `_age`；
- 第三，为 `_age` 属性添加 `getter` 和 `setter` 方法，在 `setter` 方法中，在用户输入的年龄变量值赋值给 `_age` 属性之前，检查变量值是否有效的。

现在，你可以通过下面的方式访问 `age` 的 `setter` 方法：

```ts
let person = new Person();
person.age = 10;
```

注意，调用 `setter` 方法不像常规的方法调用一样，方法名没有加上括号。当你调用 `person.age` 的时候，`age` 的 `setter` 方法会被调用，如果你设置了一个无效的 `age` 值，`setter` 方法会抛出错误提示：

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

下面给 `firstName` 和 `lastName` 属性添加了 `getter` 和 `setter` 方法：

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

### 更多的 getter / setter 方法案例

正如从代码中所看到的，在给属性赋值之前使用 `setter` 方法进行数据验证是非常有用的，此外你还可以进行其他复杂的逻辑处理。

下面演示了如何创建 `fullName` 的 `getter` 和 `setter` 方法：

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

它是这样工作的：

- `getter` 方法返回 `firstName` 和 `lastName` 拼接后的字符串；
- `setter` 方法接受一个字符串作为 `fullName` 变量，它的格式如下：第一个部分的字符串赋值给 `firstName` 属性，第二个部分的字符串赋值给 `lastName` 属性。

现在，你可以像普通的类属性一样访问 `fullName` 的 `setter` 和 `getter` 属性：

```ts
let person = new Person();
person.fullname = 'John Doe';

console.log(person.fullName);
```

### 小结

- 使用 TypeScript 中的 `getter` / `setter` 方法来控制类属性的访问方式；
- `getter` / `setter` 方法也被称为 `accessor` / `mutator` 方法。
