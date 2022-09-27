
//Iteración #1: Variables

let myFavoriteHero; myFavoriteHero = "Hulk";
let x; x = 50;
let h; h = 5;
let y; y = 10;
let z; z = h + y;

//Iteración #2: Variables avanzadas
//1.1

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

//1.2

let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 
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
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car2.basePrice);

//Iteracion #3 : Operadores
//1.1
let multiplicacion = 10 * 5;
console.log(multiplicacion);

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

//Iteracion #4 : Arrays

//1.1

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2

avengers[0] = "IRON MAN";

//1.3

console.log(avengers.length);

//1.4

//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
//rickAndMortyCharacters.push("Morty","Summer");
//console.log(rickAndMortyCharacters.length-1);

//1.5

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0] + "\r\n" + rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

//1.6

rickAndMortyCharacters.splice(2,1);
rickAndMortyCharacters.push("Lapiz Lopez");
console.log(rickAndMortyCharacters);

//Iteracion #5 : Condicionales

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2/number1==2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if ((number3 * 5) == number1) {
  console.log("number3 por 5 es igual a number1");
}

if ((number3 * 5) == number1 && (number1 * 2) == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if ((number2 / 2) == number1 || (number1 / 5) == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//Iteracion #6 : Bucles

//Ejercicio 1.1

for (let i = 0; i <= 9; i++) {
    console.log(i);
}

//Ejercicio 1.2

for (let i = 0; i <= 9; i++) {
    if (i % 2 == 0){
        console.log(i)
    };
}
//Ejercicio 1.3

for (let j = 0; j < 10; j++) {
    if(j < 9){
        console.log("Intentando dormir")
    }else{
        console.log("Dormido!.")
    };
    
}
    
