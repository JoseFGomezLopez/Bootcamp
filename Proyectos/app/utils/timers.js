
import { imageComponent } from "../components/Image/imageComponent";
 


const app = document.querySelector('#app');

let identificador;

export const backTimming = (listcards) => {

  let contador = 0;
 
  for (let i = 0; i < listcards.length; i++, contador+=1000) {
    identificador =  setTimeout(() => 
    app.innerHTML = imageComponent(listcards[i]),
    contador);
    app.addEventListener('click',(ev)=>clearTimeout(identificador));  
  }
}

export const stopped = () => {
  console.log(identificador)
  clearTimeout(identificador);
}
