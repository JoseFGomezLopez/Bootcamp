import './inicio.css'

import { useContext } from 'react'

import  TypeContext  from '../../Context/TypeContext'
import FigureInicio from '../../components/Figures/FigureInicio'


const Inicio = () => {
  
  const{ setType } = useContext(TypeContext);
  setType('Popular Titles');

  return (
    <section className='inicioContainer'>
      <FigureInicio title="Series" location="series"/>
      <FigureInicio title="Movies" location="peliculas"/>
    </section>
  )
}

export default Inicio