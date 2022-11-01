import "./home.css";
import { useState } from "react";
import CardComponent from "../../components/CardsComponent/CardComponent";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [departament, setDepartament] = useState("");
  const [rol, setRol] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState("");
  //const { usuario, setUsuario } = useState({});

  const createUser = (e) => {
    e.preventDefault();
    const user = {
      id: uuidv4(),
      name: name,
      age: age,
      firstName : firstName,
      lastName : lastName,
      departament : departament,
      rol: rol,
      experience: experience,
      image: image,
    };
    //setUsuario(user);
    console.log(user)
    postUser(user);
  };

  const postUser = async (user) => {
    axios({
      method: "post",
      url: "http://localhost:3000/users",
      data: user,
    });
  };

  return (
    <div className="divContainerHome">
      <form
        name="Formulario"
        className="userForm"
        onSubmit={(e) => {
          createUser(e);
        }}
      >
        <fieldset>
          <legend>Create New User : </legend>
          <label htmlFor="name" className="userLabelForm">
            Name :{" "}
          </label>
          <input
            type="text"
            id="name"
            placeholder="name"
            className="userInputForm"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="firstName" className="userLabelForm">
            Firstname :{" "}
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="firstname"
            className="userInputForm"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName" className="userLabelForm">
            Lastname :{" "}
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="lastname"
            className="userInputForm"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="departament" className="userLabelForm">
            Departament:{" "}
          </label>
          <input
            type="text"
            id="departament"
            placeholder="departament"
            className="userInputForm"
            onChange={(e) => setDepartament(e.target.value)}
          />
          <label htmlFor="rol" className="userLabelForm">
            Rol :{" "}
          </label>
          <input
            type="text"
            id="rol"
            placeholder="rol"
            className="userInputForm"
            onChange={(e) => setRol(e.target.value)}
          />
          <label htmlFor="edad" className="userLabelForm">
            Age :{" "}
          </label>
          <input
            type="number"
            id="edad"
            placeholder="age"
            className="userInputForm"
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="experience" className="userLabelForm">
            Experience :{" "}
          </label>
          <input
            type="text"
            id="experience"
            placeholder="experience"
            className="userInputForm"
            onChange={(e) => setExperience(e.target.value)}
          />
          <label htmlFor="image" className="userLabelForm">
            Photo :{" "}
          </label>
          <input
            type="text"
            id="image"
            placeholder="image url"
            className="userInputForm"
            onChange={(e) => setImage(e.target.value)}
          />
        </fieldset>
        <input type="submit" value="CREATE" className="submitFormButton" />
      </form>
      <CardComponent
        name={name}
        firstName={firstName}
        lastName={lastName}
        departament={departament}
        age={age}
        rol={rol}
        experience={experience}
        image={image}
      />
    </div>
  );
};

export default Home;
