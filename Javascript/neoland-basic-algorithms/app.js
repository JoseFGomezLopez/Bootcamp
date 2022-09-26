
//Iteración #1: Variables

let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

//Iteración #2: Variables avanzadas
//1.1

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

//1.2

firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24; 
let mensaje = `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`;
console.log(mensaje);

//1.3

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);

//1.4

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice += globalBasePrice;
console.log(car2.basePrice);

//Iteracion #3 : Operadores
//1.1
console.log(10*5);
//1.2
let division = 10/2;
console.log(division);
//1.3
let modulo = 15%9;
console.log(modulo);
//1.4
let o = 15;
let p = 10;
let j = 5;

o = p + j;
//1.5
let i = 50;
let c = 10;
let m = 5;

i = c * m;


