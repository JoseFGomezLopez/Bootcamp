import { errorMessage } from "../components/Error/errorComponent";
import { getMap } from "./mapService";

const baseURL = "http://localhost:3000";

export const getData = async (param) => {
  try {
    const response = await fetch(baseURL + "/" + param);
    const jsonData = await response.json();
    return getMap(jsonData);
  } catch (error) {
    return errorMessage("Fallo de sistema, preparense para el desembarco");
  }
};
