//Iteración #1: Mix for e includes

/* Dado el siguiente javascript usa forof para recorrer el array de películas,
   genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. 
   Ten en cuenta que las categorías no deberían repetirse. 
   Para filtrar las categorías puedes ayudarte de la función .includes() */

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const moviesCategories = new Array();

for (const movie of movies) {
  for (let i = 0; i < movie.categories.length; i++) {
    if (!moviesCategories.includes(movie.categories[i])) {
      moviesCategories.unshift(movie.categories[i]);
    }
  }
}
console.log(moviesCategories);

//Iteracion #2 : Mix Fors
/*Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos 
los sonidos favoritos que tienen los usuarios.*/

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const arrayFavoritesSounds = [];
const sounds = [];
const volume = [];
counter = 0;

for (const user of users) {
  for (const key in user) {
    //console.log(user.favoritesSounds);
    arrayFavoritesSounds.unshift(user.favoritesSounds);
  }
}

for (const sound of arrayFavoritesSounds) {
  for (const typeOfSound in sound) {
    sounds.unshift(Object.values(sound));
  }
}

for (const type of sounds) {
  for (const feature of type) {
    counter += feature.volume;
  }
}

console.log(counter);

//Iteracion 3

/* Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado 
por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el 
nombre de los sonidos que el usuario tenga como favoritos.

*/

const users2 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const favoritesSounds = new Array();
let typeOfSounds = new Array();

for (const user of users2) {
    for (const key in user) {
      favoritesSounds.unshift(user.favoritesSounds);
    }
    
  }
 for (const sound of favoritesSounds) {
      typeOfSounds.unshift(Object.keys(sound));
 } 
 typeOfSounds = typeOfSounds.flat();
 
 let newTypeOfSound = new Set(typeOfSounds);
 newTypeOfSound = Array.from(newTypeOfSound);
 let counterTwo = 0;

 for (let i = 0; i < newTypeOfSound.length; i++) {
    for (let j = 0; j < typeOfSounds.length; j++) {
        if (newTypeOfSound[i] == typeOfSounds[j]) {
            counterTwo++;
        }

    }
    console.log(`El sonido de ${newTypeOfSound[i]} ha sido elegido : ${counterTwo} veces`)
    counterTwo = 0;
}
 //console.log(newTypeOfSound);
 //console.log(typeOfSounds); 
 //console.log(counterTwo);