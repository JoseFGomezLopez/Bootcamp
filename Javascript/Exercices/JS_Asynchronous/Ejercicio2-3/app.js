// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.

const baseUrl = "https://api.nationalize.io";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const div = document.createElement("div");

div.classList.add(`div_flex`);
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
}
  const transformData = () => {
    arrayData = datos.results.map((element) => { 
    return {
    name : element.name,
    image : element.image
    }
  });
    printData();
  };
  const printData = () => {
    arrayData.forEach((element)=>{
      
      const body = document.querySelector('body');
      const btn = document.createElement(`button`);
      btn.style.width = "100px";
      btn.style.height = "100px";
      btn.innerText = "X";
      body.appendChild(btn);
      btn.addEventListener('click',(ev)=>{
      
        element ;
        document.removeChild(btn);
      
      });

      div.innerHTML += `
    <p>el nombre es ${element.name}</p>
    <p><img src ="${element.image}"></p>`;
  });
  document.body.appendChild(div);
};
btn.addEventListener("click", getData);





