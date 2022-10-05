// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.

const baseUrl = "https://api.nationalize.io";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const div = document.createElement("div");
let datos;
let arrayData;

const getData = async () => {
  try {
    const response = await fetch(input.value);
    const dataToJson = await response.json();
    datos = dataToJson;
    transformData();
  } catch (error) {
    console.log(error);
  }
  const transformData = () => {
    arrayData = datos.map((element) => element);
    printData();
  };
  const printData = () => {
    
    div.innerHTML = `<p>${arrayData}</p>`;
    document.body.appendChild(div);
  };
};

btn.addEventListener("click", getData);

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.

// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
// de los p que hayas insertado y que si el usuario hace click en este botón
// eliminemos el parrafo asociado.
