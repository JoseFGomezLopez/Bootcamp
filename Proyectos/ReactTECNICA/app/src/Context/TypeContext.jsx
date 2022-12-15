import { createContext, useContext, useState } from 'react'


const TypeContext = createContext()

const TypeContextProvider = ({ children }) => {
  const [type, setType] = useState('')
  const [userName, setName] = useState('')
  const value = {
    type,
    setType,
    userName,
    setName,
  }

  return <TypeContext.Provider value={value}>{children}</TypeContext.Provider>
}

export { TypeContextProvider }

export default TypeContext;


