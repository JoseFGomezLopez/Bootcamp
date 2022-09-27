//Condicionales

const name = "Bruce";

if (name === "Bruce") {
  console.log("Es batman");
} else {
  console.log("No es Bruce ni batman");
}

//Else if

const age = 18;

if (age >= 18) {
  console.log("Eres mayor de edad");
} else if (age === 15) {
  console.log("Tienes quince años");
} else if (age > 0 && age < 15) {
  console.log("Eres un niño/a");
} else {
  console.log("No has nacido");
}

//Ternarios

const puedoEntrarAlConcierto = (age >= 18) ? true : false;
console.log(puedoEntrarAlConcierto);

//switch realiza comparaciones estrictamente iguales a una variable

const superhero = "Spiderman";

switch (superhero) {
    case "Spiderman": console.log("Su nombre real es P.Parker");
    break;
    case "Daredevil": console.log("Su nombre real es Matt Murdock");
    break;
    case "IronMan": console.log("Su nombre real es Tony Stark");
    break;
    default : console.log("No se de quien me hablas");
    break;
}

