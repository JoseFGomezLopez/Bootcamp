import "./series.css";

import React, { useState, useMemo, useEffect, useContext } from "react";

import { getData } from "../../services/getServices";
import FigurePosters from "../../components/Figures/FigurePosters";
import { Sorter } from "../../utils/orderAlphaNumeric.js";
import Select from "../../components/SelectComponent/Select";
import LazyProvider from "../../components/LazyProvider/LazyProvider"

import  TypeContext  from "../../Context/TypeContext";

const Series = () => {
  
  const { setType } = useContext(TypeContext);
  setType("Popular Series");

  const [series, setSeries] = useState([]);

  useEffect(() => {
    (async () => {
      const series = await getData("series");
      const filteredSeries = Sorter(series);
      setSeries(filteredSeries)   
    })();
   }, []);

  return (
    
    <section className="seriesSection">
     <div className="divSelectContainer">
      <Select className="moviesSelectComp" endPoint={'series'}/>
     </div>
       {series.map((serie) => (
        <FigurePosters
          key={serie.title}
          title={serie.title}
          image={serie.images["Poster Art"].url}
          description={serie.description}
          releaseYear={serie.releaseYear}
        />
      ))}
    </section>
  );
};

export default Series;
