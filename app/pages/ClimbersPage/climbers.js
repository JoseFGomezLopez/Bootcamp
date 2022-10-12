import { getData } from "../../services/service";
import { climberCard } from "../../components/Figure/climbersCards";
import { search } from "../../components/Input/inputSearch";


export const getClimbers = () => {
  getData("climbers");

  const header = document.querySelector("header");

  const inputClimbers = document.querySelector("input");
  const app = document.querySelector("#app");

  const data = getData("climbers");

  const filterByName = (word) => {
    const filteredClimbers = data.filter((climber) => {
      return climber.name.toLowerCase().includes(word.toLowerCase());
    });
    app.innerHTML = "";
    for (const climber of filteredClimbers) {
      app.innerHTML += climberCard(climber);
    }

    return filteredClimbers;
  };
  inputClimbers.addEventListener("input", (ev) =>
    filterByName(inputClimbers.value)
  );
};
