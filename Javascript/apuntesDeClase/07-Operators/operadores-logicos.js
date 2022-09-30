//OPERADORES LOGICOS

//operador OR - O ||

const soyMayorDeEdad = true;
const tengoDinero = false;
const puedoSalirDeCervezas = soyMayorDeEdad || tengoDinero;

console.log(puedoSalirDeCervezas);

//operador && AND

const tengoCoche = true;
const tengoCarnet = false;

const puedoconducir = tengoCarnet && tengoCoche;

console.log(puedoconducir);

//NOT !

const trueNot = ! true;
const falseNot = ! false;

console.log(trueNot);
console.log(falseNot);

//////////////

const name = "Peter";

if (name) {
    console.log("Hola" + name)    
} else {
    console.log("No hay nombre");
}