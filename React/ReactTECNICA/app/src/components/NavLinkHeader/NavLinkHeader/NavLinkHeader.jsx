import React, {memo} from "react"
import { NavLink } from "react-router-dom"

const NavLinkHeader = React.memo(() => {
  return (
    <div className='containerTop'>
    <NavLink to=""><h1 title='HOME' className='demoStreaming'>DEMO Streaming</h1></NavLink>
    <div className="buttonsLogin">
        <NavLink to="login"><span title='Log in' className='login'>Log in</span></NavLink>
        <NavLink to="freeTrial"><span title='Free trail' className='freeTrial'>Start your free trial</span></NavLink>
    </div>
    </div>
  )
})

export default NavLinkHeader