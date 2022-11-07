import './figureInicio.css'

import {NavLink} from 'react-router-dom'

const FigureInicio = ({title,location}) => {
  return (
    <NavLink to={location} className="navFigureInicio">
    <figure className="figureInicio"> 
      <h1>{title.toUpperCase()}</h1>
    </figure>
    <h2 className='h2Figure'>Popular {title}</h2>
    </NavLink>
  )
}

export default FigureInicio