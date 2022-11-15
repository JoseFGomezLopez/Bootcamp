import { peaksCard } from '../components/Figure/peaksCard'
import { climberCard } from '../components/Figure/climbersCards'
import { backTimming } from './timers'

export const printHomeHTML = (listcards) => {
 backTimming(listcards);
}

export const printClimbersHTML = (listcards) => {
    app.innerHTML='';
    listcards.forEach((card) => { 
    app.innerHTML += climberCard(card)});  
  } 

export const printPeaksHTML = (listcards) => {
    app.innerHTML='';
    listcards.forEach((card) => { 
    app.innerHTML += peaksCard(card)
  });  
  }  
