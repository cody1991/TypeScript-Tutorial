const json = `{"latutude":10.11,"lngitude":12.12}`;

const currentLocation = JSON.parse(json); // any对象

console.log(currentLocation);

console.log(currentLocation.x);

let result: any;

result = 10;

result.toFixed();
result.willExist();

let result2: object;

// result2 = 10.1; Type 'number' is not assignable to type 'object'.
// result2.toFixed(); Property 'toFixed' does not exist on type 'object'
