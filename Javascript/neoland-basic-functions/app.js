//Funciones Básicas

//Iteracion 2 : devolver el numero maximo pasado como argumento

function sum(numberOne, numberTwo) {
  return numberOne > numberTwo ? numberOne : numberTwo;
}

//Ejercicio 1.2

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    //let largo = param[0];
    let theLargestWord = " ";
   for (let i = 0; i < param.length; i++) {
    if(param[i+1].length < param.length-1 && param[i].lenght > param[i+1].length){
        theLargestWord += param[i];   
    }
   }
return console.log(theLargestWord);
}
findLongestWord(avengers);

//Iteracion 3

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(arr) {
  let sumatorio = 0;

  for (let i = 0; i < arr.length; i++) {
    sumatorio += arr[i];
  }
  return sumatorio;
}
sumAll(numbers);

//Iteracion 4 : Calcular el promedio

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let sumatorio = 0;
  let promedio = 0;
  for (let i = 0; i < param.length; i++) {
    sumatorio += param[i];
  }
  promedio = sumatorio / param.length;
  return promedio;
}
average(numbers2);

//Iteracion 5 : Calcular promedio de Strings

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param) {
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
}
averageWord(mixedElements);

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
function finderName(param, valueParam) {
  for (let i = 0; i < param.length; i++) {
    if (param[i] == valueParam) {
      console.log(`El valor que buscas está en la posicion ${i} : ${param[i]}`);
      break;
    } else if (param[i] != valueParam && param.length - 1 == i) {
      console.log(`El valor no existe en el array`);
    }
  }
}
finderName(nameFinder, "Clint");

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
function repeatCounter(param) {
  let counter = 0;
  for (let i = 0; i < param.length; i++) {
    for (let j = param.length; j >= 0; j--) {
      if (param[i] == param[j]) {
        counter++;
       // console.log(`El valor ${param[i]} esta repetido ${counter} veces`);
                 
      }
    }
  }
}
repeatCounter(counterWords);