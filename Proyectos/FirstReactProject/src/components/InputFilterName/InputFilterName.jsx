import React, { useEffect, useState } from "react";
import FirstCard from "../Cards/FirstCard";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";

const InputFilterName = ({ className }) => {
  const [filter, setFilter] = useState("pequeños");
  const [filterCollection, setFilterCollection] = useState([]);
  const sizes = ["pequeños", "medianos", "grandes"];

  useEffect(() => {
    const getFilteredAnimal = async () => {
      const res = await fetch(`http://localhost:3000/dogs?size=${filter}`);
      const data = await res.json();
      setFilterCollection(data);
      return data;
    };
    (async () => await getFilteredAnimal())();
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
