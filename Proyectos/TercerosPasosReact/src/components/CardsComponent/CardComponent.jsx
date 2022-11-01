import './cardComponent.css'

const CardComponent = ({name,firstName,lastName,age,departament,rol,experience,image}) => {
  return (
    <figure className='figureCardUser'>
      <h3>Name : {name}</h3>
      <h4>Firstname : {firstName}</h4>
      <h4>LastName : {lastName}</h4>
      <h4>Age : {age}</h4>
      <h4>Departament : {departament}</h4>
      <h4>Rol : {rol}</h4>
      <h3>Experience : {experience}</h3>
      <img src={image} alt={name}/>
    </figure>
  )
}

export default CardComponent