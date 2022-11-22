import { useContext } from 'react';

import TableContext from '../../context/TableContext';
import PopUpCreater from '../PopUpComp/PopUpCreaterUser/PopUpCreater';
import Table from '../Table/Table';

const Aside = () => {
  const { lista } = useContext(TableContext);
  let text;
  lista === 'Estudiantes'
    ? (text = 'Nuevo estudiante')
    : lista === 'Profesores'
    ? (text = 'Nuevo profesor')
    : (text = 'Nueva Academia');

  return (
    <aside className="academyTable">
      <PopUpCreater text={text} className="newStudentButton" />
      <div className="tablaContainer">
        <Table className="tablaAcademy" />
      </div>
    </aside>
  );
};

export default Aside;
