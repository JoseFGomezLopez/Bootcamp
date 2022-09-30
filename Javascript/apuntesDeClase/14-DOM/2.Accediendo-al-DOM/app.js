

//RECUPERANDO ELEMENTOS DEL DON

//getElementByID

const subtitle = document.getElementById("subtitle");
console.log(subtitle);

const paragraphNode = document.getElementsByClassName("paragraph");
console.log(paragraphNode);

const allDivs = document.getElementsByTagName("div");
console.log(allDivs);

//Los que se usan siempre

//querySelector recupera un elemento del DOM por selector

const querySubtitle = document.querySelector("#subtitle");
const queryParagrap = document.querySelector(".paragraph");

//querySelectorAll recuprea una lista de elementos

const queryDiv = document.querySelectorAll("div");

console.log(querySubtitle);
console.log(queryParagrap);
console.log(queryDiv);

/
