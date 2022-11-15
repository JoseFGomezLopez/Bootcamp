import React from 'react' 

import { useContext } from 'react';
import  TypeContext  from '../../../Context/TypeContext';

const BottomHeader = () => {

  const {type,userName} = useContext(TypeContext);
  

  return (
    <div className="popularTitles">
    <span className="popularTitlesText">{type}</span>
    <span className="popularTitlesText">{userName}</span>
  </div>
  )
}

export default BottomHeader