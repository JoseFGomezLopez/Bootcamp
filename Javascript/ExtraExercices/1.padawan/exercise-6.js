const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

products.filter((product) => {
    if(product.sellCount < 20) {
      badProducts.push(product);
    }else{
        goodProducts.push(product);
    }
});
console.log(goodProducts);
console.log(badProducts);