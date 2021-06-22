function getNetPrice(
  price: number,
  discount: number,
  format: boolean,
): number | string {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}

// Note that you cannot use angle bracket syntax <> with some libraries such as React. For this reason, you should use the as keyword for type assertions.
let netPrice = getNetPrice(100, 0.05, true) as string;
let netPrice2 = getNetPrice(100, 0.05, false) as number;
let netPrice3 = <number>getNetPrice(100, 0.05, false);
