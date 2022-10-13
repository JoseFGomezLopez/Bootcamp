import { getData,getAPIData } from "../../services/service";
import { peaksCard } from "../../components/Figure/peaksCard";


export const initPeaks = async() => {
  
  await getData("peaks");
  const data = await getData("peaks");
  const input = document.querySelector("input");
  const app = document.querySelector("#app");
 
  let filteredPeaks;
  const filterPeaks = async(word) => {
     filteredPeaks = await data.filter((peak) => {
      return peak.name.toLowerCase().includes(word.toLowerCase());
    });
    console.log(filteredPeaks), (app.innerHTML = "");
    for (const peak of filteredPeaks) {
      app.innerHTML += peaksCard(peak);
    }
    return filteredPeaks;
  };
  input.addEventListener("input", async(ev) => await filterPeaks(input.value));
};
