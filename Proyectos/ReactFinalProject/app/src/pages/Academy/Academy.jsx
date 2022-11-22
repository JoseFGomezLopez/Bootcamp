import './academy.css';

import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

const Academy = () => {
  return (
    <section className="academy">
      {' '}
      <Header />
      <section className="academyBody">
        <NavBar />
        <Aside />
      </section>
    </section>
  );
};

export default Academy;
