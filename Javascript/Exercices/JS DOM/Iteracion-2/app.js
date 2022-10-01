//Ejercicio 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const division = document.createElement("div");
document.body.appendChild(division);

//Ejercicio 2.2 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const division2 = document.createElement("div");
const parrafo = document.createElement("p");

division2.appendChild(parrafo);
document.body.appendChild(division2);

// Ejercicio 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3 = document.createElement("div");

for (let i = 0; i < 6; i++) {
  div3.innerHTML += `<p>${i + 1} Parrafo</p>`;
}
document.body.appendChild(div3);

// Ejercicio 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const unorderedList = document.createElement("ul");

for (const app of apps) {
  unorderedList.innerHTML += `<li>${app}</li>`;
}

document.body.appendChild(unorderedList);

//Ejercicio 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeElements = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < removeElements.length; i++) {
  document.body.removeChild(removeElements[i]);
}

//Ejercicio 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//Recuerda que no solo puedes insertar elementos con .appendChild.

const paragraph2 = document.createElement("p");
paragraph2.textContent = "Voy en medio!";
const div1 = document.querySelector("div");

div1.insertAdjacentElement("afterend", paragraph2);

//Ejercicio 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const paragraph3 = document.createElement("p");
paragraph3.textContent = "Voy dentro!";
const div4 = document.querySelectorAll(".fn-insert-here");
for (let i = 0; i < div4.length; i++) {
  if (i == 1) {
    div4[i].insertAdjacentElement("afterend", paragraph3);
  }
}
