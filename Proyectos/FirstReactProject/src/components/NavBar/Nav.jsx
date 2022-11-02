import "./navBar.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navBar">
      <NavLink to="">Home</NavLink>
      <NavLink to="gallery">Adopción</NavLink>
      <NavLink to="difusion">Publicacion</NavLink>
      <NavLink to="contact">Contacto</NavLink>
    </nav>
  );
};

export default Nav;
