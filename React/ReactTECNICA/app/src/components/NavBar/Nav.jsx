import {NavLink} from 'react-router-dom'

const Nav = ({className}) => {
  return (
    <nav className={className}>
      <NavLink to="">Inicio</NavLink>
      <NavLink to="peliculas">Peliculas</NavLink>
      <NavLink to="series">Series</NavLink> 
    </nav>
  )
}

export default Nav