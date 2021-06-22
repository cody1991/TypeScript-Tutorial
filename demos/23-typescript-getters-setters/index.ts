class Person {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  public get age() {
    return this._age;
  }
  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) throw new Error("The age is invalid");
    this._age = theAge;
  }
  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get firstName() {
    return this._firstName;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) throw new Error("Invalid first name");
    this._firstName = theFirstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) throw new Error("Invalid last name");
    this._lastName = theLastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public set fullName(name: string) {
    let parts = name.split(" ");
    if (parts.length !== 2) {
      throw new Error("Invalid name format: firstName lastName");
    }
    [this.firstName, this.lastName] = parts;
  }
}
let person = new Person(20, "cody", "tang");
person.age = 25;
// person.age = -1;
console.log(person.age);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.getFullName());
console.log(person.fullName);

person.fullName = "hello world";

console.log(person);
