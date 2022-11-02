import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";

import FirstCard from "../Cards/FirstCard";
import { getAnimal } from "../../services/getAPI.js"

const InputFilterName = ({ className }) => {
  
  const [filter, setFilter] = useState("pequeños");
  const [filterCollection, setFilterCollection] = useState([]);
  const sizes = ["pequeños", "medianos", "grandes"];

  useEffect(() => {
      ;(async () => {
        const data = await getAnimal(`?size=${filter}`)
        setFilterCollection(data)})();
  }, [filter]);

  return (
    <div className={className}>
      {/* <input type={'text'} value={filter} onChange={(e)=>{setFilter(e.target.value)}} />  */}
      <label htmlFor="select">Filtrar por tamaño : </label>
      <select
        id="select"
        name="select"
        onChange={(e) => setFilter(e.target.value)}
      >
        {sizes.map((size) => (
          <option key={size} value={size} id="size">
            {size}
          </option>
        ))}
      </select>
      <div>
        {filterCollection.map((element) => (
          <Link to={`./${element.id}`} key={element.id}>
            <FirstCard
              name={element.name}
              image={element.image}
              description={element.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InputFilterName;
