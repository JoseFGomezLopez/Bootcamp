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

const baseUrl = "https://api.nationalize.io?name=";
const baseUrl2 = "https://ghibliapi.herokuapp.com/films";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const div = document.createElement("div");

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

// btn.addEventListener('click', async()=>{
//   try{
//     const data = await getData(input.value);
//     for(const country of data.country){
//      document.body.innerHTML +=` 
//      <p>El nombre ${input.value} tiene un ${country.probability} por ciernto de ser
//      de ser ${country.country_id}
//      </p>
     
//      `}
//   }catch(error){
//      console.log("Error")
//   }
// })


const transformData = (datos) => {
  const arrayData = datos.map((element) => {
    return {
      name: element.name,
      image: element.image,
    };
  });
  printData(arrayData);
};
const printData = (arrayData) => {
  
  arrayData.forEach((element, i) => {
    
    const btn = document.createElement(`button`);
    
    btn.style.width = "50px";
    btn.style.height = "20px";
    btn.innerText = `X${i}`

    div.appendChild(btn);
    const p = document.createElement('p');
    
    p.innerHTML += `el nombre es ${element.name}<img src ="${element.image}" id="img${i}">`;
    div.appendChild(p);
    btn.addEventListener("click", (ev) => {
      btn.previousSibling.remove();
      div.removeChild(p);
    });
    
  });
  document.body.appendChild(div);
};
btn.addEventListener("click", getData);

