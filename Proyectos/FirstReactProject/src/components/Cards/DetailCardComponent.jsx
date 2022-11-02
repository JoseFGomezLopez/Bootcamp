import "./detailCard.css";

const DetailCardComponent = ({ animal }) => {
  return (
    <img className="detailCard" src={animal.imageDetail} alt={animal.name} />
  );
};

export default DetailCardComponent;
