class Employee {
  private static headcount: number = 0;
  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    Employee.headcount++;
  }

  public static getHeadcount(): number {
    return Employee.headcount;
  }
}
const john = new Employee('John', 'Doe', 'Front-end Developer');
const jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.getHeadcount());
