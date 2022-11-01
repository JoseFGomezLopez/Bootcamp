import './navBar.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navBar'>
      <NavLink to=''>Home</NavLink>
      <NavLink to='gallery'>Galería</NavLink>
      <NavLink to='difusion'>Difusión</NavLink>
      <NavLink to='contact'>Contacto</NavLink>
    </nav>
  )
}

export default Nav