import { createContext, useState } from 'react';

const TableContext = createContext();

const TableContextProvider = ({ children }) => {
  const [lista, setLista] = useState([]);
  const [triggerBoolean, setTriggerBoolean] = useState([false]);
  const [inputListener, setInputListener] = useState('');
  const value = {
    lista,
    setLista,
    triggerBoolean,
    setTriggerBoolean,
    inputListener,
    setInputListener,
  };
  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};

export { TableContextProvider };

export default TableContext;
