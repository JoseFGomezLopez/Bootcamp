const array1 = [1,5,7,9,12];

//at
const index1 = 3; // si tenemos un string "3" funciona igual, conversion implicita

console.log(array1.at(index1));

//concat

const arrayConcat1 = [1,2,3];
const arrayConcat2 = [5,7,8];
const arrayConcat3 = arrayConcat1.concat(arrayConcat2);
const arrayConcat4 = [a,b,{a:'hola',b:56}];
//Spread operator
//[+...]->  dest almacenarlo
const arrayConcatSpreed = [...arrayConcat1,...arrayConcat2,...arrayConcat3];
console.log(arrayConcatSpreed);

//copywithin
const arrayCopy = ['a','b','z',65];
console.log(arrayCopy.copyWithin(0,2));

//entries()

const arrayEntries = [1,2,3]; // transforma el array en un objeto usando su indice como key

const iteratorEntries = arrayEntries.entries();
console.log(iteratorEntries);

console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);

//fill

const arrayFill = [1,2,3,5];
console.log(arrayFill.fill(0,2,4)); // param1 valor a llenar, param2 desde donde, param3 hasta que posicion 
console.log(arrayFill.fill(0,1));

// flat un array bidimendsional lo transforma en un array unidimensional

const arrayFlat = [1,2,[1,2,3],5];
console.log(arrayFlat.flat());
// .falt(param) param indica los niveles que aplana a una dimension
//infinitos niveles aplanados
//si contiene un objeto no lo aplana

//includes -> devuelve true o false si encuentra el valor
//los objetos no los devuelve

const arrayIncludes = [1,2,3,4,'p'];
const arrayIncludes2 = [1,2,3,4,'p',{a : 'pepa'}];
console.log(arrayIncludes.includes('p'));

//indexOf(valor) si encuentra el valor devuelve el indice del primer valor, si no lo encuentra devuelve -1
//lastIndexOf(valor) devuelve el ultimo valor

const arrayIndexOf = [1,2,3,4.5,6];
console.log(arrayIndexOf(23));

//join() transforma un array en string separado por coma y tiene un param opcional para añadir otro caracter que no sea coma

const arrayJoin = ['a','b','c'];
console.log(arrayJoin(" "));

//propiedad length devuelve la longitud natural

console.log(arrayConcat2.length);

//push para añadir la ultima posicion
//pop para eliminar la ultima posicion

const arrayPushPop = [`123`,2,32,12,3,9];
arrayPushPop.push('hola');
arrayPushPop.pop();

//reverse devuelve el array invertido

console.log(arrayPushPop.reverse());

//shit elimina el primero
//unshitf añade el valor en la primera posicion array[0]

arrayConcat1.unshift(5,6,8); // añade todos los valores de metas por parametro
console.log(arrayConcat1);

//slice te devuelve desde la posicion que corta, el segundo param no esta incluido 
const arraySlice = [12,3,4,5,'pato','rana','mono'];
console.log(arraySlice.slice(2));
console.log(arraySlice.slice(2,3));

//sort ordena de forma alfabetico si no tiene valores numericos

const arraySort = [1,2,3,'A','c','t'];
console.log(arraySort.sort()); // para numeros los solo considera de menor a mayor la primera cifra

//splice -> posicionInicio + Elimina + Opcional añade

const months = ["Enero","Febrero","Marzo"];
months.splice(1,0,"Pepe");
//months.splice(posicion,elementos a borrar,elemento añadir);

//values transforma un array en un array de objetos

const arrayValues = [1,2,3,4,5,5,6];
const iteratorValues = arrayValues.values();
console.log(iteratorValues);

for (const value of iteratorValues) {
     console.log(value);
}








