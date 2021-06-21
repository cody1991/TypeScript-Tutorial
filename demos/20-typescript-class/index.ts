class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('171-28-0926', 'John', 'Doe');
console.log(person);
