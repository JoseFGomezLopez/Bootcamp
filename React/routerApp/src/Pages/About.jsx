import React from 'react'
import Parragraph from '../Components/Parragraph/Parragraph'
import TitleH2 from '../Components/Title/TitleH2'


const About = () => {
  return (
    <>
      <TitleH2 text="Sobre esta app...📍"/>
      <Parragraph text='Es un ejemplo para aprender el funcionamiento de React Router'/>
      <Parragraph text='Usa la barra de navegación de arriba para cambiar de rutas! 🔝'/>
      
    </>
  )
}

export default About