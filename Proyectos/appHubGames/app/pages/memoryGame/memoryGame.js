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
    const cartas = new Array();
    for (let j = 0; j < 6; j++) {
       baraja.sort(function() { return Math.random() - 0.5 });
       for (let i = 0; i < baraja.length; i++) {
         divComp(containerMemo,`imageBox${i}${j}`,'imageBox','');
         const imageBox = document.getElementById(`imageBox${i}${j}`)
         imageComp(imageBox,`img${i}${j}`,'imagesMemo',baraja[i],baraja[i]);
         const elementCard = document.getElementById(`img${i}${j}`);
         setTimeout(() => {
            elementCard.style.opacity = "0";  
          }, 3000);
          cartas.push(elementCard);
          elementCard.addEventListener('click',(ev)=>{ 
          jugarMemory(ev.target)
        })         
      }
    }
    let jugada = new Array();
    const jugarMemory = (ev) => {
      jugada.push(ev.alt);
      jugada.flat(2);
      jugada.forEach((img,i)=>{
        if(img===ev.alt && jugada[0]==jugada[i] && i<5){
            ev.style.opacity = "1";
            if(jugada[0]!==jugada[i]){
                jugada=[];
                getMemoryGame()
            }
        }else if(img===ev.alt && jugada[0]==jugada[i] && i==5){
            ev.style.opacity = "1";
            jugada=[];
        }else{
            jugada = [];
            getMemoryGame();
        }
      }) 
   }
}