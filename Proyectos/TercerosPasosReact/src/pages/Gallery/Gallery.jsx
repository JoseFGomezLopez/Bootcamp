import './gallery.css'
import { Axios } from "axios";
import { useEffect, useState, useTransition } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CardComponent from "../../components/CardsComponent/CardComponent";


let users = new Array();

const Gallery = () => {
  
  const [usuario,setUsuario] = useState({});

  useEffect(() => {
    
    const getUsers = async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsuario(data)

      return data;
    };
    (async () => await getUsers())();

  }, []);
  
  return (
    <div className="galleryContainer">
      {usuario.length ? (
        usuario.map((user) => (
          <Link to={`./${user.id}`} key={user.id}>
          <CardComponent 
            className = "cardComponentGallery"
            name={user.name}
            firstName={user.firstName}
            lastName={user.lastName}
            age={user.age}
            departament={user.departament}
            rol={user.rol}
            experience={user.experience}
            image={user.image} />
            </Link>
        ))
      ) : (
        <h2>No Users</h2>
      )}
    </div>
  );
};

export default Gallery;
