import './free.css'

import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import TypeContext from '../../Context/TypeContext'

const FreeTrial = () => {
  
  const { setType,setName } = useContext(TypeContext)
  setType('Free Trial')
  setName('')

  const navigate = useNavigate()

  return (
    <section className="free">
      <button type="button" onClick={() => navigate('/')}>
        FreeTrial
      </button>
    </section>
  )
}

export default FreeTrial
