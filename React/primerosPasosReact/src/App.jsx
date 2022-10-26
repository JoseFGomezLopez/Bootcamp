import './App.css'
import React, { useState } from 'react'
import { Card } from './components/CardComponent/cardComponent';
import { Title } from './components/TitleComponent/titleComponent';
import { ImgCard } from './components/Image/imageComponent';

const charactersMock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
  },
];

const App = () => {
  
  const myState = useState(charactersMock);


  const [charactersList,setCharacterList] = useState([]);
  
  React.useEffect(()=>{
      (async()=>{
          let data = await fetch(`https://rickandmortyapi.com/api/character/`)
                           .then((res)=>res.json());
           setCharacterList(data.results);                
      })();

  },[])
   
  
  return (
    <>
      
      {
        charactersList.map((character)=>(
        <div key={character.id}>
        <Title character = {character.name} />
        <ImgCard character={character} /> 
        <Title character = {character.status} />
        {/*<Card character={character} />*/}
        </div>
        
        ))
      }
    </>
  )
};

export default App;
