import './help.css' 

import { useContext } from 'react'
import TypeContext from '../../Context/TypeContext'

const Help = () => {

  const{setType} = useContext(TypeContext);
  setType('Help')

  return (
    <section className='help'>
      <label>En que podemos ayudarte</label> <textarea type='text'/>
      <a href="mailto:fontanadeoro@gmail.com">📭</a>
      <button type='submit'>Enviar</button>
    </section>
  )
}

export default Help