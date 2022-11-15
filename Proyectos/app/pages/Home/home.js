import "./style.css";
import { search } from "../../components/Input/inputSearch";
import { initPeaks } from "../PeaksPage/peaks";
import { initButton } from "../../components/Button/buttonComponent";
import { getClimbers } from "../ClimbersPage/climbers";
import { getData } from "../../services/service";
import { footerComponent } from "../../components/Footer/footerComponent";
import { stopped } from "../../utils/timers";

export const getHome = () => {
  const app = document.querySelector("#app");
  const footer = document.querySelector("footer");
  const header = document.querySelector("header");

  getData("peaks", "home");

  initButton(header, "Legendary Climbers", "click", (ev) => {
    stopped();
    getClimbers();
  });
  initButton(header, "Peaks of the World", "click", (ev) => {
    stopped();
    initPeaks();
  });

  search(
    header,
    "text",
    "search",
    "Selecciona una opcion y busca por letra o nombre"
  );

  footer.innerHTML = footerComponent("Madrid,Spain");
};
