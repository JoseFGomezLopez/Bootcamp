  
  import { setUpCardModernAge } from "../../pages/ModernPhilosopher";
  import { setUpCardAncientAge } from "../../pages/AncientPhilosopherPage"; 
  
  const pointerAncient = "ancientGreece";
  
  const app = document.querySelector('#app');
  
  export const initButton = (api) => {
     getButton(api)
  } 
  
  const getButton = (api) => {
    
    const btn = document.createElement('button');
     
    
      if (api === pointerAncient) {
          btn.addEventListener('click',async(ev)=> await setUpCardAncientAge());   
          btn.classList.add('ancient')   
      } else {
          btn.addEventListener('click',async(ev)=>await setUpCardModernAge());
          btn.classList.add('modern');
      }
      app.appendChild(btn);
  }
