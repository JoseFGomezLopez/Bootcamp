import "../../styleLanding.css";
import { getAquiNo } from "../../AquiNo/AquiNoComponent";
import { getLaQue } from "../../LaQueSeAvecina/LaQueSeAvecina"

export const component = () => {
  document.querySelector("#app").innerHTML = `<div class="container">
     <div class="split left">
        <h1>Aquí no hay quien viva</h1>
        <button class="btn" id="aquiNo">Personajes...</button>
     </div>

     <div class="split right">
        <h1>La que se avecina</h1>
        <button class="btn" id="laQue">Personajes...</button>
     </div>
    </div>`;

  addListener();
};

const addListener = () => {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const container = document.querySelector(".container");
  const buttonLaQue = document.querySelector("#laQue");
  const buttonAquiNo = document.querySelector("#aquiNo");

  left.addEventListener("mouseenter", () =>
    container.classList.add("hover-left")
  );
  left.addEventListener("mouseleave", () =>
    container.classList.remove("hover-left")
  );

  right.addEventListener("mouseenter", () =>
    container.classList.add("hover-right")
  );
  right.addEventListener("mouseleave", () =>
    container.classList.remove("hover-right")
  );

  buttonLaQue.addEventListener("click", () => getLaQue());
  buttonAquiNo.addEventListener("click", () => getAquiNo());
};
