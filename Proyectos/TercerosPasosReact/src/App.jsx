import './App.css'
import { useState } from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
     <div className='navAppContainer'>
     <Nav />
     </div>
     <main>
      <Outlet />
     </main>     
    </div>
  )
}

export default App
