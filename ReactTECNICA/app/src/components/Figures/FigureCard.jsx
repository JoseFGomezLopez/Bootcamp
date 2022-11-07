import './figurePopUP.css'

const FigureCard = ({title,description,image,releaseYear}) => {
  return (
    <figure className="figureCardPopUp">
     <h3>{title}</h3>
     <h3>{releaseYear}</h3>
     <img src={image} alt={title} onError={(e)=>e.target.src="../../../public/lost.jpg}"}/>
     <h4>{description}</h4>
    </figure>
  )
}

export default FigureCard