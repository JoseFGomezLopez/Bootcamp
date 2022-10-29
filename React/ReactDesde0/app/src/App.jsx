import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import {Outlet} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <header>Movies App</header>
     <Nav/>
     <main>
       <Outlet />      
     </main>
    </div>
  )
}

export default App
