import './index.css'

import { Outlet, useOutlet } from 'react-router-dom'
import { useEffect, useState, createContext, useContext } from 'react'
import { TypeContextProvider } from './Context/TypeContext'
import HeaderCustom from './components/Header/HeaderCustom'
import Footer from './components/Footer/Footer'

    
function App() {
 
  
 return (
    <TypeContextProvider>
      <div className="App">
        <HeaderCustom />
        <main className="appBody">
          <Outlet />
        </main>

        <Footer />
      </div>
    </TypeContextProvider>
  )
}

export default App
