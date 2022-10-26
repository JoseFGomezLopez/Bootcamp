import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <NavLink to=''>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='heroes'>Heroes</NavLink>
    </nav>
  )
}

export default Nav