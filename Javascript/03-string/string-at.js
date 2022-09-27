const sentence = "Soy batman";
let index = 5;

//EL METODO at DEVUELVE EL METODO EN LA POSICION INDICADA
console.log(`Voy a usar el index ${index} para que me devuelva el elemento en esa posicion ${sentence.at(index)}`);

//CUANDO at no le pasamos valor es 0
console.log(`Voy a usar el index ${index} para que me devuelva el elemento en esa posicion ${sentence.at()}`);

//Cuando le pasamos un valor negativo cuenta desde la ultima posicion
console.log(`Voy a usar el index ${index} para que me devuelva el elemento en esa posicion ${sentence.at(-1)}`);

