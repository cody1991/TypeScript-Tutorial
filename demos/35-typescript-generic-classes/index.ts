class Stack<T> {
  private elements: T[] = [];
  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void {
    if (this.isFull()) {
      throw new Error('The stack is overflow!');
    }
    this.elements.push(element);
  }
  pop(): T {
    if (this.isEmpty()) {
      throw new Error('The stack is empty!');
    }
    return <T>this.elements.pop();
  }
}

const numbers = new Stack<number>(5);

function randBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

while (!numbers.isFull()) {
  const n = randBetween(1, 10);
  console.log(`Push ${n} into the stack`);
  numbers.push(n);
}

while (!numbers.isEmpty()) {
  const n = numbers.pop();
  console.log(`Pop ${n} from the stack.`);
}

const words = 'The quick brown fox jumps over the lazy dog'.split(' ');
const wordStack = new Stack<string>(words.length);

words.forEach((word) => wordStack.push(word));

while (!wordStack.isEmpty()) {
  console.log(wordStack.pop());
}
