import './hangManStyle.css'
import { imageComp } from "../../components/Images/imageComponent";
import { inputComponent } from '../../components/InputComponent/inputComponent'
import { divComp } from '../../components/Div/divComponentId'
import {buttonComponent} from '../../components/Buttons/buttonComponent'

export const hangMan = () =>{
    
    const divContainer = document.querySelector('#app');
    divContainer.innerHTML = '';
    buttonComponent(divContainer,"reloadButton","HOME","reloadPlayRoom","click",(ev) => playRoom());
    divComp(divContainer,'containerHangMan','containerHangMan','');
    const container = document.querySelector('#containerHangMan');
    imageComp(container,'cadalsoImg','cadalsoImg','../../public/hangMan.webp');
    inputComponent()
    


}