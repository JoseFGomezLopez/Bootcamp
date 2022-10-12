import { printPeaksHTML } from "./printFunction";
import { printClimbersHTML } from "./printFunction";
import { printHomeHTML } from "./printFunction";

export const mapHomeData = (arraytoMap) => {
  const mappedData = arraytoMap.map((element) => {
    const {id,name,image} = element;
    return {
      id,
      image,
      name
  }
  });
  printHomeHTML(mappedData);
}
  
export const mapPeaksData = (arraytoMap) => {
  const mappedData = arraytoMap.map((element) => {
    const {id,name,image,altitude,site,first_ascent} = element;
    return {
      id,
      image,
      name,
      altitude,
      site,
      first_ascent
  }
  })
  printPeaksHTML(mappedData);
};
export const mapClimbersData = (arraytoMap) => {
  const mappedData = arraytoMap.map((element) => {
    const {id,name,image,year} = element;
    return {
      id,
      year,
      image,
      name,
  }
  })
  printClimbersHTML(mappedData);
  return mappedData;
};
