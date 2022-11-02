import "./detailCard.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCardComponent from "../../components/Cards/DetailCardComponent";
import { getAnimal } from "../../services/getAPI.js";

export const DetailCard = () => {
  const param = useParams();
  const { id } = param;
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    (async () => {
      const data = await getAnimal(`/${id}`);
      setAnimal(data);
    })();
  }, []);

  return (
    <section className="sectionDetailCard">
      <DetailCardComponent animal={animal} />
    </section>
  );
};
