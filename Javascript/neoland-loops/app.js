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
