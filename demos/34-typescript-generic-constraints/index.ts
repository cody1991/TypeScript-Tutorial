function merge<U extends object, V extends object>(obj1: U, obj2: V): U & V {
  return {
    ...obj1,
    ...obj2,
  };
}

const person = merge({ name: 'John' }, { age: 25 });
// const person2 = merge({ name: 'John' }, 2);

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

prop({ name: 'John', age: 25 }, 'name');
// prop({ name: 'John', age: 25 }, 'sex');
