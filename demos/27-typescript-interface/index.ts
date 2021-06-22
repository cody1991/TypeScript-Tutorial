interface Person {
  firstName: string;
  lastName: string;
  middleName?: string;
  readonly id?: number;
}

function getFullName(person: Person) {
  if (typeof person.middleName !== "undefined") {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
  return `${person.firstName} ${person.lastName}`;
}

let john = {
  firstName: "John",
  lastName: "Doe",
};

console.log(getFullName(john));

let jane = {
  firstName: "Jane",
  middleName: "K.",
  lastName: "Doe",
  age: 22,
};

console.log(getFullName(jane));

interface StringFormat {
  (str: string, isUpper: boolean): string;
}

let format: StringFormat;

format = function (str: string, upper: boolean) {
  return upper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

let lowerCase: StringFormat;

lowerCase = function (str: string) {
  return str.toLowerCase();
};

console.log(format("hi", true));

// class types
interface Json {
  toJson(): string;
}

class Person2 implements Json {
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}

const person = new Person2("John", "Doe");
console.log(person.toJson());
