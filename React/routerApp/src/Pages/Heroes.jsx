import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HeroeDetail from '../components/HeroeDetail'
import Title from '../Components/Title/TitleH1'
import { getHeroes } from '../data/data'
import Li from '../Components/Li/Li'
import Ul from '../Components/Ul/Ul'


const Heroes = () => {
  const heroes = getHeroes();
  return (
    <>

      <div>
        <Title text="All heroes 🦸‍♂️🦸‍♀️"/>
        <Ul>
          {heroes.map((heroe) => (
            <Li key={heroe.id}>
              <Link to={`/heroes/${heroe.id}`}>
                <HeroeDetail heroe={heroe} />
              </Link>
            </Li>
          ))}
        </Ul>
      </div>
      <Outlet />
    </>
  )
}

export default Heroes
