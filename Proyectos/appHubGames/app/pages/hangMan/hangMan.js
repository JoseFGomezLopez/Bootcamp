import './hangManStyle.css'
import { imageComp } from "../../components/Images/imageComponent";
import { inputComponentPattern } from '../../components/InputComponent/inputCompPattern'
import { divComp } from '../../components/Div/divComponentId'
import {buttonComponent} from '../../components/Buttons/buttonComponent'
import { playRoom } from '../playRoom/playRoom'
import { divCompLiteral } from '../../components/Div/divComponentLitealString';


export const hangMan = () =>{
    
    const words = ["arrays","boolean","number","string","undefined","null","object"];
    let counter = 0;
    let counterVidas = 5;

    const divContainer = document.querySelector('#app');
    divContainer.innerHTML = '';
    buttonComponent(divContainer,"reloadButton","HOME","reloadPlayRoom","click",(ev) => playRoom());
    divComp(divContainer,'containerHangMan','containerHangMan','');
    const container = document.querySelector('#containerHangMan');
    imageComp(container,'cadalsoImg','cadalsoImg','cadalso o patíbulo','../../public/sogas.jpg');
    divComp(container,'letterContainer','letterContainer','');
    divComp(container,"divContainerLetters","divContainerLetters",'') 
    const divContainerLetters = document.querySelector('#divContainerLetters')
    divComp(container,"counterLifesBox",'counterLifesBox','');
    const counterLifesBox = document.querySelector('.counterLifesBox')
    divCompLiteral(counterLifesBox,'counterLifes','counterLifes',`${counterVidas}`);
    
    const initLetters = (counter) => {
          
        words[counter].split('').forEach((element,i)=>{
        divCompLiteral(divContainerLetters,'letterBox','letterBox',`<span id="span${i}" class="letter">${element}</span>`);
        
    });
    }
    initLetters(counter); 
    const validacion = new Array();
    const tryLetter = () => {
        const input = document.querySelector('.inputHangMan');
        const letter = words[counter].split('');
        if(input.value == ""){alert('Introduce una letra por favor')
       }else if(words[counter].toLowerCase().includes(input.value.toLocaleLowerCase())){   
            letter.forEach((element,i)=> {
             const span = document.getElementById(`span${i}`)
             if(element.toLowerCase()===input.value.toLocaleLowerCase()){
             span.style.visibility = "visible"
             console.log(letter)
             validacion.push('1')
             console.log(validacion)
             if(letter.length == validacion.length){
                console.log(letter.length)
                console.log(validacion.length)
                counter++;
                divContainerLetters.innerHTML='';
                initLetters(counter);
                validacion.splice(0,validacion.length);
                console.log(validacion)
            }
        }
    })
    }else{
        counterVidas--;
        const counterLifes = document.querySelector('.counterLifes')
        counterLifes.innerText=counterVidas;
        if(counterVidas==0){
         counterLifesBox='';
         container.innerHTML =`<img class="muerte" src="../../public/MussoliniAhorcado.jpg">`
         setTimeout(() => {
            hangMan();
        }, 3000);
                   
         }
    }
             
   }
    inputComponentPattern(container,'inputHangMan','text','Introduce una letra','[A-Za-z]{,1}');
    const input = document.querySelector('.inputHangMan');
    buttonComponent(container,"verifyButton",'Apply','Boton de aplicar letra','click',(ev)=>{
        tryLetter();
        input.textContent = '';
    });
   

}