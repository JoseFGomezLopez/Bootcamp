import { getData } from "../../services/service";
import { climberCard } from "../../components/Figure/climbersCards";
import { search } from "../../components/Input/inputSearch";


export const getClimbers = async() => {
  await getData("climbers");

  const header = document.querySelector("header");

  const inputClimbers = document.querySelector("input");
  const app = document.querySelector("#app");

  const data = await getData("climbers");

  const filterByName = async(word) => {
    const filteredClimbers = await data.filter((climber) => {
      return climber.name.toLowerCase().includes(word.toLowerCase());
    });
    app.innerHTML = "";
    for (const climber of filteredClimbers) {
      app.innerHTML += climberCard(climber);
    }

    return filteredClimbers;
  };
  inputClimbers.addEventListener("input", async(ev) =>
    await filterByName(inputClimbers.value)
  );
};
