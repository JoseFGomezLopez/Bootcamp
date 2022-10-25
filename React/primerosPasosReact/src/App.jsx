import './App.css'
import React, { useState } from 'react'
import { Card } from './components/CardComponent/cardComponent';

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

  const characters = useState[0];
  const setCharacters = useState[1];

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
        <Card key={character.id} character={character} />
        ))
      }
    </>
  )
};

export default App;
