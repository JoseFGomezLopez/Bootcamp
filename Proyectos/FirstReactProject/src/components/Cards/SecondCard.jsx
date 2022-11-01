import './secondCard.css'
import Parragraph from '../Parragraph/Parragraph'

const SecondCard = ({name,image,size,description}) => {
  return (
    <figure className="secondCard">
      <h3>{name}</h3>
      <h3>{size}</h3>
      <img src={image} alt={name} />
      <Parragraph text={description} />
    </figure>
  )
}

export default SecondCard