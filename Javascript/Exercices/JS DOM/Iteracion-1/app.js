
// Ejercicio 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const btn = document.querySelector(".showme");
console.log(btn);

// ejercicio 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillado = document.querySelector("#pillado");
console.log(pillado);

//ejercicio 1.3 Usa querySelector para mostrar por consola todos los p

const elementosP = document.querySelector("p");
console.log(elementosP);

//ejercicio 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const allPokemons = document.querySelectorAll(".pokemon");
console.log(allPokemons);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".

const elementosDataFunctionAtributte = document.querySelectorAll("[data-function = 'testMe']");
console.log(elementosDataFunctionAtributte);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

const elemento3DataFunctionAtributte = document.querySelector("body:nth-child(13)");
console.log(elemento3DataFunctionAtributte);