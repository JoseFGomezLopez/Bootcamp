
//Ejercicio 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

const btn = document.querySelector('#btnToClick');
btn.addEventListener("click",console.log("click"));

//Ejercicio 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const input = document.querySelector('.focus');
input.addEventListener("focus",console.log("focus"));

//Ejercicio 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputWrited = document.querySelector('.value');
inputWrited.addEventListener("input",console.log(inputWrited.value));

