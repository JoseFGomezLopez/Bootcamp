import { useParams, useNavigate } from 'react-router-dom'
import HeroeDetail from '../components/Card/Card';
import Title from '../Components/Title/TitleH1';
import { getHeroe, deleteHeroe } from '../data/data';

export default function Heroe() {
  const params = useParams();
  const navigate = useNavigate();
  const heroe = getHeroe(params.id);

  if (!heroe) return <p>No existe el héroe que buscas 😭</p>;

  return (
    <div>
      <Title text="My heroes 🦸‍♂️🦸‍♀️"/>
      <HeroeDetail heroe={heroe} />
      <button
        onClick={() => {
          deleteHeroe(heroe.id).then(() => {
            navigate('/heroes');
          });
        }}
      >
        Borrar a {heroe.name}
      </button>
    </div>
  );
}