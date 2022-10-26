import React from 'react'
import Parragraph from '../Parragraph/Parragraph'
import Title from '../Title/TitleH1'

const HeroeDetail = ({ heroe }) => {
  return (
    <>
      <Title text = {heroe.name}/>
      <Parragraph text = {heroe.alias}/>
      <Parragraph text = {heroe.age}/>
    </>
  )
}

export default HeroeDetail