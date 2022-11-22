import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TableContext from '../../context/TableContext.jsx';
import { getData } from '../../services/getData.js';
import { titulosTablaAcademia, titulosTablaUsuarios } from '../../utils/caberasTabla.js';
import { filterFunction } from '../../utils/filterFunction.js';
import PopUpComp from '../PopUpComp/PopUpInfo/PopUpComp.jsx';

const Table = ({ className }) => {
  const { lista, triggerBoolean, inputListener } = useContext(TableContext);
  const [tableList, setTableList] = useState([]);
  let titulosTabla = [];
  lista === 'Estudiantes' || lista === 'Profesores'
    ? (titulosTabla = titulosTablaUsuarios)
    : (titulosTabla = titulosTablaAcademia);
  useEffect(() => {
    (async () => {
      const arrayList = await getData(lista);
      const filteredArr = filterFunction(arrayList, inputListener);
      setTableList(filteredArr);
    })();
  }, [lista, triggerBoolean, inputListener]);
  return (
    <table className={className}>
      <thead>
        <tr>
          {titulosTabla.map((element) => (
            <th key={uuidv4()}>{element}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableList.length ? (
          tableList.map(({ name, userName, email, movil, image }) => (
            <tr key={uuidv4()}>
              <td>
                <img src="./vectoresPages/Offline.png" alt="offline" />
              </td>
              <td>{name}</td>
              <td>{userName}</td>
              <td>{email}</td>
              <td>{movil}</td>
              <td className="infoPopup">
                {lista === 'Estudiantes' || lista === 'Profesores' ? (
                  <PopUpComp
                    name={name}
                    userName={userName}
                    email={email}
                    movil={movil}
                    src={image}
                  />
                ) : (
                  ''
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr></tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
