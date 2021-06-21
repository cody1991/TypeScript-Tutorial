class Person {
  readonly birthDate: Date;
  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}
const person = new Person(new Date(1990, 12, 25));

class ShortPerson {
  constructor(readonly birthDate: Date) {
    this.birthDate = birthDate;
  }
}
const shortPerson = new ShortPerson(new Date(1990, 12, 25));
