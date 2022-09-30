//Bucles

//

const alimentos = ["Patata", "Cerveza", "Pan", "Agua", "Galletas"];
for (let index = 0; index < alimentos.length; index++) {
  const element = alimentos[index];
  console.log(element, index);
}
//LO QUE PASA EN UN BUCLE SE QUEDA EN UN BUCLE
//NORMALMENTE EL INDEX SE DECLARA COMO i

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//         for (let j = 0; j < array.length; j++) {
//             const element = array[j];

//         }
// }

//for...of
//Va a crear tantos elemento como tenga el objeto pasado
//no se puede iterar objetos, pues no accede a la clave

const movies = ["Bambi", "Terminator", "Rambo", "Alien"];

//Itera en un objeto
for (const movie of movies) {
  console.log(movie);
}

//forEach();

const alumnos = ["Daniel", "Alex", "Laura", "Saray", "Ruben"];

alumnos.forEach((alumno, i) => {
  //  console.count("forEach()") = 0;
  console.log(`Buenas tardes ${alumno} #${i}`);
  //  if (i == alumnos.length-1) {
  //      console.countReset();
  //  }
});

//for...in
// para objetos es el loop ideal
const show = {
  name: "Joe",
  age: 39,
  surname: "Gomez",
};

for (const key in show) {
  console.log("La clave : " + key);
  console.log("El valor : " + show[key]);
}

//Ejemplo

const character = {
  name: "Iron Man",
  realName: "Tony Stark",
  suits: [
    {
      name: "Mark IV",
      color: "golden",
      status: "Destroyed",
    },
    {
      name: "Mark VII",
      color: "red",
      status: "Operative",
    },
  ],
};

console.log(character.suits[1].name); // MARK VII

//FOR OF VS FOR EACH

const firstArray = ["Lucke", "Laia", 2020];
const firstString = ["El imperio contraataca"];

for (const element of firstArray) {
  console.log(element);
}

//La ventaja del forEach es que podemos acceder al indice

firstArray.forEach((element, i) => {
  console.log(element + " " + i);
});



