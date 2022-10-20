import './memoryGameStyle.css'
import { imageComp } from "../../components/Images/imageComponent";
import { divComp} from '../../components/Div/divComponentId'
import {buttonComponent} from '../../components/Buttons/buttonComponent'
import {playRoom} from '../playRoom/playRoom'


export const getMemoryGame = () =>{
    
    const divContainer = document.querySelector("#app");
    divContainer.innerHTML = "";
    
    buttonComponent(divContainer,"reloadButton","HOME","reloadPlayRoom","click",(ev) => playRoom());
    divComp(divContainer,'containerMemory','containerMemory','');
    const containerMemo = document.querySelector('#containerMemory');

    const baraja = [
        "../../public/andreeMassonBullfighting.jpg",
        "../../public/giordanoDeChirico.jpg",
        "../../public/ReneMagritte1.webp",
        "../../public/pantaleones-jacques-callot.jpg"
    ]
    
    let a = 1;let b = 2;let c = 1;let d = 2;let e = 1;let f = 2;
    let g = 2;let h = 3;let ñ = 2;let z = 3;let k = 2;let l = 3;

    for (let j = 0; j < 6; j++) {
       for (let i = 0; i < baraja.length; i++) {
          imageComp(containerMemo,`img${i}${j}`,'imagesMemo',baraja[i],baraja[i]);
          const elementCard = document.getElementById(`img${i}${j}`);
          elementCard.style.visibility = "hidden";
          
          if(j<2){
          elementCard.style.gridRow = '1/2'
          elementCard.style.gridColumn = `${a}/${b}`
          a++;b++;
          }else if(j>2 && j<4){
          elementCard.style.gridRow = '2/3'
          elementCard.style.gridColumn = `${c}/${d}`
          c++;d++;  
          }else{
          elementCard.style.gridRow = '3/4'
          elementCard.style.gridColumn = `${e}/${f}`
          e++;f++; 
          }
          
          divComp(containerMemo,`imageBox${i}${j}`,'imageBox','');
          const imageBox = document.getElementById(`imageBox${i}${j}`)
          imageBox.style.visibility = "visible";
          if(j<=1){
          imageBox.style.gridRow = '1/2'
          imageBox.style.gridColumn = `${g}/${h}`
          g++;h++;
          }else if(j>1 && j<=3){
          imageBox.style.gridRow = '2/3'
          imageBox.style.gridColumn = `${ñ}/${z}`
          ñ++;z++;  
          }else{
          imageBox.style.gridRow = '3/4' 
          imageBox.style.gridColumn = `${k}/${l}`
          k++;l++;
          }
          //imageBox.style.backgroundImage = "url('../../public/joker.webp')";        
        }
    }
  
       
}