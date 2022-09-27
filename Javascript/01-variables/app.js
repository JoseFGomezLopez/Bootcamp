let product; //declaracion sin inicializar
product = "Patatas"; //asignacion de valor

let name = "Jose"; //inicializar y asignar
let age = 39,username = "Pepe", isStudent = true;

let otherAge = 35;
let otherUser = "Juan";
let isOtherStudent = false;

//asignacion de valores
product = "Anillos";
product = 123;

//palabras reservadas no validas
//let let = 123;
//const new = 123;
//let return = 123;
//let 1name = 123;
//let my-name = ""

//cameCase
let myName = "Joe";


//Scope
let message = "Hola desde fuera de la funcion."
function showMessage() {
    let message = "Hola desde dentro de la funcion"
    console.log(message);   
}
console.log(message);
showMessage();

//////
const keyboard = "teclado";

