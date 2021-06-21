const input = document.querySelector(
  'input["type="text""]'
) as HTMLInputElement;

console.log(input.value);

const input2 = document.querySelector('input["type="text""]');

console.log((input2 as HTMLInputElement).value);

let el: HTMLElement;

el = new HTMLInputElement();

let input3 = <HTMLInputElement>document.querySelector('input["type="text""]');
console.log(input3.value);
