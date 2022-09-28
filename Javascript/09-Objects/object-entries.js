

const object1 = {
    a : 'lo que sea',
    b : 50
}

//Object.entries() transforma el objeto en un array bidimensional
console.log(Object.entries(object1));

//el for of -> recorre el array de nivel1
//->la primera iteracion me devuelve ->[a,50]
//->la segunda iteracion devuelve ->[b,85]
//destructuring -> [key,value]

for (const [key,value] of Object.entries(object1)) {
    console.log(`${key} : ${value}`);   
}

const arrayElements = [[1,2,3],[1,2,3,4]];
for (const [pos0,pos1,pos2,pos3] of arrayElements) {
    console.log(`${pos0} : ${pos1} :${pos2} : ${pos3 != undefined ? pos2 : 'no existe el elemento' }`);
}