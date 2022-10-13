// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.

/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.

2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */

const baseUrl = "https://api.nationalize.io/?name=";
const baseUrl2 = "https://ghibliapi.herokuapp.com/films";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const div = document.createElement("div");

div.classList.add(`div_flex`);
let datos;

const getData = async () => {
  try {
    const response = await fetch(baseUrl2);
    const dataToJson = await response.json();
    datos = dataToJson;
    transformData(datos);
  } catch (error) {
    console.log(error);
  }
};
const transformData = (datos) => {
  const arrayData = datos.map((element) => {
    return {
      name: element.title,
      image: element.image,
    };
  });
  printData(arrayData);
};
const printData = (arrayData) => {
  arrayData.forEach((element, i) => {
    const btn = document.createElement(`button`);

    btn.setAttribute("id", `id_${i}`);

    btn.style.width = "50px";
    btn.style.height = "20px";
    btn.innerText = `X${i}`;

    document.body.appendChild(btn);
    div.innerHTML += `<p id="parrafo${i}">el nombre es ${element.name}<img src ="${element.image}" id="img${i}"></p>`;

    btn.addEventListener("click", (ev) => {
      const p = document.querySelector(`parrafo${i}`);
      div = p.parentNode;
      div.removeChild(p)
    });
    
  });
  document.body.appendChild(div);
};
btn.addEventListener("click", getData);

// const removeThisImage = document.querySelectorAll(".removeThisImage");

// for (const button of removeThisImage) {
//     button.addEventListener("click", () => button.parentElement.remove());
// }
// const getButton2 = document.querySelectorAll('.remove-this')
// getButton2.forEach(btn => {
//     btn.addEventListener('click', (evt) => {
//         const element = evt.path[1]
//         element.remove();}}
