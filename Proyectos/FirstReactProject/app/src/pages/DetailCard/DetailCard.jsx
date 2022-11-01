import "./detailCard.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCardComponent from "../../components/Cards/DetailCardComponent";

export const DetailCard = () => {
  const param = useParams();
  const { id } = param;
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    const getAnimal = async () => {
      const res = await axios.get(`http://localhost:3000/dogs/${id}`);
      setAnimal(res.data);
    };
    (async () => await getAnimal())();
  }, []);

  return (
    <section className="sectionDetailCard">
      <DetailCardComponent animal={animal} />
    </section>
  );
};
