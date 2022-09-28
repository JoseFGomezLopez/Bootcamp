//Funciones Básicas

//Iteracion 1 : devolver el numero maximo pasado como argumento

function maxNumber(numberOne, numberTwo) {
  return numberOne > numberTwo ? numberOne : numberTwo;
}

let greater = maxNumber(3, 2);
console.log(greater);

//Iteracion #2 Buscar la palabra mas larga de un array

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const findLongestWord = (arr) => {
  let theLargestWord = " ";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > theLargestWord.length) {
      theLargestWord = arr[i];
    }
  }
  return console.log(theLargestWord);
};
findLongestWord(avengers);

//Iteracion 3 Sumar todos los elementos number de un array

const numbers = [1, 2, 3, 5, 45, 37, 58];

const sum = (param) => {
  let sumatorio = 0;
  for (let i = 0; i < param.length; i++) {
    sumatorio += param[i];
  }
  return sumatorio;
};
var sumAll = sum(numbers);
console.log(sumAll);

/*
function sumAll(arr) {
  let sumatorio = 0;
 
  for (let i = 0; i < arr.length; i++) {
    sumatorio += arr[i];
  }
  return sumatorio;
}
sumAll(numbers);
*/

//Iteracion 4 : Calcular el promedio

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

const average = (param) => {
  let sumatorio = 0;
  let promedio = 0;
  for (let i = 0; i < param.length; i++) {
    sumatorio += param[i];
  }
  promedio = sumatorio / param.length;
  return promedio;
};
const promedio = average(numbers2);
console.log(promedio);

//Iteracion 5 : Calcular promedio de Strings

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
const averageWord = (param) => {
  let sumatorio = 0;
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] == "string") {
      sumatorio += param[i].length;
    } else if (typeof param[i] == "number") {
      sumatorio += param[i];
    } else {
      continue;
    }
  }
  return sumatorio / param.length;
};
const average2 = averageWord(mixedElements);
console.log(average2);

//Iteracion 6 : Valores duplicados

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(param) {
  var sinDuplicar = new Set(param);
  return sinDuplicar.values();
}
removeDuplicates(duplicates);

//Iteracion 7 : Buscar un valor en un array

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
const Findering = (param, valueParam) => {
  for (let i = 0; i < param.length; i++) {
    if (param[i] === valueParam) {
      console.log(`El valor que buscas está en la posicion ${i} : ${param[i]}`);
      break;
    } else if (param[i] != valueParam && param.length - 1 == i) {
      console.log(`El valor no existe en el array`);
    }
  }
};
Findering(nameFinder, "Clint");

// Iteracion 8 : Contador de iteraciones

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(elements) {
  let counter = 0;
 for
}

