import { useState,useEffect } from "react";
import FirstCard from "../../components/Cards/FirstCard";
import { Link } from "react-router-dom";

const Gallery = () => {
  
  const [galeria,setGaleria] = useState([]);
  
  useEffect(()=>{
   const getAnimals = async()=>{
       const res = await fetch('http://localhost:3000/dogs');
       const data = await res.json();
       setGaleria(data)
       return data;
     }
     (async()=>await getAnimals())();
  },[])
     
   return (
     <section>
     {galeria.length ? (
       galeria.map(animal=>(
        <Link to={`./${animal.id}`} key={animal.id}>
        <FirstCard  
          name={animal.name}
          image={animal.image}
          description={animal.description}
        />
        </Link>
       ))
     ):(<h3>No WAY</h3>)}
     
     </section>
   )
}

export default Gallery