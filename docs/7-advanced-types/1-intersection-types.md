---
title: 交叉类型
---

## 交叉类型

[原文地址](https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/)

在本教程中，你将学习 TypeScript 中的交叉类型。

### TypeScript 中的交叉类型介绍

交叉类型指的是通过组合多个现有类型创建而来的新的类型，新的类型具有现有类型的所有属性。

使用 `&` 操作符来表示组合类型，如下所示：

```ts
type typeAB = typeA & typeB;
```

`typeAB` 会有 `typeA` 和 `typeB` 的所有属性。

注意，联合类型使用 `|` 操作符，定义一个可以保存 `typeA` 或者 `typeB` 类型的值。

```ts
let varName = typeA | typeB; // union type
```

假设你有三个接口：`BusinessPartner`, `Identity` 和 `Contact`：

```ts
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}
```

下面定义了两个交叉类型：

```ts
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
```

`Employee` 类包含 `Identity` 和 `Contact` 类型中的所有属性：

```ts
type Employee = Identity & Contact;

let e: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684',
};
```

`Customer` 类型包含 `BusinessPartner` 和 `Contact` 类型中的所有属性：

```ts
type Customer = BusinessPartner & Contact;

let c: Customer = {
  name: 'ABC Inc.',
  credit: 1000000,
  email: 'sales@abcinc.com',
  phone: '(408)-897-5735',
};
```

之后，如果你想实现销售员工，你可以创建一个新的交叉类型，它包含 `Identity`, `Contact` 和 `BusinessPartner` 三个接口中的所有属性：

```ts
type Employee = Identity & BusinessPartner & Contact;

let e: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684',
  credit: 1000,
};
```

注意 `BusinessPartner` 和 `Identity` 有相同类型的 `name` 属性，如果它们类型不同，编译器会抛出一个错误提示。

### 类型顺序

类型交叉中的类型的顺序并不重要，如下所示：

```ts
type typeAB = typeA & typeB;
type typeBA = typeB & typeA;
```

在这个例子中，`typeAB` 和 `typeBA` 有着相同的属性，它们是等价的。

### 小结

- 交叉类型可以结合两个或者更多的类型，创建具有所有类型的属性的新类型；
- 类型交叉中的类型的顺序并不重要。
