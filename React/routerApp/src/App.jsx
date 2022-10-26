import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import {Outlet} from 'react-router-dom'


function App() {(
  <>
    <Header/>
    <Nav/> 
     <main>
      <Outlet/>
    </main>
  </>
)}
export default App
