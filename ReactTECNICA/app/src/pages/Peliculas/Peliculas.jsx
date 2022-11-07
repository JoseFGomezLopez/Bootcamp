import "./peliculas.css";

import { useState, useMemo, useEffect, useContext } from "react";

import { getData } from "../../services/getServices";
import FigurePosters from "../../components/Figures/FigurePosters";
import  TypeContext  from "../../Context/TypeContext";
import { Sorter } from "../../utils/orderAlphaNumeric.js";
import Select from "../../components/SelectComponent/Select";


const Peliculas = () => {
  
  const { setType } = useContext(TypeContext);
  setType("Popular Movies");
  
  const [peliculas, setPeliculas] = useState([]);
  const [filter,setFilterCollection] = useState([]);
  useEffect(() => {
    (async () => {
      const movies = await getData("movie");
      let filteredMovies = Sorter(movies);
      setPeliculas(filteredMovies);
    })();
  }, [filter]);
   
  return (
    <section className="moviesSection">
      <div className="selectContainer">
      <Select className="moviesSelectComp" endPoint={"movie"}/>
      </div>
      {peliculas.map((movie) => (
        <FigurePosters
          key={movie.title}
          title={movie.title}
          image={movie.images["Poster Art"].url}
          description={movie.description}
          releaseYear={movie.releaseYear}
        />
      ))}
    </section>
  );
};

export default Peliculas;
