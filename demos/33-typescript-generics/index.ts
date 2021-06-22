function getRandomNumberElement(items: number[]): number {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomStringElement(items: string[]): string {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomElement<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

const numbers = [1, 2, 3, 4, 5];
console.log(getRandomElement(numbers));

function merge<U, V>(obj1: U, obj2: V): U & V {
  return {
    ...obj1,
    ...obj2,
  };
}

let result = merge({ name: 'John' }, { jobTitle: 'Frontend Developer' });
