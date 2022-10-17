import "./tresEnRayaStyle.css";
import { buttonComponent } from "../../components/Buttons/buttonComponent";
import { divComp } from "../../components/Div/divComponentId";
import { playRoom } from "../playRoom/playRoom";
export const tresEnRaya = () => {
  
  const divContainer = document.getElementById("app");
  divContainer.innerHTML = "";
  buttonComponent(
    divContainer,
    "reloadButtonQuiz",
    "Home",
    "Play Room",
    "click",
    (ev) => playRoom()
  );
  divComp(divContainer, "table", "table", "");
  const table = document.querySelector(".table");
  const tablero = [];
  for (let i = 1; i <= 9; i++) {
    if (i % 2) {
      divComp(table, `div${i}`, "casillaPar", "");
      const pos = document.querySelector(`#div${i}`);
      tablero.push(pos);
      pos.addEventListener("click", (e) => {
        jugar(tablero[`${i}`])
        this.removeEventListener('click',(e) => {
        jugar(tablero[`${i}`])
        })
    });
    } else {
      divComp(table, `div${i}`, "casillaImpar", "");
      const pos = document.querySelector(`#div${i}`);
      tablero.push(pos);
      pos.addEventListener("click", (e) => jugar(tablero[`${i}`]));
    
  }
}
  const partidaJugador = [];
  function jugar(ev) {
    const jugada = tablero.splice(ev, 1);
    partidaJugador.push(jugada);
    partidaJugador.flat(2);
    console.log("Tablero : ");console.log(tablero);
    console.log("Jugada : ");console.log(jugada);
    console.log("PartidaJugador : ");console.log(partidaJugador);
    ia();
  }
  const partidaIA = [];
  const ia = () => {
    const jugada2 = tablero.splice(Math.trunc(Math.random() * tablero.length + 1),1);
    partidaIA.push(jugada2);
    partidaIA.flat(2);
    console.log("Tablero : ");console.log(tablero);
    console.log("Jugada IA :");console.log(jugada2);
    console.log("Partida IA :");console.log(partidaIA);
  };
};
