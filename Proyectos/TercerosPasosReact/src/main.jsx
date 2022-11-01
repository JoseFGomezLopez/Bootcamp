import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Home from './pages/Home/Home'
import DetailCard from './pages/DetailCard'
import Gallery from './pages/Gallery/Gallery'
import NotFound from './pages/404'
import DeleteUser from './pages/Gallery/DeleteUser'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
     <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='deleteUser' element={<DeleteUser />} />
        <Route path='gallery/:id' element={<DetailCard />} />
        <Route path='*' element={<NotFound />} />
      </Route>
     </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
