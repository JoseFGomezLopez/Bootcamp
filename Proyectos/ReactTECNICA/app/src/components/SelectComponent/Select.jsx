import './select.css'

import { useEffect, useState } from "react";
import { getData } from "../../services/getServices";
import { Sorter } from '../../utils/orderAlphaNumeric';
import { getYears } from "../../utils/moviesSeriesYears";
import FigurePosters from "../Figures/FigurePosters";


const SelectCompSelect = ({className,endPoint}) => {
 
    const [years,setYears] = useState([]);
    const [movies,setMovies] = useState([]);
    const [filter,setFilter] = useState([]);

  useEffect(() => {
    (async () => {
      const filteredYears = await getYears();
      setYears(filteredYears);
      const movies = await getData(`${endPoint}`);
      let filteredMovies = Sorter(movies);
      setMovies(filteredMovies);
      })();
      
  }, [filter]);
 return (
  <>
    <label htmlFor="selectYears">Filtrar por año :</label>
    <select name="selectYears" className={className} onChange={(e)=>{
      let newFilter = movies.filter((movie)=>movie.releaseYear==e.target.value);
      setFilter(newFilter);
    }}>
      {years.map((year) => {
        return (
          <option name={year} value={year} key={year}>
            {year}
          </option>
        );
      })}
    </select>
    <div className="classNameDiv">
      {filter.length? 
      (filter.map((movie)=>(
        <FigurePosters 
          key={movie.title}
          title={movie.title}
          image={movie.images["Poster Art"].url}
          description={movie.description}
          releaseYear={movie.releaseYear}
        />
      ))):(<div></div>)}
    </div>
  </>
  );
};

export default SelectCompSelect;