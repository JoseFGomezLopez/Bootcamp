import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Movies from './pages/Movies'
import NotFound from './pages/404'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='movies' element={<Movies />}/>
          <Route path='movie' element={<Movie/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
