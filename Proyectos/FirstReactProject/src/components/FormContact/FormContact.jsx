import "./formPublic.css";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { postDifusion } from "../../services/PostServices";

const FormContact = () => {
  const [contact, setContact] = useState({});

  const createContact = (e) => {
    e.preventDefault();
    const contactData = {
      id: uuidv4(),
      name: contact.name,
      telephone: contact.telephone,
      email: contact.email,
      description: contact.description,
    };
    postDifusion('contacts',contactData);
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
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
          <label htmlFor="tel" className="contactLabelForm">
            Telephone :{" "}
          </label>
          <input
            type="tel"
            id="tel"
            placeholder="Teléfono"
            className="contactInputForm"
            onChange={(e) =>
              setContact({ ...contact, telephone: e.target.value })
            }
          />
          <label htmlFor="mail" className="contactLabelForm">
            E-mail :{" "}
          </label>
          <input
            type="email"
            id="mail"
            placeholder="e-mail"
            className="contactInputForm"
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          <label htmlFor="asunto" className="contactLabelForm">
            Asunto :{" "}
          </label>
          <textarea
            id="asunto"
            placeholder="Motivo del contacto"
            className="contactTextAreaForm"
            onChange={(e) =>
              setContact({ ...contact, description: e.target.value })
            }
            spellCheck={true}
          />
        </fieldset>
        <input type="submit" value="Enviar" className="buttonFormHome" />
      </form>
    </div>
  );
};
export default FormContact;
