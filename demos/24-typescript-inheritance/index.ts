class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("cody", "tang");
console.log(person);

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }
  describe(): string {
    return super.describe() + ` I'm a ${this.jobTitle}`;
  }
}

const employee = new Employee("cody", "tang", "developer");
console.log(employee.getFullName());
console.log(employee.describe());
