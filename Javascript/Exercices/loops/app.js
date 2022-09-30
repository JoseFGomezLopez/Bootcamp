//Iteracion 1:

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++) {
  if (products[i].includes("Camiseta")) {
    console.log(products[i]);
  }
}

//Iteración #2: Condicionales avanzados

/* 
  Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y 
  añade la propiedad isApproved a true o false en consecuencia.
  Una vez lo tengas compruébalo con un console.log. 
  */

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];
const approvedSearcher = (initialArray) => {
  for (let i = 0; i < initialArray.length; i++) {
    if (
      initialArray[i].T1 == true &&
      (initialArray[i].T2 == true || initialArray[i].T3 == true)
    ) {
      initialArray[i].isApproved = true;
      console.log(
        `${initialArray[i].name}, APROBADO: ${initialArray[i].isApproved}`
      );
    } else if (
      initialArray[i].T3 == true &&
      (initialArray[i].T2 == true || initialArray[i].T1 == true)
    ) {
      initialArray[i].isApproved = true;
      console.log(
        `${initialArray[i].name}, APROBADO: ${initialArray[i].isApproved}`
      );
    } else if (
      initialArray[i].T2 == true &&
      (initialArray[i].T3 == true || initialArray[i].T1 == true)
    ) {
      initialArray[i].isApproved = true;
      console.log(
        `${initialArray[i].name}, APROBADO: ${initialArray[i].isApproved}`
      );
    }
  }
};

approvedSearcher(alumns);

//Iteración #3: Probando For...of
/* Usa un bucle forof para recorrer todos los destinos del array. 
Imprime en un ***console.log*** sus valores.*/

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];
for (const place of placesToTravel) {
  console.log(place);
}

//Iteración #4: Probando For...in
/*Usa un for...in para imprimir por 
consola los datos del alienígena.. Puedes usar este objeto: */

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const key in alien) {
  console.log(`${key} : ${alien[key]}`);
}

//Iteración #5: Probando For
/* Usa un bucle for para recorrer todos los destinos del array y elimina los 
elementos que tengan el id 11 y 40.
Imprime en un console log el array. Puedes usar este array:*/

const placesToTravel2 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
// const newArray = placesToTravel2.filter(place => placesToTravel2.id !== 11 );
// console.log(newArray);
let newArray = [];
for (let i = 0; i < placesToTravel2.length; i++) {
  if (placesToTravel2[i].id == 11 || placesToTravel2[i].id == 40) {
    placesToTravel2.splice([i], 1);
  }
}

console.log(placesToTravel2);

//Iteracion #6:
/* Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:*/

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];
let index = 0;
for (const toy of toys) {
  if (toy.name.includes("gato")) {
    toys.splice(index, 2);
  }
  index++;
}
console.log(toys);

//Iteracion #7:
//Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas 
//(sellCount) al array popularToys. 
//Imprimelo por consola.. Puedes usar este array:

const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

