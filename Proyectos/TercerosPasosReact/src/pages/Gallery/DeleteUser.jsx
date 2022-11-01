import './gallery.css'
import axios from "axios"
import { useEffect, useState } from "react"
import CardComponent from "../../components/CardsComponent/CardComponent"

const DeleteUser = () => {
  
    const [usuario,getUsuario] = useState({})

    useEffect(()=>{
     
        const getUser = async() => {
            const res = await axios.get("http://localhost:3000/users");
            getUsuario(res.data)
        }
        (async()=>getUser())();   
    },[])

     const deleteUser = async(e) => {
            const usuarioToDelete = await usuario.find((id)=>id === e)
            const userToDelete = await axios.delete(usuarioToDelete)
     }
     
    return (
    <div className="deleteUserContainer">
      {usuario.length ? (
        usuario.map((user)=><CardComponent key={user.id} onClick={(e)=>deleteUser(e.target.id)}
            className = "cardComponentGallery"
            name={user.name}
            firstName={user.firstName}
            lastName={user.lastName}
            age={user.age}
            departament={user.departament}
            rol={user.rol}
            experience={user.experience}
            image={user.image} />)
      ):(<h2>No users</h2>)}
    </div>
  )
}

export default DeleteUser