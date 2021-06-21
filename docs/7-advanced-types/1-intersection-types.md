---
title: 交叉类型
---

:::tip 前言
在本教程中，你将学习 TypeScript 中的交叉类型
:::

# TypeScript 中的交叉类型介绍

价差类型通过组合多有现有类型来创建新的类型，新的类型具有现有类型的所有属性

使用 `&` 操作符来组合类型，如下所示：

```TypeScript
type typeAB = typeA & typeB;
```

`typeAB` 会有 `typeA` 和 `typeB` 的所有属性

注意，联合类型使用 `|` 操作符，定义一个可以保存 `typeA` 或者 `typeB` 类型的值

```TypeScript
let varName = typeA | typeB; // union type
```

假设你有三个接口：`BusinessPartner`, `Identity` 和 `Contact`

```TypeScript
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

下面定义了两种交叉类型：

```TypeScript
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
```

`Employee` 类包含 `Identity` 和 `Contact` 类型中的所有属性：

```TypeScript
type Employee = Identity & Contact;

let e: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684'
};
```

`Customer` 类型包含 `BusinessPartner` 和 `Contact` 类型中的所有属性：

```TypeScript
type Customer = BusinessPartner & Contact;

let c: Customer = {
  name: 'ABC Inc.',
  credit: 1000000,
  email: 'sales@abcinc.com',
  phone: '(408)-897-5735'
};
```

之后，如果你想实现销售员工，你可以创建一个新的交叉类型包含 `Identity`, `Contact` 和 `BusinessPartner` 三个类型中的所有属性：

```TypeScript
type Employee = Identity & BusinessPartner & Contact;

let e: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684',
  credit: 1000
};
```

注意 `BusinessPartner` 和 `Identity` 有相同类型的 `name` 属性，如果它们类型不同，你将会得到一个错误提示

# 类型顺序

当你进行类型交叉的时候，类型的顺序并不重要，比如：

```TypeScript
type typeAB = typeA & typeB;
type typeBA = typeB & typeA;
```

在这个例子中，`typeAB` 和 `typeBA` 有相同的属性

# 总结

- 交叉类型可以结合了两个或者更多的类型，创建具有现有类型的所有属性的新类型
- 在组合类型的时候，类型的顺序并不重要
