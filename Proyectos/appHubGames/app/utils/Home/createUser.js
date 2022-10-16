import { playRoom } from "../../pages/playRoom/playRoom";

export let user;

export const createUser = () => {
   const input = document.querySelector("input");
   const userName = input.value;
  if (userName != undefined && userName != '' && userName != null && userName != ' ') {
   localStorage.setItem("jugador", userName);
   user = localStorage.getItem("jugador");
   playRoom();
  }else{
    alert("Introduce a user name")
    window.location.reload();   
}
};
