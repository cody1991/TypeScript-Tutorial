// 定义 employee
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};

// or

let employee2: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};

let vacant: {}; // 上面没有任何的属性

vacant.toString();
