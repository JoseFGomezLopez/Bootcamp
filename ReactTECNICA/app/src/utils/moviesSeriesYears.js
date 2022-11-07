
export const getYears = async() => {
   
   const res = await fetch('http://localhost:3000/entries');
   const data = await res.json();
   let filteredData = data.map((element)=>element.releaseYear);
   const setData = new Set(filteredData);
   filteredData = Array.from(setData);
   const filteredYears = filteredData.filter((item)=>item>=2010);
   filteredYears.unshift('All');
   return filteredYears; 
   }
  