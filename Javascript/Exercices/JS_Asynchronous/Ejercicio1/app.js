//Iteracion1 #1 : Fetch



// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

const text = document.querySelector('[type = "text"]')

let datos;
let arrayMapeado;

const getData = async(url = 'https://api.agify.io?name=michael') =>{
    try{

        const response = await fetch(url);
        const dataToJson = await response.json();
        datos = dataToJson;
        transformData();
        

    }catch(error){
       console.log(`Error : ${error}`)
    }
}

const transformData = () => {
    arrayMapeado = new Array(datos);
    printData();
};

const printData = () => {
   text.innerHTML += `
   <p>
    ${arrayMapeado}
   </p>
   `
}

getData();








