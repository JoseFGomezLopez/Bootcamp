import "./tresEnRayaStyle.css";
import { buttonComponent } from "../../components/Buttons/buttonComponent";
import { divComp } from "../../components/Div/divComponentId";
import { playRoom } from "../playRoom/playRoom";
import { user } from "../../utils/Home/createUser";

export const tresEnRaya = () => {
   const divContainer = document.getElementById("app");
   divContainer.innerHTML = "";
   buttonComponent(divContainer,"reloadButtonQuiz","Home","Play Room","click",(ev) => playRoom());
   divComp(divContainer, "table", "table", "");
   const table = document.querySelector(".table");
   const tablero = [];
   let partidaIA = [];
   let partidaJugador = [];
   for (let i = 1; i <= 9; i++) {
    if (i % 2 == 0) {
      divComp(table, `div${i}`, "casillaPar", "");
      const pos = document.getElementById(`div${i}`);
      tablero.push(pos);
      pos.addEventListener("click", (e) => {
        jugar(tablero.indexOf(e.target));
        ia();
      });
    } else {
      divComp(table, `div${i}`, "casillaImpar", "");
      const pos = document.getElementById(`div${i}`);
      tablero.push(pos);
      pos.addEventListener("click", (e) => {
        jugar(tablero.indexOf(e.target));
        ia();
      });
    }
   }
   function jugar(e) {
    let jugada = tablero.splice(e, 1);
    partidaJugador.push(jugada);
    partidaJugador = partidaJugador.flat(2);
    partidaJugador.forEach((element) => {
      element.ariaDisabled = true;
      element.classList.add("red");
    });
    const jugador = `${user}`;
    const idJugadas = partidaJugador.map((element)=>(element.id))
    validacion(idJugadas,jugador);
   }
   const ia = () => {
    let jugada2 = tablero.splice(
      Math.trunc(Math.random() * (tablero.length - 1) + 1),
      1
    );
    partidaIA.push(jugada2);
    partidaIA = partidaIA.flat(2);
    partidaIA.forEach((element) => {
      element.ariaDisabled = true;
      element.classList.add("blue");
    });
    const iA = 'ia';
    const jugadasIa = partidaIA.map((element)=>(element.id))
    validacion(jugadasIa,iA);
   };
   const validacion = (arrayDivsIdPlayers,jugador) => {
   if ((arrayDivsIdPlayers.includes("div1") && arrayDivsIdPlayers.includes("div2") && arrayDivsIdPlayers.includes("div3"))
   ||(arrayDivsIdPlayers.includes("div1") && arrayDivsIdPlayers.includes("div5") && arrayDivsIdPlayers.includes("div9"))
   ||(arrayDivsIdPlayers.includes("div2") && arrayDivsIdPlayers.includes("div5") && arrayDivsIdPlayers.includes("div8"))   
   ||(arrayDivsIdPlayers.includes("div7") && arrayDivsIdPlayers.includes("div5") && arrayDivsIdPlayers.includes("div3"))
   ||(arrayDivsIdPlayers.includes("div4") && arrayDivsIdPlayers.includes("div5") && arrayDivsIdPlayers.includes("div6"))
   ||(arrayDivsIdPlayers.includes("div7") && arrayDivsIdPlayers.includes("div8") && arrayDivsIdPlayers.includes("div9"))
   ||(arrayDivsIdPlayers.includes("div1") && arrayDivsIdPlayers.includes("div4") && arrayDivsIdPlayers.includes("div7"))
   ||(arrayDivsIdPlayers.includes("div3") && arrayDivsIdPlayers.includes("div6") && arrayDivsIdPlayers.includes("div9"))){
    if(jugador === `${user}`){
    alert(`EnhoraBuena ${user} has ganado!!`);
    tresEnRaya();
    }else if(jugador === 'ia'){
    alert(`${user} has perdido!! Sigue intentandolo!`);
    tresEnRaya();
    }     
   }else if(tablero.length==0){ 
    alert("EMPATE!! Prueba de Nuevo!!");
    tresEnRaya()
    
  }
   
 }  
}