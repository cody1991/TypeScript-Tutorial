---
title: 扩展接口
---

## 扩展接口

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-extend-interface/)

在本教程中，你讲学习如何扩展接口，让你能够把一个接口的属性和方法复制到另外一个接口

### 扩展一个接口的接口

假设你有一个名为 `Mailable` 的 [接口](/6-interfaces/1-interface/)，它包含两个方法：`send()` 和 `queue()`

```ts
interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}
```

然后你有很多 [类](/5-classes/1-class/) 已经实现了 `Mailable` 接口

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
