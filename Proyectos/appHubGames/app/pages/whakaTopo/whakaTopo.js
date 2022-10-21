import { buttonComponent } from '../../components/Buttons/buttonComponent'
import { playRoom } from '../playRoom/playRoom'
import { divComp } from '../../components/Div/divComponentId';
import { imageComp } from '../../components/Images/imageComponent';

export const getWhakaTopo = () => {
     
    const divContainer = document.getElementById('app');
    divContainer.innerHTML = '';
    buttonComponent(divContainer,"reloadButtonQuiz","HOME","reloadPlayRoom","click",(ev) => playRoom());
    divComp(divContainer,'containerWhakaTopo','containerWhakaTopo','');
    const container = document.querySelector('#containerWhakaTopo');
    setInterval(() => {
        imageComp(container,'topoGigo','topoGigo','Topo','/../../public/topoWhaka.png');
        const topo = document.querySelector('.topoGigo');
        topo.style.position ="absolute";
        topo.style.top = `${Math.trunc(Math.random()*740+1-1)}px`
        topo.style.left = `${Math.trunc(Math.random()*780+1-1)}px`
        topo.style.width ="30px";
        topo.style.height ="30px";
        topo.addEventListener('click',()=>jugarTopo())
        setTimeout(() => {
         container.removeChild(topo);
        }, 2500);
    }, 2000);
counter = 0;    


}