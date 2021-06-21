interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id: number): Product {
  return {
    id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}

const product = getProduct(1);

console.log(`The product ${product.name} costs $${product.price}.`);

const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs $${price}.`);
};

showProduct(product.name, product.price);
