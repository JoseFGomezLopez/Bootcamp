import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CardComponent from "../components/CardsComponent/CardComponent";

const DetailCard = () => {
   
  const [user,setUser] = useState({})
  const {id} = useParams();
  
  useEffect(()=>{
    const getUser = async() => {
      const res = await axios.get(`http://localhost:3000/users/${id}`);
      setUser(res.data);
    }
    getUser();
  },[])

  return (
    <div className="detailCardContainer">
      {user ? (
        <CardComponent 
        name={user.name}
        firstName={user.firstName}
        lastName={user.lastName}
        departament={user.departament}
        age={user.age}
        rol={user.rol}
        experience={user.experience}
        image={user.image}
        />
      ):(<h2>Not Exists</h2>)}
      <button type="button" value="DeleteUser" onClick={(e)=>deleteUser(e.target.value)} />
    </div>
  )
}

export default DetailCard