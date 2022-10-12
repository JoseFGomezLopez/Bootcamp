import { getData } from "../../services/service";
import { peaksCard } from "../../components/Figure/peaksCard";


export const initPeaks = () => {
  getData("peaks");

  const input = document.querySelector("input");
  const app = document.querySelector("#app");

  const data = getData("peaks");
  console.log(data);
  const filterPeaks = (word) => {
    const filteredPeaks = data.filter((peak) => {
      return peak.name.toLowerCase().includes(word.toLowerCase());
    });
    console.log(filteredPeaks), (app.innerHTML = "");
    for (const peak of filteredPeaks) {
      app.innerHTML += peaksCard(peak);
    }
    return filteredPeaks;
  };
  input.addEventListener("input", (ev) => filterPeaks(input.value));
};
