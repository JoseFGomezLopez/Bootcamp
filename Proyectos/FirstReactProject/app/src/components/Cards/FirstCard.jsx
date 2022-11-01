import Parragraph from "../Parragraph/Parragraph";
import "./card.css";

const FirstCard = ({ name, image, description }) => {
  return (
    <figure className="figure">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <Parragraph text={description} />
    </figure>
  );
};

export default FirstCard;
