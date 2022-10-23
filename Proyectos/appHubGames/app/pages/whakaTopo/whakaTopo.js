import './whakaTopoStyle.css'
import { buttonComponent } from '../../components/Buttons/buttonComponent'
import { playRoom } from '../playRoom/playRoom'
import { divComp } from '../../components/Div/divComponentId';
import { imageComp } from '../../components/Images/imageComponent';
import { parragraphC } from '../../components/Parragraph/parragraphComponent';

export const getWhakaTopo = () => {
    let counter = 0; 
    const divContainer = document.getElementById('app');
    divContainer.innerHTML = '';
    buttonComponent(divContainer,"reloadButtonQuiz","HOME","reloadPlayRoom","click",(ev) =>{
        clearInterval(identificador); 
        playRoom()});
    parragraphC(divContainer,'counterTopo',`Score  ${counter}`)
    divComp(divContainer,'containerWhakaTopo','containerWhakaTopo','');
    
    const container = document.getElementById('containerWhakaTopo');
    
     
   const identificador =  setInterval(() => {
        imageComp(container,'topoGigo','topoGigo','Topo','/../../public/topoWhaka.png');
        const topo = document.querySelector('.topoGigo');
        topo.style.top = `${Math.trunc(Math.random()*21+1-1)}rem`
        topo.style.left = `${Math.trunc(Math.random()*56+1-1)}rem`
        topo.addEventListener('click',(e)=>{jugarTopo(e.target);console.log(e.target)})
        setTimeout(() => {
            container.removeChild(topo); 
        }, 1500);
    }, 2000)
    
        
const jugarTopo = (e) => {
     const container = document.querySelector('.containerWhakaTopo')
     const p = document.querySelector('.counterTopo')
     container.removeChild(e);
     counter+=100;
     p.innerHTML = `Score ${counter}`;

  
}

}