import "./contact.css";
import Parragraph from "../../components/Parragraph/Parragraph";
import LinkContact from "../../components/ConctactLink/LinkContact";

const Contact = () => {
  return (
    <section className="contactSection">
      <Parragraph
        text={
          "Para cualquier consulta aqui proveemos distintas formas de contacto:"
        }
      />
      <LinkContact className={'contactLinks'}/>
      <img className="logo" src='../server/Images/logo/logo ayuda y recate.jpg' alt="logo de ayuda y rescate"/>
    </section>
  );
};

export default Contact;
