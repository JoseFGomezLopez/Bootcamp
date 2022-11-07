import './headerCustom.css'
import { useContext } from 'react'
import  TypeContext  from '../../App'
import NavLinkHeader from '../NavLinkHeader/NavLinkHeader/NavLinkHeader'
import BottomHeader from '../NavLinkHeader/BottomHeaderBar/BottomHeader'


const HeaderCustom = () => {
  
   return (
    <header className="headerCustom">
     <NavLinkHeader />
     <BottomHeader  />
    </header>
  )
}

export default HeaderCustom
