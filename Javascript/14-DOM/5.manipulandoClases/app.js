const titulo = document.querySelector("#cabecera");

//Añadir una clase

titulo.classList.add("rojo");
titulo.classList.add("subrayado");

//quitar una clase

titulo.classList.remove("rojo");

//Añadir varios y eliminar varias clases

titulo.classList.add("azul","subrayado");

//toggle

const body = document.querySelector("body");
body.classList.toggle("dark");

//contain es un boolean que detecta si contiene una clase

console.log(titulo.classList.contains("rojo"));

