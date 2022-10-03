//Iteracion #1 :
//Crea una arrow function que tenga dos parametros a y b y
//que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
//por consola la suma de los dos parametros.
//1.1 : 1.1 Ejecuta esta función sin pasar ningún parametro
//1.2 Ejecuta esta función pasando un solo parametro
//1.3 Ejecuta esta función pasando dos parametros

var sum = (a = 10, b = 5) => a + b;

console.log(sum());
console.log(sum(12));
console.log(sum(23, 32));

//Iteracion #2 : Destructuring
//2.1 En base al siguiente javascript, crea variables en base a las propiedades
//del objeto usando object destructuring e imprimelas por consola. Cuidado,
//no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

let { title, gender, year } = game;

console.log(title);
console.log(gender);
console.log(year);

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ["Banana", "Strawberry", "Orange"];

let [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//2.3 En base al siguiente javascript, usa destructuring para crear 2
//variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

let { param1, param2 } = animalFunction();

console.log(param1);
console.log(param2);

//2.4 En base al siguiente javascript, usa destructuring para crear las
//variables name y itv con sus respectivos valores. Posteriormente crea
//3 variables usando igualmente el destructuring para cada uno de los años
//y comprueba que todo esta bien imprimiendolo.

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

let { name, itv } = car;

console.log(name);
console.log(itv);

let [año1, año2, año3] = itv;

console.log(año1);
console.log(año2);
console.log(año3);

// Iteracion #3 : Spread Operator

//3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];

const newArray = [...pointsList];
console.log(newArray);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const toyCopied = { ...toy };
console.log(toyCopied);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
//spread operatos.

const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis3 = [54, 87, 99, 65, 32];

const newArray2 = [...pointsList2, ...pointsLis3];
console.log(newArray2);

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
//con spread operators.

const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const newToyObject = { ...toy2, ...toyUpdate };
console.log(newToyObject);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
//pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const newArrayColors = [
  ...colors.slice(0, 2),
  ...colors.slice(3, colors.length),
];
console.log(newArrayColors);

//Iteracion #4 : Map

// 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersNames = users.map((userName) => userName.name);
console.log(usersNames);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.

const users2 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersNames2 = users2.map((userName) => {
  if (userName.name.startsWith("A")) {
    return (userName.name = "Anacleto");
  } else {
    return userName.name;
  }
});
console.log(usersNames2);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesVisited = cities
  .filter((city) => city.isVisited == true)
  .map((city) => (city.name += " Visitado"));
console.log(citiesVisited);

//Iteracion #5: Filter

//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adults = ages.filter((age) => age > 18);
console.log(adults);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los valores que sean par.

const peersAges = ages.filter((age) => age % 2 == 0);
console.log(peersAges);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lolStreamers = streamers.filter(
  (streamer) => streamer.gameMorePlayed == "League of Legends"
);
console.log(lolStreamers);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
//usar la funcion .includes() para la comprobación.

const nameWithU = streamers.filter((streamer) => streamer.name.includes("u"));
console.log(nameWithU);

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
//.age sea mayor que 35.

const legendsStreames = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes("Legends")) {
    if (streamer.age <= 35) {
      return streamer.name;
    } else {
      return streamer.name.toUpperCase();
    }
  }
});

console.log(legendsStreames);

//5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
//los streamers que incluyan la palabra introducida en el input. De esta forma, si
//introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

// const input = document.querySelector("input");

// function buscarNombre(e) {

//   const result = streamers.filter((streamer) => {
//     if (streamer.name.includes(input.value)) {
//        console.log(streamer.name);
//       return input.textContent= streamer.name;
//     }
//   });
// }
// input.addEventListener("input", buscarNombre);

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.

// const input5_7 = document.querySelector("input");
// const btn = document.querySelector("button");

// const e = () => {
//   const result2 = streamers.filter((streamer) => {
//     if (streamer.name.includes(input5_7.value)) {
//       console.log(streamer.name);
//       return streamer.name;
//     }
//   });
// };
// btn.addEventListener("click", e);

//Iteracion #6 : Find
//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const movie2010 = movies.find(movie => movie.date = 2010);
console.log(movie2010);

//6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre
//'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa
//spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación
//lo queremos meter en la propiedad .mutation del objeto fusionado.

const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];
const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];
const mutant = {...aliens.find(alien => alien.name == "Cucushumushu"),...mutations.find(mutation => mutation.name == "Porompompero")};
console.log(mutant); 

//Iteracion #7: 

//7.1 Dado el siguiente array, haz una suma de todos las notas de 
//los examenes de los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumAllScores = exams.reduce((acc,score) => acc + score.score,0);
console.log(sumAllScores);

//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
//alumnos que esten aprobados usando la función .reduce().

const sumAllScoresApproved = exams
.filter(score => score.score>=5)
.reduce((acc,score) => acc + score.score,0);
console.log(sumAllScoresApproved);

//7.3 Dado el mismo array, haz la media de las notas de todos los 
//examenes .reduce().

const media = exams.reduce((acc,score) => acc + score.score,0)/exams.length;
console.log(media);