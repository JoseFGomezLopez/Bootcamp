import "./home.css";
import Parragraph from "../../components/Parragraph/Parragraph";
import Input from "../../components/SearchApiComponent/Input";
import Figure from "../../components/Figure/figure";
import FormContact from "../../components/FormContact/FormContact"

const Home = () => {
  return (
    <section className="homeContainer">
      <Figure
        figureClass="figureHome"
         src=
          "https://www.nationalgeographic.com.es/medio/2022/01/02/los-perros-son-capaces-de-anticipar-cuando-estamos-a-punto-de-volver-a-casa_4f6f27aa_1280x853.jpg"
         alt="dog"
         imageClass="imageHome"
         />
         <aside>
         <Parragraph
         className="parragraphHome"
         text={
            "Estamos colaborando con protectoras y asociaciones animalistas. Estas plataformas trabajan en devolver la calidad de vida de aquellos animales que se vieron envueltos en situaciones de abandono o maltratro."
          }
         />
         <Parragraph
         className="parragraphHome"
         text={
            "En las siguientes páginas podrás encontrar perros en adopción, así como publicar mascotas que necesiten adopción."
          }
        />
        <Parragraph
        className="parragraphHome"
        text="Si deseas colaborar como familia de acogida o necesitas consejo-ayuda para realizar algún rescate, rellena estos campos y nos pondremos en contacto contigo! 🐶"
        />
        <FormContact />
      </aside>
    </section>
  );
};

export default Home;
