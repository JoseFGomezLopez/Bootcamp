import { errorMessage } from "../components/Error/errorComponent";
import { mapPeaksData } from "../utils/mapFunction";
import { mapClimbersData } from "../utils/mapFunction";
import { mapHomeData } from "../utils/mapFunction";

const baseURL = "https://proyecto-zzek.onrender.com/";

let dataToFilter;

export const getData = (param, home) => {
  getAPIData(param, home);
  return dataToFilter;
};

const getAPIData = async (param, home) => {
  try {
    const response = await fetch(`${baseURL}${param}`);
    const data = await response.json();
    dataToFilter = data;
    if (param === "climbers") {
      mapClimbersData(data);
    } else if (param === "peaks" && home === undefined) {
      mapPeaksData(data);
    } else if (param === "peaks" && home === "home") {
      mapHomeData(data);
    }
  } catch (error) {
    errorMessage("Error en la ejecución");
  }
};
