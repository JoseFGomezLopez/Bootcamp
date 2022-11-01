import './App.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header />
     <main className='mainApp'>
      <Outlet />
     </main>
     <Footer />
    </div>

  )
}

export default App
