import React, { useState } from 'react'
import './App.css'

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
          <div key={character.id}>
          <h2>Id : {character.id}</h2>
          <img src={character.image} />
          <h2>Name : {character.name}</h2>
          <h2>Status : {character.status}</h2>

         </div>
          ))
      }
    </>
  )
};

export default App;
