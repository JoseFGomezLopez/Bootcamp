//Ejercicio 1.1 Basandote en el array siguiente, crea una lista ul > li
//dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const unOrderedList = document.createElement("ul");

for (const country of countries) {
  unOrderedList.innerHTML += `<li>
     ${country}
    </li>`;
}

document.body.appendChild(unOrderedList);

//Ejercicio 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeElement = document.querySelector(".fn-remove-me");
document.body.removeChild(removeElement);

//Ejercicio 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const div = document.querySelector("[data-function]");
const unOrderedList2 = document.createElement("ul");

for (const car of cars) {
  unOrderedList2.innerHTML += `<li data-function = "printHere">
    ${car}
    </li>`;
}
div.appendChild(unOrderedList2);

//Ejercicio 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
//h4 para el titulo y otro elemento img para la imagen.

// for (const country of countries) {
//     let createCountryItem = document.createElement("div");
//     createCountryItem.innerHTML = <h4>${country.title}</h4><img src=${country.imgUrl} />;
  
//     document.body.appendChild(createCountryItem);
//   }

const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
const divContainer = document.createElement("div");

for (let i = 0; i < countries2.length; i++) {
  
  const divElement = document.createElement("div");
  const h4Element = document.createElement("h4");
  const image = document.createElement('img');
  
  image.setAttribute('src','"' + countries2[1].imgUrl + '"')
  divElement.setAttribute("id", 'div_'+i+"'");
  h4Element.textContent += countries2[i].title;
  
  divElement.appendChild(h4Element);
  divElement.appendChild(image);
  document.body.appendChild(divElement);

}

//Ejercicio 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la lista.

 const btn = document.createElement("button");
 document.body.appendChild(btn);
 btn.setAttribute("id","delete-last-element");

const lastElementButton = document.querySelector("#delete-last-element");
lastElementButton.addEventListener("click", function () {
const selectDivs = document.querySelectorAll("div");
selectDivs[selectDivs.length - 1].remove();
});

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/

countries2.forEach((country, i) => {
    
  const btn = document.createElement(`button`);
  
  btn.style.width = "50px";
  btn.style.height = "20px";
  btn.innerText = `X${i}`

  div.appendChild(btn);
  
  const p = document.createElement('p');
  
  p.innerHTML += `el nombre es ${element.name}<img src ="${element.image}" id="img${i}">`;
  div.appendChild(p);
  btn.addEventListener("click", (ev) => {
  div.removeChild(p);}
  });


