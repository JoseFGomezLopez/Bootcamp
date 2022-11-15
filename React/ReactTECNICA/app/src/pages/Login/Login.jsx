import './login.css'

import  TypeContext  from '../../Context/TypeContext'
import { useState,useContext } from "react"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
  const{ setName,setType } = useContext(TypeContext);
  setType('Login')
  const navigate = useNavigate();

  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
   
  const fakeLogin = () => {
    window.localStorage.setItem(password,userName);
    setName(localStorage.getItem(password))
    navigate("/") 
  }

  return (
    <section className="sectionLoginPage">
      <label htmlFor='inputText'>User name</label>
      <input type="text" id="inputText" required onChange={(e)=>setUserName(e.target.value)} />
      <label htmlFor='password'>Password</label>
      <input type="password" id="password" required onChange={(e)=>setPassword(e.target.value)} />
      <button type="button" onClick={(e)=>fakeLogin()}>SignIn</button>
    </section>
  )
}

export default Login