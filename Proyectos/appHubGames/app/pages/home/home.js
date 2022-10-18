import "./homeStyle.css";
import { buttonComponent } from "../../components/Buttons/buttonComponent";
import { inputComponent } from "../../components/InputComponent/inputComponent";
import { randomColor } from "../../utils/Home/changeRandomColor";
import { createUser,user } from "../../utils/Home/createUser";
import { parragraphC } from "../../components/Parragraph/parragraphComponent";

export const getLoggin = () => {
  
  const header = document.querySelector("header");
  const divContainer = document.querySelector("#app");
  divContainer.classList.add("home");

  randomColor();
  //window.addEventListener("load", (ev) => randomColor());

  buttonComponent(header, "colorButton", "", "Click Here!", "click", (ev) =>
    randomColor()
  );
  parragraphC(header, "colorButtonText", "New Color!");
  parragraphC(divContainer, "parragraphLoggin", "NEOLAND");
  parragraphC(divContainer, "parragraphLoggin", "HUB GAMES");
  parragraphC(divContainer,"parragraphLoggin","Introduce tu nombre de usuario:");
  inputComponent(divContainer,"inputLoggin","text","Introduce your user name");
  buttonComponent(divContainer,"logButton","👍","Click Here!","click",(ev) => createUser());
};
