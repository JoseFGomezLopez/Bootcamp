import './figurePosters.css' 

import  PopUpComp  from '../../components/PopUp/PopUpComp'
import { Link } from 'react-router-dom'

const FigurePosters = ({image,title,description,releaseYear}) => {
  return (
    <figure className="figurePosters">
        <Link to={`./${title}`}>
        <img src={image} alt={title} onError={(e)=>e.target.src = "../../../public/lost.jpg"}/>
        </Link>
        <PopUpComp title={title} image={image} description={description} releaseYear={releaseYear}/>
    </figure>
  )
}

export default FigurePosters