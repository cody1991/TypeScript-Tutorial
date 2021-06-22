const items = [1, 2, 3, null]; // number[]

const items2 = [0, 1, null, "Hi"]; // (string | number)[]

const items3 = [new Date(), new RegExp("d+")]; // (RegExp | Date)[]

document.addEventListener("click", (event /** MouseEvent  */) => {
  console.log(event.button);
});
