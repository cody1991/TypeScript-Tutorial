const arrayName: string[] = ['John', 'Jane', 'Peter', 'David'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'John',
  age: 24,
};

let greeting: (name: string) => string;

greeting = (name: string) => {
  return `Hi ${name}`;
};
