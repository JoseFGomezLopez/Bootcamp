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
        jugar(tablero.lastIndexOf(e.target));
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
    validacion();
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
    validacion();
  };
const validacion = () => {
const idJugadas = partidaJugador.map((element)=>(element.id))
    if ((idJugadas.includes("div1") && idJugadas.includes("div2") && idJugadas.includes("div3"))
    ||(idJugadas.includes("div1") && idJugadas.includes("div5") && idJugadas.includes("div9"))
    ||(idJugadas.includes("div2") && idJugadas.includes("div5") && idJugadas.includes("div8"))   
    ||(idJugadas.includes("div7") && idJugadas.includes("div5") && idJugadas.includes("div3"))
    ||(idJugadas.includes("div4") && idJugadas.includes("div5") && idJugadas.includes("div6"))
    ||(idJugadas.includes("div7") && idJugadas.includes("div8") && idJugadas.includes("div9"))
    ||(idJugadas.includes("div1") && idJugadas.includes("div4") && idJugadas.includes("div7"))
    ||(idJugadas.includes("div3") && idJugadas.includes("div6") && idJugadas.includes("div9"))){
      alert(`EnhoraBuena ${user} has ganado!!`);
      tresEnRaya();
      }
const jugadasIa = partidaIA.map((element)=>(element.id))
    if ((jugadasIa.includes("div1") && jugadasIa.includes("div2") && jugadasIa.includes("div3"))
    ||(jugadasIa.includes("div1") && jugadasIa.includes("div5") && jugadasIa.includes("div9"))
    ||(jugadasIa.includes("div2") && jugadasIa.includes("div5") && jugadasIa.includes("div8"))   
    ||(jugadasIa.includes("div7") && jugadasIa.includes("div5") && jugadasIa.includes("div3"))
    ||(jugadasIa.includes("div4") && jugadasIa.includes("div5") && jugadasIa.includes("div6"))
    ||(jugadasIa.includes("div7") && jugadasIa.includes("div8") && jugadasIa.includes("div9"))
    ||(jugadasIa.includes("div1") && jugadasIa.includes("div4") && jugadasIa.includes("div7"))
    ||(jugadasIa.includes("div3") && jugadasIa.includes("div6") && jugadasIa.includes("div9"))){
      alert(`${user} has perdido!! Sigue intentandolo!`);
      tresEnRaya();
      }     
    }
    if(tablero.length==0){ 
      alert("EMPATE!! Prueba de Nuevo!!");
      tresEnRaya()
      }  
}