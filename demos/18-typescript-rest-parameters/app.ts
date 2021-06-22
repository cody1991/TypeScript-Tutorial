function getTotal(base?: number, ...numbers: number[]): number {
  let total = typeof base === 'number' ? base : 0;
  numbers.forEach((num) => (total += num));
  return total;
}

console.log(getTotal(1, 2, 3));
