const addItem = (item, list) => {
  const promise = new Promise((resolve, reject) => {
    if (!list) {
      reject(`No tengo el listado de la promesa`);
    }
    setTimeout(() => {
      list.push(item);
      resolve(list);
    }, 2000);
  });
  return promise;
};

const listFruits = ["Apple", "pear", "Pineapple"];

console.log(addItem("Banana", listFruits));

addItem("Banana", listFruits)
  .then((response) => {
    console.log(`Las frutas son : ${response}`);
  })
  .catch((error) => {
    throw new Error(error);
  });
console.log("sigo ejecutandome");

//ANIDAR PROMESAS

const listCohenMovies = ["Raising Arizona", "Fargo", "Barton Fink"];
addItem("The big Lewoski", listCohenMovies).then(() => {
  addItem
    .apply("o Brother", listCohenMovies)
    .then(() => {
      console.log(listCohenMovies);
    })
    .catch((error) => {
      throw new Error(error);
    });
});


