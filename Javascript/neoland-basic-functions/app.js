//Funciones Básicas

//Ejercicio 1.1

function sum(numberOne , numberTwo) {
    return (numberOne > numberTwo) ? numberOne : numberTwo;
  }
  
//Ejercicio 1.2
/*
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let largo = param[0];
    let theLargestWord = "";
   for (let i = 0; i < param.length; i++) {
    if(param[i].lenght > largo.length){
        theLargestWord = param[i];   
    }
   }
return console.log(theLargestWord);
}
findLongestWord(avengers);
*/
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
    promedio = sumatorio/param.length;
    return promedio;
}
average(numbers2);