import './playRoomStyle.css'
import { buttonComponent } from "../../components/Buttons/buttonComponent";
import { randomColor } from "../../utils/changeRandomColor";
import { parragraphC } from "../../components/Parragraph/parragraphComponent";
import { createUser,user } from "../../utils/createUser";
import { getpokeAPI } from '../pokeAPI/pokeApi';

export const playRoom = () => {
  const header = document.querySelector("header");
  const divContainer = document.querySelector("#app");

  divContainer.innerHTML='';
  divContainer.classList.remove('home');
  divContainer.classList.add("playRoom");
   
  parragraphC(divContainer,'playerRoomParragraph',`Bienvenido 👋 ${user}`);
  buttonComponent(divContainer,"roomButton-raya","TRES EN RAYA","Click Here!","click",(ev) => {});
  buttonComponent(divContainer,"roomButton-whakaTopo","WHAKA-TOPO","Click Here!","click",(ev) => {});
  buttonComponent(divContainer,"roomButton-memoryGame","MEMORY GAME","Click Here!","click",(ev) => {});
  buttonComponent(divContainer,"roomButton-hangMan","HANG MAN","Click Here!","click",(ev) => {});
  buttonComponent(divContainer,"roomButton-pokeApi","POKE API","Click Here!","click",(ev) => {
   getpokeAPI();
  });
  buttonComponent(divContainer,"roomButton-quizz","QUIZZ-NEO","Click Here!","click",(ev) => {});
  
}