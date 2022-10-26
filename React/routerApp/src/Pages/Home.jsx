import React from 'react'

import { Link } from 'react-router-dom';
import Parragraph from '../Components/Parragraph/Parragraph';
import TitleH2 from '../Components/Title/TitleH2';
import Ul from '../Components/Ul/Ul'
import Li from '../Components/Li/Li'

function Home() {
  return (
    <>
      <TitleH2 text='Home Page'/>
      <Parragraph text="App ejemplo sobre React Router"/>
      <Ul>
      <Li>
      
      <Parragraph 
       text = {<>
       <spa>Visita la página de héroes 🦸‍♀️:</spa>
       <Link to="heroes">Heroes</Link>
       </>}/>
      
      </Li>
      </Ul>
    </>
  );
}

export default Home;