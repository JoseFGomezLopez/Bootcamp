import './footer.css'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
        <small>Copyleft todos los izquierdos sin reserva</small>
        <a href='https://github.com/JoseFGomezLopez' target="_blank">
         <img src="https://cdn-icons-png.flaticon.com/512/2564/2564671.png" className="imgFooter"/>
        </a>
    </footer>
  )
}

export default Footer