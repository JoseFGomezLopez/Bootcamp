import { useContext } from 'react';

import TableContext from '../../context/TableContext';

const ListadoMiAcademia = ({ arr, className }) => {
  const { setLista } = useContext(TableContext);

  return (
    <ul className={className}>
      {arr.length ? (
        arr.map((item, i) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li onClick={() => setLista(item.replace(' ', ''))} key={item + i}>
            {item}
          </li>
        ))
      ) : (
        <span></span>
      )}
    </ul>
  );
};

export default ListadoMiAcademia;
