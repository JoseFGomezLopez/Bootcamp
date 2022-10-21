import "./playRoomStyle.css";
import { buttonComponent } from "../../components/Buttons/buttonComponent";
import { randomColor } from "../../utils/Home/changeRandomColor";
import { parragraphC } from "../../components/Parragraph/parragraphComponent";
import { createUser, user } from "../../utils/Home/createUser";
import { getpokeAPI } from "../pokeAPI/pokeApi";
import { getQuiz } from "../Quiz-Neo/quiz";
import { tresEnRaya } from "../TresEnRaya/tresEnRaya";
import { hangMan } from "../hangMan/hangMan";
import { getMemoryGame } from "../memoryGame/memoryGame";
import { getWhakaTopo } from "../whakaTopo/whakaTopo";

export const playRoom = () => {
  const header = document.querySelector("header");
  const divContainer = document.querySelector("#app");
  divContainer.innerHTML = "";
  divContainer.classList.remove("home");
  divContainer.classList.add("playRoom");

  parragraphC(divContainer, "playerRoomParragraph", `Bienvenido 👋 ${user}`);
  buttonComponent(
    divContainer,
    "roomButton-raya",
    "TRES EN RAYA",
    "Click Here!",
    "click",
    (ev) => tresEnRaya()
  );
  buttonComponent(
    divContainer,
    "roomButton-whakaTopo",
    "WHAKA-TOPO",
    "Click Here!",
    "click",
    (ev) => getWhakaTopo()
  );
  buttonComponent(
    divContainer,
    "roomButton-memoryGame",
    "MEMORY GAME",
    "Click Here!",
    "click",
    (ev) => getMemoryGame()
  );
  buttonComponent(
    divContainer,
    "roomButton-hangMan",
    "HANG MAN",
    "Click Here!",
    "click",
    (ev) => hangMan()
  );
  buttonComponent(
    divContainer,
    "roomButton-pokeApi",
    "POKE API",
    "Click Here!",
    "click",
    (ev) => getpokeAPI()
  );
  buttonComponent(
    divContainer,
    "roomButton-quizz",
    "QUIZZ-NEO",
    "Click Here!",
    "click",
    (ev) => getQuiz()
  );
};
