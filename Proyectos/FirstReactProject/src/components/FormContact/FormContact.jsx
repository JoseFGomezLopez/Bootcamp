import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { PostContact } from "../../services/PostServices";
import { useState } from "react";
import "./formPublic.css";

const FormContact = () => {
  const [name, setName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name: name,
      telephoneNumber: telephoneNumber,
      email: email,
      description: description,
    };
    postContact(contact);
    //<PostContact contact={contact}/>;
  };

  const postContact = async (contact) => {
    axios({
      method: "post",
      url: "http://localhost:8080/contacts",
      data: contact,
    });
  };

  return (
    <div className="formHome">
      <form
        name="Formulario"
        className="contactForm"
        onSubmit={(e) => {
          createContact(e);
        }}
      >
        <fieldset className="contactFieldsetForm">
          <legend className="contactLegendForm">Datos personales</legend>
          <label htmlFor="name" className="contactLabelForm">
            Name :{" "}
          </label>
          <input
            type="text"
            id="name"
            placeholder="name"
            className="contactInputForm"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="tel" className="contactLabelForm">
            Telephone :{" "}
          </label>
          <input
            type="tel"
            id="tel"
            placeholder="Teléfono"
            className="contactInputForm"
            onChange={(e) => setTelephoneNumber(e.target.value)}
          />
          <label htmlFor="mail" className="contactLabelForm">
            E-mail :{" "}
          </label>
          <input
            type="email"
            id="mail"
            placeholder="e-mail"
            className="contactInputForm"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="asunto" className="contactLabelForm">
            Asunto :{" "}
          </label>
          <textarea
            id="asunto"
            placeholder="Motivo del contacto"
            className="contactTextAreaForm"
            onChange={(e) => setDescription(e.target.value)}
            spellCheck={true}
          />
        </fieldset>
        <input type="submit" value="Enviar" className="buttonFormHome" />
      </form>
    </div>
  );
};
export default FormContact;
