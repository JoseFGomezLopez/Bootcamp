import { getCard } from "../components/FigureCard/cardComponent";
import { reloadButton } from "../components/ReloadButton/reloadButtonComponent";

export const printHTML = (listcards) => {
    app.innerHTML='';
    listcards.forEach(card => {
     return app.innerHTML += getCard(card);
    });  
    reloadButton("Home"); 
  } 