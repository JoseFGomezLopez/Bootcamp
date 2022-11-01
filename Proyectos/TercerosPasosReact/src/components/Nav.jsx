import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navComponent'>
     <NavLink to="gallery">Users</NavLink>
     <NavLink to="">Create User</NavLink>
     <NavLink to="deleteUser">Delete User</NavLink>
    </nav>
  )
}

export default Nav