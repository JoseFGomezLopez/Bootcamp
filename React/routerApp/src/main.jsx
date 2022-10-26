import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Heroe from './Pages/Heroe'
import Heroes from './Pages/Heroes'
import NotFound from './Pages/NotFound'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element = {<App />}>
           <Route index element = {<Home />}/>
           <Route path='about' element = {<About/>}/>
           <Route path='heroes' element = {<Heroes/>}/>
           <Route path='heroe/:id' element = {<Heroe/>}/>
           <Route path='*' element = {<NotFound/>}/>
          </Route>
        </Routes>

      </BrowserRouter>

  </React.StrictMode>
)
