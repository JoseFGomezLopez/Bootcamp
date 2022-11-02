import './gallery.css'

import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import FirstCard from "../../components/Cards/FirstCard"
import InputFilterName from "../../components/InputFilterName/InputFilterName";
import { getAnimal } from '../../services/getAPI';

const Gallery = () => {
  
  const [galeria,setGaleria] = useState([]);
  
  useEffect(()=>{
     (async()=>{
      const data = await getAnimal('')
      setGaleria(data)})();
  },[])
     
   return (
     <section className="difusionContainer">
     <section className="selectFilter">
      <InputFilterName className={'selectFilterSize'}/>
     </section>
     <section className="gallerySectionContainer">
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
     </section>
   )
}

export default Gallery