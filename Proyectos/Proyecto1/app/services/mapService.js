import { printHTML } from "./PrintService";

export const getMap = (arrayToMap) => {
    const mapped = arrayToMap.map((element) => {
    const {id,name,schoolMaster,writtings,image} = element;
      return {
        id,
        name,
        schoolMaster,
        writtings,
        image
      };
   });
   printHTML(mapped);
  }