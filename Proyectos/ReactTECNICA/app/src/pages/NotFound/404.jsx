import './404.css'

import { useContext } from 'react'
import TypeContext from '../../Context/TypeContext'
 
const NotFound = () => {

  const{setType} = useContext(TypeContext)
  setType('Not Found')

  return (
    <p className="p404">Oops, something went wrong...</p>
  )
}

export default NotFound