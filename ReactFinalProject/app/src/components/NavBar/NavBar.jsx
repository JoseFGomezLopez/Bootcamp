/* eslint-disable react/display-name */
import './navBar.css';

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import List from '../Ulist/List';

const NavBar = React.memo(() => {
  const [ulAcademiaVisible, setUlAcademiaVisible] = useState(false);
  const [ulDashboardVisible, setUlDashboardVisible] = useState(false);
  const [ulCursosVisible, setUlCursosVisible] = useState(false);
  const navigator = useNavigate();

  const dashboard = () => {
    setUlDashboardVisible(!ulDashboardVisible);
    navigator('/dashboard');
  };
  const miAcademia = () => {
    setUlAcademiaVisible(!ulAcademiaVisible);
    navigator('/academy');
  };
  const cursos = () => {
    setUlCursosVisible(!ulCursosVisible);
    navigator('/courses');
  };

  return (
    <section className="navBarSection">
      <Button
        onClick={dashboard}
        text="Dashboard"
        className="buttonNavBar"
        src="./public/navBarImages/Vector (4).png"
      />

      <Button
        onClick={() => miAcademia()}
        text="Mi Academia"
        className="buttonNavBar"
        src="./public/navBarImages/Vector (5).png"
      />
      {ulAcademiaVisible && (
        <List
          className="listNavBar"
          arr={['Editar Academia', 'Estudiantes', 'Profesores']}
        />
      )}
      <Button
        onClick={cursos}
        text="Cursos"
        className="buttonNavBar"
        src="./public/navBarImages/Vector (6).png"
      />
      {ulCursosVisible && (
        <List
          className="listNavBar"
          arr={['Desarrollo Web', 'UX/UI', 'Ciberseguridad']}
        />
      )}
    </section>
  );
});

export default NavBar;
