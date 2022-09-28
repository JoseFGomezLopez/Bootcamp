//literal string

const  name = "Peter";
const surname = "Parker";

const fullName = `${name} ${surname}`;

const html = `
<h2>
   ${fullName}
</h2>`

//Object destructuring
//al desestructurar pierde la referencia, al modificar la propiedad no se sobreescribe la variable
const alumn = {
    firstName : "Pedro",
    edad : 29,
    job : "Developer",
    hobbies : {
       sport : "active",
       music : "not active"
    }

};

const alumnName = alumn.name;
const {firstName,age} = alumn;
const {sport,music} = alumn.hobbies;

//Spread operator
//pierde la referencia de memoria y no se sobreescribe si despues cambia los arrays usados en la copia

const heroes = ["Aragorn","Boromir","Frodo"];
const villains = ["Saruman", "Sauron", "Ella"];
const characters = [...heroes,...villains];
console.log(characters);

//map()

const officiers = [
    {id : 20,name:"Jack London"},
    {id : 32,name:"Zigmunt Bauman"},
    {id : 54,name:"Anna Harent"},
    {id : 2,name:"Jack The Ripper"}
];

//con for of
const officiersIDs = [];

for (const officier of officiers) {
    officiersIDs.push(officier.id);
}
console.log(officiersIDs);

//con map

const officiersIdsWithMap = officiers.map(officier => officier.id);
console.log(officiersIdsWithMap);

//crear un objeto nuevo con map

const customersOfficers = officiers.map(officer => ({
    nombre : officer.name,
    identification : officer.id
}));

//Filter
//filtra y devuelve todas las coincidencias de la coleccion
const pilots = [
    {id : 20,named:"Simbad"},
    {id : 32,named:"Ahab"},
    {id : 54,named:"Capitan Nemo"},
    {id : 2,named:"Barba Roja"}
];

const piratas = pilots.filter(pilot => pilots.named === "Barba Roja");
const over20 = pilots.filter(pilot => pilots.id >8 );
console.log(piratas);
console.log(over20);

//Como se haria con lo basico

const pilotArray=[];
for (const pilot of pilots) {
    if(pilot.named === "Barba Roja"){
        pilotArray.push(pilot);
    }
     }


// Find 
//Encuentra el primer elemento que coincida con la eleccion
//devuelve la primera coincidencia de la coleccion
const numArray = [2,45,34,35,45,6];
const find45 = numArray.find( number => number ===45 );
console.log(find45);

//reduce -> reduce los resultados en una especie de contador;

const pilots2 = [
    {id : 20,named:"Simbad",years : 12},
    {id : 32,named:"Ahab",years : 23},
    {id : 54,named:"Capitan Nemo",years : 1},
    {id : 2,named:"Barba Roja",years : 2}
];

const totalYears = pilots2.reduce((accumulator,pilot) => accumulator + pilot.years,0);
console.log(totalYears);

