function add(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  else if (typeof a === 'string' && typeof b === 'string') return a.concat(b);
  throw new Error('Parameters must be strings or numbers');
}
