import { useContext } from 'react';

import TableContext from '../../../context/TableContext';

const InputHeader = () => {
  const { setInputListener } = useContext(TableContext);
  return (
    <div className="searchingContainer">
      <img src="LogoHeader/lupa/Vector.png" alt="logo buscador" />
      <input
        type="text"
        placeholder="buscar"
        className="inputHeader"
        onInput={(e) => setInputListener(e.target.value)}
      />
    </div>
  );
};

export default InputHeader;
