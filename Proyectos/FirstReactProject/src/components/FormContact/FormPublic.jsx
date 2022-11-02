import "./formPublic.css";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import SecondCard from "../../components/Cards/SecondCard";
import ContactCard from "../Cards/ContactCard";
import { postDifusion } from "../../services/PostServices";

const FormPublic = () => {
  const [contact, setContact] = useState({});
  const [pet, setPet] = useState({});
  const id = uuidv4();
  const id2 = id;

  const postProfiles = async (e) => {
    e.preventDefault();
    setContact({ ...contact, id: id });
    setPet({ ...pet, id: id2 });
    postDifusion("dogs", pet);
    postDifusion("contacts", contact);
  };

  return (
    <div className="publicContainer">
      <section className="formsContainer">
        <form
          name="FormularioDeDifusion"
          className="formPublic"
          onSubmit={(e) => {
            postProfiles(e);
          }}
        >
          <fieldset className="fieldsetFormPublic">
            <legend>Contacto</legend>
            <label htmlFor="contactName">Contact Name</label>
            <input
              type={"text"}
              className="contactInputForm"
              id={"contactName"}
              required
              placeholder={"Contact Name"}
              onChange={(e) => {
                setContact({
                  ...contact,
                  contactName: e.target.value,
                });
              }}
            />
            <label htmlFor="contactTel">Contact Telephone</label>
            <input
              type={"tel"}
              className="contactInputForm"
              id={"contactTel"}
              required
              placeholder={"Contact Phone"}
              onChange={(e) => {
                setContact({
                  ...contact,
                  contactTelephone: e.target.value,
                });
              }}
            />
            <label htmlFor="email">Contact E-mail</label>
            <input
              type={"email"}
              className="contactInputForm"
              required
              placeholder={"Contact Email"}
              onChange={(e) => {
                setContact({
                  ...contact,
                  contactEmail: e.target.value,
                });
              }}
            />
          </fieldset>
          <fieldset className="fieldsetFormPublic fieldserPets">
            <legend>Mascota</legend>
            <label htmlFor="name">Pet name</label>
            <input
              type={"text"}
              id={"name"}
              className="contactInputForm"
              required
              placeholder={"Pet name"}
              onChange={(e) => {
                setPet({
                  ...pet,
                  name: e.target.value,
                });
              }}
            />
            <label htmlFor="image">Image</label>
            <input
              type={"text"}
              id={"image"}
              className="contactInputForm"
              required
              placeholder={"Pet image"}
              onChange={(e) => {
                setPet({
                  ...pet,
                  image: e.target.value,
                });
              }}
            />
            <label htmlFor="size">Size</label>
            <input
              type="text"
              className="contactInputForm"
              required
              placeholder={"Pet size"}
              onChange={(e) => {
                setPet({
                  ...pet,
                  size: e.target.value,
                });
              }}
            />
            <label htmlFor="description">Description</label>
            <textarea
              className="contactInputForm"
              required
              placeholder={"Pet description"}
              onChange={(e) => {
                setPet({
                  ...pet,
                  description: e.target.value,
                });
              }}
            />
          </fieldset>
          <input type="submit" className="buttonFormHome" value="Send" />
        </form>
      </section>
      <section className="previewContainer">
        <ContactCard
          className="cardFormPublic"
          name={contact.contactName}
          tel={contact.contactTelephone}
          mail={contact.contactEmail}
        />

        <SecondCard
          className="cardFormPublic"
          name={pet.name}
          size={pet.size}
          image={pet.image}
          description={pet.description}
        />
      </section>
    </div>
  );
};

export default FormPublic;
