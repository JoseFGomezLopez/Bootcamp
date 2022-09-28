
//tradicional

function nameFunction(params) {
     //operar y transformar
     //retornar un valor
    return params;
}
//invoke function
nameFunction(1);

//Arrow functions

const arrowFunction = (a) => {
    console.log("Hola");
    if(a) return `Bienvenido ${a}`
    return "Bienvenidos"
};
let greeting = arrowFunction();
console.log(greeting);

//return implicito en arrow function
const arrowReturnImplicito = () => "Bienvenidos";
//Solo con un param, mas de un param con parentesis
const arrowReturnParam = param => `${param} ejemplo`;

//ayuda VSC

function tradicional(){return "Hola"}
const arrowFunction2 = () => {return  "Hola"};

//Si hay un valor de retorno se almacena en otra variable
 


